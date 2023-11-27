document.addEventListener('DOMContentLoaded', function () {
    const previousPage = document.referrer;
    const allowedPages = [
        'https://vilhalva.github.io/STYLER/02_CADASTRO%20E%20LOGIN/HTML/LOGIN.html',
        'https://vilhalva.github.io/STYLER/02_CADASTRO%20E%20LOGIN/HTML/FAZER%20DOACAO.html'
    ];

    const isJavaScriptDisabled = document.querySelector('noscript').offsetHeight > 0;

    if (isJavaScriptDisabled) {
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ DESABILITOU O JAVASCRIPT. ISSO NÃO É PERMITIDO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = 'https://vilhalva.github.io/STYLER/STYLER.html';
    } 
    else if (!allowedPages.includes(previousPage)) {
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE LOGIN OU DOAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = 'https://vilhalva.github.io/STYLER/STYLER.html';
    }
});
