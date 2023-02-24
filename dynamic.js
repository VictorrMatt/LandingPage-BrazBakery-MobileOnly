/* Acessando botões */
const btn_switch = document.getElementById("float-menu"); 
const btn_list = document.getElementById("list");

/* Determina se o menu está visivel ou não */
var active = false;

/* Tornar "menu flutuante" visivel quando clicarmos nas opções */ 
function stc_menu() {
    if (active == false) {
        btn_switch.style.visibility = "visible";
        active = true;

        btn_list.addEventListener("click", function handleClick() {
            btn_switch.style.visibility = "hidden";
            active = false;
        })
    } 
}

/* Fechar o "menu flutuante" */
function close_menu() {
    btn_switch.style.visibility = "hidden";
    active = false;
}

/* Detectar posição da scroll quando usado */
window.onscroll = function () {
    scrollpos = this.scrollY;
    
    /* Apenas se o "menu flutuante" estiver invisivel */
    if (active == false) {
        if (scrollpos > 295) {
            nav.style.opacity = opact;
            zap.style.opacity = opact;
        } 
        else if (scrollpos < 295) {
            nav.style.opacity = "1";
            zap.style.opacity = "1";
        }
    }
}

/* Opacidade minima da navbar */
const nav = document.getElementById("navbar");
const zap = document.getElementById("whatsapp");
var scrollpos = 0;
const opact = "0.6"; 

/* Detectando se o mouse está ou não sobre a navbar */
nav.addEventListener("mouseover", function navOverOpact() {
    nav.style.opacity = "1";
})

nav.addEventListener("mouseout", function navOutOpact() {
    /* Diminuir a opacidade apenas se o "menu flutuante" estiver invisivel */
    if (active != true && scrollpos > 295) {
        nav.style.opacity = opact;
    }
})

/* Detectando se o mouse está ou não sobre whatsapp */
zap.addEventListener("mouseover", function napOverOpact() {
    zap.style.opacity = "1";
})

zap.addEventListener("mouseout", function napOutOpact() {
    /* Diminuir a opacidade apenas se o "menu flutuante" estiver invisivel */
    if (active != true && scrollpos > 295) {
        zap.style.opacity = opact;
    }
})

/* Alterando cada elemento sobre uma lista */
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
        const img = card.querySelector(".card-img");

        img.style.height = "76px";
    })
})

cards.forEach(function(card) {
    card.addEventListener("mouseout", function() {
        const img = card.querySelector(".card-img");

        img.style.height = "56px";
    })
})

const elements = document.querySelectorAll(".product");

elements.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        const item = element.querySelector(".element-content");
        
        item.style.opacity = 1;
    })
})

elements.forEach(function(element) {
    element.addEventListener("mouseout", function() {
        const item = element.querySelector(".element-content");
        
        item.style.opacity = 0;
    })
})