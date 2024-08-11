document.addEventListener('DOMContentLoaded', function () {   
    const musicNameInput = document.getElementById('InputName');

    const suggestions = [
       "APLICATIVOS", "CALCULADORAS", "CURSO EM VIDEO", "JOGOS", "MEUS SITES", "MUSICAS"       
    ];

    musicNameInput.addEventListener('focus', function () {
        musicNameInput.setAttribute('list', 'suggestions');
    });

    musicNameInput.addEventListener('blur', function () {
        musicNameInput.removeAttribute('list');
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
