document.addEventListener('DOMContentLoaded', function () {
    const musicNameInput = document.getElementById('InputName');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');

    const baseURL1 = "https://vilhalva.github.io/STYLER/04_SITE/MUSICAS/HTML/";
    const baseURL2 = "https://www.vagalume.com.br/search?q=";
    const baseURL3 = "https://www.letras.mus.br/?q=";
    const baseURL4 = "https://www.youtube.com/results?search_query=musica:+";

    musicNameInput.addEventListener('focus', function () {
        musicNameInput.setAttribute('list', 'suggestions');
    });

    musicNameInput.addEventListener('blur', function () {
        musicNameInput.removeAttribute('list');
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
        const isInputEmpty = musicNameInput.value.trim() === "";
        searchButton.disabled = isInputEmpty;
        clearButton.disabled = isInputEmpty;
    }

    function updateButtonState() {
        toggleButtons();
    }

    updateButtonState();

    musicNameInput.addEventListener('input', updateButtonState);

    searchButton.addEventListener('click', function () {
        const userInput = musicNameInput.value.trim().toUpperCase();
        const formattedInput = userInput.replace(/\s+/g, '%20');
        const URL = `${baseURL1}${formattedInput}.html`;

        checkMusicExistence(URL, formattedInput);
    });

    clearButton.addEventListener('click', function () {
        musicNameInput.value = "";
        errorMessage.style.display = 'none';
        errorContainer.style.display = 'none';
        updateButtonState();
    });

    function checkMusicExistence(url, formattedInput) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                    musicNameInput.value = ""; 
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
        errorMessage.style.display = 'block'; 
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
