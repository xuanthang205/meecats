const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector('.header .content_right')
const backBtn = document.querySelector('.icon_back')
console.log(menu)
menuBtn.addEventListener('click', () => {
  menu.classList.add('is_open')
})

backBtn.addEventListener('click', () => {
  menu.classList.remove('is_open')
})