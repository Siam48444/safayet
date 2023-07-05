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
    indicator.style.width = "5em";
});

navLinks[2].addEventListener ("click", () => {
    indicator.style.transform = "translateX(10em)";
    indicator.style.width = "4.5em";
});

navLinks[3].addEventListener ("click", () => {
    indicator.style.transform = "translateX(19.15em)";
    indicator.style.width = "3.5em";
});

console.log();
