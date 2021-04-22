//var name = window.prompt("Olá, qual o seu nome?")
//    alert ("Espero que goste do meu currículo, " + name + "!") // Não esquecer de concatenar "+"

let show = true;
const menuSection = document.querySelector(".menu-section")
const paragraphMenu = document.querySelector(".teste")
//const mainMobile = document.querySelector(".main-top_mobile")
//const mainItems = document.querySelector (".main-items")

function menuMobile() {
    document.body.style.overflow = show ? "hidden" : "initial"
    paragraphMenu.innerHTML = show ? "&#x2716;" : "&equiv;"
    menuSection.classList.toggle("on", show);
    show = !show;
    
    console.log(show)
}
function mobileTop () {
    document.body.style.overflow = show ? "hidden" : "initial"
    paragraphMenu.innerHTML = show ? "&#x2716;" : "&equiv;"
    menuSection.classList.toggle("on", show);
    show = !show;
}