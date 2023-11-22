document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');
    const musicNameInput = document.getElementById('musicName');

    const baseURL = "https://vilhalva.github.io/STYLER/BOAS%20MUSICAS/HTML/";
    const baseURL2 = "https://www.vagalume.com.br/search?q="
    const baseURL3 = "https://www.letras.mus.br/?q="

    searchButton.addEventListener('click', function () {
        const userInput = musicNameInput.value.trim().toUpperCase();

        if (userInput === "") {
            showError("😒O CAMPO ESTÁ VAZIO. DIGITE O NOME DA MÚSICA!");
            return;
        }

        const formattedInput = userInput.replace(/\s+/g, '%20');
        const musicURL = `${baseURL}${formattedInput}.html`;

        checkMusicExistence(musicURL, formattedInput);
    });

    clearButton.addEventListener('click', function () {
        musicNameInput.value = "";
        errorMessage.textContent = "";
        errorContainer.innerHTML = ""; 
    });

    function checkMusicExistence(url, formattedInput) {
        fetch(url, {
            method: 'HEAD'
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                } 
                else {
                    showError("🤬ERRO 404: A MÚSICA NÃO FOI ENCONTRADA! TALVEZ VOCÊ TENHA DIGITADO O NOME ERRADO, OU A MÚSICA NÃO EXISTE NESSE SITE. CLIQUE EM UM DESSES BOTÕES PARA PESQUISAR EM OUTROS SITES:");
                
                    const link1 = document.createElement('a');
                    link1.href = `${baseURL2}${formattedInput}`;
                    link1.textContent = 'VAGULE';
                    link1.target = '_blank';
                    errorContainer.appendChild(link1);
                
                    errorContainer.appendChild(document.createElement('br'));
                
                    const link2 = document.createElement('a');
                    link2.href = `${baseURL3}${formattedInput}`;
                    link2.textContent = 'LETRAS';
                    link2.target = '_blank';
                    errorContainer.appendChild(link2);
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
});
