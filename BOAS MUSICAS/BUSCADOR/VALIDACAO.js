window.onload = function () {
    const previousPage = document.referrer;
    const allowedPages = [
        'https://vilhalva.github.io/STYLER/01_MENU/HTML/MENU_BOAS%20MUSICAS.html'
    ];

    if (!allowedPages.includes(previousPage)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO SUBMENU! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = 'https://vilhalva.github.io/STYLER/STYLER.html';
    }

    document.body.classList.add('js-enabled');
};