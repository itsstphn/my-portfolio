const menu = document.querySelector('.menu');
const menu_li = document.querySelectorAll('.nav');
const intro = document.querySelector('.intro');
const openMenu = document.querySelector('.open-menu');
const subIntro = document.querySelector('.sub-intro');
const menu_bg = document.querySelector('.menu-bg');
const hero_image = document.querySelector('.hero-img');

console.log(hero_image);

function toggleMenu() {

    menu.classList.toggle('animate-menu');
    menu_bg.classList.toggle('animate-ul');
    // openMenu.classList.toggle('animate-ul');
    menu_li.forEach(item => {
        item.classList.toggle('animate-li');
    })
    hero_image.classList.toggle('image-darken');
}