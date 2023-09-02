document.addEventListener("DOMContentLoaded", function() {
    const primeiroTermoInput = document.getElementById("primeiroTermo");
    const razaoInput = document.getElementById("razao");
    const quantidadeTermosInput = document.getElementById("quantidadeTermos");
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const resultadoDiv = document.getElementById("resultado");

    calcularButton.addEventListener("click", calcularPA);
    limparButton.addEventListener("click", limparResultado);

    function calcularPA() {
        const a1 = parseFloat(primeiroTermoInput.value);
        const r = parseFloat(razaoInput.value);
        const n = parseInt(quantidadeTermosInput.value);

        if (isNaN(a1) || isNaN(r) || isNaN(n) || n <= 0) {
            alert("Por favor, preencha os campos corretamente.");
            return;
        }

        let resultado = "";
        for (let i = 0; i < n; i++) {
            const termo = a1 + i * r;
            resultado += `${i + 1}= ${termo}\n`;
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
