/* ------------- PRELOADER ------------- */

function removeLoader() {
    document.querySelector('.preloader').style.display = 'none';
}

window.addEventListener('load', removeLoader)

/* ------------- SCROLL TO TOP BUTTON CHANGE ------------- */

function scrollToTopBtn() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('scrollToTopBtn').style.opacity = '1'
        document.getElementById('scrollToTopBtn').style.visibility = 'visible'
    }else {
        document.getElementById('scrollToTopBtn').style.opacity = '0'
        document.getElementById('scrollToTopBtn').style.visibility = 'hidden'
    }
}
window.addEventListener('scroll', scrollToTopBtn)
/* ------------- CHANGE HEADER ON SCROLL ------------- */

const nav = document.querySelector('nav')

function changeHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add('change-header')
    } else {
        nav.classList.remove('change-header')
    }
}

window.addEventListener('scroll', changeHeader)

/* ------------- TOGGLE NAVIGATION ------------- */

const navMenu = document.getElementById('nav-menu');
const navigation = document.querySelector('nav');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

function showNaw() {
    navMenu.style.display = 'flex';
    navigation.style.height = '320px';
}

function hideNaw() {
    navMenu.style.display = 'none';
    navigation.style.height = '80px';
}

/* HIDE NAV WHEN GO TO SECTION */

const navLinks = document.querySelectorAll('.nav__list li a');

function removeNav() {
    // Add break point using Jquery
    if ($(window).width() < 880) {
        navMenu.style.display = 'none';
        navigation.style.height = '80px';
    }
}

navLinks.forEach(link => link.addEventListener('click', removeNav))

/* ------------- POP UP MODALS ------------- */

/* ------- 1ST POP UP ------- */

const popUp1 = document.getElementById('pop-up1');
const img1 = document.getElementById('cup');
const popUpImg1 = document.getElementById('pop-up-cup');

img1.onclick = function () {
    popUp1.style.display = 'block';
    popUpImg1.src = this.src;
}

const span1 = document.getElementsByClassName('close1')[0];

span1.onclick = function () {
    popUp1.style.display = 'none'
}
/* ------- 2ND POP UP ------- */

const popUp2 = document.getElementById('pop-up2');
const img2 = document.getElementById('coat');
const popUpImg2 = document.getElementById('pop-up-coat');

img2.onclick = function () {
    popUp2.style.display = 'block';
    popUpImg2.src = this.src;
}

const span2 = document.getElementsByClassName('close2')[0];

span2.onclick = function () {
    popUp2.style.display = 'none'
}

/* ------- 3RD POP UP ------- */

const popUp3 = document.getElementById('pop-up3');
const img3 = document.getElementById('sock');
const popUpImg3 = document.getElementById('pop-up-socks');

img3.onclick = function () {
    popUp3.style.display = 'block';
    popUpImg3.src = this.src;
}

const span3 = document.getElementsByClassName('close3')[0];

span3.onclick = function () {
    popUp3.style.display = 'none'
}

/* ------- 4TH POP UP ------- */

const popUp4 = document.getElementById('pop-up4');
const img4 = document.getElementById('globe');
const popUpImg4 = document.getElementById('pop-up-globe');

img4.onclick = function () {
    popUp4.style.display = 'block';
    popUpImg4.src = this.src;
}

const span4 = document.getElementsByClassName('close4')[0];

span4.onclick = function () {
    popUp4.style.display = 'none'
}

/* ------------- SWIPER ------------- */

const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        880: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

/* ------------- PARTY SIGNUP FORM ------------- */

function signUp() {
    if (document.getElementById('email').validity.valid) {
        alert('Signed up successfully!');
    } else {
        return;
    }
}

/* ------------- SCROLL TO SECTION------------- */

function scrollToTop(){
    window.scrollTo(0,0)
}

function scrollToShop() {
    const shop = document.getElementById('shop');
    shop.scrollIntoView();
}

/* ------------- SLIDE IN WHEN IN VIEW ------------- */

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('inViewport', entry.isIntersecting)
    })
};
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}
const ELs_inViewport = document.querySelectorAll('[data-inviewport]')

ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions)
})

/* ------------- TOGGLE LIGHT/DARK MODE ------------- */
// VARIABLES
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
let root = document.querySelector(':root');

function changeToDark() {
    moon.style.visibility = 'hidden';
    moon.style.opacity = '0';
    sun.style.visibility = 'visible';
    sun.style.opacity = '1';

    document.getElementById('snowflake').style.visibility = 'visible'
    document.getElementById('snowflake').style.opacity = '1'

    // REST PROPERTIES
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty('--bg-color', '#08613d');
    root.style.setProperty('--dark-color', '#aaf5ff');
    root.style.setProperty('--hover-color', 'rgb(238, 179, 179)');
    root.style.setProperty(' --header--change-color', '#11ab73d7');
}

function changeToLight() {
    moon.style.visibility = 'visible';
    moon.style.opacity = '1';
    sun.style.visibility = 'hidden';
    sun.style.opacity = '0';

    document.getElementById('snowflake').style.visibility = 'hidden'
    document.getElementById('snowflake').style.opacity = '0'

    // REVERT PROPERTIES
    root.style.setProperty('--text-color', '#000');
    root.style.setProperty('--bg-color', '#C2FFE7');
    root.style.setProperty('--dark-color', '#010050');
    root.style.setProperty('--hover-color', 'rgb(220, 117, 117)');
    root.style.setProperty(' --header--change-color', '#aee1ced7');
}
