function clickMenu() {
    if (MENU.style.display == 'block') {
        MENU.style.display = 'none'
    }

    else {
        MENU.style.display = 'block'
    }
}

function ENTRAR() {
    if (SITE.style.display == 'block') {
        SITE.style.display = 'none'
        BOTAO.style.display = 'block'
    }

    else {
        SITE.style.display = 'block'
        BOTAO.style.display = 'none'
    }
}
