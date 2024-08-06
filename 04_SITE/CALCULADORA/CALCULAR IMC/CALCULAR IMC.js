document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const resultadoDiv = document.getElementById("resultado");

    calcularButton.addEventListener("click", function () {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
            const imc = calcularIMC(peso, altura);
            const situacao = avaliarSituacao(imc);
            resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)}. ${situacao}`;
        } 
        else {
            resultadoDiv.textContent = "Por favor, digite valores válidos.";
        }
    });

    limparButton.addEventListener("click", function () {
        pesoInput.value = "";
        alturaInput.value = "";
        resultadoDiv.textContent = "";
    });

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function avaliarSituacao(imc) {
        if (imc < 18.5) {
            return "Você está abaixo do peso.";
        } 
        else if (imc < 24.9) {
            return "Seu peso está dentro da faixa normal.";
        } 
        else if (imc < 29.9) {
            return "Você está com sobrepeso.";
        } 
        else if (imc < 34.9) {
            return "Você tem obesidade grau I.";
        } 
        else if (imc < 39.9) {
            return "Você tem obesidade grau II.";
        } 
        else {
            return "Você tem obesidade grau III.";
        }
    }
});
