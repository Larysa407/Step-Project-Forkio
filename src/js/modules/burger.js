// burger

const menuBtn = document.querySelector('.burger-menu')
const menu = document.querySelector('.header-menu__items')
const body = document.querySelector('body')

document.addEventListener('click', (e) => {
    if (
        e.target.closest('.burger-menu') ||
        (!e.target.closest('.header-menu__items') &&
            body.classList.contains('lock'))
    ) {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
    }
})
