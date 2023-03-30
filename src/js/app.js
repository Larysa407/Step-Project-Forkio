let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.header-menu__items');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

