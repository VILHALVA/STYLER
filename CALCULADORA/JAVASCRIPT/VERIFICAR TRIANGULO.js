function analisarTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
            let tipoTriangulo = '';

            if (lado1 === lado2 && lado2 === lado3) {
                tipoTriangulo = 'Equilátero';
            } 
            else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
                tipoTriangulo = 'Isósceles';
            } 
            else {
                tipoTriangulo = 'Escaleno';
            }

            document.getElementById('resultado').textContent = `Os lados formam um triângulo ${tipoTriangulo}.`;
        } 
        else {
            document.getElementById('resultado').textContent = 'Os lados não formam um triângulo.';
        }
    } 
    else {
        document.getElementById('resultado').textContent = 'Por favor, informe valores positivos para os lados.';
    }
}

function limparCampos() {
    document.getElementById('lado1').value = '';
    document.getElementById('lado2').value = '';
    document.getElementById('lado3').value = '';
    document.getElementById('resultado').textContent = '';
}
