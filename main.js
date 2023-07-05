//Profile Picture appering after clicking on it.
const dp = document.querySelector (".dp");
const clickContainer = document.querySelector (".click_container");
const safayetImage = document.querySelector (".safayet_img");
const backButton = document.querySelector (".arrow_left"); 

clickContainer.style.pointerEvents = "none";
clickContainer.style.opacity = "0";
backButton.style.transform = "translateX(-100%)";

dp.addEventListener ("click", () => {
    clickContainer.style.opacity = 1;
    clickContainer.style.pointerEvents = "all";
    backButton.style.transform = "translateX(0)";
});

backButton.addEventListener ("click", () => {
    clickContainer.style.opacity = "0";
    clickContainer.style.pointerEvents = "none";
    backButton.style.transform = "translateX(-100%)";
});

//Nav indicator moving according to the click.
const navUl = document.querySelector (".ul");
const navLinks = Array.from (navUl.children);
const indicator = document.querySelector (".indicator");

navLinks[1].addEventListener ("click", () => {
    indicator.style.transform = "translateX(0.4em)";
    indicator.style.width = "5.8em";
    indicator.style.opacity = "1";
});

navLinks[2].addEventListener ("click", () => {
    indicator.style.transform = "translateX(10em)";
    indicator.style.width = "4.7em";
    indicator.style.opacity = "1";
});

navLinks[3].addEventListener ("click", () => {
    indicator.style.transform = "translateX(18.8em)";
    indicator.style.width = "3.9em";
    indicator.style.opacity = "1";
});

//Nav svg animation.
const address = document.querySelector (".address_svg");
const education = document.querySelector (".education_svg");
const others = document.querySelector (".others_svg");
navLinks[1].addEventListener ("click", () => {
    education.style.opacity = "1";
    others.style.opacity = "0.3";
    address.style.opacity = "0.3";
});

navLinks[2].addEventListener ("click", () => {
    address.style.opacity = "1";
    education.style.opacity = "0.3";
    others.style.opacity = "0.3";
});

navLinks[3].addEventListener ("click", () => {
    others.style.opacity = "1";
    education.style.opacity = "0.3";
    address.style.opacity = "0.3";
});

//Infos popping up by clicking on the navigations.
const addressBox = document.querySelector (".address");
const educationBox = document.querySelector (".education"); 
const othersBox = document.querySelector (".others"); 

navLinks[1].addEventListener ("click", () => {
    educationBox.style.position = "relative";
    educationBox.style.opacity = "1";
    addressBox.style.position = "absolute";
    addressBox.style.opacity = "0";
    othersBox.style.position = "absolute";
    othersBox.style.opacity = "0";
});

navLinks[2].addEventListener ("click", () => {
    addressBox.style.position = "relative";
    addressBox.style.opacity = "1";
    othersBox.style.position = "absolute";
    othersBox.style.opacity = "0";
    educationBox.style.position = "absolute";
    educationBox.style.opacity = "0";
});

navLinks[3].addEventListener ("click", () => {
    othersBox.style.position = "relative";
    othersBox.style.opacity = "1";
    addressBox.style.position = "absolute";
    addressBox.style.opacity = "0";
    educationBox.style.position = "absolute";
    educationBox.style.opacity = "0";
});

console.log();
