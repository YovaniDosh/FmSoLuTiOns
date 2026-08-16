const TOTAL_PROJECTS = 100;
const MILESTONES = [25, 50, 75, 90];

const completedCount =
  document.getElementById("completedCount");

const projectsProgress =
  document.getElementById("projectsProgress");

const progressPercentage =
  document.getElementById("progressPercentage");

const progressPellets =
  document.getElementById("progressPellets");

const progressMessage =
  document.getElementById("progressMessage");

const progressReward =
  document.getElementById("progressReward");

const milestoneElements =
  document.querySelectorAll("[data-milestone]");

function createPellets() {
  const fragment = document.createDocumentFragment();

  for (
    let index = 1;
    index <= TOTAL_PROJECTS;
    index += 1
  ) {
    const pellet = document.createElement("span");

    pellet.className = "arcade-progress__pellet";
    pellet.dataset.project = index;

    fragment.append(pellet);
  }

  progressPellets.replaceChildren(fragment);
}

function getNextMilestone(progress) {
  return (
    MILESTONES.find(
      (milestone) => progress < milestone,
    ) ?? TOTAL_PROJECTS
  );
}

function getProgressMessage(progress) {
  if (progress === 0) {
    return "La partida acaba de comenzar.";
  }

  if (progress === TOTAL_PROJECTS) {
    return "¡Nivel completado! Desbloqueaste la fruta final.";
  }

  const nextMilestone =
    getNextMilestone(progress);

  const objective =
    nextMilestone === TOTAL_PROJECTS
      ? "la fruta final"
      : `el fantasma del ${nextMilestone}%`;

  return `${progress} proyectos devorados. El próximo objetivo es ${objective}.`;
}

function updateArcadeProgress(completedProjects) {
  const progress = Math.min(
    Math.max(completedProjects, 0),
    TOTAL_PROJECTS,
  );

  projectsProgress.style.setProperty(
    "--progress",
    `${progress}%`,
  );

  projectsProgress.setAttribute(
    "aria-valuenow",
    progress,
  );

  progressPercentage.textContent =
    `${progress}%`;

  progressMessage.textContent =
    getProgressMessage(progress);

  progressPellets
    .querySelectorAll(".arcade-progress__pellet")
    .forEach((pellet) => {
      const projectNumber =
        Number(pellet.dataset.project);

      pellet.classList.toggle(
        "is-eaten",
        projectNumber <= progress,
      );
    });

  milestoneElements.forEach((milestone) => {
    const requiredProgress =
      Number(milestone.dataset.milestone);

    milestone.classList.toggle(
      "is-unlocked",
      progress >= requiredProgress,
    );
  });

  const isComplete =
    progress === TOTAL_PROJECTS;

  progressReward.classList.toggle(
    "is-unlocked",
    isComplete,
  );

  projectsProgress.classList.toggle(
    "is-complete",
    isComplete,
  );
}

function readCompletedProjects() {
  return (
    Number.parseInt(
      completedCount.textContent,
      10,
    ) || 0
  );
}

createPellets();
updateArcadeProgress(
  readCompletedProjects(),
);

const counterObserver =
  new MutationObserver(() => {
    updateArcadeProgress(
      readCompletedProjects(),
    );
  });

counterObserver.observe(completedCount, {
  childList: true,
  characterData: true,
  subtree: true,
});