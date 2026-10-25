# Changelog

All notable changes to this project are documented in this file.

This changelog follows the principles of [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Corrected HTML text, metadata, and class naming in the QR Code Component challenge.
- Improved the QR Code Component layout and vertical centering.
- Refined spacing and styling for a more consistent responsive layout.

## [0.41.0]

### Added

- Completed the original Rock, Paper, Scissors challenge.
- Added matches against a randomly selected computer choice.
- Added separate scores for the player and the computer.
- Set the match winner as the first participant to reach three victories.
- Added a temporary choice screen that automatically returns to the game board.
- Added a final modal displaying the result and an option to restart.

### Added (continued)

- Added a native dialog containing the game rules.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog.
- Updated the overall progress to 40 of 100 challenges.
- Compiled Sass styles into CSS for GitHub Pages deployment.

### Learned

- Modeled game rules using JavaScript objects.
- Selected random elements from arrays.
- Separated application logic into functions with specific responsibilities.
- Managed rounds and reset the game state after a match.
- Coordinated automatic transitions with a timer that respects `prefers-reduced-motion`.
- Managed keyboard focus after dynamic interface updates.

## [0.40.0]

### Added

- Completed the Insure Landing Page challenge.
- Added responsive navigation with an accessible mobile menu.
- Added an editorial hero, benefits section, and call to action.
- Added adaptive images for mobile and desktop.
- Reused Karla and Young Serif fonts from the global assets.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress from 38/100 to 39/100.
- Compiled Sass styles into CSS for GitHub Pages deployment.

### Learned

- Managed hidden navigation using `inert`.
- Synchronized the mobile menu button with `aria-expanded`.
- Created viewport-specific decorative backgrounds.
- Built responsive image overlays without duplicating content.

## [0.39.0]

### Added

- Completed the Blogr Landing Page challenge.
- Added responsive navigation with three dropdown menus.
- Added editorial sections with mobile and desktop illustrations.
- Added an accessible mobile menu that closes using its button or the `Escape` key.
- Reused the Overpass variable font from the global assets.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 38 of 100 challenges.
- Compiled Sass styles into CSS for GitHub Pages deployment.

### Learned

- Synchronized dropdown menus using `aria-expanded`.
- Managed hidden elements using `inert`.
- Adapted navigation when switching between viewport sizes.
- Built responsive layouts with Grid and adaptive images.

## [0.38.0]

### Added

- Completed the Product List with Cart challenge.
- Added a responsive catalog of nine desserts with adaptive images.
- Implemented cart additions, removals, quantities, subtotals, and the grand total.
- Added an accessible order confirmation using a modal dialog.
- Configured the Red Hat Text variable font locally.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 37 of 100 challenges.
- Compiled Sass styles into CSS for GitHub Pages deployment.

### Learned

- Managed cart state using `Map`.
- Delegated events using `data-action` attributes.
- Calculated quantities and totals from a single source of truth.
- Used `<dialog>` to display an accessible modal confirmation.

## [0.37.0]

### Added

- Completed the Loopstudios Landing Page challenge.
- Added a full-screen mobile menu controlled by JavaScript.
- Added the company introduction and a responsive gallery of eight creations.
- Added mobile and desktop images using `<picture>`.
- Reused the Josefin Sans variable font from the global assets.
- Prepared the screenshot path for challenge 36.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 36 of 100 challenges.
- Compiled Sass styles into CSS for GitHub Pages deployment.
- Updated the main README architecture to reflect the repository's actual paths.

### Learned

- Composed cards using gradients, images, and overlaid content.
- Synchronized accessible navigation using `aria-expanded`, `data-*`, and `inert`.
- Prevented background scrolling while the mobile menu is open.
- Used Grid and `<picture>` to adapt the gallery to each viewport.

## [0.36.0]

### Added

- Completed the Sunnyside Agency Landing Page challenge.
- Added an accessible mobile menu controlled by JavaScript.
- Added services, testimonials, and a responsive gallery.
- Added mobile and desktop images using `<picture>`.
- Configured the Barlow SemiBold font locally.
- Prepared the screenshot path for challenge 35.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 35 of 100 challenges.
- Compiled Sass styles into CSS for GitHub Pages deployment.

### Learned

- Synchronized `aria-expanded` with visual states using `data-*`.
- Managed menu closure through links, `Escape`, and viewport changes.
- Built responsive compositions using Grid, Flexbox, and adaptive images.
- Organized colors, fonts, and breakpoints using Sass variables.

## [0.35.0]

### Added

- Completed the Expenses Chart Component challenge.
- Generated a weekly chart dynamically from `data.json`.
- Added tooltips accessible through pointer interaction and keyboard navigation.
- Reused the DM Sans variable font from the global assets.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 34 of 100 challenges.
- Compiled Less styles into CSS for GitHub Pages deployment.

### Learned

- Retrieved local data using the Fetch API.
- Normalized amounts to calculate proportional chart heights.
- Organized styles using Less variables and nesting.
- Represented chart data accessibly with descriptive controls.

## [0.34.0]

### Added

- Completed the Age Calculator App challenge.
- Validated empty fields, ranges, invalid dates, and future dates.
- Calculated age accurately in years, months, and days.
- Reused the Poppins variable font from the global assets.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 33 of 100 challenges.

### Learned

- Validated real calendar dates using the number of days in each month.
- Calculated date differences while accounting for remaining days and months.
- Associated errors accessibly using `aria-describedby` and `aria-invalid`.
- Announced dynamic results using `aria-live`.

## [0.33.0]

### Added

- Completed the Contact Form challenge.
- Added accessible validation for text, email, query, and consent fields.
- Customized radio buttons and checkboxes.
- Added submission confirmation through a status region.
- Configured the Karla variable font locally.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 32 of 100 challenges.

### Learned

- Associated errors using `aria-describedby`.
- Communicated invalid fields through `aria-invalid`.
- Focused the first invalid field automatically.
- Distinguished between empty fields and invalid email addresses.

## [0.32.0]

### Added

- Completed the Intro Section With Dropdown Navigation challenge.
- Added a mobile sidebar with focus management and `Escape` key support.
- Added independent dropdown menus for Features and Company.
- Configured the Epilogue variable font locally.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 31 of 100 challenges.

### Learned

- Created dropdown controls using `aria-expanded` and `aria-controls`.
- Synchronized icons and states using JavaScript.
- Managed focus within a mobile sidebar.
- Used `<picture>` for responsive images.

## [0.31.0]

### Added

- Completed the News Homepage challenge.
- Created a responsive editorial layout with a main story, latest news, and popular articles.
- Added a keyboard-accessible mobile sidebar that closes with `Escape`.
- Configured the Inter variable font locally.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 30 of 100 challenges.
- Compiled Sass styles into CSS for GitHub Pages deployment.

### Learned

- Created responsive images using `<picture>` and `<source>`.
- Built an editorial composition using CSS Grid.
- Managed focus accessibly within a sidebar menu.
- Organized styles using Sass variables and nesting.

## [0.30.0]

### Added

- Completed the Interactive Rating Component challenge.
- Added an accessible rating selector using radio buttons.
- Added a thank-you state displaying the selected rating dynamically.
- Added the challenge README and prepared the screenshot path for challenge 29.

### Changed

- Updated the main project catalog with the new project.
- Updated the overall progress to 29 of 100 challenges.
- Configured the Overpass font locally without relying on Google Fonts.

### Learned

- Built forms using `fieldset`, `legend`, and radio buttons.
- Customized native controls with CSS.
- Retrieved values using `form.elements`.
- Switched between interface views using the `hidden` attribute.

## [1.19.0]

### Added

- Completed the Article Preview Component challenge.
- Created a semantic card containing article information and author details.
- Added an interactive social sharing panel.
- Implemented panel dismissal through outside clicks and the `Escape` key.
- Built a mobile-first responsive layout.
- Loaded the Manrope variable font locally.

### Added (continued)

- Integrated challenge assets into `assets/images/`.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the overall progress from 27/100 to 28/100.
- Updated the main README.
- Updated the House dashboard with challenge 28.
- Updated Arcade Progress to 28%.

### Learned

- Used `<article>` and `<time>` semantically.
- Managed accessible states using `aria-expanded` and `aria-controls`.
- Dismissed floating interfaces through outside clicks and `Escape`.
- Positioned floating panels responsively.
- Combined CSS Grid and Flexbox.

## [1.18.0]

### Added

- Completed the FAQ Accordion challenge.
- Added four interactive frequently asked questions.
- Allowed only one answer to remain open at a time.
- Added accessible states using `aria-expanded` and `aria-controls`.
- Built a mobile-first responsive layout.
- Loaded the Work Sans variable font locally.

### Added (continued)

- Integrated challenge assets into `assets/images/`.
- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the overall progress from 26/100 to 27/100.
- Updated the main README.
- Updated the House dashboard with challenge 27.
- Updated Arcade Progress to 27%.

### Learned

- Built an accordion using native buttons.
- Delegated events using `closest()`.
- Established accessible relationships between questions and answers.
- Synchronized panels and icons.
- Created responsive backgrounds for mobile and desktop.

## [1.17.0]

### Added

- Completed the Newsletter Sign-up Form challenge.
- Added accessible form validation.
- Added a confirmation message displaying the submitted email address.
- Built a mobile-first responsive layout.
- Added adaptive images using `<picture>`.
- Loaded the Roboto font locally.

### Added (continued)

- Integrated challenge assets into `assets/images/`.
- Added the challenge README and screenshot path.

### Changed

- Updated the overall progress from 25/100 to 26/100.
- Updated the main README.
- Updated the House dashboard with challenge 26.
- Updated Arcade Progress to 26%.

### Learned

- Switched views using the `hidden` attribute.
- Managed focus between the form and confirmation view.
- Validated forms using `validity.valid`.
- Communicated accessible messages using `aria-live` and `aria-invalid`.
- Used `<picture>` for responsive images.

## [1.16.0]

### Added

- Completed the Intro Component With Sign Up Form challenge.
- Added a registration form with four fields.
- Implemented accessible validation with specific error messages.
- Built a mobile-first responsive layout.
- Loaded the Poppins variable font locally.
- Integrated challenge assets into `assets/images/`.

### Added (continued)

- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the overall progress from 24/100 to 25/100.
- Updated the main README.
- Updated the House dashboard with challenge 25.
- Updated Arcade Progress to 25%.

### Learned

- Used `validity.valueMissing` and `validity.typeMismatch`.
- Created reusable validation for multiple fields.
- Implemented accessible states using `aria-invalid` and `aria-live`.
- Used `toggleAttribute()`.
- Managed focus within forms.

## [1.15.0]

### Added

- Completed the Base Apparel Coming Soon Page challenge.
- Built a mobile-first responsive layout with adaptive images.
- Added an accessible subscription form.
- Added visual error states and messages using `aria-live`.
- Integrated challenge assets into `assets/images/`.
- Loaded the Josefin Sans variable font locally.

### Added (continued)

- Added the challenge README and prepared the screenshot path.

### Changed

- Updated the overall progress from 23/100 to 24/100.
- Updated the main README.
- Updated the House dashboard with challenge 24.
- Updated Arcade Progress to 24%.

### Learned

- Used `<picture>` and `srcset`.
- Applied native validation using `validity.valid`.
- Implemented accessible states using `aria-invalid`.
- Built two-column layouts using CSS Grid.
- Used logical properties and mobile-first styling.

## [1.14.0]

### Added

- Completed the Ping Coming Soon Page challenge.
- Added a subscription form with accessible validation.
- Implemented dynamic error messages using `aria-live`.
- Added interactive states for the form and social links.
- Built a mobile-first responsive layout.
- Added the challenge README.

### Changed

- Updated the overall progress from 22/100 to 23/100.
- Updated the main README.
- Updated the House dashboard with challenge 23.
- Updated Arcade Progress to 23%.

### Learned

- Used the browser's native constraint validation API.
- Checked form validity using `validity.valid`.
- Managed `aria-invalid`.
- Communicated accessible errors using `aria-live`.
- Built responsive forms using CSS Grid.

## [1.13.0]

### Added

- Completed the Bridge Collective project.
- Created a responsive hero section.
- Added four impact statistics.
- Implemented an interactive navigation menu.
- Added a navigation overlay.
- Created custom icons for opening and closing the menu.

### Added (continued)

- Implemented menu dismissal using the `Escape` key.
- Added the challenge README.

### Changed

- Updated the overall progress from 21/100 to 22/100.
- Updated the main README.
- Updated the House dashboard with challenge 22.
- Updated Arcade Progress to 22%.

### Learned

- Used `classList.toggle()`.
- Controlled visual states with JavaScript.
- Changed icons dynamically.
- Managed `aria-expanded`.
- Implemented overlays and keyboard events.
- Built responsive layouts using CSS Grid.

## [1.12.0]

### Added

- Completed the Stats Preview Card Component challenge.
- Created a responsive statistics card.
- Added an image with a violet overlay.
- Built a mobile-first layout.
- Added a two-column desktop layout.
- Added the challenge README.

### Changed

- Updated the overall progress from 20/100 to 21/100.
- Updated the main README.
- Updated the House dashboard with challenge 21.
- Updated Arcade Progress to 21%.

### Learned

- Used multiple backgrounds.
- Applied `linear-gradient()`.
- Built layouts using CSS Grid and `minmax()`.
- Used `clamp()` for responsive sizing.
- Improved responsive layout behavior.

## [1.11.0]

### Added

- Completed the Social Proof Section challenge.
- Created a responsive social proof section.
- Added three five-star ratings.
- Added three customer testimonials.
- Implemented layouts using CSS Grid and Flexbox.
- Added staggered layouts for ratings and testimonials.

### Added (continued)

- Implemented a mobile-first layout.
- Added the challenge README.

### Changed

- Integrated challenge 20 into Frontend Mentor House.
- Updated overall progress to 20 of 100 challenges.
- Updated the progress bar to 20%.

## [1.10.0]

### Added

- Added the Chat App CSS Illustration challenge.
- Created a mobile chat interface using HTML and CSS.
- Added sent and received messages.
- Added an image gallery within the conversation.
- Added walking options with prices.
- Added gradients and decorative background elements.

### Added (continued)

- Implemented a mobile-first responsive layout.
- Added the challenge README.

### House

- Integrated challenge 19 into Frontend Mentor House.
- Updated overall progress to 19 of 100 challenges.
- Updated the visual progress bar.

## [1.9.0]

### Added

- Completed the Huddle Landing Page challenge.
- Created a responsive hero section.
- Added the main illustration.
- Added a registration call to action.
- Added social media links.
- Implemented hover and focus states.

### Added (continued)

- Added the challenge README.

### Changed

- Updated overall progress from 17/100 to 18/100.
- Updated the main README.
- Updated the House dashboard with challenge 18.
- Updated Arcade Progress to 18%.

### Learned

- Built a responsive hero section.
- Used CSS Grid and responsive backgrounds.
- Applied `clamp()` and `minmax()`.
- Implemented `:focus-visible`.
- Respected `prefers-reduced-motion`.

## [1.8.0]

### Added

- Completed the 3 Column Preview Card Component challenge.
- Added a screenshot for challenge 17.
- Created three card variants.
- Built a responsive layout ranging from one to three columns.
- Added hover and focus states.
- Added the challenge README.

### Changed

- Updated overall progress to 17 of 100 challenges.
- Updated the main README.
- Updated Arcade Progress to 17%.

### Learned

- Used BEM variants.
- Applied Flexbox within components.
- Used `margin-top: auto`.
- Created responsive CSS Grid layouts with `minmax()`.
- Implemented `:focus-visible`.
- Followed a mobile-first approach.

## [1.7.0]

### Added

- Completed the Testimonials Grid Section challenge.
- Added a screenshot for challenge 16.
- Created five testimonial cards.
- Built a responsive layout using CSS Grid.
- Created an asymmetric composition using Grid Areas.
- Added the challenge README.

### Changed

- Updated overall progress from 15/100 to 16/100.
- Updated the main README.
- Updated Arcade Progress to 16%.

### Learned

- Used `grid-template-areas` and `grid-area`.
- Built asymmetric Grid layouts.
- Combined Grid and Flexbox.
- Applied BEM variants.
- Used `<blockquote>` semantically.
- Created responsive avatars and followed a mobile-first approach.

## [1.6.0]

### Added

- Completed the Profile Card Component challenge.
- Added a screenshot for challenge 15.
- Created a responsive profile card.
- Added an overlapping avatar.
- Composed a background from multiple images.
- Added statistics using CSS Grid.

### Added (continued)

- Added the challenge README.

### Changed

- Updated overall progress from 14/100 to 15/100.
- Updated the main README.
- Updated the House dashboard.
- Updated Arcade Progress to 15%.

### Learned

- Used multiple CSS backgrounds.
- Applied `position: relative` and `position: absolute`.
- Used `transform: translate()`.
- Applied `aspect-ratio` and `object-fit`.
- Created circular images with `border-radius: 50%`.
- Used CSS Grid and `place-items`.

## [1.5.0]

### Added

- Completed the Four Card Feature Section challenge.
- Added a screenshot for challenge 14.
- Built a responsive layout using CSS Grid.
- Created an asymmetric desktop composition.
- Added decorative pseudo-elements.
- Implemented BEM variants for the four cards.

### Added (continued)

- Added subtle visual states.
- Supported `prefers-reduced-motion`.
- Added the challenge README.

### Changed

- Updated overall progress to 14 of 100 challenges.
- Updated the main README.
- Updated Arcade Progress to 14%.

### Learned

- Built asymmetric CSS Grid layouts.
- Used `grid-column` and `grid-row`.
- Combined Grid and Flexbox.
- Applied `margin-top: auto` and `::before`.
- Created BEM variants.
- Made decorative icons accessible and respected `prefers-reduced-motion`.

## [1.4.0]

### Added

- Completed the Single Price Grid Component challenge.
- Added a screenshot for challenge 13.
- Built a responsive layout using CSS Grid.
- Used `grid-template-areas`.
- Added a call to action with interactive states.
- Added a semantic benefits list.

### Added (continued)

- Added the challenge README.

### Changed

- Updated overall progress from 12/100 to 13/100.
- Updated the main README.
- Updated Arcade Progress to 13%.
- Returned to plain CSS after several challenges using preprocessors.

### Learned

- Applied CSS Grid to small components.
- Used `grid-template-areas`.
- Built a mobile-first layout transitioning from one to two columns.
- Improved visual hierarchy and contrast.
- Implemented `:hover`, `:focus-visible`, and `:active`.
- Designed a call to action and used semantic lists.

## [1.3.0]

### Added

- Completed the Bento Grid challenge.
- Added a screenshot for challenge 12.
- Created a responsive Bento layout.
- Configured Sass using npm.
- Added Sass variables and partials.
- Implemented advanced Grid layouts.

### Added (continued)

- Used `grid-template-areas` and `grid-area`.
- Created cards with different sizes.
- Added the challenge README.

### Changed

- Officially updated progress to 12 of 100 challenges.
- Marked Bento Grid as completed.
- Updated the main README.
- Updated Arcade Progress to 12%.
- Resumed Sass after completing challenges with Less.

### Learned

- Applied advanced CSS Grid techniques.
- Built Bento layouts using `grid-template-areas` and `grid-area`.
- Used `minmax()`, `clamp()`, and `aspect-ratio`.
- Reorganized layouts without modifying HTML.
- Allowed images to intentionally overflow their containers.
- Used `max-width: none` and `overflow: hidden`.

### Learned (continued)

- Organized Sass using partials.
- Compared Sass and Less in practice.

## [1.2.0]

### Added

- Introduced the **Arcade Progress** system inspired by Pac-Man.
- Added a visual progress bar representing the goal of 100 challenges.
- Generated 100 points dynamically, each representing a completed or pending challenge.
- Added Pac-Man movement based on the completion percentage.
- Added a yellow trail representing completed challenges.
- Distributed visual milestones along the progress path.

### Added (continued)

- Positioned ghosts at different progress percentages.
- Added special milestones at 25%, 50%, 75%, and 90%.
- Added cherries as the final reward.
- Kept cherries locked until progress reaches 100%.
- Added dynamic messages associated with progress.
- Created six custom SVG assets for the Arcade system.

### Added (continued)

- Created the independent `css/arcade-progress.css` stylesheet.
- Created the independent `js/arcade-progress.js` script.

### Learned

- Built data-driven visual components.
- Represented percentages through a graphical interface.
- Generated interface elements dynamically using JavaScript.
- Synchronized application state with a visual representation.
- Separated JavaScript functionality into independent files.
- Created a dedicated CSS architecture for a specific feature.

### Learned (continued)

- Worked with SVG interface assets.
- Designed a custom progress bar.
- Resolved overflow issues on small devices.
- Adapted visually complex interfaces through responsive design.

## [1.1.0]

### Added

- Completed the Clipboard Landing Page challenge.
- Added a screenshot for challenge 11.
- Implemented a second project using Less.
- Added Less mixins.
- Built a multi-section landing page.
- Reused buttons throughout the challenge.

### Added (continued)

- Created a responsive Workflow grid.
- Added a company logo section.
- Built a responsive footer.
- Added the challenge README.

### Changed

- Updated overall progress to 11 of 100 challenges.
- Updated the main README.
- Expanded the Less workflow to support larger projects.

### Learned

- Used Less mixins and `fade()`.
- Organized styles for a large landing page.
- Built multi-section layouts using CSS Grid.
- Created images that partially extend beyond their containers.
- Applied `translateX()`.
- Built responsive footers and reused patterns within a project.

## [1.0.0]

### Added

- Completed the Social Links Profile challenge.
- Added a screenshot for challenge 10.
- Introduced Less into the project workflow.
- Installed Less using npm.
- Added Less variables and imports.
- Implemented Less nesting.

### Added (continued)

- Added hover, focus, and active states.
- Added the challenge README.

### Changed

- Updated overall progress to 10 of 100 challenges.
- Updated the main README.
- Reached 10% completion of the House collection.
- Added a new preprocessor to the learning workflow.

### Learned

- Used Less variables with `@`.
- Worked with `@import` and nesting.
- Compiled `.less` files into `.css`.
- Managed Less through npm.
- Compared Sass and Less.
- Built responsive layouts without unnecessary media queries.

### Learned (continued)

- Used `min()` for responsive sizing.
- Implemented accessible link states.

## [0.11.0]

### Added

- Completed the Booking Confirmation Dashboard challenge.
- Created a responsive sidebar.
- Added an accessible mobile menu.
- Built a booking receipt and welcome card.
- Implemented a hover-to-fan effect.
- Revealed the central sun through interaction.

### Added (continued)

- Added Arrival, WiFi, and Breakfast cards.
- Used the Clipboard API to copy the WiFi password.
- Added feedback through `aria-live`.
- Added the challenge README.

### Changed

- Updated overall progress to 9 of 100 challenges.
- Refactored the HTML structure.
- Reorganized Sass using partials.
- Normalized BEM classes and removed generic classes.
- Improved responsiveness and accessible interactive states.
- Removed duplicate sidebar styles.

### Fixed

- Corrected the semantic structure of the receipt.
- Applied `<dl>`, `<dt>`, and `<dd>` correctly.
- Fixed text typos and decorative icons.
- Improved focus states.

### Learned

- Used modular Sass, `@use`, and nesting.
- Applied advanced CSS Grid and `position: sticky`.
- Managed layering using `transform` and `z-index`.
- Used `:has()` and implemented the hover-to-fan effect.
- Worked with the Clipboard API, `async/await`, and `try...catch`.
- Used `aria-live` and `aria-expanded`.

## [0.10.0]

### Added

- Completed the Fylo Data Storage Component challenge.
- Added a screenshot for challenge 8.
- Introduced the initial npm configuration.
- Added `package.json` and `package-lock.json`.
- Installed Sass as a development dependency.
- Created the SCSS structure.

### Added (continued)

- Added Sass variables and partials.
- Implemented an accessible storage progress bar.
- Added a storage gradient and remaining-storage indicator.
- Added the challenge README.

### Changed

- Updated overall progress to 8 of 100 challenges.
- Marked Fylo Data Storage Component as completed.
- Updated the main README.
- Expanded the development workflow to include npm and Sass.

### Learned

- Worked with npm, `package.json`, and `package-lock.json`.
- Understood the role of `node_modules`.
- Used Sass variables, partials, and `@use`.
- Applied nesting and the parent selector `&`.
- Created gradients, pseudo-elements, and CSS triangles.
- Built accessible progress bars and explored Bootstrap utilities.

## [0.9.0]

### Added

- Completed the NFT Preview Card challenge.
- Added a screenshot for challenge 7.
- Created an interactive image overlay.
- Added a view icon on hover.
- Implemented accessible link states.

### Changed

- Updated overall progress to 7 of 100 challenges.
- Marked NFT Preview Card as completed.
- Updated the main README.

### Learned

- Used `position: relative` and `position: absolute`.
- Applied `inset: 0` and `opacity`.
- Implemented smooth transitions.
- Used `:hover` and `:focus-visible`.
- Applied `aspect-ratio` and `object-fit: cover`.

## [0.8.0]

### Added

- Completed the Recipe Page challenge.
- Added a screenshot for challenge 6.
- Added the challenge README.
- Customized list markers using `::marker`.
- Created a semantic nutrition table.
- Used `<section>` and `<aside>` semantically.

### Added (continued)

- Built tables using `<table>`, `<th>`, and `<td>`.
- Applied `scope="row"`.
- Customized ordered and unordered lists.

### Changed

- Updated overall progress to 6 of 100 challenges.
- Marked Recipe Page as completed.
- Updated the main README with challenge 6.

## [0.7.0]

### Added

- Completed the Results Summary Component challenge.
- Added a screenshot for challenge 5.
- Separated result data into `data/results.js`.
- Implemented dynamic rendering using JavaScript.
- Created the reusable `score-circle` component.
- Created the reusable `summary-item` component.

### Added (continued)

- Added an entrance animation for the score.
- Added the challenge README.

### Changed

- Updated overall progress to 5 of 100 challenges.
- Marked Results Summary Component as completed.
- Expanded the component library with the `scores` category.
- Updated the main README with challenge 5.

### Learned

- Used `map()` to generate interface elements.
- Used `join("")`.
- Separated data from presentation.
- Imported JavaScript modules.
- Applied linear gradients and circles using `aspect-ratio`.
- Created animations using `@keyframes` and visual category variants.

## [0.6.0]

### Added

- Added the Order Summary Component challenge.
- Added a screenshot for challenge 4.
- Created the initial component library.
- Added a base button component.
- Created the initial brand book.
- Documented the components.

### Changed

- Updated overall progress to 4 of 100 challenges.
- Expanded the workflow to identify reusable components.

### Learned

- Created responsive backgrounds.
- Used decorative images through `background-image`.
- Designed reusable component variants.
- Implemented accessible states.
- Respected `prefers-reduced-motion`.

## [0.5.0]

### Added

- Completed the Product Preview Card challenge.
- Added a screenshot for challenge 3.
- Added the Product Preview Card README.

### Changed

- Updated overall progress to 3 of 100 challenges.
- Marked Product Preview Card as completed.
- Expanded the documentation workflow.

### Learned

- Used `<picture>` to serve different images on mobile and desktop.
- Applied CSS Grid and Flexbox.
- Implemented `:hover`, `:focus-visible`, and `:active` states.
- Created smooth transitions.

## [0.4.0]

### Added

- Completed the Blog Preview Card challenge.
- Integrated the new card into the House dashboard.
- Added a preview screenshot for the second challenge.
- Added links to the live demo and source code.
- Updated the completion counter to 2 of 100.

### Changed

- Marked Blog Preview Card as completed.
- Updated project ordering to preserve challenge numbering.

## [0.3.0]

### Added

- Added a custom local font for the main heading.
- Declared the font using `@font-face`.
- Added a QR Code Component preview.
- Implemented an automatic completed-project counter.

## [0.2.0]

### Added

- Created a centered hero section.
- Added the “View Projects” button.
- Added a completed challenges section.
- Added the footer.
- Created a grid of nine cards.
- Implemented one column on mobile, two on tablets, and three on desktop.

### Added (continued)

- Registered the first challenge, QR Code Component.
- Added placeholders for future challenges.

## [0.1.0] - Initial Release

### Added

- Created the initial Frontend Mentor House structure.
- Added a dashboard with a goal of completing 100 challenges.
- Created a dynamic project catalog with randomized ordering.
- Registered the initial QR Code Component project.
- Implemented a mobile-first responsive layout.
- Prepared the initial structure for GitHub Pages deployment.

### Added (continued)

- Created a living README to document future challenges.
