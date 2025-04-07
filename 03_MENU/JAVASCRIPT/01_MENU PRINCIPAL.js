window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR/ENTRADA.html';

    function denyAccess() {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
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
        } 
        else {
            denyAccess();
        }
        return;
    }

    denyAccess();
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
