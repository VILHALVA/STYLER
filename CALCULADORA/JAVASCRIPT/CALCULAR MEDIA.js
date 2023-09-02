document.addEventListener("DOMContentLoaded", function () {
    const nota1Input = document.getElementById("nota1");
    const nota2Input = document.getElementById("nota2");
    const nota3Input = document.getElementById("nota3");
    const nota4Input = document.getElementById("nota4");
    const calcularBtn = document.getElementById("calcularBtn");
    const limparBtn = document.getElementById("limparBtn");
    const resultadoDiv = document.getElementById("resultado");
    const mediaSpan = document.getElementById("media");

    calcularBtn.addEventListener("click", function () {
        const nota1 = parseFloat(nota1Input.value);
        const nota2 = parseFloat(nota2Input.value);
        const nota3 = parseFloat(nota3Input.value);
        const nota4 = parseFloat(nota4Input.value);

        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)) {
            const media = (nota1 + nota2 + nota3 + nota4) / 4;
            mediaSpan.textContent = media.toFixed(2);
            resultadoDiv.style.display = "block";
        } 
        else {
            alert("Por favor, digite todas as 4 notas válidas.");
        }
    });

    limparBtn.addEventListener("click", function () {
        nota1Input.value = "";
        nota2Input.value = "";
        nota3Input.value = "";
        nota4Input.value = "";
        resultadoDiv.style.display = "none";
    });
});
