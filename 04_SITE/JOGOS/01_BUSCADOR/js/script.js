document.addEventListener('DOMContentLoaded', function () {
    const NameInput = document.getElementById('InputName');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');

    const baseURL = "https://vilhalva.github.io/STYLER/04_SITE/JOGOS/";

    const datalist = document.createElement('datalist');
    datalist.id = 'suggestions';
    suggestions.forEach(function (suggestion) {
        const option = document.createElement('option');
        option.value = suggestion;
        datalist.appendChild(option);
    });
    NameInput.setAttribute('list', 'suggestions');
    document.body.appendChild(datalist);

    function toggleButtons() {
        NameInput.value.trim() === "";
    }

    NameInput.addEventListener('input', toggleButtons);

    searchButton.addEventListener('click', function () {
        const userInput = NameInput.value.trim().toUpperCase();
        const formattedInput = userInput.replace(/\s+/g, '%20');
        const URL = `${baseURL}${formattedInput}/index.html`;

        if (userInput === "") {
            alert("😡POR FAVOR, PREENCHA O CAMPO DA PESQUISA!");
            return;
        }
        
        checkExistence(URL, formattedInput, userInput);
    });

    clearButton.addEventListener('click', function () {
        NameInput.value = "";
        errorMessage.style.display = 'none';
        errorContainer.style.display = 'none';
        toggleButtons();
    });

    function checkExistence(url, formattedInput, originalInput) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                } 
                else {
                    showError(`🤬ERRO 404: O JOGO \"${originalInput}\" NÃO FOI ENCONTRADO! VERIFIQUE SE O NOME ESTÁ CORRETO COM BASE NAS SUGESTÕES OU BUSQUE EM OUTROS SITES CLICANDO NO BOTÃO ABAIXO 👇`);
                    createAlternativeLinks(formattedInput);
                }
            })
            .catch(error => {
                showError(`🥵ERRO NA REQUISIÇÃO HEAD: ${error}`);
            });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        errorContainer.style.display = 'block';
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
