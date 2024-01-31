document.addEventListener("DOMContentLoaded", function () {
    const anoInput = document.getElementById("ano");
    const verificarButton = document.getElementById("verificar");
    const resultadoDiv = document.getElementById("resultado");
    const anoAtual = new Date().getFullYear();
    anoInput.value = anoAtual;

    verificarButton.addEventListener("click", function () {
        const ano = parseInt(anoInput.value);
        resultadoDiv.style.display = 'block';

        if (!isNaN(ano)) {
            const ehBissexto = verificarAnoBissexto(ano);
            const bissextoAnterior = encontrarAnoBissextoAnterior(ano);
            const bissextoPosterior = encontrarAnoBissextoPosterior(ano);

            resultadoDiv.innerHTML = `
                <p>O ano ${ano} ${ehBissexto ? "é" : "não é"} bissexto.</p>
                <p>Ano bissexto anterior: ${bissextoAnterior}</p>
                <p>Ano bissexto posterior: ${bissextoPosterior}</p>
            `;
        } else {
            resultadoDiv.textContent = "Por favor, digite um ano válido.";
        }
    });

    function verificarAnoBissexto(ano) {
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    }

    function encontrarAnoBissextoAnterior(ano) {
        while (true) {
            ano--;
            if (verificarAnoBissexto(ano)) {
                return ano;
            }
        }
    }

    function encontrarAnoBissextoPosterior(ano) {
        while (true) {
            ano++;
            if (verificarAnoBissexto(ano)) {
                return ano;
            }
        }
    }
});
