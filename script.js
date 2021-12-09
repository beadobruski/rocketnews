/* ScrollReveal: Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  duration: 500,
  reset: false
});

scrollReveal.reveal(
  `header img, .text h2,
  .text h3, .text p,
  #email-label, .input-btn,
  .link
  `,
  { interval: 100, easing: 'ease-out', scale: 0.85 }
);
