# Fylo data storage component solution

Esta es mi solución para el desafío: [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n).

## Vista previa



## Vista general

El objetivo fue construir un componente de almacenamiento responsive inspirado en Fylo.

El componente contiene:

- Panel principal con logotipo.
- Botones de documentos, carpetas y subida.
- Información sobre almacenamiento utilizado.
- Barra de progreso.
- Indicador visual del espacio utilizado.
- Cantidad de almacenamiento restante.
- Layout adaptado para móvil y escritorio.
- Estados hover y focus.

## Enlaces

- Sitio publicado: [Ver proyecto en vivo](https://yovanidosh.github.io/FmSoLuTiOns/challenges/fylo-data-storage-component/)

## Lo que aprendí

En este proyecto aprendí a:

- Inicializar un proyecto utilizando `npm`.
- Entender la función de `package.json`.
- Entender la función de `package-lock.json`.
- Instalar dependencias mediante npm.
- Instalar Sass como dependencia de desarrollo.
- Compilar archivos `.scss` a `.css`.
- Automatizar la compilación con `sass --watch`.
- Crear variables en Sass utilizando `$`.
- Separar estilos mediante partials.
- Importar módulos Sass utilizando `@use`.
- Utilizar nesting para organizar selectores.
- Utilizar `&` para hacer referencia al selector padre.
- Crear una barra de progreso accesible.
- Utilizar `role="progressbar"` y atributos `aria-*`.
- Crear gradientes CSS.
- Crear triángulos utilizando bordes.
- Utilizar pseudo-elementos con `::after`.
- Adaptar la posición de elementos entre móvil y escritorio.
- Comprender qué son las utility classes de Bootstrap.
- Evaluar cuándo una dependencia realmente aporta valor al proyecto.

## Código destacado

### Nesting con Sass

```scss
.storage {
  &__button {
    background: $color-very-dark-blue;

    &:hover {
      transform: translateY(-0.2rem);
    }

    &:focus-visible {
      outline: 0.15rem solid $color-pale-blue;
    }
  }
}
```

Sass transforma esta estructura en selectores CSS convencionales.

### Barra de progreso

```scss
&__progress-value {
  width: 81.5%;
  height: 100%;

  background:
    linear-gradient(
      to right,
      $gradient-start,
      $gradient-end
    );
}
```

El `81.5%` representa visualmente los `815 GB` utilizados de un máximo de `1000 GB`.

### CSS Triangle

```scss
&::after {
  content: "";

  position: absolute;
  right: 0;
  bottom: -1.25rem;

  border-top: 1.25rem solid white;
  border-left: 1.25rem solid transparent;
}
```

Esta técnica permite crear el pequeño triángulo del indicador sin utilizar una imagen.

## Accesibilidad

El proyecto incluye:

- HTML semántico.
- Textos alternativos.
- Iconos decorativos con `aria-hidden`.
- Botones con nombres accesibles.
- Estados `:focus-visible`.
- Barra de progreso con `role="progressbar"`.
- `aria-valuemin`.
- `aria-valuemax`.
- `aria-valuenow`.
- Mobile-first.
- Responsive Design.
- BEM.
- Sass.
- CSS Custom Properties.
- Flexbox.
- CSS Grid.
- Media Queries.
- npm.

## Responsive Design

El proyecto fue construido siguiendo una estrategia mobile-first.

En dispositivos móviles los paneles aparecen verticalmente.

En pantallas mayores el layout cambia a dos columnas y el indicador de almacenamiento restante cambia de posición para reproducir el diseño desktop.

## Author

- Frontend Mentor: [JOHANX](https://www.frontendmentor.io/profile/YovaniDosh)