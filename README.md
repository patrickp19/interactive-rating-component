# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Create an interactive rating component

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/patrickp19/interactive-rating-component)
- Live Site URL: [Add live site URL here](https://patrickp19.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

- How to calculate specificity

- Difference between pseudo elements and pseudo classes. Specifically with :hover

- overflow:hidden allows use absolute position's top, left, right, bottom attributes to create a large clickable label radio/checkbox while staying within the li container
```css
.rating-radio-item-list {
  overflow:hidden;
}
```
```css
.rating-radio-item-list label {
  position: absolute;
  top: -1rem;
  left: -1rem;
  bottom: -1rem;
  right: -1rem;
}
```

### Useful resources

- [Image Color Picker](https://imagecolorpicker.com/en) - Useful color pipette tool for finding what color to use
- [CSS Demystified](https://courses.kevinpowell.co/view/courses/css-demystified) - Great course that has helped me tackle projects on frontendmentor and better understand css. Specifically:
- Writing a CSS reset template
- Useful ways to write CSS custom properties
- Writing semantic CSS
- Specificity

## Author

- Github - [Patrick Phattharaampornchai](https://github.com/patrickp19)
- Frontend Mentor - [@patrickp19](https://www.frontendmentor.io/profile/patrickp19)