// burger

const menuBtn = document.querySelector('.burger-menu')
const menu = document.querySelector('.header-menu__items')

document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.burger-menu') ||
        !e.target.closest('.header-menu__items')
    ) {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
    }
})
