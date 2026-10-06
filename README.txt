# Invitación a un café ☕

Página web estática para una invitación de cita.

## Archivos

- `index.html` — estructura de la página.
- `style.css` — diseño y animaciones.
- `script.js` — interacción.
- `assets/qr-placeholder.png` — QR temporal.

Al aceptar la invitación, la página abre WhatsApp con una confirmación preparada.
La persona debe pulsar "Enviar" en WhatsApp. Para cambiar el destinatario,
edita `numeroWhatsApp` en `script.js` e incluye el código de país sin el signo `+`.

## Antes de publicarla

Cuando tengas la URL definitiva de la página, genera un QR con esa URL y reemplaza:

`assets/qr-placeholder.png`

por el nuevo archivo.

## Publicación

Esta página no necesita servidor ni base de datos. Puede publicarse gratuitamente con GitHub Pages, Cloudflare Pages, Netlify, etc.

## Personalización rápida

En `index.html` puedes cambiar:

- Las 3 razones.
- El texto de la propuesta.
- La fecha.
- El lugar.
- El mensaje final.
