# Style Guide for Lapistoule Project

This document outlines the conventions and best practices for developing the Lapistoule static website. Adhering to these guidelines ensures consistency, maintainability, and proper project structure.

## HTML

- **Snippets**: Always utilize `header.html` and `footer.html` from the `/src/snippets/` directory. These canonical snippets ensure a consistent site structure across all pages.
- **No Custom Headers/Footers**: Never create or invent new versions of the header or footer. Modifications should only occur within the `/src/snippets/` files.
- **Semantic HTML**: Use HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<aside>`, etc.) to clearly define the structure and meaning of content.
- **Accessibility**: Ensure all HTML elements are accessible. This includes using appropriate ARIA attributes, providing `alt` text for images, and maintaining proper heading structures.
- **Data Attributes for Pages**: Each `<body>` tag must include a `data-page="[page-name]"` attribute. This attribute is crucial for the TypeScript router to initialize page-specific logic.

## CSS

- **CSS Tokens**: Utilize only the CSS custom properties (variables) defined in `src/styles/base.css`. This ensures design consistency and simplifies global style changes.
  - **Colors**: Use `--color-primary`, `--color-secondary`, `--color-background`, `--color-text`, `--color-white`, etc.
  - **Typography**: Use `--font-heading`, `--font-body`.
  - **Spacing**: Use `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`.
  - **Border Radius**: Use `--radius-sm`, `--radius-md`.
  - **Box Shadow**: Use `--shadow-sm`, `--shadow-md`.
- **Official Utility Classes**: Prioritize the use of official utility classes defined in `src/styles/layout.css` and `src/styles/components.css`.
  - **Layout**: `.container`, `.section`, `.section--narrow`, `.section--center`, `.grid`, `.grid-2-cols`, `.flex`, `.flex-col`, `.items-center`, `.justify-center`, `.justify-between`.
  - **Components**: `.btn`, `.btn-primary`, `.btn-secondary`, `.card`.
- **Page-Specific Styles**: Styles specific to a particular page should be placed in `src/styles/pages/[page-name].css`. These files should only contain styles directly related to the unique layout or components of that page and should *never* define global components.
- **Modularity**: Avoid duplicating styles. If a style pattern is repeated, abstract it into a generic class in `components.css` or `layout.css` (if applicable) and use CSS variables.
- **No Frameworks**: Absolutely no CSS frameworks (e.g., Tailwind, Bootstrap) are allowed. Maintain a vanilla CSS approach.

## TypeScript

- **Page-Specific Modules**: Each HTML page must have a corresponding TypeScript file located in `/src/scripts/pages/` (e.g., `home.ts`, `domaine.ts`). This file should export an `init[PageName]Page()` function that encapsulates all the unique logic for that page.
- **Reusable Components**: Generic, reusable interactive components (e.g., carousels, modals, form validations) should reside in `/src/scripts/components/`.
- **Router in `main.ts`**: The `src/scripts/main.ts` file acts as the central router. It reads the `data-page` attribute from the `<body>` tag and calls the corresponding `init[PageName]Page()` function from `/src/scripts/pages/`.
- **Minimal Initialization**: The `init[PageName]Page()` functions should be minimal and clean, primarily orchestrating the initialization of page-specific elements and reusable components. Avoid embedding complex logic directly within these functions.
- **Vanilla TypeScript**: Do not introduce any JavaScript frameworks (e.g., React, Vue, Angular). All interactivity must be implemented using vanilla TypeScript.
- **Type Safety**: Leverage TypeScript's type-checking capabilities to write robust and error-free code.
