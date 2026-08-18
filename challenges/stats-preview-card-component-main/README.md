<h1 style="text-align:center">

Esta es mi solución para el desafío: [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62)

</h1>

## Vista previa

![Vista previa del proyecto](../../assets/screenshots/stats.png)

## Vista general

El objetivo fue construir una tarjeta responsive de estadísticas con una imagen destacada y un overlay de color.

La tarjeta contiene:

- Título principal.
- Texto descriptivo.
- Tres estadísticas.
- Imagen con overlay violeta.
- Layout mobile-first.
- Distribución en dos columnas para escritorio.

## Enlaces

- Sitio publicado: [Ver proyecto en vivo](https://yovanidosh.github.io/FmSoLuTiOns/challenges/stats-preview-card-component-main/)

## Lo que aprendí

En este proyecto aprendí a:

- Crear overlays utilizando múltiples backgrounds.
- Combinar `linear-gradient()` con una imagen.
- Utilizar CSS Grid para cambiar la distribución.
- Reordenar visualmente contenido sin modificar el HTML.
- Utilizar `minmax()` en columnas.
- Crear estadísticas en Grid.
- Aplicar `clamp()` a la tipografía.
- Trabajar con imágenes responsive.
- Mantener una estrategia mobile-first.
- Utilizar CSS Custom Properties.

## Código destacado

```css
.stats-card__image
{
  background:
    linear-gradient(
      hsla(277, 64%, 45%, 0.65),
      hsla(277, 64%, 45%, 0.65)
    ),
    url("../../../assets/images/image-header-desktop.jpg")
    center / cover
    no-repeat;
}
```

Esta técnica permite aplicar un color sobre la fotografía sin añadir elementos extra al HTML.

## Accesibilidad

El proyecto incluye:

- HTML semántico.
- Jerarquía de encabezados.
- Imagen decorativa separada del contenido.
- Texto con contraste adecuado.
- Mobile-first.
- Media Queries.

## Responsive Design

En móvil la imagen aparece encima del contenido.

En escritorio CSS Grid transforma la tarjeta en dos columnas, colocando el contenido a la izquierda y la imagen a la derecha.

## Tecnologías utilizadas

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- Media Queries
- Mobile-first

## Author

- Frontend Mentor: [JOHANX](https://www.frontendmentor.io/profile/YovaniDosh)