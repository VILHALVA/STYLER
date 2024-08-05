window.onload = function () {
    const previousPage = document.referrer;
    const requiredSubstring = '01_MENU%20PRINCIPAL.html';

    if (!previousPage || previousPage.startsWith('file://')) {
        console.log('Referenciador vazio ou URL local:', previousPage);
        document.body.classList.add('js-enabled');
        return;
    }

    console.log('Referenciador:', previousPage);
    console.log('Contém a substring:', previousPage.includes(requiredSubstring));

    if (!previousPage.includes(requiredSubstring)) {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESSA PÁGINA SEM PASSAR PELA VALIDAÇÃO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!');
        window.location.href = '../../STYLER.html';
    } 
    else {
        document.body.classList.add('js-enabled');
    }
};
