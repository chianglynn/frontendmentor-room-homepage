const mobileNavOpenIcon = document.querySelector('.navigation__icon--hamburger');
const mobileNavCloseIcon = document.querySelector('.navigation__icon--close');
const mobileNav = document.querySelector('.navigation__list');
const modal = document.querySelector('.modal');



function toggleMobileNav() {
    [mobileNavCloseIcon, mobileNav, modal].forEach(element => element.classList.toggle('hidden'));
}

[mobileNavOpenIcon, mobileNavCloseIcon].forEach(element => element.addEventListener('click', toggleMobileNav));