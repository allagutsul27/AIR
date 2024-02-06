import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.reset();
});

const slider = document.querySelector('.header__slider');
const totalSlides = slider.children.length - 1;

const rightShevron = document.querySelector('.header__slider-shevron-right');
const leftShevron = document.querySelector('.header__slider-shevron-left');

slider.children[0].classList.add('active');

let slideIndex = 0;

function showSlide(index) {
  for (let i = 0; i < totalSlides; i++) {
    if (i === index) {
      slider.children[i].style.display = 'block';
      slider.children[i].classList.add('active');
    } else {
      slider.children[i].style.display = 'none';
      slider.children[i].classList.remove('active');
    }
  }
}

const activeSlide = slider.querySelector('.active');

slideIndex = Array.from(slider.children).indexOf(activeSlide);

showSlide(slideIndex);

// Додаємо обробники подій для кнопок
rightShevron.addEventListener('click', function() {
  slideIndex++;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

leftShevron.addEventListener('click', function() {
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  showSlide(slideIndex);
});

const tl = gsap.timeline();

tl.fromTo(
  '.header__title',
  {
    opacity: 0,
    y: 100,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
).fromTo(
  '.header__paragraph',
  {
    opacity: 0,
    y: 100,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
).fromTo(
  '.header__btn',
  {
    opacity: 0,
    x: 100,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  }
).fromTo(
  '.header__logo',
  {
    opacity: 0,
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
  }
).fromTo(
  '.nav__item a',
  {
    opacity: 0,
    y: -50,
  },
  {
    stagger: 0.5,
    opacity: 1,
    y: 0,
    duration: 1,
  }
).fromTo(
  '.header__hire-link',
  {
    opacity: 0,
    x: 50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
  }
);

gsap.from('.about__title', {
  scrollTrigger: {
    trigger: '.about',
    start: '-350 0',
  },
  opacity: 0,
  y: -50,
  scale: 0.5,
  duration: 1,
});

gsap.from('.about__content', {
  scrollTrigger: {
    trigger: '.about',
    start: '-300 0',
  },
  delay: 0.5,
  opacity: 0,
  y: 50,
  scale: 0.5,
  duration: 1,
});

gsap.from('.expertise__title', {
  scrollTrigger: {
    trigger: '.expertise',
    start: '-200 0',
  },
  x: -100,
  rotate: 120,
  opacity: 0,
  duration: 1,
});

gsap.from('.expertise__card', {
  scrollTrigger: {
    trigger: '.expertise',
    start: '-200 0',
  },
  delay: 0.7,
  y: -100,
  opacity: 0,
  duration: 1,
});

gsap.from('.services__wrapper', {
  scrollTrigger: {
    trigger: '.services',
    start: '-200 0',
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from('.services__places', {
  scrollTrigger: {
    trigger: '.services',
    start: '-300 0',
  },
  y: 100,
  opacity: 0,
  duration: 1,
});

gsap.from('.testimonials__title', {
  scrollTrigger: {
    trigger: '.testimonials',
    start: '-300 0',
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from('.testimonials__subtitle', {
  scrollTrigger: {
    trigger: '.testimonials',
    start: '-300 0',
  },
  delay: 1,
  y: -100,
  opacity: 0,
  duration: 1,
});

gsap.from('.testimonials__cards', {
  scrollTrigger: {
    trigger: '.testimonials',
    start: '-300 0',
  },
  delay: 1.5,
  stagger: 0.8,
  y: 100,
  opacity: 0,
  duration: 1,
});

gsap.from('.components__title', {
  scrollTrigger: {
    trigger: '.components',
    start: '-200 0',
  },
  x: -50,
  y: 100,
  opacity: 0,
  duration: 1,
});

gsap.from('.components__text', {
  scrollTrigger: {
    trigger: '.components',
    start: '-200 0',
  },
  y: -50,
  delay: 1.5,
  opacity: 0,
  duration: 1,
});

gsap.from('.components__btn', {
  scrollTrigger: {
    trigger: '.components',
    start: '-200 0',
  },
  y: 50,
  delay: 2.5,
  opacity: 0,
  duration: 1,
});

gsap.from('.contacts__message', {
  scrollTrigger: {
    trigger: '.contacts',
    start: '-200 0',
  },
  y: -50,
  opacity: 0,
  duration: 1,
});

gsap.from('.contacts__info', {
  scrollTrigger: {
    trigger: '.contacts',
    start: '-200 0',
  },
  y: -50,
  delay: 1.5,
  opacity: 0,
  duration: 1,
});

gsap.from('.footer__logo', {
  scrollTrigger: {
    trigger: '.footer',
    start: '-800 0',
  },
  x: -50,
  opacity: 0,
  duration: 1,
});

gsap.from('.footer__item', {
  scrollTrigger: {
    trigger: '.footer',
    start: '-800 0',
  },
  y: -50,
  stagger: 0.7,
  opacity: 0,
  delay: 0.8,
  duration: 1,
});
