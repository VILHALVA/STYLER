window.onload = function () {
    const previousPage = document.referrer;
    const currentProtocol = window.location.protocol;

    const allowedReferrers = [
        'https://vilhalva.github.io/STYLER/01_HOME/ANUNCIO/index.html',
        'https://vilhalva.github.io/STYLER/01_HOME/SOBRE/index.html'
    ];

    const fallbackURL = 'https://vilhalva.github.io/STYLER/index.html';

    document.body.classList.add('escondido');

    function permitirAcesso() {
        document.body.classList.add('js-enabled');
        document.body.classList.remove('escondido');
    }

    function negarAcesso() {
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO ANÚNCIO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        setTimeout(() => {
            window.location.href = fallbackURL;
        }, 100);
    }

    if (currentProtocol === 'file:') {
        permitirAcesso();
        return;
    }

    if (!previousPage) {
        negarAcesso();
        return;
    }

    if (previousPage.startsWith('https://')) {
        if (allowedReferrers.includes(previousPage)) {
            permitirAcesso();
        } 
        else {
            negarAcesso();
        }
        return;
    }

    negarAcesso();
};
