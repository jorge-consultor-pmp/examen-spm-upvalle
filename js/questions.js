/* ============================================================
 * BANCO DE 100 PREGUNTAS · EXAMEN INTEGRAL
 * Software Project Management · Unidad 4 · UPVALLE 2026
 * Fuente: 13 trabajos académicos analizados sobre FlashDelivery
 *
 * Estructura de cada pregunta:
 *   id          → identificador único
 *   type        → 'mc' (opción múltiple) | 'tf' (verdadero/falso) | 'fill' (completar)
 *   source      → trabajo académico de origen (citación)
 *   topic       → tema general
 *   q           → enunciado
 *   options     → arreglo de opciones (mc/tf)
 *   answer      → índice correcto (mc/tf) | arreglo de aceptadas (fill)
 *   explanation → justificación académica con cita textual del documento
 * ============================================================ */
const QUESTION_BANK = [

  /* =====================================================
   *  BLOQUE 1 · BURNOUT FLASHDELIVERY (Dagner Molina)  — 12 preguntas
   * ===================================================== */
  {
    id: 1, type: 'mc', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Modelo Maslach',
    q: 'Según el documento de Burnout aplicado a FlashDelivery, ¿quién desarrolló el modelo más ampliamente validado del síndrome de Burnout, identificando sus tres dimensiones?',
    options: ['Lazarus & Folkman (1984)', 'Bakker & Demerouti (2007)', 'Christina Maslach (1976, 1981)', 'Schaufeli & Leiter'],
    answer: 2,
    explanation: 'El documento establece textualmente que "Christina Maslach (1976, 1981) desarrolló el modelo más ampliamente validado del síndrome de Burnout, identificando tres dimensiones: Agotamiento Emocional, Despersonalización y Baja Realización Personal".'
  },
  {
    id: 2, type: 'mc', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Datos del Sprint 6',
    q: 'En el Sprint 6 de FlashDelivery, ¿qué porcentaje de la capacidad total del equipo (160 horas) se consumió en corrección de bugs?',
    options: ['25 %', '31,25 %', '40 %', '20 %'],
    answer: 1,
    explanation: 'El documento especifica que de las 160 horas totales disponibles, 50 horas se dedicaron a corrección de bugs, lo cual equivale al 31,25 % de la capacidad total, configurando la dimensión de Agotamiento Emocional del modelo Maslach.'
  },
  {
    id: 3, type: 'tf', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Modelo JD-R',
    q: 'El modelo JD-R (Bakker & Demerouti, 2007) sostiene que el Burnout ocurre cuando los Recursos laborales superan de forma sostenida las Demandas.',
    options: ['Verdadero', 'Falso'],
    answer: 1,
    explanation: 'Falso. El modelo JD-R establece exactamente lo contrario: el Burnout ocurre cuando las DEMANDAS laborales (carga, incertidumbre) superan de forma sostenida los RECURSOS disponibles (autonomía, apoyo, retroalimentación).'
  },
  {
    id: 4, type: 'mc', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'KRIs',
    q: '¿Cuál de los siguientes KRIs propuestos en el documento mide la "Tasa de Trabajo No Planificado" (TNP)?',
    options: ['Acciones cerradas / Total acciones comprometidas', 'Horas en bugs y urgencias / Horas totales del sprint', 'Variación del P85 entre sprints consecutivos', 'Horas en corrección de deuda / Horas totales del sprint'],
    answer: 1,
    explanation: 'El KRI-2 (TNP) se calcula como "Horas en bugs y urgencias / Horas totales del sprint", con un umbral rojo cuando supera el 25 %. El umbral medido en el Sprint 6 fue del 31,25 %.'
  },
  {
    id: 5, type: 'fill', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'P85',
    q: 'Complete: el Tiempo de Ciclo P85 reportado en el documento alcanzó los _____ días, muy por encima del umbral aceptable de ≤10 días.',
    answer: ['18', 'dieciocho'],
    explanation: 'El documento indica que el Tiempo de Ciclo P85 (percentil 85 de los últimos 20 ítems) alcanzó 18 días, lo cual evidencia degradación de flujo y constituye una de las señales de Despersonalización en la dimensión Maslach.'
  },
  {
    id: 6, type: 'mc', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Plan de Mitigación',
    q: 'Como acción inmediata para el Sprint 7, ¿qué medida concreta propone el documento?',
    options: [
      'Aumentar la velocity al 120 % para recuperar el atraso',
      'Reducir la velocity planificada en 20 % (128h en lugar de 160h)',
      'Cancelar el módulo de videoconsulta',
      'Despedir al desarrollador con menor desempeño'
    ],
    answer: 1,
    explanation: 'El plan inmediato establece "Reducir velocity planificada en 20 % (128h en lugar de 160h)" en el Sprint 7, además de dedicar 40h a pruebas de videoconsulta y activar el semáforo de carga.'
  },
  {
    id: 7, type: 'tf', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Conclusión',
    q: 'El documento concluye que el Burnout en FlashDelivery es una manifestación de debilidad individual de los desarrolladores que no soportan la presión.',
    options: ['Verdadero', 'Falso'],
    answer: 1,
    explanation: 'Falso. El documento es enfático: "El Burnout no es debilidad individual, sino una falla sistémica de gestión", y propone intervenciones estructurales (WIP limits, sprints de recuperación, DoD blindado).'
  },
  {
    id: 8, type: 'mc', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'CIE-11 / OMS',
    q: 'Según el documento, ¿cómo clasifica la OMS al Burnout en la CIE-11?',
    options: ['Como enfermedad psiquiátrica', 'Como trastorno de ansiedad', 'Como fenómeno ocupacional', 'Como rasgo de personalidad'],
    answer: 2,
    explanation: 'El Burnout se define en CIE-11 como un "fenómeno ocupacional" (no enfermedad), caracterizado por agotamiento crónico, cinismo y baja autoeficacia, vinculado específicamente al contexto laboral.'
  },
  {
    id: 9, type: 'fill', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Cobertura de pruebas',
    q: 'Complete: en los Sprints 5 y 6 del módulo de videoconsulta, la cobertura de pruebas automatizadas registrada fue del _____ %.',
    answer: ['0', 'cero'],
    explanation: 'La omisión total de pruebas automatizadas (0 % de cobertura) en Sprints 5 y 6 es uno de los indicadores conductuales de Despersonalización descritos por el modelo Maslach aplicado al caso.'
  },
  {
    id: 10, type: 'mc', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Estructura del plan',
    q: 'En la fase Estructural del roadmap propuesto, ¿qué medida se aplica cada 4 ciclos para sostener la velocidad sostenible?',
    options: [
      'Sprint de recuperación al 70 % de capacidad',
      'Sprint de pruebas automatizadas al 100 %',
      'Sprint de hackathon al 150 % de capacidad',
      'Sprint de documentación obligatoria'
    ],
    answer: 0,
    explanation: 'La medida estructural propuesta es un "Sprint de recuperación (70 % capacidad) cada 4 ciclos", junto con encuestas permanentes para evitar la reaparición sistémica del Burnout.'
  },
  {
    id: 11, type: 'tf', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Eustrés vs Distrés',
    q: 'En el marco teórico del documento, el Eustrés se define como un estrés positivo y motivador, mientras que el Distrés es el estrés negativo por presión sostenida.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento distingue claramente "Eustrés: estrés positivo y motivador" frente a "Distrés: estrés negativo por presión sostenida", siguiendo la conceptualización clásica de Lazarus & Folkman.'
  },
  {
    id: 12, type: 'mc', source: 'Burnout FlashDelivery — Dagner Molina', topic: 'Exposición al riesgo',
    q: '¿Cuál fue el nivel de Exposición al Riesgo registrado en el Sprint 6 (escala 1-25)?',
    options: ['12 puntos', '18 puntos', '23 puntos', '25 puntos'],
    answer: 2,
    explanation: 'La exposición total al riesgo en el Sprint 6 alcanzó 23 puntos sobre 25, prácticamente el techo de la escala, lo cual constituye una alerta crítica para la sostenibilidad del equipo.'
  },

  /* =====================================================
   *  BLOQUE 2 · SEGURIDAD PSICOLÓGICA (Mauricio Martínez) — 8 preguntas
   * ===================================================== */
  {
    id: 13, type: 'mc', source: 'Seguridad Psicológica — Mauricio Martínez', topic: 'Definición',
    q: 'En el contexto de FlashDelivery, ¿cuál es la definición operativa de Seguridad Psicológica que ofrece el documento?',
    options: [
      'Ausencia total de exigencia y de feedback negativo',
      'Confianza compartida que da libertad para hablar de ideas, errores, dudas, riesgos o bloqueos',
      'Contrato laboral que protege al trabajador de represalias jurídicas',
      'Sistema técnico de cifrado de comunicaciones internas'
    ],
    answer: 1,
    explanation: 'El documento la define como "confianza compartida; libertad para hablar sobre ideas, errores, dudas, riesgos o bloqueos dentro del equipo", aclarando además que "no es ausencia de exigencia".'
  },
  {
    id: 14, type: 'tf', source: 'Seguridad Psicológica — Mauricio Martínez', topic: 'Riesgos',
    q: 'El riesgo R-002 GDPR es uno de los riesgos que la seguridad psicológica permite gestionar, al permitir detener funcionalidades que afecten la privacidad.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento incluye R-002 (GDPR) entre los riesgos gestionados, indicando que la seguridad psicológica permite "detener funcionalidades que afecten la privacidad" sin temor a represalias.'
  },
  {
    id: 15, type: 'mc', source: 'Seguridad Psicológica — Mauricio Martínez', topic: 'Aplicación Scrum',
    q: 'Según el documento, ¿qué función específica cumple la Seguridad Psicológica durante el Sprint Planning de FlashDelivery?',
    options: [
      'Ocultar bloqueos para no afectar el ánimo del equipo',
      'Comunicar la capacidad real del equipo sin temor a represalias',
      'Acelerar la velocidad del sprint mediante presión grupal',
      'Eliminar las retrospectivas para ahorrar tiempo'
    ],
    answer: 1,
    explanation: 'En el Planning, la Seguridad Psicológica permite "comunicar la capacidad real" del equipo, evitando sobrecompromisos y, por tanto, mitigando los riesgos R-007 (Sobrecarga) y R-009 (Deuda Técnica).'
  },
  {
    id: 16, type: 'fill', source: 'Seguridad Psicológica — Mauricio Martínez', topic: 'Prácticas',
    q: 'Complete: las retrospectivas deben ser sin _______, centrándose en procesos y no en personas, para preservar la seguridad psicológica.',
    answer: ['culpa', 'culpas'],
    explanation: 'El documento establece como práctica clave las "Retrospectivas sin culpa", enfocadas en procesos y no en señalar responsables, lo que preserva la confianza y permite la mejora continua.'
  },
  {
    id: 17, type: 'mc', source: 'Seguridad Psicológica — Mauricio Martínez', topic: 'Code Review',
    q: '¿Cuál es la regla del documento sobre las revisiones de código (code reviews) para mantener la Seguridad Psicológica?',
    options: [
      'Centrarse exclusivamente en el desarrollador autor del código',
      'Centrarse en el código, no en el desarrollador',
      'Suprimir las revisiones de código para no generar conflicto',
      'Hacer las revisiones públicas en redes sociales del equipo'
    ],
    answer: 1,
    explanation: 'La práctica recomendada es "Feedback constructivo enfocado en el código no el desarrollador", porque despersonaliza la crítica y mantiene un entorno seguro para discutir mejoras técnicas.'
  },
  {
    id: 18, type: 'tf', source: 'Seguridad Psicológica — Mauricio Martínez', topic: 'Definition of Ready',
    q: 'El documento considera que la Definition of Ready (DoR) obligatoria es una práctica clave que sostiene la seguridad psicológica.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. La DoR obligatoria permite "rechazar historias de usuario que no cumplen la necesidad" (riesgo R-012 Refinamiento) sin que esto sea visto como obstrucción, sino como protección de la calidad.'
  },
  {
    id: 19, type: 'mc', source: 'Seguridad Psicológica — Mauricio Martínez', topic: 'Dimensión 4P',
    q: 'Según el documento, la seguridad psicológica se ubica dentro de la dimensión "Personas" del enfoque 4P, que abarca:',
    options: [
      'Hardware, software, redes y bases de datos',
      'Comunicación, liderazgo, colaboración, motivación, confianza y gestión de conflictos',
      'Presupuesto, alcance, tiempo y calidad',
      'Marketing, ventas, finanzas y operaciones'
    ],
    answer: 1,
    explanation: 'Personas en 4P abarca "comunicación, liderazgo, colaboración, motivación, confianza y gestión de conflictos", y la seguridad psicológica es el sustrato cultural que permite que estas funcionen.'
  },
  {
    id: 20, type: 'fill', source: 'Seguridad Psicológica — Mauricio Martínez', topic: 'R-007',
    q: 'Complete: el riesgo R-007 identificado en el documento se refiere a la _______ del equipo, mitigada cuando los miembros pueden comunicar abiertamente su capacidad real.',
    answer: ['sobrecarga', 'sobre carga'],
    explanation: 'R-007 corresponde a "Sobrecarga del equipo". La seguridad psicológica permite mitigarlo al habilitar a las personas a comunicar su capacidad real sin miedo a sanciones.'
  },

  /* =====================================================
   *  BLOQUE 3 · GESTIÓN DEL TALENTO (Diogo Franco) — 8 preguntas
   * ===================================================== */
  {
    id: 21, type: 'mc', source: 'Gestión del talento — Diogo Franco', topic: 'Definición',
    q: 'Según Diogo Franco, la gestión del talento se define como un conjunto de acciones orientadas a:',
    options: [
      'Reducir costos laborales mediante automatización',
      'Seleccionar, organizar, desarrollar, motivar y retener a las personas con las capacidades necesarias',
      'Despedir personal con bajo desempeño y reemplazarlo rápidamente',
      'Externalizar todas las funciones técnicas no esenciales'
    ],
    answer: 1,
    explanation: 'El documento define talento como "el conjunto de acciones orientadas a seleccionar, organizar, desarrollar, motivar y retener a las personas que tienen las capacidades necesarias para cumplir los objetivos de un proyecto".'
  },
  {
    id: 22, type: 'mc', source: 'Gestión del talento — Diogo Franco', topic: 'Competencias',
    q: 'Las cuatro dimensiones de competencias de un equipo ágil identificadas por el documento son:',
    options: [
      'Liderazgo, comunicación, finanzas y marketing',
      'Programación, testing, deploy y soporte',
      'Técnicas, colaborativas, adaptativas y de negocio',
      'Cognitivas, emocionales, sociales y físicas'
    ],
    answer: 2,
    explanation: 'El documento agrupa las competencias en cuatro dimensiones: técnicas (construir/probar/desplegar), colaborativas (comunicación, escucha activa), adaptativas (aprendizaje y cambio) y de negocio (orientación al valor).'
  },
  {
    id: 23, type: 'tf', source: 'Gestión del talento — Diogo Franco', topic: 'Sostenibilidad',
    q: 'La sostenibilidad del talento implica fomentar la dependencia de personas específicas (silos) para garantizar la calidad del producto.',
    options: ['Verdadero', 'Falso'],
    answer: 1,
    explanation: 'Falso. El documento explícitamente busca "reducir la dependencia de personas específicas (evitar silos)" porque perder a una persona clave implica perder conocimiento y contexto acumulado.'
  },
  {
    id: 24, type: 'fill', source: 'Gestión del talento — Diogo Franco', topic: 'Métrica de retención',
    q: 'Complete: el objetivo de retención del proyecto FlashDelivery es reducir la deserción de repartidores del 45 % al _____ % en seis meses.',
    answer: ['20', 'veinte'],
    explanation: 'El objetivo SMART es reducir la deserción del 45 % al 20 % en seis meses, dentro de un presupuesto máximo de USD 150.000 y con sprints quincenales.'
  },
  {
    id: 25, type: 'mc', source: 'Gestión del talento — Diogo Franco', topic: 'Roles',
    q: '¿Cuál de los siguientes roles NO es mencionado explícitamente como parte del talento técnico requerido en FlashDelivery?',
    options: ['Mobile Lead', 'Especialista en APIs cartográficas', 'Community Manager de redes sociales', 'QA para pruebas de red adversa'],
    answer: 2,
    explanation: 'Los roles citados son Mobile Lead, Backend Lead, especialistas en APIs cartográficas, analistas de datos, QA para red adversa y UX. El "Community Manager" no aparece en la matriz de talento del proyecto.'
  },
  {
    id: 26, type: 'tf', source: 'Gestión del talento — Diogo Franco', topic: 'Google re:Work',
    q: 'El documento cita la investigación "Google re:Work" como referencia respecto a factores de efectividad del equipo, como claridad e impacto.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento menciona explícitamente "Google re:Work" como referencia a factores de efectividad de equipos (claridad, impacto), junto con la Guía Scrum para equipos multifuncionales.'
  },
  {
    id: 27, type: 'mc', source: 'Gestión del talento — Diogo Franco', topic: 'Restricciones',
    q: '¿Cuál es el presupuesto máximo y la duración del proyecto FlashDelivery según el documento?',
    options: [
      'USD 50.000 y 3 meses',
      'USD 100.000 y 4 meses',
      'USD 150.000 y 6 meses',
      'USD 250.000 y 12 meses'
    ],
    answer: 2,
    explanation: 'El proyecto está restringido a USD 150.000 máximo, 6 meses de duración con entregas quincenales (sprints de 15 días).'
  },
  {
    id: 28, type: 'fill', source: 'Gestión del talento — Diogo Franco', topic: 'Velocidad',
    q: 'Complete: el equipo de FlashDelivery tiene una capacidad declarada de _____ Story Points por Sprint.',
    answer: ['20', 'veinte'],
    explanation: 'La velocidad documentada es de 20 Story Points por Sprint, métrica clave para planificar la capacidad y evitar la sobrecarga señalada en otros trabajos del curso.'
  },

  /* =====================================================
   *  BLOQUE 4 · MENTORÍA (Sebastian Cupary) — 8 preguntas
   * ===================================================== */
  {
    id: 29, type: 'mc', source: 'Mentoría para el desarrollo del talento — Sebastian Cupary', topic: 'Definición',
    q: 'Según Cupary, la mentoría se define como una estrategia donde una persona con más experiencia guía a otra para transferir:',
    options: [
      'Capital económico, acciones y bienes',
      'Conocimiento, confianza y autonomía',
      'Errores, frustración y vacíos técnicos',
      'Marcas comerciales, patentes y derechos'
    ],
    answer: 1,
    explanation: 'La mentoría es definida como "una estrategia donde una persona con más experiencia guía a otra para transferir conocimiento, confianza y autonomía", pilares centrales del desarrollo del talento.'
  },
  {
    id: 30, type: 'tf', source: 'Mentoría para el desarrollo del talento — Sebastian Cupary', topic: 'Coaching vs Mentoría',
    q: 'En el documento, el "Coaching" (acompañamiento) se diferencia de la mentoría porque se centra en seguimiento continuo, resolución de dudas y detección temprana de dificultades.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento distingue ambos conceptos: la mentoría transfiere conocimiento de un experto, mientras el coaching/acompañamiento aporta seguimiento continuo y detección temprana de dificultades.'
  },
  {
    id: 31, type: 'fill', source: 'Mentoría para el desarrollo del talento — Sebastian Cupary', topic: 'Programa',
    q: 'Complete: el programa propuesto se denomina "Rider Mentor _____ días" y acompaña al rider durante sus primeras dos semanas en la plataforma.',
    answer: ['15', 'quince'],
    explanation: 'El programa es "Rider Mentor 15 días", diseñado específicamente para reducir el 45 % de deserción que ocurre antes de los primeros 15 días en FlashDelivery.'
  },
  {
    id: 32, type: 'mc', source: 'Mentoría para el desarrollo del talento — Sebastian Cupary', topic: 'Beneficios',
    q: 'De los siguientes, ¿cuál NO es un beneficio del programa de mentoría según Cupary?',
    options: [
      'Acelerar la adquisición de conocimientos prácticos',
      'Reducir la incertidumbre en los primeros días o semanas',
      'Disminuir la probabilidad de abandono temprano',
      'Eliminar por completo la necesidad de capacitación formal'
    ],
    answer: 3,
    explanation: 'El documento describe beneficios de Aprendizaje, Adaptación, Retención y Cultura/confianza, pero en ningún momento sostiene que la mentoría reemplace la capacitación formal; ambos son complementarios.'
  },
  {
    id: 33, type: 'mc', source: 'Mentoría para el desarrollo del talento — Sebastian Cupary', topic: 'Canales',
    q: '¿Qué canales prioriza el programa "Rider Mentor 15 días" para los contactos breves cada 2-3 días?',
    options: [
      'Llamadas telefónicas tradicionales únicamente',
      'Correo electrónico institucional',
      'WhatsApp corporativo o app',
      'Reuniones presenciales obligatorias'
    ],
    answer: 2,
    explanation: 'El programa establece "contactos breves cada 2-3 días vía WhatsApp corporativo o app", priorizando canales informales pero corporativamente controlados, adecuados a la naturaleza móvil del rider.'
  },
  {
    id: 34, type: 'tf', source: 'Mentoría para el desarrollo del talento — Sebastian Cupary', topic: 'Transformación digital',
    q: 'Según el documento, la mentoría es clave en la transformación digital porque permite que las personas adopten herramientas tecnológicas y traduzcan la tecnología en mejoras de eficiencia.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento sostiene que la mentoría facilita la adopción de herramientas digitales y traduce la tecnología en eficiencia y decisiones basadas en datos, superando barreras como costos iniciales.'
  },
  {
    id: 35, type: 'mc', source: 'Mentoría para el desarrollo del talento — Sebastian Cupary', topic: 'Métricas',
    q: '¿Cuál de las siguientes NO se considera una métrica de evaluación del programa de mentoría en FlashDelivery?',
    options: [
      'Tasa de retención a 15 días',
      'Cantidad de reclamos por desconocimiento',
      'Eventos de uso de funcionalidades en la app',
      'Margen bruto trimestral por inversionista'
    ],
    answer: 3,
    explanation: 'Las métricas indicadas son retención a 15 días, abandono temprano, uso de funcionalidades, reclamos por desconocimiento y participación de mentores. El margen financiero del inversionista no es métrica del programa.'
  },
  {
    id: 36, type: 'fill', source: 'Mentoría para el desarrollo del talento — Sebastian Cupary', topic: 'Beneficio',
    q: 'Complete: entre los beneficios HUMANOS del programa de mentoría, el documento destaca la generación de _____ y sentido de pertenencia en el rider nuevo.',
    answer: ['confianza'],
    explanation: 'El documento clasifica los beneficios en Operativos, Humanos y Estratégicos. Dentro de los Humanos cita explícitamente "confianza" y "sentido de pertenencia".'
  },

  /* =====================================================
   *  BLOQUE 5 · COACHING PARA LÍDERES — 8 preguntas
   * ===================================================== */
  {
    id: 37, type: 'mc', source: 'Coaching para Líderes de Proyecto', topic: 'Evolución del liderazgo',
    q: 'Según el documento, la evolución del liderazgo en proyectos de software se mueve desde:',
    options: [
      'La habilitación sistémica al control férreo',
      'El control al control con KPIs',
      'El control a la habilitación sistémica',
      'La improvisación a la microgestión'
    ],
    answer: 2,
    explanation: 'El documento titula su matriz como "La evolución del liderazgo: Del control a la habilitación sistémica", planteando el paso de Project Manager tradicional a Agile Coach/Scrum Master.'
  },
  {
    id: 38, type: 'mc', source: 'Coaching para Líderes de Proyecto', topic: 'Fórmula de canales',
    q: 'La fórmula de complejidad comunicativa citada por el documento, "Canales = n(n-1)/2", indica que un equipo de 4 miembros tiene cuántas líneas de comunicación.',
    options: ['4', '6', '8', '12'],
    answer: 1,
    explanation: 'Aplicando 4(4-1)/2 = 6 líneas de comunicación. El documento usa este cálculo para justificar el valor superior del cara a cara frente a canales unidireccionales como el email.'
  },
  {
    id: 39, type: 'tf', source: 'Coaching para Líderes de Proyecto', topic: 'Cara a cara',
    q: 'El documento sostiene que el correo electrónico es bidireccional y, por tanto, equivalente al cara a cara en interactividad.',
    options: ['Verdadero', 'Falso'],
    answer: 1,
    explanation: 'Falso. El documento ubica al email como unidireccional y de bajo valor, mientras que el cara a cara aporta elementos paralingüísticos (tono e inflexión) y codificación/decodificación instantánea.'
  },
  {
    id: 40, type: 'mc', source: 'Coaching para Líderes de Proyecto', topic: 'Trigger Questions',
    q: 'Las "Preguntas Gatillo" propuestas en Refinamiento/Sprint Planning incluyen específicamente:',
    options: [
      '"¿Qué dependencias no controlamos?" y "¿Qué podría salir mal en esta iteración?"',
      '"¿Cuál es nuestro ROI mensual?" y "¿Cuándo despedimos al PO?"',
      '"¿Quién tiene la culpa del último bug?" y "¿Cuántas horas extra haremos?"',
      '"¿Qué color tendrá el botón?" y "¿Vamos a almorzar en grupo?"'
    ],
    answer: 0,
    explanation: 'El documento define como Preguntas Gatillo en Refinamiento: "¿Qué dependencias no controlamos?" y "¿Qué podría salir mal en esta iteración?", buscando anticipar riesgos antes del impacto.'
  },
  {
    id: 41, type: 'fill', source: 'Coaching para Líderes de Proyecto', topic: 'Caso FlashDelivery',
    q: 'Complete: la "Falla Cardíaca" técnica más crítica identificada en FlashDelivery es la dependencia total de la API de _____.',
    answer: ['google maps', 'googlemaps', 'maps', 'google'],
    explanation: 'El diagnóstico señala "Dependencia total de API Google Maps" como una de las amenazas técnicas centrales, junto con la base de datos antigua sin migrar y el consumo masivo de batería.'
  },
  {
    id: 42, type: 'mc', source: 'Coaching para Líderes de Proyecto', topic: 'Crisis del CEO',
    q: '¿Cuál es la acción del coach descrita ante el "Ultimátum del CEO" para mantener la seguridad psicológica del equipo?',
    options: [
      'Trasladar la presión amplificada al equipo de desarrollo',
      'Absorber la presión del negocio para mantener la seguridad psicológica',
      'Renunciar a su puesto y delegar al PO',
      'Despedir al desarrollador con peor desempeño'
    ],
    answer: 1,
    explanation: 'El coach actúa como "escudo humano": absorbe la presión del negocio para que el equipo se enfoque en el código y no en el pánico, manteniendo la seguridad psicológica.'
  },
  {
    id: 43, type: 'tf', source: 'Coaching para Líderes de Proyecto', topic: 'MVP y trade-offs',
    q: 'El documento sostiene que el valor del Agile Coach es facilitar trade-offs "despiadados" para proteger el MVP, priorizando GDPR y retención de riders sobre features como juegos de puntos o red social interna.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El coach prioriza Must Have (Cumplimiento GDPR, retención y estabilidad/modo offline) frente a Could Have/Won\'t Have (juegos de puntos, red social interna), protegiendo el presupuesto de USD 150k.'
  },
  {
    id: 44, type: 'mc', source: 'Coaching para Líderes de Proyecto', topic: 'Capacidad',
    q: '¿Cuál es la capacidad técnica declarada por sprint en el caso FlashDelivery del documento de coaching?',
    options: ['10 Story Points', '15 Story Points', '20 Story Points', '40 Story Points'],
    answer: 2,
    explanation: 'La capacidad declarada es de "20 Story Points / Sprint", coherente con el dato reportado en otros trabajos del curso, lo que permite triangular información entre los documentos.'
  },

  /* =====================================================
   *  BLOQUE 6 · TÉCNICAS DE MOTIVACIÓN — 8 preguntas
   * ===================================================== */
  {
    id: 45, type: 'mc', source: 'Técnicas de Motivación en Software', topic: 'Tríada auténtica',
    q: 'La "tríada auténtica" de la motivación intrínseca presentada en el documento se compone de:',
    options: [
      'Salario, bonos y beneficios',
      'Autonomía, maestría y propósito',
      'Vacaciones, horario flexible y home office',
      'Velocidad, calidad y cantidad'
    ],
    answer: 1,
    explanation: 'La tríada presentada es Autonomía (poder de decisión técnica), Maestría (sentimiento de evolución profesional) y Propósito (entender el valor real del producto), claramente alineada con la teoría de Pink/Deci-Ryan.'
  },
  {
    id: 46, type: 'tf', source: 'Técnicas de Motivación en Software', topic: 'Servant Leadership',
    q: 'El documento aboga por el Servant Leadership y el "Adiós al Micromanagement", proponiendo dar propiedad de módulos completos al desarrollador.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento propone explícitamente "Adiós al Micromanagement" y "Dar propiedad de módulos completos al desarrollador", junto con permitir la elección fundamentada de la arquitectura.'
  },
  {
    id: 47, type: 'fill', source: 'Técnicas de Motivación en Software', topic: 'Ritmo sostenible',
    q: 'Complete: el documento advierte que es necesario evitar las "marchas de la _____" para proteger el producto final.',
    answer: ['muerte'],
    explanation: 'La frase exacta del documento es "Evitar las marchas de la muerte protege el producto final", posicionando el ritmo sostenible como factor crítico para la calidad arquitectónica del software.'
  },
  {
    id: 48, type: 'mc', source: 'Técnicas de Motivación en Software', topic: 'Seguridad psicológica',
    q: '¿Qué práctica recomienda el documento para mantener una "cultura tolerante al fallo técnico"?',
    options: [
      'Penalizar económicamente cada bug en producción',
      'Realizar post-mortems sin buscar culpables',
      'Publicar rankings semanales de errores',
      'Eliminar la documentación interna'
    ],
    answer: 1,
    explanation: 'El documento propone "Post-mortems sin buscar culpables" como práctica para sostener seguridad psicológica y libertad para proponer soluciones disruptivas, alineado con la perspectiva de Edmondson.'
  },
  {
    id: 49, type: 'mc', source: 'Técnicas de Motivación en Software', topic: 'Reconocimiento',
    q: 'Entre las técnicas de Feedback & Reconocimiento del documento se incluyen específicamente:',
    options: [
      'Reuniones 1:1, peer reviews y kudos públicos',
      'Despidos, sanciones y descuentos salariales',
      'Auditorías sorpresa y controles biométricos',
      'Sesiones públicas de exposición de errores'
    ],
    answer: 0,
    explanation: 'El documento detalla las prácticas: Reuniones 1:1 periódicas, Peer Reviews constructivos enfocados en mejora y Kudos Públicos para celebrar hitos técnicos frente a toda la organización.'
  },
  {
    id: 50, type: 'tf', source: 'Técnicas de Motivación en Software', topic: 'Cita central',
    q: 'El documento concluye que "la motivación en software no es un beneficio extra, sino una variable crítica de la calidad de la arquitectura".',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. La cita textual final del documento sostiene esta tesis, equiparando la motivación con la salud arquitectónica del producto, no con un mero beneficio de RR.HH.'
  },
  {
    id: 51, type: 'mc', source: 'Técnicas de Motivación en Software', topic: 'Maestría',
    q: '¿Cuál de las siguientes NO se cita como vía para construir Maestría en el equipo?',
    options: [
      'Capacitación continua en nuevas tecnologías',
      'Asignación de retos técnicos que estiren las habilidades',
      'Cultura orientada al código limpio y refactorización',
      'Bonos en efectivo por hora extra trabajada'
    ],
    answer: 3,
    explanation: 'La maestría se construye con capacitación continua, retos técnicos y cultura de código limpio/refactorización; los bonos por hora extra son motivación extrínseca y, además, contradictorios con el ritmo sostenible.'
  },
  {
    id: 52, type: 'fill', source: 'Técnicas de Motivación en Software', topic: 'Propósito',
    q: 'Complete: un desarrollador motivado sabe a quién _____ su software, conectando cada Sprint con el impacto en comercio, clientes y logística.',
    answer: ['ayuda'],
    explanation: 'El documento afirma: "Un desarrollador motivado sabe a quién ayuda su software", subrayando la dimensión de Propósito como vínculo entre código y valor para el usuario final.'
  },

  /* =====================================================
   *  BLOQUE 7 · CLIMA LABORAL (Frederick Piza) — 8 preguntas
   * ===================================================== */
  {
    id: 53, type: 'mc', source: 'Clima Laboral — Frederick Piza', topic: 'Tres pilares',
    q: 'Según Piza, los tres pilares que configuran el clima laboral en FlashDelivery son:',
    options: [
      'Salario, bonos y vacaciones',
      'Liderazgo y Gestión Operativa, Reconocimiento y Transparencia Económica, Condiciones de Trabajo',
      'Marketing, Ventas y Atención al Cliente',
      'Hardware, Software y Conectividad'
    ],
    answer: 1,
    explanation: 'El documento articula el clima laboral en torno a tres pilares: "Liderazgo y Gestión Operativa, Reconocimiento y Transparencia Económica, Condiciones de Trabajo".'
  },
  {
    id: 54, type: 'tf', source: 'Clima Laboral — Frederick Piza', topic: 'Causas raíz',
    q: 'Una de las causas raíz identificadas es que la app descarga la batería del rider en aproximadamente 2 horas.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento documenta que "la app descarga la batería en 2 horas", junto con rutas incorrectas, soporte que tarda hasta 4 horas y mapas inadecuados para motos.'
  },
  {
    id: 55, type: 'fill', source: 'Clima Laboral — Frederick Piza', topic: 'SLA Soporte',
    q: 'Complete: la meta del proyecto es que el tiempo de respuesta del soporte técnico sea menor a _____ minutos.',
    answer: ['30', 'treinta'],
    explanation: 'El requisito del proyecto es responder incidencias de soporte en menos de 30 minutos, frente a las 4 horas actuales que generan deserción y deterioro del clima laboral.'
  },
  {
    id: 56, type: 'mc', source: 'Clima Laboral — Frederick Piza', topic: 'Equipo',
    q: 'Según Piza, ¿cuál es la composición del equipo dedicado a este proyecto?',
    options: [
      '3 ingenieros senior + 2 diseñadores UX',
      '5 ingenieros senior + 1 diseñador UX',
      '10 ingenieros junior + 2 product owners',
      '7 desarrolladores fullstack + 0 diseñadores'
    ],
    answer: 1,
    explanation: 'El documento especifica un equipo de "5 ingenieros senior + 1 diseñador UX", con un presupuesto máximo de USD 150.000 y duración de 6 meses.'
  },
  {
    id: 57, type: 'tf', source: 'Clima Laboral — Frederick Piza', topic: 'SMART',
    q: 'El objetivo SMART del proyecto define reducir la deserción de riders nuevos del 45 % al 20 % en 6 meses mediante mejoras incrementales en la app y soporte.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El objetivo SMART formal es: "reducir la tasa de deserción de riders nuevos del 45 % al 20 % en un plazo de 6 meses mediante mejoras incrementales en la aplicación móvil y en los procesos de soporte operativo".'
  },
  {
    id: 58, type: 'mc', source: 'Clima Laboral — Frederick Piza', topic: 'Releases',
    q: 'El enfoque adaptativo descrito por Piza organiza el proyecto en sprints quincenales agrupados en:',
    options: ['1 release final', '2 releases', '4 releases', '6 releases (uno por mes)'],
    answer: 1,
    explanation: 'El documento indica enfoque adaptativo "con sprints quincenales organizados en dos releases", coherente con la duración total de 6 meses y entregas escalonadas.'
  },
  {
    id: 59, type: 'fill', source: 'Clima Laboral — Frederick Piza', topic: 'Tiempos de entrega',
    q: 'Complete: los tiempos de entrega de FlashDelivery se elevaron de 30 minutos hasta _____ minutos, deteriorando la experiencia del cliente.',
    answer: ['50', 'cincuenta'],
    explanation: 'El documento reporta el deterioro de tiempos "de 30 a 50 minutos", uno de los efectos visibles del mal clima y de las fallas técnicas que generan deserción.'
  },
  {
    id: 60, type: 'mc', source: 'Clima Laboral — Frederick Piza', topic: 'Instrumentos',
    q: '¿Cuál de los siguientes instrumentos NO es citado para medir cualitativamente el clima laboral en FlashDelivery?',
    options: [
      'Encuesta de satisfacción del rider',
      'Focus group de riders piloto',
      'Entrevistas de salida',
      'Pruebas físicas de aptitud cardiovascular'
    ],
    answer: 3,
    explanation: 'Los instrumentos cualitativos descritos son encuesta de satisfacción, focus group de riders piloto, entrevistas de salida y retrospectivas de sprint. Las pruebas físicas no aparecen y serían inconducentes para medir clima.'
  },

  /* =====================================================
   *  BLOQUE 8 · LIDERAZGO COLABORATIVO — 8 preguntas
   * ===================================================== */
  {
    id: 61, type: 'mc', source: 'Liderazgo Colaborativo', topic: 'Diagnóstico',
    q: '¿Qué problema central plantea el documento sobre el modelo jerárquico tradicional en proyectos de software?',
    options: [
      'Es ideal para la innovación, pero costoso',
      'Es un cuello de botella; la innovación y agilidad exigen redes donde la autoridad fluye hacia el conocimiento empírico',
      'Es la única manera de garantizar GDPR',
      'Funciona bien siempre que el equipo sea pequeño'
    ],
    answer: 1,
    explanation: 'El documento sostiene que "el modelo jerárquico y autoritario es un cuello de botella" y que la agilidad exige "redes donde la autoridad fluye hacia el conocimiento empírico".'
  },
  {
    id: 62, type: 'mc', source: 'Liderazgo Colaborativo', topic: 'Tres principios',
    q: 'Los tres principios fundacionales del modelo colaborativo descritos son:',
    options: [
      'Empoderamiento, Comunicación Abierta y Responsabilidad Compartida',
      'Control, Vigilancia y Sanción',
      'Bonos, Multas y Auditorías',
      'Velocidad, Volumen y Margen'
    ],
    answer: 0,
    explanation: 'Los pilares descritos son Empoderamiento (FOUNDATION BASE), Comunicación Abierta (STRUCTURAL INTEGRITY) y Responsabilidad Compartida (CONNECTION POINTS), con metáfora arquitectónica explícita.'
  },
  {
    id: 63, type: 'tf', source: 'Liderazgo Colaborativo', topic: 'Liderazgo distribuido',
    q: 'En el liderazgo distribuido propuesto, la autoridad es estática y se mantiene siempre en la gerencia para garantizar la coherencia técnica.',
    options: ['Verdadero', 'Falso'],
    answer: 1,
    explanation: 'Falso. El documento afirma: "la autoridad no es estática. Fluye dinámicamente entre los integrantes según su pericia técnica y el contexto exacto del problema".'
  },
  {
    id: 64, type: 'fill', source: 'Liderazgo Colaborativo', topic: 'FlashDelivery',
    q: 'Complete: en FlashDelivery, el liderazgo colaborativo permitió delegar poder de decisión directamente en Agentes de Soporte y Riders _______.',
    answer: ['embajadores', 'embajador'],
    explanation: 'El documento describe la descentralización al "borde": "delegando poder de decisión directamente en Agentes de Soporte y Riders embajadores", para tomar decisiones inmediatas sin escalamiento.'
  },
  {
    id: 65, type: 'mc', source: 'Liderazgo Colaborativo', topic: 'Casos validadores',
    q: '¿Cuál de las siguientes empresas NO se cita como ejemplo validador del liderazgo colaborativo en el documento?',
    options: ['Microsoft (Satya Nadella)', 'Unilever (Paul Polman)', 'Google y Zappos', 'Tesla (Elon Musk)'],
    answer: 3,
    explanation: 'El documento cita a Unilever (Paul Polman), Microsoft (Satya Nadella) y Google & Zappos como ejemplos de ecosistemas exitosos. Tesla no aparece como caso validador.'
  },
  {
    id: 66, type: 'tf', source: 'Liderazgo Colaborativo', topic: 'Tesis final',
    q: 'El documento concluye que el liderazgo colaborativo es solo una métrica de satisfacción laboral, sin impacto real sobre la mitigación de riesgos arquitectónicos.',
    options: ['Verdadero', 'Falso'],
    answer: 1,
    explanation: 'Falso. El documento sostiene la tesis opuesta: "El liderazgo colaborativo no es una métrica de satisfacción laboral; es una estrategia vital de mitigación de riesgos" arquitectónicos del software.'
  },
  {
    id: 67, type: 'mc', source: 'Liderazgo Colaborativo', topic: 'Camino a 5 pasos',
    q: 'En el camino hacia el ecosistema conectado, ¿cuál es el "Step 5" propuesto?',
    options: [
      'Formación Continua',
      'Canales Abiertos',
      'Diversidad',
      'Cultura de Confianza: líderes operando como facilitadores y estrategas, no como dictadores'
    ],
    answer: 3,
    explanation: 'Los pasos son: 1) Formación Continua, 2) Canales Abiertos, 3) Diversidad, 4) Descentralización y 5) Cultura de Confianza, con líderes como facilitadores y estrategas, no dictadores.'
  },
  {
    id: 68, type: 'fill', source: 'Liderazgo Colaborativo', topic: 'Métrica 4P',
    q: 'Complete: en el caso FlashDelivery, fortalecer el eje "Personas" llevó a una retención del talento clave del _____ % (reducción de la deserción).',
    answer: ['20', 'veinte'],
    explanation: 'El documento reporta: "reducción de la deserción laboral y retención del talento clave a un 20 %", coherente con el objetivo SMART del proyecto descrito por Piza y Franco.'
  },

  /* =====================================================
   *  BLOQUE 9 · ENTREVISTA CONDUCTUAL Y TÉCNICA (Sofía Crespo) — 8 preguntas
   * ===================================================== */
  {
    id: 69, type: 'mc', source: 'Entrevista Conductual y Técnica — Sofía Crespo', topic: 'Definiciones',
    q: 'Según Crespo, ¿en qué se diferencia la entrevista conductual de la técnica?',
    options: [
      'La conductual evalúa lenguajes de programación; la técnica, las emociones',
      'La conductual analiza experiencias previas para predecir desempeño; la técnica evalúa conocimientos y habilidades específicas',
      'Ambas son sinónimos en empresas de software',
      'La conductual es exclusiva para gerentes y la técnica para programadores junior'
    ],
    answer: 1,
    explanation: 'La conductual usa "preguntas sobre experiencias previas para evaluar las competencias y predecir el desempeño a futuro", mientras la técnica "evalúa los conocimientos específicos, habilidades técnicas y aptitudes".'
  },
  {
    id: 70, type: 'fill', source: 'Entrevista Conductual y Técnica — Sofía Crespo', topic: 'STAR',
    q: 'Complete: el método STAR utilizado en entrevistas conductuales corresponde a Situación, Tarea, _______ y Resultado.',
    answer: ['acción', 'accion'],
    explanation: 'STAR estructura la respuesta: Situación, Tarea, Acción y Resultado. Permite predecir desempeño futuro a partir de comportamientos pasados verificables.'
  },
  {
    id: 71, type: 'mc', source: 'Entrevista Conductual y Técnica — Sofía Crespo', topic: 'Fit',
    q: 'En el diseño de Crespo, ¿cómo se valida el "Fit Técnico"?',
    options: [
      'Mediante un test psicológico estandarizado',
      'A través de Live Coding o revisión de portafolio',
      'Por antigüedad laboral declarada',
      'Por carta de recomendación firmada'
    ],
    answer: 1,
    explanation: 'El documento define que el "Fit Técnico" se valida "mediante Live Coding o revisión de portafolio", complementado con pruebas como Take-home Project y Pruebas de Diseño/Arquitectura para Senior.'
  },
  {
    id: 72, type: 'mc', source: 'Entrevista Conductual y Técnica — Sofía Crespo', topic: 'Métricas',
    q: 'En el caso FlashDelivery, los tiempos de entrega que se manejan en la rúbrica son:',
    options: [
      'Actual 30 min, Competencia 50 min, Objetivo 35 min',
      'Actual 50 min, Competencia 35 min, Objetivo 30 min',
      'Actual 60 min, Competencia 60 min, Objetivo 60 min',
      'Actual 20 min, Competencia 25 min, Objetivo 15 min'
    ],
    answer: 1,
    explanation: 'El documento indica: "Tiempo Entrega Actual 50 Min, Promedio Competencia 35 Min, Objetivo Post-Contratación 30 Min"; el candidato debe demostrar capacidad de batir incluso al mercado.'
  },
  {
    id: 73, type: 'tf', source: 'Entrevista Conductual y Técnica — Sofía Crespo', topic: 'Adaptación VUCA',
    q: 'La rúbrica incluye preguntas adaptativas sobre cambios de alcance como, por ejemplo, la entrada de la Ley GDPR en el mes 3.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. La adaptación VUCA contempla escenarios reales como "Ley GDPR en el mes 3" y mentalidad "Security by Design", evaluando cómo el candidato re-prioriza ante cambios.'
  },
  {
    id: 74, type: 'mc', source: 'Entrevista Conductual y Técnica — Sofía Crespo', topic: 'Rúbrica',
    q: 'En la rúbrica de evaluación 1-3 del documento, ¿qué criterio recibe el mayor peso (40 %)?',
    options: [
      'Conocimiento técnico',
      'Resolución de problemas bajo presión',
      'Trabajo en equipo ágil',
      'Ortografía en el correo de presentación'
    ],
    answer: 2,
    explanation: 'La rúbrica pondera Conocimiento técnico 30 %, Resolución bajo presión 30 % y Trabajo en equipo ágil 40 %, coherente con la dimensión Personas como pilar del modelo 4P.'
  },
  {
    id: 75, type: 'fill', source: 'Entrevista Conductual y Técnica — Sofía Crespo', topic: 'Proceso ágil',
    q: 'Complete: en el proceso de selección ágil propuesto, en la Semana 2 se aplica una prueba técnica para optimizar Batería y _____.',
    answer: ['gps'],
    explanation: 'En la Semana 2 se evalúan optimizaciones técnicas críticas para FlashDelivery: consumo de Batería y precisión del GPS, dos de las quejas centrales de los riders.'
  },
  {
    id: 76, type: 'mc', source: 'Entrevista Conductual y Técnica — Sofía Crespo', topic: 'Pruebas prácticas',
    q: '¿Cuál de las siguientes pruebas prácticas NO es propuesta por Crespo?',
    options: [
      'Programación en pares',
      'Take-home Project',
      'Pruebas de Diseño/Arquitectura (para Senior)',
      'Examen oral memorístico de la historia de Java'
    ],
    answer: 3,
    explanation: 'El documento propone Programación en Pares, Take-home Project y Pruebas de Diseño/Arquitectura. Un examen oral memorístico no aparece y resulta inadecuado para evaluar competencias prácticas reales.'
  },

  /* =====================================================
   *  BLOQUE 10 · DIVERSIDAD (Ana Villafani) — 7 preguntas
   * ===================================================== */
  {
    id: 77, type: 'mc', source: 'Gestión de la Diversidad — Ana Villafani', topic: 'Tipos de diversidad',
    q: 'Según Villafani, la diversidad en proyectos de software no se limita a aspectos culturales o demográficos, sino que también incluye:',
    options: [
      'Diversidad financiera, contable y legal',
      'Diversidad técnica, funcional y cognitiva',
      'Diversidad geográfica, idiomática y religiosa exclusivamente',
      'Diversidad de marcas comerciales utilizadas'
    ],
    answer: 1,
    explanation: 'El documento aclara: "No solo se refiere a aspectos culturales o demográficos, sino también a diversidad técnica, funcional y cognitiva", ampliando el concepto a las capacidades del equipo.'
  },
  {
    id: 78, type: 'tf', source: 'Gestión de la Diversidad — Ana Villafani', topic: 'Beneficios',
    q: 'La gestión correcta de la diversidad mejora colaboración, toma de decisiones y calidad del producto.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento establece textualmente: "Una correcta gestión de la diversidad ayuda a mejorar colaboración, toma de decisiones, calidad del producto".'
  },
  {
    id: 79, type: 'mc', source: 'Gestión de la Diversidad — Ana Villafani', topic: 'Desafíos',
    q: '¿Cuál de los siguientes NO se cita como desafío explícito de la diversidad en el documento?',
    options: [
      'Dificultades de comunicación',
      'Conflictos de enfoque',
      'Mayor complejidad de coordinación',
      'Reducción automática del salario base'
    ],
    answer: 3,
    explanation: 'Los desafíos citados son comunicación, conflictos de enfoque, complejidad de coordinación y riesgo de fragmentación. La reducción salarial no aparece y no es un efecto de la diversidad.'
  },
  {
    id: 80, type: 'fill', source: 'Gestión de la Diversidad — Ana Villafani', topic: 'Perfiles',
    q: 'Complete: el documento identifica perfiles diversos en FlashDelivery como Frontend/App, Backend, Base de Datos, _____ y QA/Testing.',
    answer: ['ux/ui', 'ux', 'ux ui', 'uxui', 'ui/ux'],
    explanation: 'Los perfiles incluidos son Frontend/App, Backend, Base de Datos, UX/UI, QA/Testing y Gestión/Negocio, todos necesarios para resolver problemas de la app de manera integrada.'
  },
  {
    id: 81, type: 'mc', source: 'Gestión de la Diversidad — Ana Villafani', topic: 'Matriz de capacidades',
    q: 'Según la matriz de capacidades del documento, ¿quién tiene la combinación "Backend Alto + BD Alto + Comunicación Medio"?',
    options: ['Manuel', 'Marco', 'Mónica', 'Martina'],
    answer: 1,
    explanation: 'Según la matriz de Villafani, Marco posee Backend (Alto), Base de Datos (Alto) y Comunicación (Medio); siendo el perfil más fuerte en componentes server-side.'
  },
  {
    id: 82, type: 'tf', source: 'Gestión de la Diversidad — Ana Villafani', topic: 'Frontend',
    q: 'En la matriz, Manuel tiene Frontend Alto, Backend Medio y Comunicación Alto, lo que lo posiciona como un perfil con fortalezas tanto técnicas de cliente como interpersonales.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. La matriz le asigna a Manuel Frontend (Alto), Backend (Medio) y Comunicación (Alto), perfil idóneo para puente entre equipos y desarrollo orientado a cliente.'
  },
  {
    id: 83, type: 'mc', source: 'Gestión de la Diversidad — Ana Villafani', topic: 'UX/UI',
    q: 'Según la matriz de capacidades, ¿qué dos personas presentan UX/UI Alto?',
    options: ['Manuel y Marco', 'Mónica y Martina', 'Marco y Martina', 'Manuel y Mónica'],
    answer: 1,
    explanation: 'Mónica y Martina son las dos integrantes con UX/UI (Alto). Esta concentración debe gestionarse para evitar silos y fortalecer la transferencia de conocimiento al resto del equipo.'
  },

  /* =====================================================
   *  BLOQUE 11 · COMUNICACIÓN (Omar Velasco) — 7 preguntas
   * ===================================================== */
  {
    id: 84, type: 'mc', source: 'Comunicación — Omar Velasco', topic: 'Definición',
    q: 'Velasco define la comunicación como:',
    options: [
      'La capacidad de hablar con autoridad sobre temas técnicos',
      'La capacidad para compartir significado a través del intercambio de información y comprensión común',
      'La transmisión unidireccional de órdenes de gerencia',
      'La acción de redactar correos formales con copia al jefe'
    ],
    answer: 1,
    explanation: 'La definición textual es "la capacidad para compartir significado a través del intercambio de información y comprensión común, y es clave para todas las demás habilidades".'
  },
  {
    id: 85, type: 'fill', source: 'Comunicación — Omar Velasco', topic: 'Canales',
    q: 'Complete: con 11 interesados en FlashDelivery, la fórmula n(n-1)/2 produce _____ canales potenciales de comunicación.',
    answer: ['55', 'cincuenta y cinco'],
    explanation: '11 × (11 − 1) / 2 = 55 canales potenciales. El documento usa esta cifra para alertar sobre el riesgo de ruido y retrasos por la complejidad combinatoria de stakeholders.'
  },
  {
    id: 86, type: 'mc', source: 'Comunicación — Omar Velasco', topic: 'Crisis',
    q: '¿Cuál es la "raíz comunicativa" de la crisis de FlashDelivery según Velasco?',
    options: [
      'Falta de software de videoconferencia',
      'Riders que no entienden sus pagos y soporte que tarda 4 horas',
      'Exceso de reuniones diarias del equipo de desarrollo',
      'Política de bonos confusa para los inversionistas'
    ],
    answer: 1,
    explanation: 'El diagnóstico señala: "Riders abandonan la App porque no entienden sus pagos y el soporte tarda 4 horas", elevando los tiempos de entrega de 30 a 50 minutos.'
  },
  {
    id: 87, type: 'tf', source: 'Comunicación — Omar Velasco', topic: 'Daily',
    q: 'En la matriz de comunicaciones de FlashDelivery, el Daily Stand-up tiene una frecuencia mensual y se realiza presencialmente con inversores.',
    options: ['Verdadero', 'Falso'],
    answer: 1,
    explanation: 'Falso. El Daily Stand-up es diario con el equipo de desarrollo (sincronización técnica vía videollamada). Lo mensual y presencial corresponde al Demo Day con CEO e inversionistas.'
  },
  {
    id: 88, type: 'mc', source: 'Comunicación — Omar Velasco', topic: 'Tickets',
    q: 'Para el canal de Tickets de Soporte (riders), ¿qué objetivo de tiempo de respuesta plantea la matriz?',
    options: ['< 2 horas', '< 1 hora', '< 30 minutos', '< 10 minutos (incluye Botón de Pánico)'],
    answer: 3,
    explanation: 'La matriz exige respuesta "< 10 min vía In-App" e incluye Botón de Pánico, requisito coherente con la naturaleza crítica del rider en ruta y con la mejora del clima laboral.'
  },
  {
    id: 89, type: 'mc', source: 'Comunicación — Omar Velasco', topic: 'Tipos',
    q: '¿Cuál es la diferencia esencial entre comunicación formal e informal en el documento?',
    options: [
      'La formal usa idioma inglés y la informal idioma español',
      'La formal está estructurada internamente (Stand-ups, Sprint Reviews, Demo Days); la informal es fluida con interesados externos (WhatsApp, In-App, Soporte)',
      'La formal solo aplica a directivos; la informal solo a riders',
      'La formal cuesta dinero; la informal es gratis'
    ],
    answer: 1,
    explanation: 'El documento opone Formal estructurada (Stand-ups, Sprint Reviews, Demo Days) frente a Informal fluida con interesados externos (grupos WhatsApp, notificaciones In-App y soporte técnico), ambas necesarias.'
  },
  {
    id: 90, type: 'fill', source: 'Comunicación — Omar Velasco', topic: 'GDPR',
    q: 'Complete: el Reporte GDPR a los Asesores Legales/Reguladores se entrega en los Sprints 1 y _____ vía informe PDF.',
    answer: ['6', 'seis'],
    explanation: 'La matriz programa el reporte GDPR en los Sprints 1 y 6, consistente con el deadline regulatorio del Mes 3 y el cierre legal del proyecto.'
  },

  /* =====================================================
   *  BLOQUE 12 · LIDERAZGO EMPÁTICO (Renato Escobar) — 6 preguntas
   * ===================================================== */
  {
    id: 91, type: 'mc', source: 'Liderazgo Empático — Renato Escobar', topic: 'PMI Power Skill',
    q: 'Escobar afirma que el PMI clasifica la empatía como:',
    options: [
      'Una soft skill secundaria, opcional para gerentes',
      'Una Power Skill (Habilidad de Poder)',
      'Un rasgo psicológico no entrenable',
      'Una habilidad técnica de programación'
    ],
    answer: 1,
    explanation: 'El documento es explícito: "El PMI clasifica la empatía como una Habilidad de Poder (Power Skill)", indispensable para navegar la complejidad del desarrollo de software de forma sostenible.'
  },
  {
    id: 92, type: 'mc', source: 'Liderazgo Empático — Renato Escobar', topic: 'Pilares',
    q: 'Los tres pilares del liderazgo empático según Escobar son:',
    options: [
      'Control, supervisión y sanción',
      'Escucha activa, respeto y comprensión',
      'Delegación, exigencia y monitoreo',
      'Salario, bono y reconocimiento'
    ],
    answer: 1,
    explanation: 'Los pilares son Escucha Activa (atención plena), Respeto (sin temor a represalias) y Comprensión (percibir el ánimo, gestionar estrés y prevenir burnout).'
  },
  {
    id: 93, type: 'tf', source: 'Liderazgo Empático — Renato Escobar', topic: 'Aplicación al rider',
    q: 'La empatía con el rider implica resolver problemas técnicos como batería y GPS, entendiendo que esas herramientas validan su sustento económico.',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. El documento conecta el "dolor del rider" con la realidad económica: "resolver la fricción técnica (batería y GPS) como una validación de su sustento económico".'
  },
  {
    id: 94, type: 'fill', source: 'Liderazgo Empático — Renato Escobar', topic: 'Herramientas',
    q: 'Complete: las herramientas del líder empático incluyen reuniones _____, retrospectivas (sin culpas) y feedback constructivo.',
    answer: ['1:1', '1 a 1', 'uno a uno', '1to1'],
    explanation: 'El documento cita explícitamente "Reuniones 1:1 (espacios privados de bienestar)" como herramienta clave, junto con retrospectivas centradas en proceso y feedback de tono de apoyo.'
  },
  {
    id: 95, type: 'mc', source: 'Liderazgo Empático — Renato Escobar', topic: 'Stakeholders',
    q: 'Para gestionar la ansiedad del Sponsor/CEO, Escobar recomienda:',
    options: [
      'Inundarlo con detalles técnicos para impresionarlo',
      'Traducir tecnicismos a lenguaje de negocio y entregar resultados medibles cada 15 días',
      'Evitar el contacto hasta entrega final',
      'Permitir que tome decisiones técnicas en lugar del equipo'
    ],
    answer: 1,
    explanation: 'La empatía con el sponsor requiere "traducir tecnicismos a lenguaje de negocio" y entregar resultados medibles en cada release quincenal, evitando rupturas de confianza estratégica.'
  },
  {
    id: 96, type: 'mc', source: 'Liderazgo Empático — Renato Escobar', topic: 'Burnout',
    q: '¿Qué herramienta concreta plantea Escobar como protección contra el burnout del equipo?',
    options: [
      'WIP Limits y retrospectivas psicológicamente seguras',
      'Aumentar la velocidad del sprint en un 30 %',
      'Eliminar las daily stand-ups',
      'Bonificar exclusivamente al primer desarrollador en cerrar tareas'
    ],
    answer: 0,
    explanation: 'El documento propone "WIP Limits y retrospectivas psicológicamente seguras", coherente con el plan estructural de mitigación de Burnout descrito en el trabajo de Dagner Molina.'
  },

  /* =====================================================
   *  BLOQUE 13 · MATRIZ DE HABILIDADES (Andrés Arteaga) — 4 preguntas
   * ===================================================== */
  {
    id: 97, type: 'mc', source: 'Matriz de Habilidades — Andrés Arteaga', topic: 'Brechas críticas',
    q: 'Según la conclusión de Arteaga, las brechas críticas detectadas en FlashDelivery se concentran en:',
    options: [
      'Scrum y Backend',
      'Comunicación y Liderazgo',
      'UX, GDPR y DB',
      'Mobile y QA'
    ],
    answer: 2,
    explanation: 'La conclusión textual del documento es: "FlashDelivery tiene brechas críticas en UX, GDPR y DB", que deben mitigarse con capacitaciones, mentorías y workshops.'
  },
  {
    id: 98, type: 'tf', source: 'Matriz de Habilidades — Andrés Arteaga', topic: 'Habilidades blandas',
    q: 'La matriz de Arteaga separa habilidades en Técnicas (Mobile, Backend, DB, QA, GDPR, UX/UI, Scrum) y Blandas (Comunicación, Liderazgo, Trabajo en equipo, Resolución de problemas).',
    options: ['Verdadero', 'Falso'],
    answer: 0,
    explanation: 'Verdadero. La matriz organiza explícitamente las habilidades en estas dos categorías, permitiendo balancear capacidad técnica con capacidad humana del equipo.'
  },
  {
    id: 99, type: 'mc', source: 'Matriz de Habilidades — Andrés Arteaga', topic: 'Beneficios',
    q: 'Entre los beneficios declarados de la matriz de habilidades NO se encuentra:',
    options: [
      'Detectar brechas',
      'Asignar mejor las tareas',
      'Reducir riesgos',
      'Eliminar definitivamente la necesidad de QA'
    ],
    answer: 3,
    explanation: 'Los beneficios citados son detectar brechas, asignar mejor tareas, reducir riesgos y mejorar Scrum. La eliminación de QA es contradictoria con la propia clasificación que considera QA como habilidad técnica clave.'
  },

  /* =====================================================
   *  PREGUNTA COMPARATIVA / TRANSVERSAL — 1 pregunta
   * ===================================================== */
  {
    id: 100, type: 'mc', source: 'Comparación entre trabajos (transversal)', topic: 'Coherencia entre documentos',
    q: 'Al cruzar los trabajos de Diogo Franco (Talento), Frederick Piza (Clima Laboral) y el Liderazgo Colaborativo, ¿qué cifra de retención del talento se mantiene como meta convergente para FlashDelivery?',
    options: [
      '10 % de deserción',
      '15 % de deserción',
      '20 % de deserción (reducción desde el 45 % inicial)',
      '35 % de deserción'
    ],
    answer: 2,
    explanation: 'Los tres documentos convergen en la meta SMART: reducir la deserción del 45 % al 20 % en 6 meses. Esta consistencia metodológica entre trabajos refuerza la robustez del objetivo de retención del proyecto FlashDelivery.'
  }
];

// Exponer el banco a window para acceso desde otros módulos
window.QUESTION_BANK = QUESTION_BANK;
