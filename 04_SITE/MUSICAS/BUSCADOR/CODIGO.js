document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const InputName = document.getElementById('InputName');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');

    const baseURL1 = "https://vilhalva.github.io/STYLER/04_SITE/MUSICAS/HTML/";
    const baseURL2 = "https://www.vagalume.com.br/search?q=";
    const baseURL3 = "https://www.letras.mus.br/?q=";
    const baseURL4 = "https://www.youtube.com/results?search_query=musica:+";

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
        const URL = `${baseURL1}${formattedInput}.html`;

        checkMusicExistence(URL, formattedInput);
    });

    clearButton.addEventListener('click', function () {
        InputName.value = "";
        errorMessage.textContent = "";
        errorContainer.innerHTML = ""; 
        toggleButtons(); 
    });

    function checkMusicExistence(url, formattedInput) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                    InputName.value = "";
                } 
                else {
                    showError(`🤬ERRO 404: A música "${formattedInput}" não foi encontrada! Pode ter ocorrido por um dos dois motivos:\n 1️⃣ Você pode ter digitado o nome incorreto. Verifique os títulos das músicas disponíveis no menu de Músicas e tente novamente.\n 2️⃣ A música não existe neste site. Clique em um dos botões abaixo para buscar em outros sites:`);
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
        
        const links = [
            { href: `${baseURL2}${formattedInput}`, text: 'VAGALUME' },
            { href: `${baseURL3}${formattedInput}`, text: 'LETRAS' },
            { href: `${baseURL4}${formattedInput}`, text: '⬆️YOUTUBE' },
            { 
                href: `${baseURL4}${formattedInput}`, 
                text: '⬇️YOUTUBE', 
                clickHandler: function () {
                    setTimeout(function () {
                        window.location.href = '../../APLICATIVOS/IFRAME DO YOUTUBE VOLUME 1/index.html';
                    }, 3000);

                    InputName.value = "";
                }
            }
        ];

        links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.text;
            anchor.target = '_blank';
            if (link.clickHandler) anchor.addEventListener('click', link.clickHandler);
            errorContainer.appendChild(anchor);
            errorContainer.appendChild(document.createElement('br'));
        });
    }
});
