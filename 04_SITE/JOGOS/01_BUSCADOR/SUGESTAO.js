document.addEventListener('DOMContentLoaded', function () {   
    const NameInput = document.getElementById('InputName');

    const suggestions = [
        "BANCO IMOBILIARIO", "FLAPPY PLANE", "JOGO DA COBRINHA", "JOGO DA FORCA", "JOGO DA MEMORIA", "JOGO DA VELHA", "JOGO DE DAMAS", "JOGO DE XADREZ", "JOGO DO 21", "JOGO DO BISCA", "JOGO DO BLACKJACK", "JOGO DO CANVAS", "JOGO DO ECLIPSE", "JOGO DO MARIO", "JOGO DO NUMPUZ", "JOGO DO PACMAN", "JOKENPO", "O FANTASMA DETETIVE", "TIRO COM CONSTRUCT", "POKEDEX", "SPACE INVADERS"        
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
