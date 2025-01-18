document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

const hambutton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const main = document.querySelector('.page-container');

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
    nav.classList.toggle('show');
    main.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        hambutton.classList.remove('show');
        nav.classList.remove('show');
    }
})