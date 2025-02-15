let numeroCorreto;

function gerarNumero() {
    numeroCorreto = Math.floor(Math.random() * 10) + 1;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function responder() {
    var NUM = document.querySelector('select#numero');
    var res = document.querySelector('div#res');
    var responderButton = document.getElementById("responder");

    var respostaUsuario = Number(NUM.value);

    if (respostaUsuario === numeroCorreto) {
        res.style.display = 'block';
        res.style.backgroundColor = 'green';
        res.innerHTML = `PARABÉNS! VOCÊ ACERTOU! O NÚMERO SORTEADO ERA ${numeroCorreto}!`;
        await sleep(2000);
        window.location.href = '../ENTRADA.html';
        setTimeout(function() {
            res.style.display = 'none';
        }, 3000);
    } 
    else {
        res.style.display = 'block';
        res.style.backgroundColor = 'red';
        res.innerHTML = `NÚMERO ERRADO! VOCÊ DISSE ${respostaUsuario}, PORÉM EU TINHA SORTEADO ${numeroCorreto}!`;
        responderButton.style.display = "none"; 
        iniciarContagemRegressiva(responderButton);
        setTimeout(function() {
            res.style.display = 'none';
        }, 3000);
        gerarNumero(); 
    }
}

function iniciarContagemRegressiva(responderButton) {
    var countdownContainer = document.getElementById("countdownContainer");
    var countdownText = document.getElementById("countdownText");
    var countdown = 30;

    countdownContainer.style.display = "flex";

    var interval = setInterval(function() {
        countdown--;
        countdownText.innerHTML = countdown;

        if (countdown == 0) {
            clearInterval(interval);
            countdownContainer.style.display = "none";
            responderButton.style.display = "block"; 
        }
    }, 1000);
}

function VOLTAR() {
    window.history.back();
}

window.onload = gerarNumero;
