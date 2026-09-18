# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript. It includes Home, About, Projects, and Contact sections, along with a dark/light theme toggle and contact form interaction.

## Project Structure

```text
assignment-1/
├── index.html
├── css/styles.css
├── js/script.js
├── assets/images/
├── docs/
└── README.md
```

- `index.html` contains the website content and structure.
- `styles.css` contains the design and responsive layout.
- `script.js` contains the interactive features.
- `assets/images/` contains project and social media images.

## Design and Responsiveness

The website uses CSS Grid and Flexbox for its layout. CSS variables are used to maintain consistent colors throughout the design.

Media queries are used to support different screen sizes. At `800px` or less, the Projects and Contact layouts change to one column. At `550px` or less, spacing, font sizes, navigation, and other elements are adjusted for mobile screens.

## JavaScript Features

The contact form uses JavaScript to prevent the default submission, display a confirmation message, and clear the form fields.

The dark/light theme toggle changes the website theme using a CSS class. The selected theme is saved in `localStorage` so it remains after refreshing the page.

## Accessibility

The website includes image `alt` text, form labels, `aria-label` attributes, and semantic HTML elements such as `header`, `nav`, `main`, `section`, and `footer`.

## Testing

The website was tested for navigation, contact form interaction, theme switching, external links, and responsive layouts on different screen sizes.