window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR/01_MENU%20PRINCIPAL/index.html';

    function denyAccess() {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../index.html';
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
            document.body.style.display = 'block'; 
        } 
        else {
            denyAccess();
        }
        return;
    }

    denyAccess();
};
