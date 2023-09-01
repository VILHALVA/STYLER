function calcularTrigonometria() {
    const anguloGraus = parseFloat(document.getElementById("angulo").value);

    if (!isNaN(anguloGraus)) {
        const anguloRadianos = (anguloGraus * Math.PI) / 180;
        const seno = Math.sin(anguloRadianos);
        const cosseno = Math.cos(anguloRadianos);
        const tangente = Math.tan(anguloRadianos);

        document.getElementById("seno").innerHTML = `SENO: ${seno.toFixed(4)}`;
        document.getElementById("cosseno").innerHTML = `COSSENO: ${cosseno.toFixed(4)}`;
        document.getElementById("tangente").innerHTML = `TANGENTE: ${tangente.toFixed(4)}`;
    } 
    else {
        document.getElementById("seno").innerHTML = "Por favor, insira um ângulo válido em graus.";
        document.getElementById("cosseno").innerHTML = "";
        document.getElementById("tangente").innerHTML = "";
    }
}

function limparCampos() {
    document.getElementById("angulo").value = "";
    document.getElementById("seno").innerHTML = "Seno: ";
    document.getElementById("cosseno").innerHTML = "Cosseno: ";
    document.getElementById("tangente").innerHTML = "Tangente: ";
}
