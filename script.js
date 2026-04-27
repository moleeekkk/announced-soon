// FLOATING PARTICLES
for (let i = 0; i < 80; i++) {
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

    const link = document.createElement("a");
    link.href = "./Coming_Soon.png";
    link.setAttribute("download", "Maulik_Dabhi_Birthday_Wishing.jpg");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
