window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const requiredSubstrings = [
        'https://vilhalva.github.io/STYLER/03_MENU/HTML/01_MENU%20PRINCIPAL.html',
        'https://vilhalva.github.io/STYLER/03_MENU/BUSCADOR/index.html'
    ];

    function denyAccess() {
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = 'https://vilhalva.github.io/STYLER/index.html';
    }

    const isPreviousPageAllowed = previousPage.startsWith('https://') &&requiredSubstrings.some(substring => previousPage.includes(substring));
    const isFileProtocol = currentPageProtocol === 'file:';
    const isValidAccess = isPreviousPageAllowed || isFileProtocol;

    if (isValidAccess) {
        document.body.classList.add('js-enabled');
    } 
    else {
        denyAccess();
    }
};
