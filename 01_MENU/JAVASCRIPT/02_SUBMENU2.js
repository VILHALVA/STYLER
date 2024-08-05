window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/01_MENU/HTML/01_MENU%20PRINCIPAL.html';

    // Permite acesso se o referenciador for uma URL local ou se for o referenciador correto
    if (previousPage.startsWith('file://') || previousPage === requiredSubstring) {
        document.body.classList.add('js-enabled');
        return;
    }

    // Bloqueia acesso se for uma URL HTTPS e não contém a substring necessária
    if (previousPage.startsWith('https://') && !previousPage.includes(requiredSubstring)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    } 
    else {
        document.body.classList.add('js-enabled');
    }
};
