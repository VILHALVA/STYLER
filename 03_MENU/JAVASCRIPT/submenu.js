/* VALIDAÇÃO DE HTTPS DOS SUBMENUS: */

window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/03_MENU/HTML/01_MENU%20PRINCIPAL.html';

    function denyAccess() {
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESTE SUBMENU SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = 'https://vilhalva.github.io/STYLER/index.html';
    }

    if (currentPageProtocol === 'file:') {
        document.body.classList.add('js-enabled');
        return;
    }

    if (!previousPage) {
        denyAccess();
        return;
    }

    if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            document.body.classList.add('js-enabled');
        } 
        else {
            denyAccess();
        }
        return;
    }

    denyAccess();
};

