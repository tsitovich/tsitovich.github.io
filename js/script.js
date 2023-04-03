window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_items'),
        menuItem = document.querySelectorAll('.header_item'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger__active');
        menu.classList.toggle('header_items__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger__active');
            menu.classList.toggle('header_items__active');
        })
    })
})