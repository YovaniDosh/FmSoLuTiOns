const projects = [
  {
    title: "QR Code Component",
    description: "A QR code component built with semantic HTML, CSS, and responsive design.",    technologies: ["HTML", "CSS"],
    image: "assets/images/image-qr-code.png",
    liveUrl: "https://yovanidosh.github.io/FmSoLuTiOns/challenges/qr-code-component-main/",
    githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/qr-code-component-main",
    completed: true,
  }
];

const projectsGrid = document.getElementById("projectsGrid");
const completedCountElement = document.getElementById("completedCount");

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
  completedCountElement.textContent = totalCompleted;
}

projectsGrid.addEventListener("error", handlePreviewError, true);
renderProjects();
