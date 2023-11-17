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
            showError("Digite o nome da música");
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
                    showError("Música não encontrada");
                }
            })
            .catch(error => {
                console.error('Erro na requisição HEAD:', error);
                showError("Erro ao verificar a música");
            });
    }

    function showError(message) {
        errorMessage.textContent = message;
    }
});
