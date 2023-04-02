const logoBlock = document.querySelector(".header-logo")
const logo = document.querySelector(".header__img");
const text = document.querySelector(".header__text");


logoBlock.addEventListener("mouseover", function () {
text.style.color = "#ffffff";
logo.src = "../img/logo-hover.svg";
})

logoBlock.addEventListener("mouseout", function () {
text.style.color = "#8D81AC";
logo.src = "../img/Logo.svg";
})



