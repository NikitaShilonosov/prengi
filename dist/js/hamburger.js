const hamburger = document.querySelector('.hamburger'),       
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),   /* Создали переменные для обращения к ним  */
      li = document.querySelector ('.menu__list');
hamburger.addEventListener('click', () => {         /* Добавили что при клике на гамбургер будет добавляться класс актив для меню */
    menu.classList.add('active'),
    hamburger.classList.add('active')

});
/* Добавляем обработчик заданий по клику для закрытия гамбургер меню */
close.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('active')
});
menu.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('active')
});
li.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('active')
});
