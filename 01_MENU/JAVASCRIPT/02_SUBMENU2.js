window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = '01_MENU%20PRINCIPAL.html';

    if (previousPage.startsWith('file://')) {
        document.body.classList.add('js-enabled');
        return;
    }

    else if (previousPage.startsWith('http') && !previousPage.includes(requiredSubstring)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    } 
    else {
        document.body.classList.add('js-enabled');
    }
};
