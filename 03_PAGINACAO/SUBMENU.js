document.addEventListener('DOMContentLoaded', function () {
    const previousPage = document.referrer;
    const allowedPages = [
        'https://vilhalva.github.io/STYLER/01_MENU/HTML/01_MENU%20PRINCIPAL.html'
    ];

    if (!allowedPages.includes(previousPage)) {
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = 'https://vilhalva.github.io/STYLER/STYLER.html';
    }

    document.body.classList.add('js-enabled');
});