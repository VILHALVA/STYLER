window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR_NO_SITE/HTML/ZZZ.html';
    
    console.log('Referrer:', previousPage);
    console.log('Current protocol:', currentPageProtocol);

    function denyAccess() {
        console.log('Acesso não permitido');
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    }

    // Permitir acesso se a página foi carregada a partir de um arquivo local
    if (currentPageProtocol === 'file:') {
        document.body.classList.add('js-enabled');
        console.log('Acesso permitido via file://');
        return;
    }

    // Se não houver referrer e não é acesso via file, tratar como acesso direto não permitido
    if (!previousPage) {
        console.log('Acesso direto sem referrer, não permitido');
        denyAccess();
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
            denyAccess();
        }
        return;
    }

    // Bloquear todos os outros acessos
    console.log('Acesso não permitido: URL não é file:// nem HTTPS');
    denyAccess();
};
