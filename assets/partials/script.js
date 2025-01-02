// hamburguer menu
document.addEventListener('DOMContentLoaded', () => {
  const menuMobile = document.getElementById('menu-mobile')
  const btnMenu = document.getElementById('btn-menu')
  const overlayMobile = document.getElementById('overlay-mobile')

  let isOpen = false
  let NoOpen = false

  function toggleMenu () {
    isOpen = !isOpen
    menuMobile.style.display = isOpen ? 'block' : 'none'
    btnMenu.classList.toggle('active')
    overlayMobile.style.display = isOpen ? 'block' : 'none'
    overlayMobile.classList.toggle('active')
  }

  btnMenu.addEventListener('click', toggleMenu)
  menuMobile.addEventListener('click', toggleMenu)
  overlayMobile.addEventListener('click', toggleMenu)

  // Adiciona uma transição suave para o menu
  menuMobile.style.transition = 'all 1s ease-in-out'
})
// hamburguer menu final

// transitions JS
window.sr = ScrollReveal({ reset: true })

sr.reveal('.h1__hero', { rotate: { x: 80, y: 0, z: 0 }, duration: 3000 })
sr.reveal('.here-me', { rotate: { x: 2, y: 70, z: 5 }, duration: 3000 })
// sr.reveal('#btn-menu', {rotate: {x: 0, y:100, z:10}, duration:2800});
// sr.reveal('.logo-header', {rotate: {x: 100, y:0, z:0}, duration:2900});
// sr.reveal('.ul__nav', {rotate: {x: 100, y:1, z:0}, duration:3200});
sr.reveal('#projects', { rotate: { x: 0, y: 70, z: 0 }, duration: 2900 })
sr.reveal('.right-hero', { rotate: { x: 100, y: 1, z: 0 }, duration: 3300 })
sr.reveal('#contact', { rotate: { x: 0, y: 70, z: 0 }, duration: 2900 })
sr.reveal('.footer', { rotate: { x: 0, y: 70, z: 0 }, duration: 2900 })
sr.reveal('.icons-footer', { rotate: { x: -100, y: 0, z: 0 }, duration: 3500 })
sr.reveal('.projects', { rotate: { x: 0, y: 70, z: 0 }, duration: 2900 })
sr.reveal('.project-content', { rotate: { x: 0, y: 70, z: 0 }, duration: 3500 })
sr.reveal('.icon-project', { rotate: { x: 0, y: 70, z: 0 }, duration: 5000 })
sr.reveal('.text-project', { rotate: { x: 0, y: 70, z: 0 }, duration: 3900 })
sr.reveal('.img-project', { rotate: { x: 0, y: 70, z: 0 }, duration: 4800 })
sr.reveal('.card', { rotate: { x: 20, y: 50, z: 0 }, duration: 4200 })
sr.reveal('.text-projects', { rotate: { x: 20, y: 50, z: 0 }, duration: 4200 })
sr.reveal('.fz-5', { rotate: { x: 20, y: 50, z: 0 }, duration: 4500 })
sr.reveal('.text__skills', { rotate: { x: 20, y: 60, z: 0 }, duration: 4200 })
// transitions JS final

// light-mode
let trilho = document.getElementById('mode')
let body = document.getElementById('body')

// função para salvar o tema no localStorage
function saveSchemePreferences () {
  if (body.classList.contains('light')) {
    localStorage.setItem('scheme', 'light')
  } else {
    localStorage.setItem('scheme', 'dark')
  }
}
// função para salvar o tema no localStorage

// função para carregar o tema salvo no localStorage
function loadScheme () {
  const scheme = localStorage.getItem('scheme')
  if (scheme === 'light') {
    body.classList.add('light')
    trilho.classList.add('light')
  } else if (scheme === 'dark') {
    body.classList.remove('light')
    trilho.classList.remove('light')
  }
}
// função para carregar o tema salvo no localStorage

// função para alternar o tema
trilho.addEventListener('click', () => {
  trilho.classList.toggle('light')
  body.classList.toggle('light')
  saveSchemePreferences()
})
// função para alternar o tema

// chamar o carregar o tema
window.addEventListener('load', loadScheme)
// chamar o carregar o tema

// light-mode final
