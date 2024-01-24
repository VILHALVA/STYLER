window.onload = function () {
    const previousPage = document.referrer;
    const allowedPages = [
        'https://vilhalva.github.io/STYLER/02_CADASTRO%20E%20LOGIN/HTML/LOGIN.html',
        'https://vilhalva.github.io/STYLER/02_CADASTRO%20E%20LOGIN/HTML/ENTRAR.html'
    ];

    if (!allowedPages.includes(previousPage)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE LOGIN OU DE AUTENTICAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = 'https://vilhalva.github.io/STYLER/STYLER.html';
    }

    document.body.classList.add('js-enabled');
};
