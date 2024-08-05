function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function responder() {
    var NUM = window.document.querySelector('input#VEL');
    var res = window.document.querySelector('div#res');
    var resposta = Number(NUM.value);
    var responderButton = document.getElementById("responder");

    if (NUM.value === "") {
        alert("🤬POR FAVOR, PREENCHA O CAMPO DE RESPOSTA!");
        return;
    }

    if (resposta == 2022) {
        res.style.display = 'block';
        res.style.backgroundColor = 'green';
        res.innerHTML = `PARABÉNS! VOCÊ ACERTOU! É ${resposta}!`;
        await sleep(2000);
        window.location.href = '../HTML/ZZZ.html';
        document.getElementById("VEL").value = "";
        setTimeout(function() {
            res.style.display = 'none';
        }, 3000);
    } 
    else {
        res.style.display = 'block';
        res.style.backgroundColor = 'red';
        res.innerHTML = `RESPOSTA ERRADA! NÃO É ${resposta}!`;
        responderButton.style.display = "none"; 
        iniciarContagemRegressiva(responderButton);
        setTimeout(function() {
            res.style.display = 'none';
        }, 3000);
        await sleep(2000);
        document.getElementById("VEL").value = "";
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
