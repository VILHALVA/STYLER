window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const allowedReferrers = [
        'https://vilhalva.github.io/STYLER/01_HOME/ANUNCIO/index.html',
        'https://vilhalva.github.io/STYLER/01_HOME/SOBRE/index.html'
    ];

    function denyAccess() {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO ANUNCIO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
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
        if (allowedReferrers.includes(previousPage)) {
            document.body.classList.add('js-enabled');
            document.body.classList.remove('escondido');
        } 
        else {
            denyAccess();
        }
        return;
    }

    denyAccess();
};
