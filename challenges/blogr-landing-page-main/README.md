<h1 style="text-align:center">

Esta es mi solución para el desafío:
[Blogr Landing Page](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP).

</h1>

## Vista previa

![Captura del proyecto Blogr Landing Page](../../assets/screenshots/blogr.png)

## Vista general

El objetivo fue construir una landing page editorial completamente responsive con navegación desplegable accesible.

La interfaz contiene:

- Navegación principal con tres menús desplegables.
- Menú móvil controlado mediante JavaScript.
- Hero con llamadas a la acción.
- Sección de características editoriales.
- Bloque de infraestructura con ilustración superpuesta.
- Sección de herramientas con imágenes adaptativas.
- Footer responsive con varios grupos de enlaces.
- Layout mobile-first.
- Composiciones de dos columnas para escritorio.

## Enlaces

- Sitio publicado: [Ver proyecto en vivo](https://yovanidosh.github.io/FmSoLuTiOns/challenges/blogr-landing-page-main/)

## Lo que aprendí

En este proyecto aprendí a:

- Construir una landing page extensa siguiendo una estrategia Mobile First.
- Controlar menús desplegables mediante `aria-expanded`.
- Impedir el acceso por teclado a una navegación oculta utilizando `inert`.
- Cerrar el menú mediante la tecla `Escape` y devolver el foco al botón.
- Adaptar la navegación al cambiar entre móvil y escritorio.
- Utilizar `<picture>` para servir ilustraciones específicas según el viewport.
- Crear composiciones editoriales con CSS Grid.
- Posicionar ilustraciones fuera de su contenedor sin producir scroll horizontal.
- Mantener centrados los botones desplegables mientras cambia el estado de sus flechas.
- Organizar estilos y variantes mediante nesting de Sass.
- Cargar una fuente variable local mediante `@font-face`.

## Código destacado

### Menú accesible y responsive

```javascript
function setMenu(open)
{
  menuToggle.setAttribute("aria-expanded", String(open));
  menu.toggleAttribute("inert", !open && !desktopMedia.matches);
}
```

`aria-expanded` comunica el estado del control y `inert` evita que los enlaces ocultos reciban foco desde el teclado.

El cambio de viewport mantiene disponible la navegación de escritorio:

```javascript
desktopMedia.addEventListener("change", (event) => {
  menu.toggleAttribute("inert", !event.matches);
});
```

Esto impide que el estado cerrado del menú móvil bloquee los enlaces al ampliar la ventana.

## Accesibilidad

El proyecto incluye:

- HTML semántico.
- Jerarquía correcta de encabezados.
- Botones nativos para abrir los menús.
- Uso de `aria-expanded` para comunicar estados.
- Uso de `inert` en contenido oculto.
- Cierre de navegación mediante `Escape`.
- Devolución del foco al botón de apertura.
- Estados de foco visibles para teclado.
- Textos alternativos útiles.
- Elementos decorativos con texto alternativo vacío.
- Compatibilidad con `prefers-reduced-motion`.

## Responsive Design

El proyecto fue construido siguiendo una estrategia mobile-first.

En dispositivos móviles:

- La navegación se presenta dentro de un panel desplegable.
- Los grupos de enlaces se abren verticalmente.
- El contenido y las ilustraciones se muestran en una columna.
- Las secciones permanecen centradas.
- El footer organiza sus enlaces de forma vertical.

En escritorio:

- La navegación cambia a una distribución horizontal.
- Los desplegables se posicionan debajo de cada botón.
- Las secciones Future y Tooling utilizan dos columnas.
- La ilustración de Infrastructure sobresale de su franja de fondo.
- El footer distribuye sus grupos en cuatro columnas.

## Author

- Frontend Mentor: [JOHANX](https://www.frontendmentor.io/profile/YovaniDosh)
