// hamburguer menu
document.addEventListener('DOMContentLoaded', () => {
    const menuMobile = document.getElementById('menu-mobile');
    const btnMenu = document.getElementById('btn-menu');
    const overlayMobile = document.getElementById('overlay-mobile');
    

    let isOpen = false;
    let NoOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
        menuMobile.style.display = isOpen ? 'block' : 'none';
        btnMenu.classList.toggle('active');
        overlayMobile.style.display = isOpen ? 'block' : 'none';
        overlayMobile.classList.toggle('active');
    }


    btnMenu.addEventListener('click', toggleMenu);
    menuMobile.addEventListener('click', toggleMenu);
    overlayMobile.addEventListener('click', toggleMenu);

    // Adiciona uma transição suave para o menu
    menuMobile.style.transition = 'all 1s ease-in-out';
});
// hamburguer menu final

// transitions JS
window.sr = ScrollReveal({reset: true});


sr.reveal('.h1__hero', {rotate: {x: 80, y:0, z:0}, duration:3000});
sr.reveal('.here-me', {rotate: {x: 2, y:70, z:5}, duration:3000});
// sr.reveal('#btn-menu', {rotate: {x: 0, y:100, z:10}, duration:2800});
// sr.reveal('.logo-header', {rotate: {x: 100, y:0, z:0}, duration:2900});
// sr.reveal('.ul__nav', {rotate: {x: 100, y:1, z:0}, duration:3200});
sr.reveal('#projects', {rotate: {x: 0, y:70, z:0}, duration:2900});
sr.reveal('.right-hero', {rotate: {x: 100, y:1, z:0}, duration:3300});
sr.reveal('#contact', {rotate: {x: 0, y:70, z:0}, duration:2900});
sr.reveal('.footer', {rotate: {x: 0, y:70, z:0}, duration:2900});
sr.reveal('.icons-footer', {rotate: {x: -100, y:0, z:0}, duration:3500});
sr.reveal('.projects', {rotate: {x: 0, y:70, z:0}, duration:2900});

// transitions JS final

// light-mode

let trilho = document.getElementById('mode');
let body = document.getElementById('body');

trilho.addEventListener('click', () =>{
    trilho.classList.toggle('light')
    body.classList.toggle('light')
})

// light-mode final