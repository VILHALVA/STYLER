document.addEventListener("DOMContentLoaded", function() {
    const primeiroTermoInput = document.getElementById("primeiroTermo");
    const razaoInput = document.getElementById("razao");
    const quantidadeTermosInput = document.getElementById("quantidadeTermos");
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const resultadoDiv = document.getElementById("resultado");

    calcularButton.addEventListener("click", calcularPG);
    limparButton.addEventListener("click", limparResultado);

    function calcularPG() {
        const a1 = parseFloat(primeiroTermoInput.value);
        const q = parseFloat(razaoInput.value);
        const n = parseInt(quantidadeTermosInput.value);

        if (isNaN(a1) || isNaN(q) || isNaN(n) || n <= 0) {
            alert("Por favor, preencha os campos corretamente.");
            return;
        }

        let resultado = "";
        let termo = a1;
        for (let i = 0; i < n; i++) {
            resultado += `${i + 1}= ${termo.toFixed(2)}\n`;
            termo *= q;
        }

        resultadoDiv.textContent = resultado;
    }

    function limparResultado() {
        primeiroTermoInput.value = "";
        razaoInput.value = "";
        quantidadeTermosInput.value = "";
        resultadoDiv.textContent = "";
    }
});
