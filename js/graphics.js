/* Graphics: inline SVG icon set and hero illustration (uses the official logo). Colours use CSS variables, so both themes work. */
const ICONS = {
  plus:"M12 8v8M8 12h8M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
  heart:"M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z",
  bone:"M8.5 8.5l7 7M6 7.5a2 2 0 1 1 1.5-1.5M7.5 6A2 2 0 1 1 6 7.5M18 16.5a2 2 0 1 1-1.5 1.5M16.5 18A2 2 0 1 1 18 16.5",
  pulse:"M3 12h4l2-5 4 10 2-5h6",
  smile:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 14a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01",
  lungs:"M12 4v9M12 8c-3 0-6 4-6 9 0 2 1.5 3 3 3 2 0 3-1 3-3M12 8c3 0 6 4 6 9 0 2-1.5 3-3 3-2 0-3-1-3-3",
  drop:"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  brain:"M12 3a4 4 0 0 0-4 4 3 3 0 0 0-2 5 3 3 0 0 0 2 5 4 4 0 0 0 8 0 3 3 0 0 0 2-5 3 3 0 0 0-2-5 4 4 0 0 0-4-4zM12 3v18",
  scalpel:"M5 19l9-9M14 10l4-4 2 2-4 4zM4 20l1-3 2 2z",
  sprout:"M12 21v-9M12 12C12 8 9 6 5 6c0 4 3 6 7 6zM12 14c0-3 2-5 6-5 0 3-2 5-6 5z",
  clipboard:"M9 4h6v3H9zM7 5H5v16h14V5h-2M9 14l2 2 4-4",
  users:"M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M20 19v-1a3 3 0 0 0-2-2.8M16 5.2a3 3 0 0 1 0 5.6",
  clock:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  shield:"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  calendar:"M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  pin:"M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
};
const DEPT_IC = {
  "Obstetrics & Gynecology":"heart","Orthopedics":"bone","Cardiology":"pulse","Pediatrics & Neonatology":"smile",
  "General Medicine":"plus","Pulmonology":"lungs","Diabetology":"drop","Ophthalmology":"eye","Neurology":"brain",
  "Laparoscopic Surgery":"scalpel","Fertility & Infertility Care":"sprout","Preventive Health Checkups":"clipboard"
};
const ico = k => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[k]||ICONS.plus}"/></svg>`;

const heroArt = () => `<svg class="hero-art" viewBox="0 0 400 340" role="img" aria-label="Lotus Hospital logo above a heartbeat line">
  <defs><clipPath id="lg"><circle cx="200" cy="148" r="108"/></clipPath></defs>
  <circle class="glow" cx="200" cy="148" r="132" fill="var(--pink-soft)"/>
  <g class="float c"><image href="assets/logo.jpg" x="82" y="30" width="236" height="236" clip-path="url(#lg)"/></g>
  <path class="ecg" d="M24 300h96l14-36 22 72 20-56 12 20h188" fill="none" stroke="var(--pink)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <g fill="var(--pink)">
    <path class="float" opacity=".5" d="M62 64h6v-8h6v8h8v6h-8v8h-6v-8h-8z"/>
    <path class="float b" opacity=".35" d="M322 92h6v-8h6v8h8v6h-8v8h-6v-8h-8z"/>
    <circle class="float c" cx="336" cy="190" r="6" opacity=".3"/>
    <circle class="float b" cx="58" cy="176" r="5" opacity=".35"/>
  </g>
</svg>`;
