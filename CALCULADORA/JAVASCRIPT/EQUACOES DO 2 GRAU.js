document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const raizesSpan = document.getElementById("raizes");

    calcularButton.addEventListener("click", calcularEquacao);
    limparButton.addEventListener("click", limparCampos);

    function calcularEquacao() {
        const coeficienteA = parseFloat(document.getElementById("coeficienteA").value);
        const coeficienteB = parseFloat(document.getElementById("coeficienteB").value);
        const coeficienteC = parseFloat(document.getElementById("coeficienteC").value);

        if (!isNaN(coeficienteA) && !isNaN(coeficienteB) && !isNaN(coeficienteC)) {
            if (coeficienteA === 0) {
                raizesSpan.textContent = "O coeficiente 'a' não pode ser zero (equação não é de segundo grau).";
            } else {
                const discriminante = Math.pow(coeficienteB, 2) - 4 * coeficienteA * coeficienteC;

                if (discriminante > 0) {
                    const raiz1 = (-coeficienteB + Math.sqrt(discriminante)) / (2 * coeficienteA);
                    const raiz2 = (-coeficienteB - Math.sqrt(discriminante)) / (2 * coeficienteA);
                    raizesSpan.textContent = `Raízes reais: x1 = ${raiz1.toFixed(2)}, x2 = ${raiz2.toFixed(2)}`;
                } else if (discriminante === 0) {
                    const raiz = -coeficienteB / (2 * coeficienteA);
                    raizesSpan.textContent = `Raíz real única: x = ${raiz.toFixed(2)}`;
                } else {
                    raizesSpan.textContent = "Não existem raízes reais (discriminante negativo).";
                }
            }
        } else {
            raizesSpan.textContent = "Por favor, insira coeficientes válidos.";
        }
    }

    function limparCampos() {
        document.getElementById("coeficienteA").value = "";
        document.getElementById("coeficienteB").value = "";
        document.getElementById("coeficienteC").value = "";
        raizesSpan.textContent = "";
    }
});
