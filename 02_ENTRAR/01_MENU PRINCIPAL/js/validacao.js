window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/01_HOME/01_INICIO/index.html';

    function denyAccess() {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA HOME! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
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
            document.body.style.display = 'block';
        } 
        else {
            denyAccess();
        }
        return;
    }

    denyAccess();
};

