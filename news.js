// SwiperJS

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: false,
  keyboard: true,

  autoplay: {
    delay: 2500
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/* ScrollReveal: Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  duration: 500,
  reset: false
});

scrollReveal.reveal(
  `header img, .swiper .card,
  .back 
  `,
  { interval: 100, easing: 'ease-out', scale: 0.85 }
);
