const menu = document.querySelector('.menu');
const menu_li = document.querySelectorAll('.nav');
const intro = document.querySelector('.intro');
const openMenu = document.querySelector('.open-menu');
const subIntro = document.querySelector('.sub-intro');

console.log(menu_li);

function toggleMenu() {
    // intro.style.display = 'none';
    // intro.innerHTML = '';
    intro.classList.toggle('hide');
    subIntro.classList.toggle('hide');
    menu.classList.toggle('animate-menu');
    menu_li.forEach(item => {
    item.classList.toggle('animate-li');
    });
}