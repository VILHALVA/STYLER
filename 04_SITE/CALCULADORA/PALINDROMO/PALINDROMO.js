function verificarPalindromo() {
    var entrada = document.getElementById("entrada").value;
    var resultado = document.getElementById("resultado");

    if (entrada.trim() === "") {
        resultado.innerHTML = "Por favor, digite uma palavra ou número.";
        return;
    }

    var entradaTratada = entrada.toLowerCase().replace(/\s+/g, "");
    var reverso = entradaTratada.split("").reverse().join("");

    resultado.innerHTML = `AO CONTRÁRIO: ${reverso}`;

    if (entradaTratada === reverso) {
        resultado.innerHTML += `<br>"${entrada}" É UM PALÍNDROMO!`;
    } 
    else {
        resultado.innerHTML += `<br>"${entrada}" NÃO É PALÍNDROMO.`;
    }
}

function limpar() {
    document.getElementById("entrada").value = "";
    document.getElementById("resultado").innerHTML = "";
}





