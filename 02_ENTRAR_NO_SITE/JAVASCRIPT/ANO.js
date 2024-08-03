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
        res.innerHTML = `PARABÉNS! VOCÊ ACERTOU! É ${resposta}!`;
        res.style.color = 'green';
        await sleep(2000);
        window.location.href = '../HTML/ZZZ.html';
        document.getElementById("VEL").value = "";
        document.getElementById("res").value = "";
    } 
    else {
        res.innerHTML = `RESPOSTA ERRADA! NÃO É ${resposta}!`;
        res.style.color = 'red';
        document.getElementById("VEL").value = "";
        responderButton.style.display = "none"; 
        iniciarContagemRegressiva(responderButton);
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
