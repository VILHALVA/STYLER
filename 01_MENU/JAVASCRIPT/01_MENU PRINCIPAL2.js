window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/02_ENTRAR_NO_SITE/HTML/ZZZ.html';

    if (previousPage.startsWith('file://') || !previousPage) {
        document.body.classList.add('js-enabled');
        console.log('Acesso permitido via file:// ou referrer não disponível');
        return;
    }

    else if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            document.body.classList.add('js-enabled');
        } 
        else {
            document.body.style.display = 'none';
            alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA PÁGINA DE VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
            window.location.href = '../../STYLER.html';
        }
    } 
    else {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA DE UMA LOCALIZAÇÃO NÃO PERMITIDA! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    }
};
