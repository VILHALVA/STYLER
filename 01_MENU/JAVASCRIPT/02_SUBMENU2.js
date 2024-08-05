window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/01_MENU/HTML/01_MENU%20PRINCIPAL.html';

    if (previousPage.startsWith('file://')) {
        document.body.classList.add('js-enabled');
        return;
    }

    else if (previousPage.startsWith('https://') && !previousPage.includes(requiredSubstring)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    } 
    else {
        document.body.classList.add('js-enabled');
    }
};
