let menuAberto = false; 

function mudouTamanho() {
    if (window.innerWidth >= 992) {
        itens.style.display = 'block';
    } 
    else {
        if (!menuAberto) {
            itens.style.display = 'none';
        }
    }
}

function clickMenu() {
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
        menuAberto = false;
    } 
    else {
        itens.style.display = 'block';
        menuAberto = true;
    }
}

