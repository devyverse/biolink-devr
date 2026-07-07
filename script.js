const links = [
  {
    title: "Portfolio",
    sub: "Mes projets dev & design",
    url: "https://devfolio.com",
    icon: "💻",
    cta: "Voir"
  },
  {
    title: "GitHub",
    sub: "Code & repos publics",
    url: "https://github.com/devyverse",
    icon: "🐙",
    cta: "Ouvrir"
  },
  {
    title: "LinkedIn",
    sub: "Profil pro & expériences",
    url: "https://linkedin.com/in/devyreale-dev",
    icon: "💼",
    cta: "Connecter"
  },
  {
    title: "Instagram",
    sub: "UX/UI ",
    url: "https://www.instagram.com/devreal.pro/",
    icon: "📷",
    cta: " Voir"
  },
  {
    title: "Contact",
    sub: "Mail pro",
    url: "mailto:devreal.pro@gmail.com",
    icon: "✉️",
    cta: "Écrire"
  }
];

const container = document.getElementById("links");

links.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "link-item";

  a.innerHTML = `
    <div class="link-left">
      <div class="link-icon">${link.icon}</div>
      <div class="link-label">
        <span class="link-title">${link.title}</span>
        <span class="link-sub">${link.sub}</span>
      </div>
    </div>
    <span class="link-cta">${link.cta}</span>
  `;

  container.appendChild(a);
});
