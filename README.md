# 📘 Examen Integral · Software Project Management · UPVALLE 2026

Sistema web universitario completo para rendir el **Examen Integral de la Unidad 4 (Personas)** del curso *Software Project Management* — Universidad Privada del Valle (UPVALLE), basado en el caso de estudio **FlashDelivery**.

> Docente: **Ing. Jorge Méndez Ayala** · Santa Cruz de la Sierra, Bolivia · Gestión 2026

---

## 🎯 Características

- ✅ **100 preguntas** de alta dificultad (opción múltiple, V/F, completar la frase)
- ✅ **70 minutos** con temporizador persistente y bloqueo automático
- ✅ Aleatorización de preguntas y opciones
- ✅ Navegación libre con mapa visual de progreso
- ✅ Corrección automática + retroalimentación académica detallada
- ✅ Justificación con cita textual del documento fuente para cada pregunta
- ✅ Exportación a **PDF** y **CSV**
- ✅ Envío automático de resultados por correo (EmailJS)
- ✅ Persistencia local (resiste recargas accidentales)
- ✅ Diseño responsive y profesional
- ✅ 100 % estático — listo para hosting gratuito

---

## 📂 Estructura del proyecto

```
exam-system/
├── index.html              ← Página principal
├── css/
│   └── styles.css          ← Hoja de estilos profesional
├── js/
│   ├── questions.js        ← Banco de 100 preguntas (con justificaciones)
│   ├── email-config.js     ← Configuración de EmailJS
│   └── exam.js             ← Motor del examen (lógica completa)
├── assets/                 ← (vacío) Para logos/imágenes opcionales
└── README.md               ← Este archivo
```

---

## 🚀 Publicación rápida — 4 opciones

### Opción 1 · GitHub Pages (recomendada)

1. Crea un repositorio público en GitHub, p. ej. `examen-spm-upvalle`.
2. Sube todos los archivos de la carpeta `exam-system/` a la raíz del repo:
   ```bash
   git init
   git add .
   git commit -m "Examen integral SPM UPVALLE 2026"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/examen-spm-upvalle.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**.
4. Source: `Deploy from a branch` · Branch: `main` · Folder: `/ (root)` → **Save**.
5. Espera 1-2 minutos. Tu enlace será:
   ```
   https://TU_USUARIO.github.io/examen-spm-upvalle/
   ```

### Opción 2 · Netlify (drag & drop, sin git)

1. Entra a [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra **toda la carpeta `exam-system/`** sobre la zona indicada.
3. Netlify generará una URL del tipo `https://random-name-12345.netlify.app/`.
4. (Opcional) En *Site settings → Change site name* puedes elegir un alias.

### Opción 3 · Vercel

1. Entra a [https://vercel.com/new](https://vercel.com/new).
2. Importa el repo de GitHub, o sube la carpeta directamente.
3. Vercel detectará el sitio estático automáticamente. Click en **Deploy**.
4. Recibirás una URL `https://tu-proyecto.vercel.app`.

### Opción 4 · Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
cd exam-system/
firebase init hosting   # Selecciona "Use an existing project" o crea uno
# Public directory: . (punto)
# Configure as SPA: No
# Set up automatic builds with GitHub: No
firebase deploy --only hosting
```

URL final: `https://TU_PROYECTO.web.app`

---

## ✉️ Configuración de envío automático por correo (EmailJS)

> El sistema funciona sin EmailJS, usando un fallback `mailto:` que abre el cliente de correo del estudiante. Si quieres envío automático, sigue estos pasos:

1. **Crea cuenta gratuita** en [https://www.emailjs.com/](https://www.emailjs.com/).
2. **Conecta un servicio de correo** (Gmail, Outlook, SendGrid, etc.) en *Email Services*.
3. **Crea una plantilla** en *Email Templates* con este contenido (HTML o texto):

   ```text
   Asunto: Resultado Examen — Software Project Management

   Estudiante: {{to_name}}
   Correo: {{to_email}}

   Fecha: {{date_time}}

   {{exam_title}}

   Nota: {{score}}   ·   Porcentaje: {{percentage}}
   Correctas: {{correct}}   ·   Incorrectas: {{wrong}}   ·   En blanco: {{blank}}
   Tiempo utilizado: {{time_used}}

   ============================================
   RETROALIMENTACIÓN
   ============================================
   {{feedback}}

   ============================================
   RESUMEN POR PREGUNTA
   ============================================
   {{summary}}
   ```

4. **Copia tus 3 claves** (Public Key, Service ID, Template ID).
5. Edita `js/email-config.js`:

   ```js
   const EMAIL_CONFIG = {
     enabled:    true,
     publicKey:  'rXJ_xxxxxxxxxxxxxx',
     serviceId:  'service_xxxxx',
     templateId: 'template_xxxxx',
     defaultSubject: 'Resultado del Examen — Software Project Management (UPVALLE)'
   };
   ```

6. **Sube los cambios** a tu hosting. Listo: cuando un estudiante finalice el examen, recibirá automáticamente el correo con sus resultados.

---

## 🧪 Probar localmente

Cualquier servidor estático sirve. Ejemplo con Python:

```bash
cd exam-system/
python3 -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

O simplemente abre `index.html` con doble clic (la mayoría de navegadores lo soportan, aunque algunas funciones avanzadas requieren http://).

---

## 🔐 Seguridad y validaciones implementadas

- Validación de campos obligatorios (nombre ≥ 5 caracteres, email RFC).
- Temporizador persistente con `localStorage` (sobrevive a recargas).
- Bloqueo automático al finalizar tiempo + envío del examen.
- Marca de "examen finalizado" para impedir reinicio accidental.
- Confirmación modal antes del envío manual.
- Aleatorización de preguntas y opciones para reducir copia.
- Advertencia `beforeunload` si el estudiante intenta cerrar la pestaña.

---

## 📚 Banco de preguntas

El examen se basa **exclusivamente en los 13 trabajos académicos** entregados por los estudiantes:

1. Burnout FlashDelivery — Dagner Molina
2. Seguridad Psicológica — Mauricio Martínez
3. Gestión del Talento en Equipos Ágiles — Diogo Franco
4. Mentoría para el Desarrollo del Talento — Sebastian Cupary
5. Coaching para Líderes de Proyecto
6. Técnicas de Motivación en Software (UNIVALLE)
7. Clima Laboral — Frederick Piza
8. Liderazgo Colaborativo
9. Entrevista Conductual y Técnica — Sofía Crespo
10. Gestión de la Diversidad — Ana Villafani
11. Comunicación — Omar Velasco
12. Liderazgo Empático — Renato Escobar
13. Matriz de Habilidades — Andrés Arteaga

Cada pregunta cita su documento fuente, e incluye **justificación académica con cita textual o paráfrasis directa** del texto original.

---

## 🎨 Personalización

- Cambia el tiempo del examen en `js/exam.js`:
  ```js
  const EXAM_DURATION_SECONDS = 70 * 60; // ← editar aquí
  ```
- Modifica los colores en `css/styles.css` (variables CSS al inicio del archivo, sección `:root`).
- Agrega o edita preguntas en `js/questions.js` (mantén la estructura del objeto).

---

## 📞 Soporte

Para reportar problemas con el sistema, contactar al docente:
**Ing. Jorge Méndez Ayala** · UPVALLE · Software Project Management

---

© 2026 — Universidad Privada del Valle · Santa Cruz de la Sierra, Bolivia
