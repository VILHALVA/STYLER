window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const requiredSubstrings = [
        'https://vilhalva.github.io/STYLER/02_MENU/HTML/01_MENU%20PRINCIPAL.html',
        'https://vilhalva.github.io/STYLER/02_MENU/BUSCADOR/CODIGO.html'
    ];

    function denyAccess() {
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../index.html';
    }

    // Verifica se a página anterior é válida
    const isPreviousPageAllowed = previousPage.startsWith('https://') &&
        requiredSubstrings.some(substring => previousPage.includes(substring));

    // Verifica se a origem é file:// e não há referrer, tratando como acesso permitido para testes locais
    const isFileProtocol = currentPageProtocol === 'file:';
    const isValidAccess = isPreviousPageAllowed || isFileProtocol;

    if (isValidAccess) {
        document.body.classList.add('js-enabled');
    } else {
        denyAccess();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modeIcon = document.getElementById('mode_icon');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    modeIcon.addEventListener('click', () => {
        if (modeIcon.classList.contains('fa-moon')) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
            themeStylesheet.setAttribute('href', '../CSS/TEMA_02.css'); 
        } 
        else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
            themeStylesheet.setAttribute('href', '../CSS/TEMA_01.css'); 
        }
    });
});
