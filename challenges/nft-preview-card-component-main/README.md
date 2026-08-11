# NFT preview card component solution

Esta es mi solucion para el desafio: [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U).

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

## Vista previa

![Captura del proyecto NFT card](../../assets/screenshots/nft-card.png.png)

## Vista general

El objetivo fue construir una tarjeta NFT responsive.

La tarjeta contiene:

- Imagen principal del NFT.
- Overlay interactivo.
- Título.
- Descripción.
- Precio en Ethereum.
- Tiempo restante.
- Información del creador.
- Estados hover y focus.

## Enlaces

- Sitio publicado: [Ver proyecto en vivo](https://yovanidosh.github.io/FmSoLuTiOns/challenges/nft-preview-card-component-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first
- BEM
- Media Queries

## Lo que aprendí

En este proyecto aprendí a:

- Crear overlays utilizando `position: absolute`.
- Utilizar `position: relative` como referencia para elementos posicionados.
- Usar `inset: 0` para ocupar completamente un contenedor.
- Controlar la visibilidad mediante `opacity`.
- Crear transiciones suaves.
- Implementar estados `:hover`.
- Implementar estados `:focus-visible`.
- Crear imágenes cuadradas utilizando `aspect-ratio`.
- Utilizar `object-fit: cover`.
- Crear avatares circulares con `border-radius: 50%`.
- Diseñar elementos interactivos accesibles mediante teclado.
- Ocultar iconos decorativos para lectores de pantalla mediante `aria-hidden`.

## Código destacado

### Overlay

```css
.nft-card__overlay {
  position: absolute;
  inset: 0;

  display: grid;
  place-items: center;

  opacity: 0;
}

.nft-card__image-link:hover
.nft-card__overlay {
  opacity: 1;
}
```

Esta técnica permite colocar una capa interactiva exactamente encima de una imagen.

## Accesibilidad

El proyecto incluye:

- HTML semántico.
- Texto alternativo.
- Iconos decorativos con `aria-hidden`.
- Estados `:focus-visible`.
- Navegación mediante teclado.
- Soporte para `prefers-reduced-motion`.

## Responsive Design

El proyecto fue construido siguiendo una estrategia mobile-first.

La tarjeta mantiene un ancho máximo para evitar crecer excesivamente en pantallas grandes.

## Author

- Frontend Mentor: [JOHANX](https://www.frontendmentor.io/profile/YovaniDosh)