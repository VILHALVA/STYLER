window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR_NO_SITE/HTML/ZZZ.html';

    if (previousPage.startsWith('file://')) {
        // Permite acesso se a página foi carregada a partir de um arquivo local
        document.body.classList.add('js-enabled');
        return;
    }

    if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            // Permite acesso se a página anterior corresponder ao URL necessário
            document.body.classList.add('js-enabled');
        } 
        else {
            // Bloqueia o acesso e redireciona se a página anterior não corresponder
            document.body.style.display = 'none';
            alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
            window.location.href = '../../STYLER.html';
        }
    }
};
