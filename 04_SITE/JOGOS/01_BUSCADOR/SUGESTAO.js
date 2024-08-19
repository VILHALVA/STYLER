document.addEventListener('DOMContentLoaded', function () {   
    const NameInput = document.getElementById('InputName');

    const suggestions = [
        "APOSTA DE CORRIDA", "BANCO IMOBILIARIO", "CORRIDA DAS MACAS", "FLAPPY PLANE", "HAMTARO", "JOGO DA COBRINHA", "JOGO DA FORCA", "JOGO DA MEMORIA", "JOGO DA VELHA", "JOGO DE DAMAS", "JOGO DE XADREZ", "JOGO DO 21", "JOGO DO BISCA", "JOGO DO BLACKJACK", "JOGO DO CANVAS", "JOGO DO ECLIPSE", "JOGO DO MARIO", "JOGO DO NUMPUZ", "JOGO DO PACMAN", "JOGO DO PING PONG", "JOGO DO PONG", "JOGO DO PRONG", "JOGO DO TETRIS 01", "JOGO DO TETRIS 02", "JOGO DO TETRIS 03", "JOKENPO", "O FANTASMA DETETIVE", "POKEDEX", "SPACE INVADERS", "SPEED RACING", "TIRO COM CONSTRUCT"     
    ];

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
});
