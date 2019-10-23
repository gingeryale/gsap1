const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const menu = document.querySelector('.menu');
const headline = document.querySelector('.headline');
const logo = document.querySelector('#logo');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(logo, 0.2, { opacity: 0, x: "-5%" }, { opacity: 1, x: "0%", ease: Power2.easeInOut }, "-=0.7")
    .fromTo(menu, 0.2, { opacity: 0, x: "55%" }, { opacity: 1, x: "0%", ease: Power2.easeInOut }, "-=0.7")
    .fromTo(hero, 1.2, { width: '100%' }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1")
    .fromTo(headline, 1.2, { x: "-130%" }, { x: "-20%", ease: Power2.easeInOut }, "-=1.2")
