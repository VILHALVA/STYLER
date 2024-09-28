document.addEventListener('DOMContentLoaded', function () {
    const NameInput = document.getElementById('InputName');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');

    const baseURL = "https://vilhalva.github.io/STYLER/04_SITE/JOGOS/";

    NameInput.addEventListener('focus', function () {
        NameInput.setAttribute('list', 'suggestions');
    });

    NameInput.addEventListener('blur', function () {
        NameInput.removeAttribute('list');
    });

    const datalist = document.createElement('datalist');
    datalist.id = 'suggestions';
    suggestions.forEach(function (suggestion) {
        const option = document.createElement('option');
        option.value = suggestion;
        datalist.appendChild(option);
    });
    document.body.appendChild(datalist);

    function toggleButtons() {
        const isInputEmpty = NameInput.value.trim() === "";
        searchButton.disabled = isInputEmpty;
        clearButton.disabled = isInputEmpty;
    }

    toggleButtons();

    NameInput.addEventListener('input', toggleButtons);

    searchButton.addEventListener('click', function () {
        const userInput = NameInput.value.trim().toUpperCase();
        const formattedInput = userInput.replace(/\s+/g, '%20');
        const URL = `${baseURL}${formattedInput}/index.html`;

        checkGameExistence(URL, formattedInput);
    });

    clearButton.addEventListener('click', function () {
        NameInput.value = "";
        errorMessage.style.display = 'none';
        errorContainer.style.display = 'none';
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
                    showError(`🤬ERRO 404: O jogo "${formattedInput}" não foi encontrado! Pode ter ocorrido por um dos dois motivos:\n 1️⃣ Você pode ter digitado o nome incorreto. Verifique os títulos dos jogos disponíveis no menu de Jogos e tente novamente. \n 2️⃣ O jogo não existe neste site. Clique no botão abaixo para buscar em outros sites:`);
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
