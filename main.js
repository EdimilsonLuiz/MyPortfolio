const btnMobile = document.querySelector('.btn-mobile')

function menuMobile(){

  const nav = document.querySelector('nav')
  nav.classList.toggle('active')
}
btnMobile.addEventListener('click', menuMobile);
