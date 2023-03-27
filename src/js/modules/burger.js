// burger

const menuIcon = document.querySelector('.icon-menu')
if(menuIcon) {
    const menu = document.querySelector('.menu__list')
    menuIcon.addEventListener('click', function(e){
        document.body.classList.toggle('lock')
        menuIcon.classList.toggle('active')
        menu.classList.toggle('active')
    })
}