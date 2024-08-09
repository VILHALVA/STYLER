document.addEventListener('DOMContentLoaded', function () {   
    const NameInput = document.getElementById('InputName');

    const suggestions = [
        "ALISTAMENTO MILITAR", "ANO BISSEXTO", "CALCULADORA", "CALCULAR HIPOTENUSA", "CALCULAR IMC", "CALCULAR MDC", "CALCULAR MEDIA", "CALCULAR MMC", "CALCULAR PA", "CALCULAR PG", "CALCULAR PORCETAGEM", "CALCULAR SCT", "CONTADOR DE STRING COM PYSCRIPT", "CONVERSOR DE TEMPERATURA", "CONVERSOR DE TEMPO", "EQUACOES DO 1 GRAU", "EQUACOES DO 2 GRAU", "IDADE EM ANOS", "IMPA E PAR COM PYSCRIPT", "INVESTIMENTO", "PALINDROMO", "PODE VOTAR", "POTENCIACAO", "TABUADA", "VERIFICAR TRIANGULO"        
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
