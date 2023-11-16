function calcularHipotenusa() {
    const catetoOposto = parseFloat(document.getElementById("catetoOposto").value);
    const catetoAdjacente = parseFloat(document.getElementById("catetoAdjacente").value);

    if (!isNaN(catetoOposto) && !isNaN(catetoAdjacente)) {
        const hipotenusa = Math.sqrt(Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2));
        document.getElementById("resultado").innerHTML = `A hipotenusa é: ${hipotenusa.toFixed(2)}`;
    } 
    else {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para os catetos.";
    }
}

function limparCampos() {
    document.getElementById("catetoOposto").value = "";
    document.getElementById("catetoAdjacente").value = "";
    document.getElementById("resultado").innerHTML = "";
}
