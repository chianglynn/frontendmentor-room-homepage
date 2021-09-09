// Variables
const mobileNavOpenIcon = document.querySelector('.navigation__icon--hamburger');
const mobileNavCloseIcon = document.querySelector('.navigation__icon--close');
const mobileNav = document.querySelector('.navigation__list');
const modal = document.querySelector('.modal');
const slidePictures = document.querySelectorAll('.slider__pictures');
const slideInfos = document.querySelectorAll('.info__slider');
const prevSlideButton = document.querySelector('.slides-btn--left');
const nextSlideButton = document.querySelector('.slides-btn--right');
let currentSlide = 0;

// Functions
function toggleMobileNav() {
    [mobileNavCloseIcon, mobileNav, modal].forEach(element => element.classList.toggle('hidden'));
}

function changeSlide(action) {
    if (action === 'prev') currentSlide === 0 ? currentSlide = slidePictures.length - 1 : currentSlide--;
    if (action === 'next') currentSlide === slidePictures.length - 1 ? currentSlide = 0 : currentSlide++;
    slidePictures.forEach(element => element.style.display = 'none');
    slideInfos.forEach(element => element.style.display = 'none');
    slidePictures[currentSlide].style.display = 'flex';
    slideInfos[currentSlide].style.display = 'block';
}

// Event listeners
[mobileNavOpenIcon, mobileNavCloseIcon].forEach(element => element.addEventListener('click', toggleMobileNav));
prevSlideButton.addEventListener('click', () => changeSlide('prev'));
nextSlideButton.addEventListener('click', () => changeSlide('next'));