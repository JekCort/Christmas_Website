/* ------------- PRELOADER ------------- */

/* ------------- SCROLL TO TOP BUTTON CHANGE ------------- */

/* ------------- CHANGE HEADER ON SCROLL ------------- */

const nav = document.querySelector('nav')

function changeHeader() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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


/* ------------- POP UP MODALS ------------- */

/* ------- 1ST POP UP ------- */

const popUp1 = document.getElementById('pop-up1');
const img1 = document.getElementById('cup');
const popUpImg1 = document.getElementById('pop-up-cup');

img1.onclick = function (){
    popUp1.style.display = 'block';
    popUpImg1.src = this.src;
}

const span1 = document.getElementsByClassName('close1')[0];

span1.onclick = function (){
    popUp1.style.display = 'none'
}
/* ------- 2ND POP UP ------- */

const popUp2 = document.getElementById('pop-up2');
const img2 = document.getElementById('coat');
const popUpImg2 = document.getElementById('pop-up-coat');

img2.onclick = function (){
    popUp2.style.display = 'block';
    popUpImg2.src = this.src;
}

const span2 = document.getElementsByClassName('close2')[0];

span2.onclick = function (){
    popUp2.style.display = 'none'
}

/* ------- 3RD POP UP ------- */

const popUp3 = document.getElementById('pop-up3');
const img3 = document.getElementById('sock');
const popUpImg3 = document.getElementById('pop-up-socks');

img3.onclick = function (){
    popUp3.style.display = 'block';
    popUpImg3.src = this.src;
}

const span3 = document.getElementsByClassName('close3')[0];

span3.onclick = function (){
    popUp3.style.display = 'none'
}

/* ------- 4TH POP UP ------- */

const popUp4 = document.getElementById('pop-up4');
const img4 = document.getElementById('globe');
const popUpImg4 = document.getElementById('pop-up-globe');

img4.onclick = function (){
    popUp4.style.display = 'block';
    popUpImg4.src = this.src;
}

const span4 = document.getElementsByClassName('close4')[0];

span4.onclick = function (){
    popUp4.style.display = 'none'
}

/* ------------- SWIPER ------------- */

/* ------------- PARTY SIGNUP FORM ------------- */

/* ------------- SCROLL TO SECTION------------- */

/* ------------- SLIDE IN WHEN IN VIEW ------------- */

/* ------------- TOGGLE LIGHT/DARK MODE ------------- */
