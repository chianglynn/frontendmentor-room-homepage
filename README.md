# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

<details>
<summary>Mobile</summary>

![img](https://github.com/chianglynn/frontendmentor-room-homepage/blob/main/src/screenshot/screenshot-mobile.jpeg?raw=true)

</details>

<details>
<summary>Desktop</summary>

![img](https://github.com/chianglynn/frontendmentor-room-homepage/blob/main/src/screenshot/screenshot-desktop.png?raw=true)

</details>

### Links

- Solution URL: [https://github.com/chianglynn/frontendmentor-room-homepage](https://github.com/chianglynn/frontendmentor-room-homepage)
- Live Site URL: [https://chianglynn.github.io/frontendmentor-room-homepage/](https://chianglynn.github.io/frontendmentor-room-homepage/)

## My process

### Built with

- Semantic HTML5 markup with responsive images syntax
- CSS custom properties (SCSS to control scope with BEM naming)
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use the HTML <picture> element to set up different image sources for the browser viewport.

```html
<picture class="slider__pictures--1 slider__pictures">
  <source media="(max-width: 47.99em)" srcset="./src/images/mobile-image-hero-1.jpg">
  <source media="(min-width: 48em)" srcset="./src/images/desktop-image-hero-1.jpg">
  <img src="./src/images/desktop-image-hero-1.jpg" alt="hero-1">
</picture>
```

## Author

- Website - [Lynn Chiang's Portfolio](https://chianglynn.github.io/personal-website/)
- Blog - [Lynn's Self-taught Records](https://lynnchiang.wordpress.com/)
- Frontend Mentor - [@chianglynn](https://www.frontendmentor.io/profile/chianglynn)