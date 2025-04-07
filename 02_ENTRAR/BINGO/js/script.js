document.addEventListener("DOMContentLoaded", function() {
    const bingoCardElement = document.getElementById('bingoCard');
    const sortearButton = document.getElementById('sortear');
    const numeroAtualElement = document.getElementById('numeroAtual');
    const resultadoElement = document.getElementById('res');
    const numeroSorteadoElement = document.getElementById('numeroSorteado');
    const historicoElement = document.getElementById('historico');
    const bingoNumbers = Array.from({length: 25}, (_, i) => i + 1);
    let drawnNumbers = [];
    const WINNING_PAGE = '../ENTRADA.html';  
    const MAX_DRAWINGS = 50; 
    let currentDrawings = 0; 

    function generateBingoCard() {
        bingoCardElement.innerHTML = '';
        const shuffledNumbers = shuffleArray(bingoNumbers);

        shuffledNumbers.forEach(number => {
            const cell = document.createElement('div');
            cell.className = 'bingoCell';
            cell.textContent = number;
            cell.addEventListener('click', () => toggleMark(cell));
            bingoCardElement.appendChild(cell);
        });
    }

    function toggleMark(cell) {
        cell.classList.toggle('marked');
        checkForWin();
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function sortearNumero() {
        if (drawnNumbers.length >= MAX_DRAWINGS) {
            alert("O LIMITE DE NÚMEROS SORTEADOS FOI ALCANÇADO!");
            return;
        }
        
        if (bingoNumbers.length === 0) {
            alert("TODOS OS NÚMEROS FORAM SORTEADOS!");
            return;
        }

        const randomIndex = Math.floor(Math.random() * bingoNumbers.length);
        const drawnNumber = bingoNumbers.splice(randomIndex, 1)[0];
        drawnNumbers.push(drawnNumber);
        numeroAtualElement.textContent = drawnNumber;
        addToHistory(drawnNumber);
        checkForWin();
        currentDrawings++; 
    }

    function addToHistory(number) {
        const listItem = document.createElement('li');
        listItem.textContent = `NÚMERO -> ${number}`;
        
        if (historicoElement.firstChild) {
            historicoElement.insertBefore(listItem, historicoElement.firstChild);
        } 
        else {
            historicoElement.appendChild(listItem); 
        }
    }    

    function checkForWin() {
        const cells = Array.from(document.querySelectorAll('.bingoCell'));
        const markedCells = cells.filter(cell => cell.classList.contains('marked'));
        const markedNumbers = markedCells.map(cell => parseInt(cell.textContent));

        if (markedNumbers.length === 25) { 
            resultadoElement.textContent = 'VOCÊ GANHOU! BINGO COMPLETO!';
            numeroSorteadoElement.style.display = "none";
            resultadoElement.style.display = "block"; 
    
            clearFieldsAndRedirect();
        
            setTimeout(function() {
                resultadoElement.style.display = 'none';
            }, 3000);
        }        
    }

    function clearFieldsAndRedirect() {
        setTimeout(() => {
            numeroAtualElement.textContent = '0';
            window.location.href = WINNING_PAGE;
        }, 2000);
    }

    window.sortearNumero = sortearNumero;

    sortearButton.addEventListener('click', sortearNumero);

    generateBingoCard();
});

function VOLTAR() {
    window.history.back();
}
