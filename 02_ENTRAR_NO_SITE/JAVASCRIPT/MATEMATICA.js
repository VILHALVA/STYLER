let numeroA, numeroB, respostaCorreta;

function gerarPergunta() {
    numeroA = Math.floor(Math.random() * 100) + 1;
    numeroB = Math.floor(Math.random() * 100) + 1;
    respostaCorreta = numeroA * numeroB;

    document.getElementById("numeroA").textContent = numeroA;
    document.getElementById("numeroB").textContent = numeroB;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function responder() {
    var NUM = window.document.querySelector('input#VEL');
    var res = window.document.querySelector('div#res');
    var responderButton = document.getElementById("responder");

    if (NUM.value === "") {
        alert("🤬POR FAVOR, PREENCHA O CAMPO DE RESPOSTA!");
        return;
    }

    var respostaUsuario = Number(NUM.value);

    if (respostaUsuario === respostaCorreta) {
        res.style.display = 'block';
        res.style.backgroundColor = 'green';
        res.innerHTML = `PARABÉNS! VOCÊ ACERTOU! A RESPOSTA É ${respostaCorreta}!`;
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
        res.innerHTML = `RESPOSTA ERRADA! NÃO É ${respostaUsuario}!`;
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

window.onload = gerarPergunta;
