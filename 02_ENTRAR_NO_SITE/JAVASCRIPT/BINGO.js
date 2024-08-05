document.addEventListener("DOMContentLoaded", function() {
    const bingoCardElement = document.getElementById('bingoCard');
    const sortearButton = document.getElementById('sortear');
    const numeroAtualElement = document.getElementById('numeroAtual');
    const resultadoElement = document.getElementById('res');
    const numeroSorteadoElement = document.getElementById('numeroSorteado');
    const bingoNumbers = Array.from({length: 25}, (_, i) => i + 1);
    let drawnNumbers = [];
    const WINNING_PAGE = '../HTML/ZZZ.html';  

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
        if (bingoNumbers.length === 0) {
            alert("TODOS OS NÚMEROS FORAM SORTEADOS!");
            return;
        }
        const randomIndex = Math.floor(Math.random() * bingoNumbers.length);
        const drawnNumber = bingoNumbers.splice(randomIndex, 1)[0];
        drawnNumbers.push(drawnNumber);
        numeroAtualElement.textContent = drawnNumber;
        checkForWin();
    }

    function checkForWin() {
        const cells = Array.from(document.querySelectorAll('.bingoCell'));
        const markedCells = cells.filter(cell => cell.classList.contains('marked'));
        const markedNumbers = markedCells.map(cell => parseInt(cell.textContent));
        let win = false;

        for (let i = 0; i < 5; i++) {
            let row = cells.slice(i * 5, i * 5 + 5);
            if (row.every(cell => markedNumbers.includes(parseInt(cell.textContent)))) {
                win = true;
                resultadoElement.textContent = 'VOCÊ GANHOU! LINHA COMPLETA!';
                break;
            }
        }

        if (!win) {
            for (let i = 0; i < 5; i++) {
                let column = cells.filter((_, index) => index % 5 === i);
                if (column.every(cell => markedNumbers.includes(parseInt(cell.textContent)))) {
                    win = true;
                    resultadoElement.textContent = 'VOCÊ GANHOU! COLUNA COMPLETA!';
                    break;
                }
            }
        }

        if (!win) {
            let diagonal1 = cells.filter((_, index) => index % 6 === 0);
            let diagonal2 = cells.filter((_, index) => (index % 4 === 0) && (index !== 0) && (index !== 24));
            if (diagonal1.every(cell => markedNumbers.includes(parseInt(cell.textContent)))) {
                win = true;
                resultadoElement.textContent = 'VOCÊ GANHOU! DIAGONAL COMPLETA!';
            }
            if (!win && diagonal2.every(cell => markedNumbers.includes(parseInt(cell.textContent)))) {
                win = true;
                resultadoElement.textContent = 'VOCÊ GANHOU! DIAGONAL COMPLETA!';
            }
        }

        if (win) {
            numeroSorteadoElement.style.display = "none";
            resultadoElement.style.display = "block"; 
            clearFieldsAndRedirect();
            setTimeout(function() {
                resultadoElement.style.display = 'none';
            }, 3000);
            generateBingoCard();
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