document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const resultadoSpan = document.getElementById("resultado");

    calcularButton.addEventListener("click", calcularMMC);
    limparButton.addEventListener("click", limparCampos);

    function calcularMMC() {
        const numero1 = parseInt(document.getElementById("numero1").value);
        const numero2 = parseInt(document.getElementById("numero2").value);

        if (!isNaN(numero1) && !isNaN(numero2)) {
            const mmc = calcularMMCRecursivo(numero1, numero2);
            resultadoSpan.textContent = mmc;
        } else {
            resultadoSpan.textContent = "Por favor, insira dois números válidos.";
        }
    }

    function calcularMMCRecursivo(a, b) {
        return (a * b) / calcularMDC(a, b);
    }

    function calcularMDC(a, b) {
        if (b === 0) {
            return a;
        } else {
            return calcularMDC(b, a % b);
        }
    }

    function limparCampos() {
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        resultadoSpan.textContent = "";
    }
});
