const projects = [
  {
    title: "QR Code Component",
    description:
      "Componente QR creado con HTML semántico, CSS y diseño responsive.",
    technologies: ["HTML", "CSS"],
    image: "assets/images/image-qr-code.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/qr-code-component-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/qr-code-component-main",
    completed: true
  },
  {
  title: "Product Preview Card",
  description:
    "Tarjeta de producto responsive con imágenes adaptativas y estados interactivos.",
  technologies: ["HTML", "CSS", "GIT"],
  image: "assets/images/image-product-mobile.jpg",
  liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/product-preview-card-component-main/",
  githubUrl:"https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/product-preview-card-component-main",
  completed: true
  },
  {
    title: "NFT Preview Card",
    description:
      "Tarjeta NFT preparada para integrarse cuando completemos el challenge.",
    technologies: ["HTML", "CSS"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    completed: false
  },
  {
    title: "Social Links Profile",
    description:
      "Espacio reservado para el challenge de perfil con enlaces sociales.",
    technologies: ["HTML", "CSS"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    completed: false
  },
  {
    title: "Blog Preview Card",
    description:
      "Tarjeta de vista previa de blog creada con HTML semático y CSS responsive",
    technologies: ["HTML", "CSS", "GIT"],
    image: "assets/images/image-blog-preview.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/blog-preview-card-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/blog-preview-card-main",
    completed: true
  },
  {
    title: "Recipe Page",
    description:
      "Espacio reservado para el challenge de una página de recetas.",
    technologies: ["HTML", "CSS"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    completed: false
  },
  {
    title: "Results Summary",
    description:
      "Espacio reservado para un componente de resultados y estadísticas.",
    technologies: ["HTML", "CSS"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    completed: false
  },
  {
    title: "Profile Card",
    description:
      "Espacio reservado para una tarjeta personal responsive.",
    technologies: ["HTML", "CSS"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    completed: false
  },
  {
    title: "Order Summary Component",
    description:
      "Resumen de pedido responsive con selección de plan, botones reutilizables y estados accesibles.",
    technologies: ["HTML", "CSS", "GIT"],
    image: "../assets/images/illustration-hero.svg",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/order-summary-component-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/order-summary-component-main",
    completed: true
  }
];

const projectsGrid = document.getElementById("projectsGrid");
const completedCount = document.getElementById("completedCount");

function createTechnologyLabel(technology) {
  return `<span class="technology">${technology}</span>`;
}

function createProjectImage(project) {
  if (project.image && project.completed) {
    return `
      <img
        src="${project.image}"
        alt="Vista previa del proyecto ${project.title}"
        onerror="this.remove(); this.parentElement.innerHTML =
          '<span class=\'project-card__placeholder\'>Screenshot</span>'"
      >
    `;
  }

  return `
    <span class="project-card__placeholder">
      ${project.completed ? "Screenshot" : "Próximamente"}
    </span>
  `;
}

function createProjectCard(project) {
  const cardClass = project.completed
    ? "project-card"
    : "project-card empty-project";

  const links = project.completed
    ? `
      <div class="project-card__links">
        <a
          class="project-link project-link--primary"
          href="${project.liveUrl}"
          target="_blanck"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>

        <a
          class="project-link project-link--secondary"
          href="${project.githubUrl}"
          target="_blanck"
          rel"nooper noreferrer"
        >
          GitHub
        </a>
      </div>
    `
    : "";

  return `
    <article class="${cardClass}">
      <div class="project-card__image">
        ${createProjectImage(project)}
      </div>

      <div class="project-card__content">
        <h3>${project.title}</h3>

        <p class="project-card__description">
          ${project.description}
        </p>

        <div class="project-card__technologies">
          ${project.technologies.map(createTechnologyLabel).join("")}
        </div>

        ${links}
      </div>
    </article>
  `;
}

function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(createProjectCard)
    .join("");

  const totalCompleted = projects.filter(
    project => project.completed
  ).length;

  completedCount.textContent = totalCompleted;
}

renderProjects();
