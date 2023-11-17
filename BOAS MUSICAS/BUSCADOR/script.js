document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const errorMessage = document.getElementById('errorMessage');
    const musicNameInput = document.getElementById('musicName');

    const baseURL = "https://vilhalva.github.io/STYLER/BOAS%20MUSICAS/HTML/";

    searchButton.addEventListener('click', function () {
        const userInput = musicNameInput.value.trim().toUpperCase();

        if (userInput === "") {
            showError("😒O CAMPO ESTÁ VAZIO. DIGITE O NOME DA MÚSICA!");
            return;
        }

        const formattedInput = userInput.replace(/\s+/g, '%20');
        const musicURL = `${baseURL}${formattedInput}.html`;

        checkMusicExistence(musicURL);
    });

    clearButton.addEventListener('click', function () {
        musicNameInput.value = "";
        errorMessage.textContent = "";
    });

    function checkMusicExistence(url) {
        fetch(url, {
            method: 'HEAD'
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                } else {
                    showError("🤬ERRO 404: A MÚSICA NÃO FOI ENCONTRADA! TALVEZ VOCÊ TENHA DIGITADO O NOME ERRADO, OU A MÚSICA NÃO EXISTE NESSE SITE!");
                }
            })
            .catch(error => {
                console.error('🥵ERRO NA REQUISIÇÃO HEAD:', error);
                showError("🥵ERRO NA REQUESIÇÃO HEAD: PODE TER OCORRIDO ALGUMA FALHA NO SERVIDOR! ENTRE EM CONTATO COM O @VILHALVA100 NO TELEGRAM PARA REPORTAR!");
            });
    }

    function showError(message) {
        errorMessage.textContent = message;
    }
});
