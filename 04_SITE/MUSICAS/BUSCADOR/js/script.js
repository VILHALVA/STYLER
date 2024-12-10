document.addEventListener('DOMContentLoaded', function () {
    const musicNameInput = document.getElementById('InputName');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const errorMessage = document.getElementById('errorMessage');
    const errorContainer = document.getElementById('errorContainer');

    const baseURL1 = "https://vilhalva.github.io/STYLER/04_SITE/MUSICAS/HTML/";
    const baseURL2 = "https://www.google.com.br/search?q=MUSICA:+";
    const baseURL3 = "https://www.vagalume.com.br/search?q=";
    const baseURL4 = "https://www.letras.mus.br/?q=";
    const baseURL5 = "https://www.youtube.com/results?search_query=MUSICA:+";

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
        musicNameInput.value.trim() === "";
    }

    musicNameInput.addEventListener('input', toggleButtons);

    searchButton.addEventListener('click', function () {
        const userInput = musicNameInput.value.trim().toUpperCase();
        const formattedInput = userInput.replace(/\s+/g, '%20');
        const URL = `${baseURL1}${formattedInput}.html`;
        if (userInput === "") {
            alert("😡POR FAVOR, PREENCHA O CAMPO DA PESQUISA!");
            return;
        }

        checkMusicExistence(URL, formattedInput);
    });

    clearButton.addEventListener('click', function () {
        musicNameInput.value = "";
        errorMessage.style.display = 'none';
        errorContainer.style.display = 'none';
        toggleButtons();
    });

    function checkMusicExistence(url, formattedInput) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.location.href = url;
                } 
                else {
                    showError(`🤬ERRO 404: A MÚSICA \"${formattedInput}\" NÃO FOI ENCONTRADA! VERIFIQUE SE O NOME ESTÁ CORRETO COM BASE NAS SUGESTÕES OU BUSQUE EM OUTROS SITES CLICANDO NO BOTÃO ABAIXO 👇`);
                    createAlternativeLinks(formattedInput);
                }
            })
            .catch(error => {
                showError(`🥵ERRO NA REQUISIÇÃO HEAD: ${error} CONTATE O SUPORTE!`);
            });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block'; 
        errorContainer.style.display = 'block'; 
    }

    function createAlternativeLinks(formattedInput) {
        errorContainer.innerHTML = ""; 

        const links = [
            { href: `${baseURL2}${formattedInput}`, text: 'GOOGLE' },
            { href: `${baseURL3}${formattedInput}`, text: 'VAGALUME' },
            { href: `${baseURL4}${formattedInput}`, text: 'LETRAS' },
            { href: `${baseURL5}${formattedInput}`, text: '⬆️YOUTUBE' },
            { 
                href: `${baseURL5}${formattedInput}`, 
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