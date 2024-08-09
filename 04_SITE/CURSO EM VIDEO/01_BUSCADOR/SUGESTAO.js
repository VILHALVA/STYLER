document.addEventListener('DOMContentLoaded', function () {   
    const NameInput = document.getElementById('InputName');

    const suggestions = [
       "ANALISADOR DE NUMEROS", "CONTADOR", "GOOGLE GRASS", "HORARIO ATUAL", "IMAGEM FLEXIVEL", "LÂMPADA", "MASCOTE DO ANDROID", "MENU RESPONSIVO", "POEMA CORDEL", "REDES SOCIAIS 01", "REDES SOCIAIS 02", "SITE MOBILE", "TABELA RESPONSIVA", "TABUADA", "TELA DE LOGIN", "VERIFICADOR DE IDADE", "VIDEOS IFRAME"       
    ];

    NameInput.addEventListener('focus', function () {
        NameInput.setAttribute('list', 'suggestions');
    });

    NameInput.addEventListener('blur', function () {
        NameInput.removeAttribute('list');
    });

    const datalist = document.createElement('datalist');
    datalist.id = 'suggestions';
    suggestions.forEach(function (suggestion) {
        const option = document.createElement('option');
        option.value = suggestion;
        datalist.appendChild(option);
    });
    document.body.appendChild(datalist);    
});
