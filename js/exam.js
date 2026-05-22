/* ============================================================
 *  EXAM ENGINE — Software Project Management UPVALLE 2026
 *  Motor central del examen: navegación, temporizador, persistencia,
 *  corrección automática, retroalimentación, exportación PDF/CSV
 *  y envío de resultados por correo.
 * ============================================================ */

(() => {
  'use strict';

  /* ================ CONFIGURACIÓN ================ */
  const EXAM_DURATION_SECONDS = 70 * 60; // 70 minutos
  const STORAGE_KEY = 'spm_exam_state_v1';
  const FINISHED_KEY = 'spm_exam_finished_v1';

  /* ================ ESTADO ================ */
  const state = {
    student: { name: '', email: '' },
    questions: [],          // banco aleatorizado
    answers: {},            // { id: respuesta }
    currentIndex: 0,
    startTime: null,        // epoch ms
    endTime: null,          // epoch ms cuando finaliza
    finished: false,
    score: null
  };

  /* ================ UTILIDADES ================ */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function normalize(text) {
    return String(text ?? '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quita tildes
      .replace(/\s+/g, ' ').trim()
      .replace(/[.,;:!¿?¡"']/g, '');
  }

  function fmtTime(seconds) {
    const m = Math.max(0, Math.floor(seconds / 60));
    const s = Math.max(0, seconds % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  function fmtTimeLong(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m} min ${s} s`;
  }

  function showToast(msg, type = '') {
    const t = $('#toast');
    t.textContent = msg;
    t.className = 'toast show ' + type;
    setTimeout(() => { t.className = 'toast'; }, 3200);
  }

  /* ================ PERSISTENCIA ================ */
  function saveState() {
    try {
      const compact = {
        student: state.student,
        order: state.questions.map(q => ({ id: q.id, opts: q.optsOrder ?? null })),
        answers: state.answers,
        currentIndex: state.currentIndex,
        startTime: state.startTime,
        finished: state.finished
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(compact));
    } catch (e) { console.warn('No se pudo guardar el estado:', e); }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
  }

  function clearState() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
  }

  /* ================ INICIALIZACIÓN ================ */
  function init() {
    // Si ya se finalizó previamente este examen, bloquear (anti-reinicio)
    if (localStorage.getItem(FINISHED_KEY)) {
      const ok = confirm('Ya finalizaste un examen en este navegador. ¿Deseas iniciar uno nuevo? (Se borrarán los registros locales del examen anterior).');
      if (ok) {
        localStorage.removeItem(FINISHED_KEY);
        clearState();
      } else {
        return;
      }
    }

    // Recuperar examen en progreso
    const saved = loadState();
    if (saved && saved.student && saved.startTime && !saved.finished) {
      state.student = saved.student;
      state.answers = saved.answers || {};
      state.currentIndex = saved.currentIndex || 0;
      state.startTime = saved.startTime;
      // Reconstruir orden con preguntas guardadas
      state.questions = saved.order
        .map(o => {
          const original = window.QUESTION_BANK.find(q => q.id === o.id);
          if (!original) return null;
          // Reaplicar orden de opciones para coherencia visual
          return prepareQuestion(original, o.opts);
        })
        .filter(Boolean);

      const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      if (elapsed >= EXAM_DURATION_SECONDS) {
        finishExam(true);
      } else {
        startExamUI();
      }
      return;
    }

    // Mostrar pantalla de bienvenida
    bindWelcomeForm();
  }

  function prepareQuestion(original, fixedOptsOrder = null) {
    const q = { ...original };
    // Aleatorización de opciones para mc; para tf se mantiene "Verdadero" / "Falso"
    if (q.type === 'mc') {
      const indices = q.options.map((_, i) => i);
      const order = fixedOptsOrder ?? shuffle(indices);
      q.optsOrder = order;
      q.shuffledOptions = order.map(i => q.options[i]);
      q.correctIndexShuffled = order.indexOf(q.answer);
    } else if (q.type === 'tf') {
      q.optsOrder = fixedOptsOrder ?? [0, 1];
      q.shuffledOptions = q.optsOrder.map(i => q.options[i]);
      q.correctIndexShuffled = q.optsOrder.indexOf(q.answer);
    }
    return q;
  }

  /* ================ FORMULARIO BIENVENIDA ================ */
  function bindWelcomeForm() {
    const form = $('#welcomeForm');
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = $('#studentName').value.trim();
      const email = $('#studentEmail').value.trim();
      let valid = true;

      if (name.length < 5) {
        $('#errName').textContent = 'Por favor ingresa tu nombre completo (mínimo 5 caracteres).';
        $('#studentName').classList.add('invalid');
        valid = false;
      } else {
        $('#errName').textContent = '';
        $('#studentName').classList.remove('invalid');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(email)) {
        $('#errEmail').textContent = 'Ingresa un correo electrónico válido.';
        $('#studentEmail').classList.add('invalid');
        valid = false;
      } else {
        $('#errEmail').textContent = '';
        $('#studentEmail').classList.remove('invalid');
      }

      if (!valid) return;

      state.student = { name, email };
      // Aleatorizar preguntas
      state.questions = shuffle(window.QUESTION_BANK).map(q => prepareQuestion(q));
      state.startTime = Date.now();
      state.currentIndex = 0;
      state.answers = {};
      saveState();
      startExamUI();
    });
  }

  /* ================ INICIO DE EXAMEN ================ */
  function startExamUI() {
    $('#screenWelcome').classList.remove('active');
    $('#screenExam').classList.add('active');
    $('#topbar').hidden = false;

    buildQuestionGrid();
    renderQuestion();
    bindExamControls();
    startTimer();

    // Prevención de cierre accidental
    window.addEventListener('beforeunload', (e) => {
      if (!state.finished) {
        e.preventDefault();
        e.returnValue = '';
      }
    });
  }

  /* ================ TEMPORIZADOR ================ */
  let timerInterval = null;
  function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      const remaining = EXAM_DURATION_SECONDS - elapsed;
      if (remaining <= 0) {
        clearInterval(timerInterval);
        showToast('Tiempo agotado. Enviando examen...', 'warn');
        setTimeout(() => finishExam(true), 1000);
        return;
      }
      updateTimerDisplay(remaining);
    }, 1000);
  }

  function updateTimerDisplay(remaining = null) {
    if (remaining === null) {
      const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      remaining = EXAM_DURATION_SECONDS - elapsed;
    }
    const el = $('#timer');
    el.textContent = fmtTime(remaining);
    const wrap = $('.timer-wrapper');
    wrap.classList.remove('warn', 'danger');
    if (remaining <= 60) wrap.classList.add('danger');
    else if (remaining <= 600) wrap.classList.add('warn');
  }

  /* ================ RENDER DE PREGUNTAS ================ */
  function renderQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    const card = $('#questionCard');
    const tagClass = q.type === 'mc' ? '' : (q.type === 'tf' ? 'tag-vf' : 'tag-fill');
    const tagLabel = q.type === 'mc' ? 'Opción Múltiple' :
                     q.type === 'tf' ? 'Verdadero / Falso' : 'Completar la frase';

    let optsHtml = '';
    if (q.type === 'mc' || q.type === 'tf') {
      optsHtml = `
        <div class="q-options" role="radiogroup">
          ${q.shuffledOptions.map((opt, idx) => {
            const selected = state.answers[q.id] === idx ? 'selected' : '';
            const letter = ['A','B','C','D','E','F'][idx];
            return `
              <label class="q-option ${selected}" data-idx="${idx}" role="radio" aria-checked="${selected ? 'true' : 'false'}">
                <span class="opt-marker">${letter}</span>
                <span class="opt-text">${escapeHtml(opt)}</span>
                <input type="radio" name="q_${q.id}" value="${idx}" ${selected ? 'checked' : ''} />
              </label>`;
          }).join('')}
        </div>`;
    } else if (q.type === 'fill') {
      const val = state.answers[q.id] ?? '';
      optsHtml = `
        <div class="q-fill">
          <input type="text" id="fillInput" placeholder="Escribe tu respuesta..." value="${escapeHtml(val)}" autocomplete="off" />
          <div class="hint">Sugerencia: la validación es flexible — ignora mayúsculas, tildes y signos de puntuación.</div>
        </div>`;
    }

    card.innerHTML = `
      <div class="q-header">
        <span class="q-tag ${tagClass}">${tagLabel}</span>
        <span class="q-source">Fuente: ${escapeHtml(q.source)}</span>
      </div>
      <p class="q-text">${escapeHtml(q.q)}</p>
      ${optsHtml}
    `;

    bindAnswerEvents(q);
    updateNavigationUI();
    saveState();
  }

  function bindAnswerEvents(q) {
    if (q.type === 'mc' || q.type === 'tf') {
      $$('.q-option', $('#questionCard')).forEach(label => {
        label.addEventListener('click', () => {
          const idx = parseInt(label.dataset.idx, 10);
          state.answers[q.id] = idx;
          $$('.q-option').forEach(l => l.classList.remove('selected'));
          label.classList.add('selected');
          updateGridCell(state.currentIndex);
          updateStats();
          saveState();
        });
      });
    } else if (q.type === 'fill') {
      const input = $('#fillInput');
      input.addEventListener('input', () => {
        state.answers[q.id] = input.value;
        if (input.value.trim().length > 0) updateGridCell(state.currentIndex);
        updateStats();
        saveState();
      });
      input.focus();
    }
  }

  /* ================ NAVEGACIÓN ================ */
  function bindExamControls() {
    $('#btnPrev').addEventListener('click', () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderQuestion();
      }
    });
    $('#btnNext').addEventListener('click', () => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuestion();
      }
    });
    $('#btnFinish').addEventListener('click', confirmFinish);

    // Atajos de teclado
    document.addEventListener('keydown', (e) => {
      if (!$('#screenExam').classList.contains('active')) return;
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') $('#btnPrev').click();
      else if (e.key === 'ArrowRight') $('#btnNext').click();
    });
  }

  function updateNavigationUI() {
    const total = state.questions.length;
    $('#questionCounter').textContent = `Pregunta ${state.currentIndex + 1} / ${total}`;
    $('#btnPrev').disabled = state.currentIndex === 0;
    $('#btnNext').disabled = state.currentIndex === total - 1;

    const pct = ((state.currentIndex + 1) / total) * 100;
    $('#progressFill').style.width = pct + '%';

    $$('.q-pill').forEach((pill, i) => {
      pill.classList.toggle('current', i === state.currentIndex);
    });
    updateStats();
  }

  function buildQuestionGrid() {
    const grid = $('#questionGrid');
    grid.innerHTML = '';
    state.questions.forEach((q, i) => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'q-pill';
      pill.textContent = (i + 1);
      pill.dataset.idx = i;
      if (isAnswered(q)) pill.classList.add('answered');
      if (i === state.currentIndex) pill.classList.add('current');
      pill.addEventListener('click', () => {
        state.currentIndex = i;
        renderQuestion();
      });
      grid.appendChild(pill);
    });
    updateStats();
  }

  function updateGridCell(index) {
    const pill = $$('.q-pill')[index];
    if (!pill) return;
    if (isAnswered(state.questions[index])) pill.classList.add('answered');
    else pill.classList.remove('answered');
  }

  function isAnswered(q) {
    const val = state.answers[q.id];
    if (val === undefined || val === null) return false;
    if (q.type === 'fill') return String(val).trim().length > 0;
    return true;
  }

  function updateStats() {
    const ans = state.questions.filter(q => isAnswered(q)).length;
    $('#statAnswered').textContent = ans;
    $('#statPending').textContent = state.questions.length - ans;
  }

  /* ================ CONFIRMAR Y FINALIZAR ================ */
  function confirmFinish() {
    const pendings = state.questions.filter(q => !isAnswered(q)).length;
    const modal = $('#confirmModal');
    const txt = $('#confirmModalText');
    if (pendings > 0) {
      txt.innerHTML = `Tienes <strong>${pendings}</strong> pregunta(s) sin responder. Una vez enviado, no podrás modificar las respuestas.`;
    } else {
      txt.innerHTML = `Has respondido todas las preguntas. ¿Confirmas el envío del examen?`;
    }
    modal.hidden = false;
    $('#modalCancel').onclick = () => { modal.hidden = true; };
    $('#modalConfirm').onclick = () => { modal.hidden = true; finishExam(false); };
  }

  function finishExam(byTimeout = false) {
    if (state.finished) return;
    state.finished = true;
    state.endTime = Date.now();
    if (timerInterval) clearInterval(timerInterval);

    // Calcular puntaje
    let correct = 0, wrong = 0, blank = 0;
    const detail = [];
    state.questions.forEach(q => {
      const val = state.answers[q.id];
      let isCorrect = false, isBlank = false, userText = '';
      if (val === undefined || val === null || (q.type === 'fill' && String(val).trim() === '')) {
        isBlank = true;
        userText = '— En blanco —';
      } else if (q.type === 'mc' || q.type === 'tf') {
        isCorrect = (val === q.correctIndexShuffled);
        userText = q.shuffledOptions[val] || '';
      } else if (q.type === 'fill') {
        const userNorm = normalize(val);
        const accepted = (Array.isArray(q.answer) ? q.answer : [q.answer]).map(normalize);
        isCorrect = accepted.some(a => a === userNorm);
        userText = String(val);
      }

      if (isBlank) blank++;
      else if (isCorrect) correct++;
      else wrong++;

      // Texto de la respuesta correcta
      let correctText = '';
      if (q.type === 'mc' || q.type === 'tf') {
        correctText = q.options[q.answer];
      } else if (q.type === 'fill') {
        const arr = Array.isArray(q.answer) ? q.answer : [q.answer];
        correctText = arr[0];
      }

      detail.push({
        id: q.id, type: q.type, source: q.source, topic: q.topic,
        question: q.q, userAnswer: userText, correctAnswer: correctText,
        isCorrect, isBlank, explanation: q.explanation
      });
    });

    state.score = { correct, wrong, blank, total: state.questions.length, detail };
    saveState();
    localStorage.setItem(FINISHED_KEY, '1');

    showResults(byTimeout);
  }

  /* ================ RESULTADOS ================ */
  function showResults(byTimeout) {
    $('#screenExam').classList.remove('active');
    $('#screenResults').classList.add('active');
    $('#topbar').hidden = true;

    const { correct, wrong, blank, total } = state.score;
    const percentage = (correct / total) * 100;

    $('#resultStudent').textContent = `${state.student.name} · ${state.student.email}`;
    $('#scoreNumber').textContent = correct;
    $('#scoreCircle').style.setProperty('--p', percentage.toFixed(1));
    $('#resCorrect').textContent = correct;
    $('#resWrong').textContent = wrong;
    $('#resBlank').textContent = blank;

    const elapsed = Math.floor((state.endTime - state.startTime) / 1000);
    const used = Math.min(elapsed, EXAM_DURATION_SECONDS);
    $('#resTime').textContent = fmtTime(used);

    renderFeedback(percentage, correct, wrong, blank, byTimeout);
    bindResultButtons();
    renderReview();
    updateScoreCircleColor(percentage);

    // Auto-envío de correo (opcional)
    if (window.EMAIL_CONFIG && window.EMAIL_CONFIG.enabled) {
      sendEmailReport().then(() => showToast('Correo enviado correctamente', 'success'))
                      .catch(() => showToast('No se pudo enviar el correo automáticamente', 'error'));
    }
  }

  function updateScoreCircleColor(percentage) {
    const circle = $('#scoreCircle');
    let color = '#15803d'; // verde
    if (percentage < 50) color = '#b91c1c';
    else if (percentage < 70) color = '#92400e';
    else if (percentage < 85) color = '#1e3a8a';
    circle.style.background = `conic-gradient(${color} ${percentage}%, var(--color-border) 0)`;
  }

  function renderFeedback(percentage, correct, wrong, blank, byTimeout) {
    const target = $('#feedbackBody');
    let nivel, mensaje, fortalezas, debilidades, recomendaciones;

    if (percentage >= 90) {
      nivel = 'Excelente · Dominio sobresaliente';
      mensaje = 'Has demostrado un dominio sobresaliente y profundo de los contenidos de la dimensión Personas en proyectos de software.';
      fortalezas = ['Comprensión integrada de los 13 trabajos analizados.', 'Capacidad para articular modelos teóricos (Maslach, JD-R, 4P) con datos del caso FlashDelivery.', 'Manejo riguroso de cifras, métricas y KRIs.'];
      debilidades = ['Mantén afilada la atención a detalles específicos en preguntas de tipo "completar la frase".'];
      recomendaciones = ['Continúa profundizando en literatura primaria (Maslach, Edmondson, Pink) para fortalecer la base teórica.'];
    } else if (percentage >= 75) {
      nivel = 'Muy Bueno · Dominio sólido';
      mensaje = 'Tu desempeño es notable y refleja una comprensión sólida de los contenidos clave.';
      fortalezas = ['Buena articulación entre teoría y caso aplicado.', 'Identificación correcta de la mayoría de cifras críticas del proyecto.'];
      debilidades = ['Algunas preguntas comparativas o de detalle fueron erradas.', 'Verifica los matices entre conceptos cercanos (mentoría vs coaching, formal vs informal).'];
      recomendaciones = ['Repasa las matrices y cifras (P85, KRIs, WIP) y los pilares de cada modelo.'];
    } else if (percentage >= 60) {
      nivel = 'Aceptable · Comprensión básica';
      mensaje = 'Has alcanzado el umbral mínimo de comprensión, pero existen vacíos relevantes que deben atenderse.';
      fortalezas = ['Reconocimiento de los conceptos generales del modelo 4P y la dimensión Personas.'];
      debilidades = ['Confusión en la aplicación práctica al caso FlashDelivery.', 'Cifras y métricas específicas requieren refuerzo.'];
      recomendaciones = ['Revisa cuidadosamente los trabajos sobre Burnout, Clima Laboral y Liderazgo Empático.', 'Practica con preguntas comparativas entre documentos.'];
    } else {
      nivel = 'Insuficiente · Requiere refuerzo profundo';
      mensaje = 'El resultado indica que se requiere revisión integral del material y reestudio sistemático.';
      fortalezas = ['Persistencia en intentar el examen completo.'];
      debilidades = ['Falta dominio de definiciones, autores y métricas centrales.', 'Dificultad para conectar la teoría con el caso FlashDelivery.', 'Confusión entre conceptos cercanos.'];
      recomendaciones = ['Reestudio integral de los 13 trabajos.', 'Construye fichas de resumen por documento.', 'Solicita tutoría académica focalizada.'];
    }

    target.innerHTML = `
      <p><strong>Nivel de desempeño:</strong> ${escapeHtml(nivel)}</p>
      <p>${escapeHtml(mensaje)}</p>
      ${byTimeout ? '<p><em>⚠️ El examen finalizó por término del tiempo asignado.</em></p>' : ''}
      <h3>Fortalezas detectadas</h3>
      <ul>${fortalezas.map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
      <h3>Áreas de mejora</h3>
      <ul>${debilidades.map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul>
      <h3>Recomendaciones académicas</h3>
      <ul>${recomendaciones.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
    `;

    // Guardar feedback para exportes
    state.feedback = { nivel, mensaje, fortalezas, debilidades, recomendaciones, byTimeout };
  }

  function renderReview() {
    const target = $('#reviewBody');
    target.innerHTML = state.score.detail.map((d, i) => {
      const cls = d.isBlank ? 'blank' : (d.isCorrect ? 'correct' : 'wrong');
      const badge = d.isBlank ? `<span class="badge neutral">En blanco</span>`
                  : (d.isCorrect ? `<span class="badge ok">Correcta</span>` : `<span class="badge bad">Incorrecta</span>`);
      const tipo = d.type === 'mc' ? 'Opción múltiple' : d.type === 'tf' ? 'Verdadero/Falso' : 'Completar';
      return `
        <article class="review-item ${cls}">
          <div class="rev-meta">
            <span class="badge">P${i + 1}</span>
            ${badge}
            <span class="badge">${escapeHtml(tipo)}</span>
            <span class="badge">${escapeHtml(d.source)}</span>
          </div>
          <p class="rev-q">${escapeHtml(d.question)}</p>
          <div class="rev-row"><strong>Tu respuesta:</strong> ${escapeHtml(d.userAnswer)}</div>
          <div class="rev-row"><strong>Respuesta correcta:</strong> ${escapeHtml(d.correctAnswer)}</div>
          <div class="rev-explain"><strong>Justificación académica:</strong> ${escapeHtml(d.explanation)}</div>
        </article>`;
    }).join('');
  }

  /* ================ BOTONES DE RESULTADOS ================ */
  function bindResultButtons() {
    $('#btnPdf').addEventListener('click', exportPdf);
    $('#btnCsv').addEventListener('click', exportCsv);
    $('#btnEmail').addEventListener('click', () => {
      sendEmailReport().then(() => showToast('Correo enviado', 'success'))
                       .catch((err) => {
                         console.warn(err);
                         openMailtoFallback();
                       });
    });
    $('#btnReview').addEventListener('click', () => {
      const sec = $('#reviewSection');
      sec.hidden = !sec.hidden;
      if (!sec.hidden) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ================ EXPORTACIÓN PDF ================ */
  async function exportPdf() {
    if (!window.jspdf) { showToast('Librería PDF no disponible', 'error'); return; }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const margin = 40;
    let y = margin;

    // Encabezado
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text('Examen Integral · Software Project Management', margin, y);
    y += 18;
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text('Universidad Privada del Valle (UPVALLE) — 2026', margin, y);
    y += 22;

    // Datos del estudiante
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(20, 20, 20);
    doc.setFontSize(11);
    doc.text(`Estudiante: ${state.student.name}`, margin, y); y += 14;
    doc.text(`Correo:     ${state.student.email}`, margin, y); y += 14;
    doc.text(`Fecha:      ${new Date(state.endTime).toLocaleString()}`, margin, y); y += 20;

    // Resumen
    const { correct, wrong, blank, total } = state.score;
    const pct = ((correct / total) * 100).toFixed(1);
    const used = Math.min(Math.floor((state.endTime - state.startTime) / 1000), EXAM_DURATION_SECONDS);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('Resumen de resultados', margin, y); y += 16;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Nota: ${correct}/${total}   ·   Porcentaje: ${pct}%`, margin, y); y += 14;
    doc.text(`Correctas: ${correct}    Incorrectas: ${wrong}    En blanco: ${blank}`, margin, y); y += 14;
    doc.text(`Tiempo utilizado: ${fmtTimeLong(used)}`, margin, y); y += 20;

    // Retroalimentación
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('Retroalimentación académica', margin, y); y += 16;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const fb = state.feedback;
    const wrap = (text) => doc.splitTextToSize(text, 515);
    wrap(`Nivel: ${fb.nivel}`).forEach(line => { doc.text(line, margin, y); y += 12; });
    wrap(fb.mensaje).forEach(line => { doc.text(line, margin, y); y += 12; });
    y += 4;
    doc.setFont('helvetica', 'bold'); doc.text('Fortalezas:', margin, y); y += 12;
    doc.setFont('helvetica', 'normal');
    fb.fortalezas.forEach(f => { wrap('• ' + f).forEach(line => { doc.text(line, margin, y); y += 12; }); });
    doc.setFont('helvetica', 'bold'); doc.text('Áreas de mejora:', margin, y); y += 12;
    doc.setFont('helvetica', 'normal');
    fb.debilidades.forEach(d => { wrap('• ' + d).forEach(line => { doc.text(line, margin, y); y += 12; }); });
    doc.setFont('helvetica', 'bold'); doc.text('Recomendaciones:', margin, y); y += 12;
    doc.setFont('helvetica', 'normal');
    fb.recomendaciones.forEach(r => { wrap('• ' + r).forEach(line => { doc.text(line, margin, y); y += 12; }); });

    // Detalle por pregunta como tabla
    if (doc.autoTable) {
      doc.addPage();
      doc.autoTable({
        head: [['#', 'Tipo', 'Pregunta', 'Tu Resp.', 'Resp. Correcta', 'Estado']],
        body: state.score.detail.map((d, i) => ([
          i + 1,
          d.type === 'mc' ? 'OM' : d.type === 'tf' ? 'V/F' : 'Comp.',
          d.question.length > 90 ? d.question.slice(0, 87) + '…' : d.question,
          (d.userAnswer || '').slice(0, 50),
          (d.correctAnswer || '').slice(0, 50),
          d.isBlank ? 'Blanco' : (d.isCorrect ? 'Correcta' : 'Incorrecta')
        ])),
        startY: 40,
        styles: { fontSize: 8, cellPadding: 4 },
        headStyles: { fillColor: [30, 58, 138], textColor: 255 },
        columnStyles: { 0: {cellWidth: 22}, 1: {cellWidth: 36}, 2: {cellWidth: 220} },
        margin: { left: margin, right: margin }
      });
    }

    const fileName = `Examen_SPM_${state.student.name.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
    doc.save(fileName);
    showToast('PDF descargado', 'success');
  }

  /* ================ EXPORTACIÓN CSV ================ */
  function exportCsv() {
    const rows = [
      ['#', 'Tipo', 'Fuente', 'Tema', 'Pregunta', 'Tu respuesta', 'Respuesta correcta', 'Estado', 'Justificación']
    ];
    state.score.detail.forEach((d, i) => {
      rows.push([
        i + 1,
        d.type === 'mc' ? 'Opción múltiple' : d.type === 'tf' ? 'Verdadero/Falso' : 'Completar',
        d.source, d.topic, d.question, d.userAnswer, d.correctAnswer,
        d.isBlank ? 'En blanco' : (d.isCorrect ? 'Correcta' : 'Incorrecta'),
        d.explanation
      ]);
    });

    const escape = (s) => `"${String(s ?? '').replace(/"/g, '""')}"`;
    const csv = '\uFEFF' + rows.map(r => r.map(escape).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Examen_SPM_${state.student.name.replace(/\s+/g, '_')}_${Date.now()}.csv`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('CSV exportado', 'success');
  }

  /* ================ ENVÍO POR CORREO ================ */
  async function sendEmailReport() {
    const cfg = window.EMAIL_CONFIG || {};
    const { correct, wrong, blank, total } = state.score;
    const pct = ((correct / total) * 100).toFixed(1);
    const used = Math.min(Math.floor((state.endTime - state.startTime) / 1000), EXAM_DURATION_SECONDS);
    const summary = state.score.detail.map((d, i) =>
      `P${i + 1} [${d.isBlank ? '—' : (d.isCorrect ? '✓' : '✗')}] ${d.question.slice(0, 80)}`
    ).join('\n');

    const fb = state.feedback;
    const feedbackText = `Nivel: ${fb.nivel}\n\n${fb.mensaje}\n\nFortalezas:\n- ${fb.fortalezas.join('\n- ')}\n\nÁreas de mejora:\n- ${fb.debilidades.join('\n- ')}\n\nRecomendaciones:\n- ${fb.recomendaciones.join('\n- ')}`;

    const params = {
      to_name:    state.student.name,
      to_email:   state.student.email,
      exam_title: 'Examen Integral · Software Project Management · UPVALLE 2026',
      score:      `${correct} / ${total}`,
      percentage: `${pct} %`,
      correct, wrong, blank,
      time_used:  fmtTimeLong(used),
      date_time:  new Date(state.endTime).toLocaleString(),
      feedback:   feedbackText,
      summary
    };

    if (cfg.enabled && window.emailjs && cfg.publicKey && cfg.publicKey !== 'TU_PUBLIC_KEY') {
      return emailjs.send(cfg.serviceId, cfg.templateId, params);
    }
    throw new Error('EmailJS no está configurado. Se usará mailto: como respaldo.');
  }

  function openMailtoFallback() {
    const { correct, wrong, blank, total } = state.score;
    const pct = ((correct / total) * 100).toFixed(1);
    const used = Math.min(Math.floor((state.endTime - state.startTime) / 1000), EXAM_DURATION_SECONDS);
    const subject = encodeURIComponent('Resultado Examen — Software Project Management UPVALLE');
    const body = encodeURIComponent(
`Estudiante: ${state.student.name}
Correo: ${state.student.email}
Fecha: ${new Date(state.endTime).toLocaleString()}

Nota: ${correct}/${total} (${pct}%)
Correctas: ${correct} · Incorrectas: ${wrong} · En blanco: ${blank}
Tiempo utilizado: ${fmtTimeLong(used)}

Retroalimentación: ${state.feedback.nivel}
${state.feedback.mensaje}
`);
    window.location.href = `mailto:${state.student.email}?subject=${subject}&body=${body}`;
    showToast('Se abrió tu cliente de correo (respaldo mailto:)', 'warn');
  }

  /* ================ ARRANQUE ================ */
  document.addEventListener('DOMContentLoaded', init);

})();
