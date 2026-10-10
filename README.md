<div align="center">

# Frontend Projects House

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=900&color=7C3AED&center=true&vCenter=true&width=650&lines=100+individual+frontend+projects;Learn+%C2%B7+Build+%C2%B7+Document+%C2%B7+Publish;A+new+concept+in+every+project" alt="Animated project introduction">

An open collection of **individual frontend projects** created to practice, document, and demonstrate my growth as a developer.

It includes Frontend Mentor challenges, independent exercises, and future original projects.

[![Completed Projects](https://img.shields.io/badge/Completed_Projects-1%2F100-7c3aed?style=for-the-badge)](#completed-projects)
[![Progress](https://img.shields.io/badge/Progress-1%25-facc15?style=for-the-badge&labelColor=111827)](#arcade-progress)
[![GitHub Pages](https://img.shields.io/badge/View_House-GitHub_Pages-22c55e?style=for-the-badge&logo=github)](https://yovanidosh.github.io/FmSoLuTiOns/)

</div>

---
<div align="center">

## Project Vision

</div>

**Frontend Projects House** serves as a personal laboratory and a public project catalog. Each solution aims to introduce, practice, or reinforce at least one new concept.

Each card features:

- Project screenshot.
- Brief description.
- Technologies used.
- Live demo.
- Source code link.

The collection is not limited to a single platform: it brings together **Frontend Mentor** challenges, personal exercises, and frontend projects inspired by other references.


<div align="center">

[VIEW PROJECT 😊](https://yovanidosh.github.io/FmSoLuTiOns/)

</div>

<div align="center">

## Completed Projects



| # | Project | Status | Main Technologies |
|---:|---|:---:|---|
| 01 | QR Code Component | ✅ | HTML, CSS |

> The table is updated whenever a project is completed, documented, and published.

## Arcade Progress

### 👾 1 of 100 Projects Completed

`░░░░░░░░░░░░░░░░░░░░` **1%**


</div>

Overall progress is represented by a **Pac-Man-inspired** progress bar:

- Each dot represents one project.
- Pac-Man advances automatically with each completed project.
- Collected dots leave a yellow trail.
- Ghosts represent milestones along the journey.
- The percentage and messages are calculated dynamically.
- The final reward is unlocked when all 100 projects are completed.


<div align="center">

## Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111827)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![Less](https://img.shields.io/badge/Less-1D365D?style=flat-square&logo=less&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

</div>

The following concepts are also practiced:

- Semantic HTML and accessibility.
- CSS Grid and Flexbox.
- Responsive Design and Mobile First.
- BEM methodology.
- Interactive states and animations.
- Sass and Less preprocessors.
- JavaScript and dynamic rendering.
- GitHub Pages and technical documentation.

<div align="center">

## Technical Growth

</div>

### Fundamentals

The first projects reinforce HTML structure, the box model, Flexbox, responsive design, Mobile First, BEM, and `:hover` and `:focus-visible` states.

### Layouts and Components

The following challenges introduce CSS Grid, asymmetrical compositions, reusable cards, responsive images, and multi-column layouts.

### Preprocessors and npm

Sass and Less help separate responsibilities, reuse variables, and maintain larger stylesheets. Shared tools are managed from the monorepo root using npm.

```bash
npm install
npm run sass
npm run less
```

`node_modules/` remains outside the repository, while `package.json` and `package-lock.json` allow the environment to be reproduced.

<div align="center">

## Project Architecture

</div>

```text
FmSoLuTiOns/
├── assets/
│   ├── fonts/
│   ├── images/
│   └── screenshots/
├── challenges/
│   ├── loopstudios-landing-page-main/
│   │   ├── css/styles.css
│   │   ├── js/scrip.js
│   │   ├── scss/styles.scss
│   │   ├── index.html
│   │   └── README.md
│   └── ...
├── css/
│   ├── arcade-progress.css
│   └── style.css
├── docs/
│   └── CHANGELOG.md
├── js/
│   ├── app.js
│   └── arcade-progress.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```
<div align="center">

### `js/app.js`

</div>

Stores project information and dynamically generates project cards:

```js
{
  title: "QR Code Component",
  description: "Responsive QR code component.",
  technologies: ["HTML", "CSS"],
  image: "./assets/images/image-qr-code.png",
  liveUrl: "./challenges/qr-code-component-main/",
  githubUrl: "https://github.com/YovaniDosh/FmSoLuTiOns",
  completed: true
}
```
<div align="center">

## Accessibility

</div>

Accessibility is part of the development process from the beginning:

- Semantic HTML.
- Useful alternative text.
- Keyboard navigation.
- `:focus-visible` states.
- `aria-label`, `aria-hidden`, and `aria-live` attributes.
- Visually hidden elements when necessary.
- Support for `prefers-reduced-motion`.

<div align="center">

## Responsive Design

</div>

The catalog follows a Mobile First approach:

- **Mobile:** one column.
- **Tablet:** two columns.
- **Desktop:** three columns.

<div align="center">

## House Evolution

</div>

House is also a growing project. It currently includes:

- Dynamic project catalog.
- Randomized card ordering on each page reload.
- Automatic project counter and percentage.
- Pac-Man-inspired Arcade progress.
- One hundred dynamic dots and visual milestones.
- Progress messages and a final reward.
- Mobile First and responsive design.
- Individual README files for each project.
- General changelog.
- Screenshots and demos published with GitHub Pages.



<div align="center">

## Author

Created by **Johan** as part of my learning journey and professional frontend development portfolio.

[![GitHub](https://img.shields.io/badge/GitHub-YovaniDosh-181717?style=for-the-badge&logo=github)](https://github.com/YovaniDosh)
[![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-YovaniDosh-3f54a3?style=for-the-badge&logo=frontendmentor)](https://www.frontendmentor.io/profile/YovaniDosh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-JohanXT-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/johanxt/)

</div>
