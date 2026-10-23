# Lotus Hospital website (v2, modular)

Static site, no build step. Upload this folder to any web host and open index.html.

- css/base.css        tokens, layout, components, light and dark themes
- css/animations.css  motion, icon and illustration styles (auto-off for reduced-motion users)
- assets/           official logo (logo.jpg), cropped wordmark and favicon
- js/data.js          doctors, departments, clinics, insurers, blogs: edit content here
- js/graphics.js      SVG icon set and hero illustration
- js/components.js    shared UI pieces (doctor card, appointment form)
- js/pages.js         one template per page
- js/library.js       health library content and page
- js/calculators.js   BMI, due date, ovulation, calories, HbA1c
- js/router.js        hash router and page behaviour
- js/animations.js    scroll reveals, counters, progress bar
- js/ui.js            menu, theme switch, startup

Scripts are classic (not ES modules) so the site also opens straight from disk.
Load order matters: data, graphics, components, pages, library, calculators, router, animations, ui.
