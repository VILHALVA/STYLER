document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const resultado = document.querySelector('.result-container');
    const resultadoSpan = document.getElementById("resultado");

    calcularButton.addEventListener("click", calcularMDC);
    limparButton.addEventListener("click", limparCampos);

    function calcularMDC() {
        const numero1 = parseInt(document.getElementById("numero1").value);
        const numero2 = parseInt(document.getElementById("numero2").value);
        resultado.style.display = 'block';

        if (!isNaN(numero1) && !isNaN(numero2)) {
            const mdc = calcularMDCRecursivo(numero1, numero2);
            resultadoSpan.textContent = mdc;
        } 
        else {
            resultadoSpan.textContent = "Por favor, insira dois números válidos.";
        }
    }

    function calcularMDCRecursivo(a, b) {
        if (b === 0) {
            return a;
        } else {
            return calcularMDCRecursivo(b, a % b);
        }
    }

    function limparCampos() {
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        resultado.style.display = 'none';
    }
});
