window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR_NO_SITE/HTML/ZZZ.html';
    const currentPageProtocol = window.location.protocol;

    console.log('Referrer:', previousPage);
    console.log('Current protocol:', currentPageProtocol);

    if (currentPageProtocol === 'file:') {
        document.body.classList.add('js-enabled');
        console.log('Acesso permitido via file://');
        return;
    }

    if (!previousPage) {
        console.log('Acesso direto sem referrer, não permitido');
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
        return;
    }

    if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            document.body.classList.add('js-enabled');
            console.log('Acesso permitido via HTTPS com URL esperada');
        } 
        else {
            console.log('Acesso não permitido: URL HTTPS sem a substring esperada');
            document.body.style.display = 'none';
            alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
            window.location.href = '../../STYLER.html';
        }
        return;
    }

    console.log('Acesso não permitido: URL não é file:// nem HTTPS');
    document.body.style.display = 'none';
    alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA DE UMA LOCALIZAÇÃO NÃO PERMITIDA! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
    window.location.href = '../../STYLER.html';
};
