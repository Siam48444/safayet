//Profile Picture appering after clicking on it.
const dp = document.querySelector (".dp");
const clickContainer = document.querySelector (".click_container");
const safayetImage = document.querySelector (".safayet_img");
const backButton = document.querySelector (".arrow_left"); 

clickContainer.style.pointerEvents = "none";
clickContainer.style.opacity = "0";
backButton.style.transform = "translateX(-100%)";

dp.addEventListener ("click", () => {
    clickContainer.style.opacity = "1";
    clickContainer.style.pointerEvents = "all";
    backButton.style.transform = "translateX(0)";
    safayetImage.style.opacity = "1";
    collegeImage.style.opacity = "0";
});

backButton.addEventListener ("click", () => {
    clickContainer.style.opacity = "0";
    clickContainer.style.pointerEvents = "none";
    backButton.style.transform = "translateX(-120%)";
});

//College picture appearing after clicking on the link.
const collegeImage = document.querySelector (".college_img");
const linkCollege = document.querySelector (".link_college");

linkCollege.addEventListener ("click", () => {
    clickContainer.style.opacity = "1";
    clickContainer.style.pointerEvents = "all";
    backButton.style.transform = "translateX(0)";
    safayetImage.style.opacity = "0";
    collegeImage.style.opacity = "1";
});

//Nav indicator moving according to the click.
const navUl = document.querySelector (".ul");
const navLinks = Array.from (navUl.children);
const indicator = document.querySelector (".indicator");

navLinks[1].addEventListener ("click", () => {
    indicator.style.transform = "translateX(3.5em)";
    indicator.style.opacity = "1";
});

navLinks[2].addEventListener ("click", () => {
    indicator.style.transform = "translateX(12.5em)";
    indicator.style.opacity = "1";
});

navLinks[3].addEventListener ("click", () => {
    indicator.style.transform = "translateX(20.8em)";
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

//Switching to dark and light mode.
const dark = document.querySelector (".dark");
const light = document.querySelector (".light");
const body = document.querySelector ("body");
const basicBox = document.querySelector (".basic_info");
const moreBox = document.querySelector (".more_info");
const p1 = document.querySelector ("#p1");
const p2 = document.querySelector ("#p2");
const p3 = document.querySelector ("#p3");
const p4 = document.querySelector ("#p4");
const p5 = document.querySelector ("#p5");
const p6 = document.querySelector ("#p6");
const p7 = document.querySelector ("#p7");
const p8 = document.querySelector ("#p8");
const p9 = document.querySelector ("#p9");
const p10 = document.querySelector ("#p10");
const p11 = document.querySelector ("#p11");
const p12 = document.querySelector ("#p12");
const p13 = document.querySelector ("#p13");
const p14 = document.querySelector ("#p14");
const p15 = document.querySelector ("#p15");
const p16 = document.querySelector ("#p16");
const svg1 = document.querySelector (".svg1");
const svg2 = document.querySelector (".svg2");
const svg3 = document.querySelector (".svg3");
const svg4 = document.querySelector (".svg4");
const svg5 = document.querySelector (".svg5");

light.style.opacity = "0";
light.style.pointerEvents = "none";
light.addEventListener ("click", () => {
    light.style.opacity = "0";
    light.style.pointerEvents = "none";
    light.style.transform = "rotate(360deg)";
    dark.style.transform = "rotate(360deg)";
    dark.style.pointerEvents = "all";
    dark.style.opacity = "1";

    body.style.backgroundColor = "#f8f9fa";
    backButton.style.fill = "#212529";
    basicBox.style.backgroundColor = "#393f44";
    moreBox.style.backgroundColor = "#393f44";

    p1.style.color = ("#212529");
    p2.style.color = ("#212529");
    p3.style.color = ("#212529");
    p4.style.color = ("#212529");
    p5.style.color = ("#212529");
    p6.style.color = ("#212529");
    p7.style.color = ("#212529");
    p8.style.color = ("#212529");
    p10.style.color = ("#212529");
    p11.style.color = ("#212529");
    p13.style.color = ("#212529");
    p14.style.color = ("#212529");
    p16.style.color = ("#212529");

    indicator.style.backgroundColor = ("#212529");
    svg1.style.fill = ("#212529");
    svg2.style.fill = ("#212529");
    svg3.style.fill = ("#212529");
    svg4.style.fill = ("#212529");
    svg5.style.fill = ("#212529");
});

dark.addEventListener ("click", () => {
    dark.style.opacity = "0";
    dark.style.pointerEvents = "none";
    dark.style.transform = "rotate(-360deg)";
    light.style.transform = "rotate(-360deg)";
    light.style.pointerEvents = "all";
    light.style.opacity = "1";
    light.style.fill = "#f8f9fa";

    body.style.backgroundColor = "#212529";
    backButton.style.fill = "#f8f9fa";
    basicBox.style.backgroundColor = "#282c30";
    moreBox.style.backgroundColor = "#282c30";
    
    p1.style.color = ("#f8f9fa");
    p2.style.color = ("#f8f9fa");
    p3.style.color = ("#f8f9fa");
    p4.style.color = ("#f8f9fa");
    p5.style.color = ("#f8f9fa");
    p6.style.color = ("#f8f9fa");
    p7.style.color = ("#f8f9fa");
    p8.style.color = ("#f8f9fa");
    p10.style.color = ("#f8f9fa");
    p11.style.color = ("#f8f9fa");
    p13.style.color = ("#f8f9fa");
    p14.style.color = ("#f8f9fa");
    p16.style.color = ("#f8f9fa");

    indicator.style.backgroundColor = ("#f8f9fa");
    svg1.style.fill = ("#f8f9fa");
    svg2.style.fill = ("#f8f9fa");
    svg3.style.fill = ("#f8f9fa");
    svg4.style.fill = ("#f8f9fa");
    svg5.style.fill = ("#f8f9fa");

    education.addEventListener ("click", () => {
        svg3.style.fill = ("#f8f9fa");
    });
});

