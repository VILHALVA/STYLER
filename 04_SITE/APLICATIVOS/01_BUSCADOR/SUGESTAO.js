document.addEventListener('DOMContentLoaded', function () {   
    const NameInput = document.getElementById('InputName');

    const suggestions = [
        "BINARIOS", "BUSCADOR AUTOCOMPLETE", "CADASTRO", "CONVERTER PARA UPPER VOLUME 1", "CONVERTER PARA UPPER VOLUME 2", "EDITOR EMBED", "ESTATISTICAS DO GITHUB", "FORMATAR LETRAS", "GERADOR DE SENHAS", "IFRAME DO YOUTUBE VOLUME 1", "IFRAME DO YOUTUBE VOLUME 2", "IFRAME SITES", "REPL COM PYSCRIPT", "VOZ DO NARRADOR", "WORD"        
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
