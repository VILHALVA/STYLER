document.addEventListener("DOMContentLoaded", function () {
    const valorInput = document.getElementById("valor");
    const porcentagemInput = document.getElementById("porcentagem");
    const operacaoSelect = document.getElementById("operacao");
    const calcularButton = document.getElementById("calcular");
    const limparButton = document.getElementById("limpar");
    const resultadoDiv = document.getElementById("resultado");

    calcularButton.addEventListener("click", function () {
        const valor = parseFloat(valorInput.value);
        const porcentagem = parseFloat(porcentagemInput.value);

        if (!isNaN(valor) && !isNaN(porcentagem)) {
            const operacao = operacaoSelect.value;
            const resultado = calcularPorcentagem(valor, porcentagem, operacao);
            resultadoDiv.textContent = resultado;
        } else {
            resultadoDiv.textContent = "Por favor, digite valores válidos.";
        }
    });

    limparButton.addEventListener("click", function () {
        valorInput.value = "";
        porcentagemInput.value = "";
        operacaoSelect.selectedIndex = 0;
        resultadoDiv.textContent = "";
    });

    function calcularPorcentagem(valor, porcentagem, operacao) {
        if (operacao === "desconto") {
            const desconto = (valor * porcentagem) / 100;
            return `Desconto: R$ ${desconto.toFixed(2)}, Valor com Desconto: R$ ${(valor - desconto).toFixed(2)}`;
        } else if (operacao === "aumento") {
            const aumento = (valor * porcentagem) / 100;
            return `Aumento: R$ ${aumento.toFixed(2)}, Valor com Aumento: R$ ${(valor + aumento).toFixed(2)}`;
        }
    }
});
