const projects = [
  {
    title: "QR Code Component",
    description:
      "Componente QR creado con HTML semántico, CSS y diseño responsive.",
    technologies: ["HTML", "CSS"],
    image: "/assets/images/image-qr-code.png",
    liveUrl: "./challenges/01-qr-code-component/",
    githubUrl: "#",
    completed: true
  },
  {
    title: "Product Preview Card",
    description:
      "Tarjeta de producto responsive preparada para el segundo challenge.",
    technologies: ["HTML", "CSS"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    completed: false
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
      "Espacio reservado para una tarjeta de vista previa de blog.",
    technologies: ["HTML", "CSS"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    completed: false
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
    title: "Order Summary",
    description:
      "Espacio reservado para el componente de resumen de pedido.",
    technologies: ["HTML", "CSS"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
    completed: false
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
        >
          Live Demo
        </a>

        <a
          class="project-link project-link--secondary"
          href="${project.githubUrl}"
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
