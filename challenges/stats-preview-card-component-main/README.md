# <h1 align="center">My Solution to the [Stats Preview Card Component](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62) challenge.</h1>

## <h2 align="center">Preview</h2>

![Project Preview](../../assets/screenshots/stats.png)

## <h2 align="center">Overview</h2>

The goal of this project was to build a responsive statistics card featuring a prominent image with a colored overlay.

The card includes:

- Main heading.
- Descriptive text.
- Three statistics.
- Image with a purple overlay.
- Mobile-first layout.
- Two-column layout on desktop.

<div align="center">

## Links

[View Live Project](https://yovanidosh.github.io/FmSoLuTiOns/challenges/stats-preview-card-component-main/)

</div>

## <h2 align="center">What I Learned</h2>

In this project, I learned how to:

- Create overlays using multiple backgrounds.
- Combine `linear-gradient()` with an image.
- Use CSS Grid to change the layout.
- Visually reorder content without modifying the HTML.
- Use `minmax()` for grid columns.
- Arrange statistics using CSS Grid.
- Apply `clamp()` to typography.
- Work with responsive images.
- Follow a mobile-first development approach.
- Use CSS Custom Properties.

## <h2 align="center">Featured Code</h2>

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

This technique applies a colored overlay to the image without adding extra elements to the HTML.

## <h2 align="center">Accessibility</h2>

The project includes:

- Semantic HTML.
- A clear heading hierarchy.
- Decorative imagery kept separate from the content.
- Appropriate text contrast.
- A mobile-first approach.
- Media queries for responsive layouts.

## <h2 align="center">Responsive Design</h2>

On mobile devices, the image appears above the content.

On desktop, CSS Grid transforms the card into a two-column layout, placing the content on the left and the image on the right.

## <h2 align="center">Technologies Used</h2>

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- Media Queries
- Mobile-first design

<div align="center">

## Author

[Frontend Mentor](https://www.frontendmentor.io/profile/YovaniDosh)

[LinkedIn](https://www.linkedin.com/in/johanxt/)

</div>