<div align="center">

# Product List with Cart

![Vista previa del proyecto](../../assets/screenshots/listCart.png)

</div>

## Vista general

Solución responsive para crear un pedido de postres, modificar cantidades, eliminar productos y confirmar la compra desde un diálogo accesible.

## Enlaces

- [Demostración en vivo](https://yovanidosh.github.io/FmSoLuTiOns/challenges/product-list-with-cart-main/)
- [Código fuente](https://github.com/YovaniDosh/FmSoLuTiOns/tree/main/challenges/product-list-with-cart-main)

## Lo que aprendí

- Representar el carrito con un `Map`.
- Mantener sincronizados productos, cantidades y totales.
- Utilizar `<dialog>` para una confirmación modal accesible.
- Organizar estilos Mobile First con Sass.

```js
function getOrderTotal(items)
{
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
```

## Accesibilidad

La solución utiliza botones nativos, nombres accesibles, una región `aria-live`, foco visible y un diálogo modal.

## Responsive Design

Una columna en móvil, dos en tablet y tres columnas de productos junto al carrito en escritorio.

## Tecnologías utilizadas

- HTML5 semántico
- Sass, CSS Grid y Flexbox
- JavaScript
- npm
- Fuente variable local Red Hat Text

## Autor

- GitHub: [@YovaniDosh](https://github.com/YovaniDosh)
- Frontend Mentor: [@YovaniDosh](https://www.frontendmentor.io/profile/YovaniDosh)
