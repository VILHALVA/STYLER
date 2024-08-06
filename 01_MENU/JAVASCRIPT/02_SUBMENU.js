window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = 'https://vilhalva.github.io/STYLER/01_MENU/HTML/01_MENU%20PRINCIPAL.html';

    function VOLTAR() {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELO MENU PRINCIPAL! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    }

    if (previousPage.startsWith('file://') || !previousPage) {
        document.body.classList.add('js-enabled');
        return;
    }

    if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            document.body.classList.add('js-enabled');
            console.log('Acesso permitido via HTTPS com URL esperada');
        } 
        else {
            VOLTAR();
        }
    } 
    else {
        VOLTAR();
    }
};
