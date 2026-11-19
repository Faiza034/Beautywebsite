# Beautify — skincare landing page

React + Tailwind CSS recreation of the supplied design, built with real
photography cropped from your uploaded assets (not placeholders).

## Run it

```
npm install
npm run dev
```

Open the printed local URL. `npm run build` produces a production build in
`dist/`.

## Structure

```
src/
  App.jsx                 composes the page
  index.css               Tailwind layers + the shared .btn-navy button
  components/
    Navbar.jsx             logo, nav links, mobile menu
    Hero.jsx                headline, CTA, bottle/sphere composition
    FeaturedProducts.jsx    6-item product grid
    SpecialOffer.jsx        30% discount banner
    AntiAging.jsx            spotlight section
    PremiumQuality.jsx      ingredients band
    Newsletter.jsx           email signup (local state only, wire up your own API)
    AboutUs.jsx              about band
    Footer.jsx               links, social, recent news
  assets/
    hero/      cutout PNGs used in the hero (bottles, spheres, ring, flowers, logo)
    sections/  photos cropped from the design for every other section
```

## Responsive approach

The design is a fixed 1440px canvas, so every section is built to that
canvas and then scales:

- **Below the `lg` breakpoint (1024px):** sections stack into a single
  column with fluid Tailwind spacing/type (`clamp()`-based font sizes in
  `tailwind.config.js`), so text and buttons stay readable on phones and
  tablets instead of shrinking to the desktop proportions.
- **At `lg` and above:** each section reproduces the original layout almost
  pixel-for-pixel, positioned with percentages/`vw` units against the
  1440×N design so it scales smoothly between 1024px and very wide screens
  instead of snapping.

## Customizing

- Swap any file in `src/assets` to change imagery — filenames are stable.
- Copy, colors (`navy`, `gold`, `lav`, `ink`, `mist`) and type scale live in
  `tailwind.config.js` and the component files; nothing is hard-coded twice.
- `Newsletter.jsx` has a `TODO` where you should call your email provider.
