const projects = [
  {
    title: "QR Code Component",
    description: "Componente QR creado con HTML semántico, CSS y diseño responsive.",
    technologies: ["HTML", "CSS"],
    image: "assets/images/image-qr-code.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/qr-code-component-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/qr-code-component-main",
    completed: true,
  },
  {
    title: "Product Preview Card",
    description: "Tarjeta de producto responsive con imágenes adaptativas y estados interactivos.",
    technologies: ["HTML", "CSS", "Git"],
    image: "assets/images/image-product-mobile.jpg",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/product-preview-card-component-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/product-preview-card-component-main",
    completed: true,
  },
  {
    title: "NFT Preview Card",
    description: "Tarjeta NFT responsive con overlay interactivo, transiciones y estados accesibles.",
    technologies: ["HTML", "CSS", "Git"],
    image: "assets/images/image-equilibrium.jpg",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/nft-preview-card-component-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/nft-preview-card-component-main",
    completed: true,
  },
  {
    title: "Social Links Profile",
    description: "Perfil social responsive construido con HTML y Less, con estados interactivos accesibles.",
    technologies: ["HTML", "Less", "npm"],
    image: "assets/screenshots/jessicaRandal.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/social-links-profile-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/social-links-profile-main",
    completed: true,
  },
  {
    title: "Blog Preview Card",
    description: "Tarjeta de vista previa de blog creada con HTML semántico y CSS responsive.",
    technologies: ["HTML", "CSS", "Git"],
    image: "assets/images/image-blog-preview.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/blog-preview-card-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/blog-preview-card-main",
    completed: true,
  },
  {
    title: "Recipe Page",
    description: "Página de receta responsive con estructura semántica, listas personalizadas y tabla nutricional.",
    technologies: ["HTML", "CSS", "Git"],
    image: "assets/images/image-omelette.jpeg",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/recipe-page-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/recipe-page-main",
    completed: true,
  },
  {
    title: "Results Summary Component",
    description: "Componente de resultados responsive con datos renderizados dinámicamente desde JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    image: "assets/images/image-result-mobile.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/results-summary-component-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/results-summary-component-main",
    completed: true,
  },
  {
    title: "Booking Confirmation Dashboard",
    description: "Dashboard responsive de reservas con Sass, JavaScript, menú móvil y efecto Hover to fan.",
    technologies: ["HTML", "Sass", "JavaScript", "npm", "Git"],
    image: "assets/screenshots/hotel-card.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/hotel-booking-confirmation-page-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/hotel-booking-confirmation-page-main",
    completed: true,
  },
  {
    title: "Order Summary Component",
    description: "Resumen de pedido responsive con selección de plan, botones reutilizables y estados accesibles.",
    technologies: ["HTML", "CSS", "Git"],
    image: "assets/images/illustration-hero.svg",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/order-summary-component-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/order-summary-component-main",
    completed: true,
  },
  {
    title: "Fylo Data Storage Component",
    description: "Componente de almacenamiento responsive construido con HTML, Sass y un workflow basado en npm.",
    technologies: ["HTML", "Sass", "npm", "Git"],
    image: "assets/images/fylo-cap.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/fylo-data-storage-component-master/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/fylo-data-storage-component-master",
    completed: true,
  },
  {
    title: "Profile Card Component",
    description:"Tarjeta de perfil responsive con avatar superpuesto y fondo decorativo.",
    technologies: ["HTML", "Git", "CSS Grid"],
    image: "assets/screenshots/profilecard.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/15-profile-card-component/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/15-profile-card-component",
    completed: true,
  },
  {
    title: "Clipboard Landing Page",
    description: "Landing page responsive construida con HTML y Less, usando mixins, Grid y layouts multisección.",
    technologies: ["HTML", "Less", "npm", "Git"],
    image: "assets/images/image-computer.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/clipboard-landing-page-master/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/clipboard-landing-page-master",
    completed: true,
  },
  {
    title: "Four Card Feature Section",
    description:"Sección responsive de cuatro tarjetas con CSS Grid y composición asimétrica.",
    technologies: ["HTML", "CSS", "CSS Grid", "Flexbox"],
    image: "./assets/screenshots/foursection.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/four-card-feature-section-master/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/four-card-feature-section-master",
    completed: true
  },
  {
    title: "Bento Grid",
    description: "Bento layout responsive construido con Sass y CSS Grid avanzado.",
    technologies: ["HTML", "Sass","CSS Grid", "npm", "Git"],
    image: "assets/screenshots/bentoGrid.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/bento-grid-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/bento-grid-main",
    completed: true,
  },
  {
    title: "Single Price Grid Component",
    description:"Componente de precios responsive construido con HTML y CSS Grid.",
    technologies: ["HTML", "CSS", "CSS Grid", "Git"],
    image: "assets/screenshots/singlegrid.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/single-price-grid-component-master/",
    githubUrl:"https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/single-price-grid-component-master",
    completed: true
  }
];

const projectsGrid = document.getElementById("projectsGrid");
const completedCount = document.getElementById("completedCount");

function createTechnologyLabel(technology) {
  return `<span class="technology">${technology}</span>`;
}

function createProjectImage(project) {
  if (!project.image || !project.completed) {
    return `<span class="project-card__placeholder">${project.completed ? "Screenshot" : "Próximamente"}</span>`;
  }

  return `
    <img
      class="project-card__preview"
      src="${project.image}"
      alt="Vista previa del proyecto ${project.title}"
      loading="lazy"
      decoding="async"
    >
  `;
}

function createProjectCard(project) {
  const cardClass = project.completed ? "project-card" : "project-card empty-project";
  const links = project.completed
    ? `
      <div class="project-card__links">
        <a class="project-link project-link--primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a class="project-link project-link--secondary" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    `
    : "";

  return `
    <article class="${cardClass}">
      <div class="project-card__image">${createProjectImage(project)}</div>
      <div class="project-card__content">
        <h3>${project.title}</h3>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__technologies">${project.technologies.map(createTechnologyLabel).join("")}</div>
        ${links}
      </div>
    </article>
  `;
}

function handlePreviewError(event) {
  if (!event.target.matches(".project-card__preview")) {
    return;
  }

  event.target.parentElement.innerHTML = '<span class="project-card__placeholder">Screenshot</span>';
}

function shuffleProjects(projectList) {
  const shuffledProjects = [...projectList];

  for (
    let currentIndex = shuffledProjects.length - 1;
    currentIndex > 0;
    currentIndex -= 1
  ) {
    const randomIndex = Math.floor(
      Math.random() * (currentIndex + 1)
    );

    [
      shuffledProjects[currentIndex],
      shuffledProjects[randomIndex],
    ] = [
      shuffledProjects[randomIndex],
      shuffledProjects[currentIndex],
    ];
  }

  return shuffledProjects;
}

function renderProjects() 
{
  const randomizedProjects = shuffleProjects(projects);
  const totalCompleted = projects.filter((project) => project.completed).length;
  projectsGrid.innerHTML = randomizedProjects.map(createProjectCard).join("");
  completedCount.textContent = totalCompleted;
}

projectsGrid.addEventListener("error", handlePreviewError, true);
renderProjects();