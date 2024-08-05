window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR_NO_SITE/HTML/ZZZ.html';

    if (previousPage.startsWith('file://') || previousPage === requiredSubstring) {
        document.body.classList.add('js-enabled');
        return;
    }

    if (previousPage.startsWith('https://') && !previousPage.includes(requiredSubstring)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    }

    if (previousPage.startsWith('https://') && previousPage.includes(requiredSubstring)) {
        document.body.classList.add('js-enabled');
    }
};
