window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR_NO_SITE/HTML/ZZZ.html';

    // Permitir acesso se a página foi carregada a partir de um arquivo local
    if (previousPage.startsWith('file://') || !previousPage) {
        document.body.classList.add('js-enabled');
        console.log('Acesso permitido via file:// ou referrer não disponível');
        return;
    }

    // Verificar se a página anterior é uma URL HTTPS
    if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            document.body.classList.add('js-enabled');
            console.log('Acesso permitido via HTTPS com URL esperada');
        } else {
            document.body.style.display = 'none';
            alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
            window.location.href = '../../STYLER.html';
        }
    } else {
        // Para URLs que não são `file://` nem `https://`
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA DE UMA LOCALIZAÇÃO NÃO PERMITIDA! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    }
};
