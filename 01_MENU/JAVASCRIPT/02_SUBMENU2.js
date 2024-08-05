window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = '01_MENU%20PRINCIPAL.html';

    // Verifica se o referenciador é vazio ou é uma URL local
    if (!previousPage || previousPage.startsWith('file://')) {
        // Permite o acesso se for URL local ou se não houver referenciador
        document.body.classList.add('js-enabled');
        return;
    }

    // Verifica se o referenciador é uma URL HTTP/HTTPS e se contém a substring necessária
    if (previousPage.startsWith('http') && !previousPage.includes(requiredSubstring)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    } 
    else {
        // Permite o acesso se o referenciador contém a substring necessária
        document.body.classList.add('js-enabled');
    }
};
