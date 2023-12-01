document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');
    const musicNameInput = document.getElementById('musicName');

    const baseURL1 = "https://vilhalva.github.io/STYLER/BOAS%20MUSICAS/HTML/";
    const baseURL2 = "https://www.vagalume.com.br/search?q="
    const baseURL3 = "https://www.letras.mus.br/?q="
    const baseURL4 = "https://www.youtube.com/results?search_query=musica:+"
     
    searchButton.addEventListener('click', function () {
        const userInput = musicNameInput.value.trim().toUpperCase();

        if (userInput === "") {
            showError("😒O CAMPO ESTÁ VAZIO. DIGITE O NOME DA MÚSICA!");
            return;
        }

        const formattedInput = userInput.replace(/\s+/g, '%20');
        const musicURL = `${baseURL1}${formattedInput}.html`;

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
                    errorMessage.textContent = "";
                    errorContainer.innerHTML = ""; 
                    showError(`🤬ERRO 404: A música "${formattedInput}" não foi encontrada! Pode ter ocorrido por um dos dois motivos:\n 1️⃣ Você pode ter digitado o nome incorreto. Verifique os títulos das músicas disponíveis no menu de Boas Músicas e tente novamente. (Não se esqueça do UTF-8).\n 2️⃣ A música não existe neste site. Clique em um dos botões abaixo para buscar em outros sites:`);
                
                    const link1 = document.createElement('a');
                    link1.href = `${baseURL2}${formattedInput}`;
                    link1.textContent = 'VAGALUME';
                    link1.target = '_blank';
                    errorContainer.appendChild(link1);                
                    errorContainer.appendChild(document.createElement('br'));
                
                    const link2 = document.createElement('a');
                    link2.href = `${baseURL3}${formattedInput}`;
                    link2.textContent = 'LETRAS';
                    link2.target = '_blank';
                    errorContainer.appendChild(link2);
                    errorContainer.appendChild(document.createElement('br'));

                    const link3 = document.createElement('a');
                    link3.href = `${baseURL4}${formattedInput}`;
                    link3.textContent = '⬆️YOUTUBE';
                    link3.target = '_blank';
                    errorContainer.appendChild(link3);
                    errorContainer.appendChild(document.createElement('br'));

                    const link4 = document.createElement('a');
                    link4.href = `${baseURL4}${formattedInput}`;
                    link4.textContent = '⬇️YOUTUBE';
                    link4.target = '_blank';
                    link4.addEventListener('click', function () {
                        setTimeout(function () {
                            window.location.href = '../../APLICATIVOS/IFRAME YOUTUBE/IFRAME DO YOUTUBE.html';
                        }, 3000);
                    });  
                    errorContainer.appendChild(link4);                  
                    errorContainer.appendChild(document.createElement('br'));                    
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