const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const home = document.querySelector('.home');
const dropdownnav = document.querySelector('.drop-down-nav');
const closeBtn = document.querySelector('.close-btn');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('open');
        menu.classList.add('open'); 
        home.classList.add('open');
        dropdownnav.classList.add('open');
        showMenu = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');
        home.classList.remove('open');
        dropdownnav.classList.remove('open');
        showMenu = false;
    }
    

}