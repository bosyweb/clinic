# SmileCare — HTML / CSS / JavaScript

This is a plain HTML, CSS and JavaScript recreation of the uploaded dental clinic website design.

## Files
- `index.html` — all page sections and content
- `css/style.css` — design, colors, layout, responsive styles and custom animations
- `js/script.js` — appointment modal, form success state and scroll animations

## How to run
1. Extract the ZIP folder.
2. Open the `smilecare-html` folder in VS Code.
3. Open `index.html` with Live Server (or double-click it in a browser).

The project uses Bootstrap 5, Bootstrap Icons and AOS through CDN links, so an internet connection is needed for those libraries and remote images/fonts.

## Customize
- Main colors: edit the variables at the top of `css/style.css` inside `:root`.
- Text: edit the relevant section in `index.html`.
- Images: replace the image URLs in `index.html` and the hero background URL in `css/style.css`.
- Booking form: currently front-end only. It shows a success message but does not save/send appointments. A backend or form service is needed for real bookings.
