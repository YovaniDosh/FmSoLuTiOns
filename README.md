<h1 style="text-align:center">

 Complete "FrontendMentor" challenges (HOUSE)

</h1>

Página principal para organizar, presentar y publicar mi colección de desafíos completados de Frontend Mentor.


## Vista general

La **House** reúne todos los retos en una sola página y muestra cada solución mediante una tarjeta con:

- Captura del proyecto.
- Tecnologías utilizadas.
- Demo en vivo.
- Enlace al repositorio.

El diseño está centrado, sigue un enfoque mobile-first y usa un grid responsive de una, dos o tres columnas según el ancho disponible.

## Estado actual


 Cada reto busca introducir o reforzar al menos un concepto nuevo.


| # | Challenge | Estado | Tecnologías |
|---:|---|---|---|
| 01 | QR Code Component | Completado | HTML, CSS |
| 02 | Blog Preview Card | Completado | HTML, CSS |
| 03 | Product Preview Card | Completado | HTML, CSS |
| 04 | Order Summary Component | Completado | HTML, CSS |
| 05 | Results Summary Component | Completado | HTML , CSS, GIT, JS |
| 06 | Recipe Page | Completado | HTML, CSS, GIT |
| 07 | NFT Preview Card | Completado | HTML, CSS,GIT |
| 08 | Fylo Data Storage Component | Completado | Sass, npm, Git |
| 09 | Booking Confirmation Dashboard | Completado | HTML, Sass, JS, npm |
| 10 | Social Links Profile | Completado | HTML, Less, npm |
| 11 | Clipboard Landing Page | Completado | HTML,Git, Less, npm |
| 12 | Bento Grid |Completado| HTML · Sass · CSS Grid · npm |
| 13 | Single Price Grid Component | Completado | HTML, CSS, CSS Grid |
| 14 | Four Card Feature Section | Completado | HTML, CSS, Grid, Flexbox |
| 15 | Profile Card Component | Completado | HTML, CSS, CSS Grid |
| 16 | Testimonials Grid Section | Completado | HTML, CSS, Grid, Flexbox |
| 17 | 3 Column Preview Card Component | Completado | HTML, CSS, Grid, Flexbox |
| 18 | Huddle Landing Page | Completado | HTML, CSS, Grid, Flexbox |
| 19 | Chat App Css Landing Page | Completado | Html, Git, Css, Grid |


---

## Progreso

```text
18 / 100
████░░░░░░░░░░░░░░░░ 18%

```

### 👾 Arcade

El progreso general está representado mediante una barra inspirada en **Pac-Man**.

Cada punto representa uno de los 100 desafíos:

```text
1 punto = 1 challenge
100 puntos = 100 challenges
```

A medida que completo nuevos proyectos:

- Pac-Man avanza automáticamente por la barra.
- Los puntos recorridos forman un rastro amarillo.
- Los puntos restantes representan desafíos pendientes.
- El porcentaje se calcula a partir de los proyectos completados.
- El mensaje de progreso cambia dinámicamente.

---

## Tecnologías

- HTML semántico
- CSS
- Flexbox
- CSS Grid
- Responsive Design
- Mobile-first
- Metodología BEM
- Accesibilidad
- JavaScript
- Sass
- Less
- npm
- Git
- GitHub
- GitHub Pages


## Evolución técnica

La colección está diseñada para aumentar progresivamente la dificultad.

### Fundamentos

Los primeros desafíos se enfocaron principalmente en:

- estructura HTML;
- box model;
- Flexbox;
- responsive design;
- mobile-first;
- metodología BEM;
- estados hover y focus;
- accesibilidad.

### Preprocesadores

A partir de retos posteriores comenzamos a trabajar con preprocesadores CSS.

Se han utilizado:

```text
Sass
Less
```

Esto permite aprender diferentes formas de organizar y mantener hojas de estilo más grandes.

### npm

También comenzamos a utilizar npm para administrar las herramientas de desarrollo del proyecto.

Ejemplo:

```bash
npm install
npm run sass
```

o:

```bash
npm run less
```

dependiendo del reto.

Los paquetes instalados localmente permanecen fuera del repositorio mediante:

```gitignore
node_modules/
```

mientras que `package.json` y `package-lock.json` permiten reproducir el entorno de desarrollo.

## Arquitectura

```
### `index.html`

Contiene la estructura principal:

- Hero.
- Botón para navegar hasta los proyectos.
- Contador de desafíos.
- Contenedor del grid.
- Footer.

### `css/style.css`

Contiene:

- Variables CSS.
- Fuente local.
- Reset.
- Diseño mobile-first.
- Hero.
- Tarjetas.
- Grid responsive.
- Estados hover y focus.

### `js/app.js`

Contiene la información de cada reto:

```js
{
  title: "QR Code Component",
  description: "Componente QR responsive.",
  technologies: ["HTML", "CSS"],
  image: "./assets/images/image-qr-code.png",
  liveUrl: "./challenges/01-qr-code-component/",
  githubUrl: "URL_DEL_REPOSITORIO",
  completed: true
}
```
## Accesibilidad

Los retos incorporan progresivamente buenas prácticas como:

- HTML semántico
- textos alternativos
- `aria-label`
- `aria-hidden`
- `aria-live`
- navegación mediante teclado
- estados `:focus-visible`
- elementos `.visually-hidden`
- soporte para `prefers-reduced-motion`

La accesibilidad forma parte del desarrollo

## Diseño responsive

Móvil:

```css
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
}
```

Tablet:

```css
@media (min-width: 40rem) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

Escritorio:

```css
@media (min-width: 64rem) {
  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```
## La House

La interfaz evoluciona hacia un **dashboard personal de progreso** para organizar y visualizar el camino hacia los 100 desafíos.

Actualmente incorpora:

- Catálogo de challenges.
- Renderizado dinámico de proyectos.
- Contador de proyectos completados.
- Porcentaje general de progreso.
- Progreso Arcade inspirado en Pac-Man.
- 100 puntos dinámicos.
- Hitos visuales durante el recorrido.
- Recompensa final al completar la colección.
- Mensajes dinámicos de progreso.
- Filtros por dificultad.
- Diseño responsive.
- Diseño mobile-first.
- README individual para cada challenge.
- CHANGELOG general de la House.
- Capturas de los proyectos.
- Publicación mediante GitHub Pages.

La idea es que la propia House también evolucione mientras aumenta mi experiencia frontend.

## Autor

Proyecto creado por: [JohanXt ](https://www.frontendmentor.io/profile/YovaniDosh)como parte de mi aprendizaje y portafolio profesional de desarrollo frontend.
