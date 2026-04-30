//Background music
let bg = new Audio("./The_Gilded_Observance.mp3");
bg.loop = true;

document.addEventListener(
  "click",
  () => {
    bg.play();
  },
  { once: true },
);

// FLOATING PARTICLES
for (let i = 0; i < 100; i++) {
  let p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  p.style.top = Math.random() * 100 + "vh";
  p.style.animationDuration = 3 + Math.random() * 5 + "s";
  document.body.appendChild(p);
}

// SURPRISE SPARKS
function showSurprise() {
  document.getElementById("card").classList.add("active");

  // CONFETTI
  for (let i = 0; i < 100; i++) {
    let c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 5000);
  }

  const link = document.createElement("a");
  link.href = "./Coming_Soon.png";
  link.setAttribute("download", "Maulik_Dabhi_Birthday_Wishing.jpg");

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Loader start
const sparkleContainer = document.querySelector(".sparkle-container");
const explosionContainer = document.querySelector(".explosion-container");

document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";

  sparkleContainer.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 800);
});

document.addEventListener("click", (e) => {
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("div");
    particle.className = "explosion";

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20;

    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    particle.style.left = e.pageX + "px";
    particle.style.top = e.pageY + "px";
    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    explosionContainer.appendChild(particle);

    setTimeout(() => particle.remove(), 800);
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  loader.style.transition = "opacity 0.8s ease";
  loader.style.opacity = "0";

  setTimeout(() => (loader.style.display = "none"), 800);
});
// Loader end

//Notification Start
function showToast() {
  const toast = document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(() => {
    createFireworks(window.innerWidth / 2, window.innerHeight / 2);
    toast.classList.remove("show");
  }, 2500);
}

/* 🎇 Fireworks Generator */
function createFireworks(x, y) {
  for (let i = 0; i < 40; i++) {
    let particle = document.createElement("div");
    particle.classList.add("firework");

    particle.style.left = x + "px";
    particle.style.top = y + "px";

    let angle = Math.random() * 2 * Math.PI;
    let distance = Math.random() * 200;

    particle.style.setProperty("--x", Math.cos(angle) * distance + "px");
    particle.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1200);
  }
}
