window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/01_MENU/HTML/MENU_BOAS%20MUSICAS.html';

    function ALERTA() {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO SUBMENU! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    }

    if (previousPage.startsWith('file://') || !previousPage) {
        document.body.classList.add('js-enabled');
        return;
    }

    else if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            document.body.classList.add('js-enabled');
        } 
        else {
            ALERTA();   
        }
    } 
    else {
        ALERTA();  
    }
};


