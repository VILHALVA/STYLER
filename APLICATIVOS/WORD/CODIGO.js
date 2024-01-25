const tituloInput = document.getElementById("titulo");
const subtituloInput = document.getElementById("subtitulo");
const textoTextarea = document.getElementById("texto");
const limparButton = document.getElementById("limpar");
const salvarButton = document.getElementById("salvar");

limparButton.addEventListener("click", () => {
    tituloInput.value = "";
    subtituloInput.value = "";
    textoTextarea.value = "";
});

salvarButton.addEventListener("click", () => {
    const titulo = tituloInput.value;
    const subtitulo = subtituloInput.value;
    const texto = textoTextarea.value;

    const conteudo = `${titulo}\n${subtitulo}\n\n${texto}`;

    const blob = new Blob([conteudo], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "documento.txt";
    a.click();

    URL.revokeObjectURL(url);
});