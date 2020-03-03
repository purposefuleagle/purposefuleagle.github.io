/* ------------  ------------ */
let mobileOpen = document.querySelector('.icon-menu');
let mobileClose = document.querySelector('.mobile-nav__close');
let mobileNav = document.querySelector('.mobile-nav');
let infoButton = document.querySelector('.info__item');
let submenu = document.querySelector('.submenu-info');
let infoIcon = document.querySelector('.info__icon--arrow');
let overlay = document.querySelector('.overlay');
let phoneDropdown = document.querySelector('.dropdown-phone__link');
let phonePopUp = document.querySelector('.submenu-phone');

infoButton.addEventListener('click', toggleString);

function toggleString() {
  submenu.classList.toggle('submenu-info--active');
  infoIcon.classList.toggle('info__icon--arrow_active');
}

mobileOpen.addEventListener('click', menuOpen);

function menuOpen() {
  mobileNav.classList.add('mobile-nav--active');
  overlay.classList.add('overlay--active');
}

mobileClose.addEventListener('click', menuClose);

function menuClose() {
  mobileNav.classList.remove('mobile-nav--active');
  overlay.classList.remove('overlay--active');
}

overlay.addEventListener('click', overalyClose);

function overalyClose() {
  mobileNav.classList.remove('mobile-nav--active');
  overlay.classList.remove('overlay--active');
}

phoneDropdown.addEventListener('click', hidePopUp);

function hidePopUp(e) {
  e.preventDefault();
  phonePopUp.classList.toggle('submenu-phone--active');
}

/* ES5 */
// let phonesDropdown = document.querySelectorAll('.button-item'),
//  index, button

// for (index = 0; index < phonesDropdown.length; index++) {
//   button = phonesDropdown[index];
//   button.addEventListener('click', clickHandler);
//   // button.addEventListener('dblclick', doubleClickHandler);
// }

// function clickHandler(event) {
//   console.log('click', this.innerText);
//   event.preventDefault();
//   phonePopUp.classList.toggle('submenu-phone--active');
// }

/*  */

/* ES6 */

// const buttonItems = document.querySelectorAll('.button-item');

// for (let buttonItem of buttonItems) {
//   buttonItem.addEventListener('click', (event) => event.preventDefault() )
// }

/*  */

// function doubleClickHandler(event) {
//   console.log('doubleclick', this.innerText);
//   this.removeEventListener('click', clickHandler);
//   this.removeEventListener('dblclick', doubleClickHandler);
// }

// for (let phoneDropdown of phonesDropdown) {
//   phoneDropdown.addEventListener('click', event => {
//     event.preventDefault();
//     this.classList.toggle('submenu-phone--active');
//   });
// }

// phonesDropdown.addEventListener('click', showPopUp);

// function showPopUp(e) {
//   e.preventDefault();
//   phonePopUp.classList.toggle('submenu-phone--active');
// }
// if (phonePopUp.classList.contains('submenu-phone--active')) {
//   function showPopUp(e) {
//     e.preventDefault();
//     phonePopUp.classList.remove('submenu-phone--active');
//   }
// } else {
//   function showPopUp(e) {
//     e.preventDefault();
//     phonePopUp.classList.add('submenu-phone--active');
//   }
// }

// phoneDropdown.addEventListener('mouseenter', hidePopUp);

// function hidePopUp() {
//   phonePopUp.style.display = 'none';
// }

// mobileNav.classList.toggle('mobile-nav--active');
// mobileNav.classList.contains('mobile-nav--active')

// let mobileMenu = () => mobileNav.classList.add('.mobile-nav--active');

// console.log(mobileNav.parentElement);
// console.log(mobileNav.closest('.header-mobile'));

// console.log(mobileNav.classList);

// const array = [5, 4, 3, 2, 1];

// for (let i = 0; i < array.length; i++) {
//   const it = array[i];
//   console.log(it);
// }

// array.forEach((it) => {
// 	console.log(it);
// })

// for (const it of array) {
// 	console.log(it);
// }

// const numbers = [5, 4, 3, 2, 1];

// numbers.find((it) => it % 2 === 0)
