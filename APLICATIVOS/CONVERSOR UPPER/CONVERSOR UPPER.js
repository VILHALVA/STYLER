function converterTexto() {
    var texto = document.getElementById("texto").value;
    var textoConvertido = texto.toUpperCase();
    document.getElementById("textoConvertido").textContent = textoConvertido;
}

function copiarTexto() {
    var textoConvertido = document.getElementById("textoConvertido").textContent;
    var inputTemp = document.createElement("textarea");
    inputTemp.value = textoConvertido;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
}

function limparTexto() {
    document.getElementById("texto").value = "";
}