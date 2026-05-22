/* ============================================================
 * CONFIGURACIÓN DE ENVÍO POR CORREO — EmailJS
 * ============================================================
 *
 * INSTRUCCIONES DE CONFIGURACIÓN:
 *
 * 1) Crea una cuenta gratuita en https://www.emailjs.com/
 * 2) En el panel de EmailJS:
 *      a) Conecta un servicio de correo (Gmail, Outlook, SendGrid, etc.)
 *      b) Crea una nueva plantilla (template) con las variables:
 *           {{to_name}}        — Nombre del estudiante
 *           {{to_email}}       — Correo del estudiante
 *           {{exam_title}}     — Título del examen
 *           {{score}}          — Nota sobre 100
 *           {{percentage}}     — Porcentaje obtenido
 *           {{correct}}        — Cantidad de respuestas correctas
 *           {{wrong}}          — Cantidad de respuestas incorrectas
 *           {{blank}}          — Cantidad de respuestas en blanco
 *           {{time_used}}      — Tiempo utilizado
 *           {{date_time}}      — Fecha y hora del examen
 *           {{feedback}}       — Retroalimentación breve
 *           {{summary}}        — Resumen del examen
 *
 * 3) Copia tu Public Key, Service ID y Template ID y pégalos abajo.
 *
 * 4) Asegúrate de que el script de EmailJS está cargado en index.html:
 *    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
 *
 * Si EMAIL_CONFIG.enabled = false, el sistema generará el correo
 * mediante un mailto: como respaldo.
 *
 * ============================================================ */

const EMAIL_CONFIG = {
  enabled: false, // ←  Cambia a true cuando hayas configurado las claves abajo

  publicKey:  'TU_PUBLIC_KEY',     // p. ej. "rXJ_xxx...."
  serviceId:  'TU_SERVICE_ID',     // p. ej. "service_xxx"
  templateId: 'TU_TEMPLATE_ID',    // p. ej. "template_xxx"

  // Asunto por defecto (puede sobreescribirse con la variable {{subject}} en la plantilla)
  defaultSubject: 'Resultado del Examen — Software Project Management (UPVALLE)'
};

// Inicialización segura cuando esté disponible la librería
window.addEventListener('DOMContentLoaded', () => {
  if (EMAIL_CONFIG.enabled && window.emailjs && EMAIL_CONFIG.publicKey && EMAIL_CONFIG.publicKey !== 'TU_PUBLIC_KEY') {
    try {
      emailjs.init({ publicKey: EMAIL_CONFIG.publicKey });
      console.info('[EmailJS] Inicializado correctamente.');
    } catch (e) {
      console.warn('[EmailJS] No se pudo inicializar:', e);
    }
  }
});

window.EMAIL_CONFIG = EMAIL_CONFIG;
