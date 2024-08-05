window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/01_MENU/HTML/01_MENU%20PRINCIPAL.html';

    console.log("Referer: ", previousPage);  // Adicione este console.log para depuração

    // Permite acesso se o referenciador for uma URL local
    if (previousPage.startsWith('file://')) {
        document.body.classList.add('js-enabled');
        console.log("file://");
        return;
    }

    // Bloqueia o acesso se for uma URL HTTPS que não contém a substring necessária
    if (previousPage.startsWith('https://') && !previousPage.includes(requiredSubstring)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
        return;  // Adicione o return para evitar execução adicional
    } 

    // Caso contrário, adiciona a classe js-enabled
    document.body.classList.add('js-enabled');
    console.log("else");
};
