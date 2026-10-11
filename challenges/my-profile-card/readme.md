<h1 align="center">

This is my [Profile Card](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ) Component.

</h1>

<div align="center">

## Preview

![Profile Card project screenshot](../../assets/screenshots/myprofile.png)

</div>

<div align="center">

## Overview

</div>

The goal was to build a responsive profile card while following the design provided by Frontend Mentor.

The card includes:

- Decorative top background.
- Overlapping avatar.
- User's name and age.
- Location.
- Follower count.
- Number of likes.
- Number of photos.
- Background with decorative elements.
- Fully responsive design.

<div align="center">

## Links

[View Live Project](https://yovanidosh.github.io/FmSoLuTiOns/challenges/my-profile-card/)

## Technologies Used

</div>

- HTML5
- CSS3
- CSS Grid
- BEM methodology
- Media queries
- Mobile-first design

<div align="center">

## What I Learned

</div>

In this project, I learned how to:

- Position decorative images independently of the content.
- Overlap an avatar between two sections.
- Use `position: relative` as a reference for positioned elements.
- Horizontally center an element using `left: 50%`.
- Combine `left: 50%` with `transform: translate(-50%, -50%)`.
- Create perfectly circular images using `border-radius: 50%`.
- Use `aspect-ratio` to maintain proportions.
- Use `object-fit: cover`.
- Center components with CSS Grid and `place-items: center`.
- Create three equal columns using CSS Grid.
- Build the project following a mobile-first strategy.

<div align="center">

## Featured Code

</div>

### Overlapping Avatar

```css
.profile-card__content {
  position: relative;
}

.profile-card__avatar {
  position: absolute;
  top: 0;
  left: 50%;
  width: 6rem;
  aspect-ratio: 1;
  border: 0.35rem solid var(--color-white);
  border-radius: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
}
```

This technique places the avatar precisely between the top image and the card content.

### Combine Elements

```css
.profile-card:hover .profile-card__avatar
{
  transform: translate(-50%, -50%) scale(1.3);
}
```

learn to combine elements to create a simple animation,

<div align="center">

## Accessibility

</div>

The project includes:

- Semantic HTML.
- Use of `<main>` and `<article>`.
- Descriptive alternative text for the avatar.
- Decorative images with `alt=""`.
- Heading hierarchy.

<div align="center">

## Responsive Design

</div>

The project was built following a mobile-first strategy.

The card's main structure remains consistent across devices because the component has a controlled maximum width.

On larger screens, the main adjustment is the positioning of the decorative background elements.

This keeps the component consistent without introducing unnecessary breakpoints.

<div align="center">

## Author

[Frontend Mentor](https://www.frontendmentor.io/profile/YovaniDosh)

[LinkedIn](https://www.linkedin.com/in/johanxt/)

</div>