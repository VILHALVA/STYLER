window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR_NO_SITE/HTML/ZZZ.html';

    console.log('Referrer:', previousPage);

    // Permitir acesso se a página foi carregada a partir de um arquivo local
    if (previousPage.startsWith('file://')) {
        document.body.classList.add('js-enabled');
        console.log('Acesso permitido via file://');
        return;
    }

    // Verificar se a página anterior é uma URL HTTPS
    if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            document.body.classList.add('js-enabled');
            console.log('Acesso permitido via HTTPS com URL esperada');
        } else {
            // Se a URL HTTPS não corresponde à esperada, exibe o alerta e redireciona
            console.log('Acesso não permitido: URL HTTPS sem a substring esperada');
            document.body.style.display = 'none';
            alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
            window.location.href = '../../STYLER.html';
        }
        return;
    }

    // Bloquear todos os outros acessos
    console.log('Acesso não permitido: URL não é file:// nem HTTPS');
    document.body.style.display = 'none';
    alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA DE UMA LOCALIZAÇÃO NÃO PERMITIDA! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
    window.location.href = '../../STYLER.html';
};
