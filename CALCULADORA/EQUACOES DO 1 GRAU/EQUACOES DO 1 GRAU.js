document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const solucaoSpan = document.getElementById("solucao");

    calcularButton.addEventListener("click", calcularEquacao);
    limparButton.addEventListener("click", limparCampos);

    function calcularEquacao() {
        const coeficienteA = parseFloat(document.getElementById("coeficienteA").value);
        const coeficienteB = parseFloat(document.getElementById("coeficienteB").value);

        if (!isNaN(coeficienteA) && !isNaN(coeficienteB)) {
            if (coeficienteA === 0) {
                solucaoSpan.textContent = "A equação não é de primeiro grau.";
            } 
            else {
                const solucao = -coeficienteB / coeficienteA;
                solucaoSpan.textContent = `${solucao}`;
            }
        } 
        else {
            solucaoSpan.textContent = "Por favor, insira coeficientes válidos.";
        }
    }

    function limparCampos() {
        document.getElementById("coeficienteA").value = "";
        document.getElementById("coeficienteB").value = "";
        solucaoSpan.textContent = "";
    }
});
