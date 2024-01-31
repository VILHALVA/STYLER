document.addEventListener("DOMContentLoaded", function() {
    const numeroInput = document.getElementById("numero");
    const operacaoSelect = document.getElementById("operacao");
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const resultadoDiv = document.getElementById("resultado");

    calcularButton.addEventListener("click", calcularTabuada);
    limparButton.addEventListener("click", limparResultado);

    function calcularTabuada() {
        resultadoDiv.innerHTML = ""; 
        const numero = parseInt(numeroInput.value);
        const operacao = operacaoSelect.value;

        if (isNaN(numero) || numero < 0 || numero > 10) {
            alert("Digite um número válido entre 0 e 10.");
            return;
        }

        resultadoDiv.style.display = 'block';
        resultadoDiv.innerHTML = "<h2>TABUADA:</h2>";

        for (let i = 0; i <= 10; i++) {
            let resultado;
            switch (operacao) {
                case "adicao":
                    resultado = numero + i;
                    break;
                case "subtracao":
                    resultado = numero - i;
                    break;
                case "multiplicacao":
                    resultado = numero * i;
                    break;
                case "divisao":
                    resultado = numero / i;
                    break;
            }
            resultadoDiv.innerHTML += `<p>${numero} ${operacaoSimbolo(operacao)} ${i} = ${resultado.toFixed(0)}</p>`;
        }
    }

    function operacaoSimbolo(operacao) {
        switch (operacao) {
            case "adicao":
                return "+";
            case "subtracao":
                return "-";
            case "multiplicacao":
                return "X";
            case "divisao":
                return ":";
            default:
                return "";
        }
    }

    function limparResultado() {
        numeroInput.value = "";
        operacaoSelect.value = "adicao";
        resultadoDiv.style.display = 'none';
    }
});
