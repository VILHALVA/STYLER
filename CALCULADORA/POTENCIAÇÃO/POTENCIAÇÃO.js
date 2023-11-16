function calcularPotencia() {
    var base = parseFloat(document.getElementById("base").value);
    var expoente = parseInt(document.getElementById("expoente").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(base) || isNaN(expoente)) {
        resultado.innerHTML = "Por favor, digite um número e sua potência.";
        return;
    }

    var potencia = Math.pow(base, expoente);
    resultado.innerHTML = `${base} elevado a ${expoente} é igual a ${potencia}`;
}

function limpar() {
    document.getElementById("base").value = "";
    document.getElementById("expoente").value = "";
    document.getElementById("resultado").innerHTML = "";
}