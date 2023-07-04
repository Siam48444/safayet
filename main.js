

//Nav indicator moving according to the click.
const navUl = document.querySelector (".ul");
const navLinks = Array.from (navUl.children);
const indicator = document.querySelector (".indicator");

navLinks[1].addEventListener ("click", function() {
    indicator.style.transform = "translateX(0.4em)";
    indicator.style.width = "5em";
});

navLinks[2].addEventListener ("click", function() {
    indicator.style.transform = "translateX(10em)";
    indicator.style.width = "4.5em";
});

navLinks[3].addEventListener ("click", function() {
    indicator.style.transform = "translateX(19.15em)";
    indicator.style.width = "3.5em";
});

console.log();
