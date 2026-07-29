# Frontend Mentor Completed Challenges(HOUSE)

Página principal para organizar, presentar y publicar mi colección de desafíos completados de Frontend Mentor.


## Vista general

La **House** reúne todos los retos en una sola página y muestra cada solución mediante una tarjeta con:

- Captura del proyecto.
- Tecnologías utilizadas.
- Demo en vivo.
- Enlace al repositorio.

El diseño está centrado, sigue un enfoque mobile-first y usa un grid responsive de una, dos o tres columnas según el ancho disponible.

## Estado actual

| # | Challenge | Estado | Tecnologías |
|---:|---|---|---|
| 01 | QR Code Component | Completado | HTML, CSS |
| 02 | Blog Preview Card | Completado | HTML, CSS |
| 03 | Product Preview Card | Completado | HTML, CSS |
| 04 | Order Summary Component | Completado | HTML, CSS |

## Tecnologías

- HTML5
- CSS3
- JavaScript ES Modules
- CSS Grid
- Flexbox
- Responsive Design
- Git y GitHub
- GitHub Pages

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

## Autor

Proyecto creado por: [JohanXt ](https://www.frontendmentor.io/profile/YovaniDosh)como parte de mi aprendizaje y portafolio profesional de desarrollo frontend.