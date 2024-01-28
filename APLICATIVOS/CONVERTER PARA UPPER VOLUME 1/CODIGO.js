function converterTexto() {
    var texto = document.getElementById("texto").value;
    var converterPara = document.getElementById("converterPara").value;
    var resultadoContainer = document.getElementById("resultadoContainer");
    var footer = document.getElementById("footer");
    var textoConvertido = '';

    if (!texto) {
        alert('😡POR FAVOR, DIGITE ALGO!');
        resultadoContainer.style.display = 'none';
        return;
    }

    if (converterPara === 'upper') {
        textoConvertido = texto.toUpperCase();
    } else if (converterPara === 'lower') {
        textoConvertido = texto.toLowerCase();
    } else if (converterPara === 'misto') {
        var palavras = texto.toLowerCase().split(' '); 
        var palavrasConvertidas = palavras.map(function(palavra) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        });
        textoConvertido = palavrasConvertidas.join(' ');
    }   
    document.getElementById("textoConvertido").textContent = textoConvertido;
    footer.style.display = 'block';
    resultadoContainer.style.display = 'block';
}

function copiarTexto() {
    var textoConvertido = document.getElementById("textoConvertido").textContent;
    var inputTemp = document.createElement("textarea");
    inputTemp.value = textoConvertido;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);

    var copiadoMensagem = document.getElementById("copiadoMensagem");
    copiadoMensagem.style.display = 'block';

    setTimeout(function() {
        copiadoMensagem.style.display = 'none';
    }, 2000);
}

function limparTexto() {
    document.getElementById("texto").value = "";
    document.getElementById("textoConvertido").textContent = "";
    document.getElementById("footer").style.display = 'none';
    document.getElementById("copiadoMensagem").style.display = 'none';
}
