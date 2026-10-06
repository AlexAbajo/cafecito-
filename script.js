let currentScreen = 1;
let attempts = 0;
const numeroWhatsApp = "593983181591";

function nextScreen() {
  document.getElementById(`screen-${currentScreen}`).classList.remove("active");
  currentScreen++;
  document.getElementById(`screen-${currentScreen}`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveButton() {
  attempts++;

  const button = document.getElementById("maybeButton");
  const hint = document.getElementById("hint");

  const messages = [
    "¿Segura? :c",
    "Piénsalo otra vez..",
    "Ese botón está un poquito lejos. Ojito.",
    "Creo que el universo quiere que digas que sí. c:",
    "Bueno, ya te di demasiadas oportunidades :c Para otra sera."
  ];

  hint.textContent = messages[Math.min(attempts - 1, messages.length - 1)];

  if (attempts < 5) {
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 70 - 35;
    button.style.transform = `translate(${x}px, ${y}px)`;
  } else {
    button.style.opacity = "0.35";
    button.textContent = "Ok, ya entendí 🥀🥀🥀";
  }
}

function acceptDate() {
  document.getElementById(`screen-${currentScreen}`).classList.remove("active");
  currentScreen++;
  document.getElementById(`screen-${currentScreen}`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  createHearts();
}

function enviarConfirmacion() {
  const mensaje = "¡Dijo que sí al cafecito! ☕🌷 Fecha: cuando tú puedas. Lugar: Rio Intag.";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  const enlaceConfirmacion = document.getElementById("confirmationLink");
  enlaceConfirmacion.href = url;
  enlaceConfirmacion.hidden = false;

  window.open(url, "_blank", "noopener,noreferrer");
}

function createHearts() {
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      const emojis = ["❤️", "💖", "✨", "🌸", "💘", "🩷", "🎀", "💫"];
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = (15 + Math.random() * 25) + "px";
      heart.style.animationDuration = (2 + Math.random() * 2) + "s";
      document.getElementById("hearts").appendChild(heart);

      setTimeout(() => heart.remove(), 4500);
    }, i * 80);
  }
}
