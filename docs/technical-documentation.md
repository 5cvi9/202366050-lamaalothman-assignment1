# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. The purpose of the website is to introduce me as a Software Engineering student, present selected projects, and provide ways for visitors to contact or connect with me.

The portfolio contains four main sections: Home, About, Projects, and Contact. It also includes interactive features such as a contact form confirmation message and a dark/light theme toggle.

## Project Structure

The project is organized into separate files and folders to keep the code clear and maintainable.

```text
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

- `index.html` contains the structure and content of the website.
- `css/styles.css` contains the visual design, layouts, themes, and responsive styles.
- `js/script.js` contains the interactive JavaScript features.
- `assets/images/` stores project images and social media icons.
- `docs/` contains the technical documentation and AI usage report.

## HTML Structure

The website uses semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`.

The navigation bar provides links to the Home, About, Projects, and Contact sections. The Home section introduces me and provides links to GitHub and LinkedIn.

The About section contains a short introduction and tagline. The Projects section uses individual `article` elements to present RouteRepair and KFUPM StudyVerse with images and descriptions.

The Contact section contains contact information, social links, and a form with Name, Email, and Message fields.

## CSS Design and Layout

CSS variables are defined in `:root` for frequently used colors. This makes the color scheme easier to maintain and allows the same values to be reused throughout the website.

Flexbox is used for elements such as the navigation bar and social icons. CSS Grid is used for the Projects and Contact layouts.

Project cards include borders, shadows, and hover effects to provide visual feedback. Transitions are also used on buttons, icons, and other interactive elements to make the interface feel smoother.

## Responsive Design

The website uses media queries to adapt to desktop, tablet, and mobile screen sizes.

At screen widths of `800px` or less, the Projects and Contact layouts change to a single-column layout. This prevents the content from becoming too narrow on tablets and smaller screens.

At `550px` or less, additional mobile adjustments are applied. These include smaller font sizes, reduced spacing, a stacked navigation layout, smaller project images, and adjustments to the contact form and theme button.

This approach allows the same website to remain readable and usable across different screen sizes.

## JavaScript Features

### Contact Form Interaction

The contact form uses a JavaScript `submit` event listener. The `preventDefault()` method prevents the browser from performing a normal form submission because the assignment does not require a backend.

After submission, JavaScript displays a confirmation message to the user and uses `form.reset()` to clear the form fields.

### Dark and Light Theme

The website includes a button that allows the user to switch between dark and light themes.

JavaScript uses `classList.toggle()` to add or remove the `light-mode` class. CSS then applies the appropriate colors based on that class.

The selected theme is stored in `localStorage`. When the website is opened or refreshed, JavaScript checks the saved value and restores the user's previous theme preference.

The theme button also updates its icon and `aria-label` depending on the current theme.

## Accessibility

Several accessibility practices are included in the website:

- Images include descriptive `alt` text.
- Form inputs are connected to visible labels.
- Social media links include `aria-label` attributes.
- The theme toggle includes an accessibility label that changes with its current action.
- The contact confirmation message uses `aria-live="polite"`.
- Semantic HTML elements are used to provide a clear page structure.

## Performance and Maintainability

The portfolio is built using HTML, CSS, and JavaScript without external frameworks or libraries. This keeps the project lightweight and avoids unnecessary dependencies.

The code is separated into HTML, CSS, and JavaScript files, and comments are used to identify important sections. Shared CSS variables and reusable classes also reduce repeated styling.

## Testing

The website was tested by checking:

- Navigation between all page sections
- GitHub and LinkedIn links
- Project images and content
- Required contact form fields
- Contact form confirmation and reset behavior
- Dark and light theme switching
- Theme persistence after refreshing the page
- Desktop, tablet, and mobile layouts
- Visibility of icons in both dark and light themes

Browser resizing was used to check the responsive behavior at different screen widths.