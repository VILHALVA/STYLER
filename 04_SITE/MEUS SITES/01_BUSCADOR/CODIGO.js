document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const InputName = document.getElementById('InputName');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');

    const baseURL = "https://vilhalva.github.io/STYLER/04_SITE/MEUS%20SITES/";

    function toggleButtons() {
        const isInputEmpty = InputName.value.trim() === "";
        searchButton.disabled = isInputEmpty;
        clearButton.disabled = isInputEmpty;
    }

    toggleButtons();

    InputName.addEventListener('input', toggleButtons);

    searchButton.addEventListener('click', function () {
        const userInput = InputName.value.trim().toUpperCase();
        const formattedInput = userInput.replace(/\s+/g, '%20');
        const URL = `${baseURL}${formattedInput}/index.html`;

        checkGameExistence(URL, formattedInput);
    });

    clearButton.addEventListener('click', function () {
        InputName.value = "";
        errorMessage.textContent = "";
        errorContainer.innerHTML = ""; 
        toggleButtons();
    });

    function checkGameExistence(url, formattedInput) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                    InputName.value = "";
                } 
                else {
                    showError(`🤬ERRO 404: O site "${formattedInput}" não foi encontrado! Pode ter ocorrido por um dos dois motivos:\n 1️⃣ Você pode ter digitado o nome incorreto. Verifique os títulos dos sites disponíveis no menu de sites e tente novamente. \n 2️⃣ O site não existe aqui. Clique no botão abaixo para pesquisar no google:`);
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