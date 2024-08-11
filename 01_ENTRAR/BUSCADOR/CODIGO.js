document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const InputName = document.getElementById('InputName');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');

    const baseURL = "https://vilhalva.github.io/STYLER/01_ENTRAR/HTML/";

    function toggleButtons() {
        const isInputEmpty = InputName.value.trim() === "";
        searchButton.disabled = isInputEmpty;
        clearButton.disabled = isInputEmpty;
    }

    function updateButtonState() {
        toggleButtons();
    }

    updateButtonState();

    InputName.addEventListener('input', updateButtonState);

    searchButton.addEventListener('click', function () {
        const userInput = InputName.value.trim().toUpperCase();

        if (userInput === "") {
            alert("🤬ERRO: PREENCHA O CAMPO ANTES DE CLICAR NO BOTÃO DE BUSCAR!");
            return;
        }

        const formattedInput = userInput.replace(/\s+/g, '%20');
        const URL = `${baseURL}${formattedInput}.html`;

        checkMusicExistence(URL, formattedInput);
    });

    clearButton.addEventListener('click', function () {
        InputName.value = "";
        errorMessage.style.display = 'none';
        errorContainer.style.display = 'none';
        updateButtonState();
    });

    function checkMusicExistence(url, formattedInput) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                    InputName.value = ""; 
                } 
                else {
                    showError(`🤬ERRO 404: A ENTRADA "${formattedInput}" não foi encontrada! Pode ter ocorrido por um dos dois motivos:\n 1️⃣ Você pode ter digitado o nome incorreto. Verifique os títulos das entradas disponíveis no menu e tente novamente.\n 2️⃣ A ENTRADA não existe neste site. Clique no botão abaixo para buscar em outros sites:`);
                    createAlternativeLinks(formattedInput);
                }
            })
            .catch(error => {
                console.error('🥵ERRO NA REQUISIÇÃO HEAD:', error);
                showError("🥵ERRO NA REQUISIÇÃO HEAD: PODE TER OCORRIDO ALGUMA FALHA NO SERVIDOR! ENTRE EM CONTATO COM O @VILHALVA100 NO TELEGRAM PARA REPORTAR!");
            });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function createAlternativeLinks(formattedInput) {
        errorContainer.innerHTML = ""; 
        
        const link = document.createElement('a');
        link.href = `https://www.google.com.br/search?q=${formattedInput}`;
        link.textContent = 'GOOGLE';
        link.target = '_blank';

        errorContainer.appendChild(link);
        errorContainer.appendChild(document.createElement('br'));
    }
});
