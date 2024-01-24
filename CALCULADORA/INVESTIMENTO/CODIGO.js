function calcularInvestimento() {
    const quantia = parseFloat(document.getElementById("quantia").value);
    const meses = parseInt(document.getElementById("meses").value);
    const jurosAnual = parseFloat(document.getElementById("jurosAnual").value);
    if (isNaN(quantia) || isNaN(meses) || isNaN(jurosAnual) || meses <= 0 || jurosAnual < 0) {
        alert("😡POR FAVOR, INSIRA VALORES VÁLIDOS!");
        return;
    }
    const taxaJurosMensal = jurosAnual / 12 / 100;
    const valorFuturo = quantia * Math.pow(1 + taxaJurosMensal, meses);
    const valorFuturoFormatado = valorFuturo.toFixed(2);
    document.getElementById("resultado").innerHTML = `VALOR FUTURO DO INVESTIMENTO APÓS ${meses} MESES: $${valorFuturoFormatado}`;
}

function limpar() {
    document.getElementById("quantia").value = "";
    document.getElementById("meses").value = "";
    document.getElementById("jurosAnual").value = "";
    document.getElementById("resultado").innerHTML = "";
}
