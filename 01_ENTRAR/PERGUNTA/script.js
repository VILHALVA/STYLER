document.addEventListener("DOMContentLoaded", function() {
    let perguntaAleatoria;

    function selecionarPerguntaAleatoria() {
        perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
        const perguntaElemento = document.getElementById("pergunta");
        perguntaElemento.innerHTML = `⭐PERGUNTA: ${perguntaAleatoria.pergunta}`;
    }

    selecionarPerguntaAleatoria();

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function responder() {
        const NUM = document.querySelector('input#VEL');
        const res = document.querySelector('div#res');
        const resposta = NUM.value.trim().toUpperCase(); 
        const responderButton = document.getElementById("responder");
        
        const perguntaElemento = document.getElementById("pergunta");
        if (!perguntaElemento) {
            console.error('Elemento com id "pergunta" não encontrado.');
            return;
        }
        
        let respostaCorreta = perguntaAleatoria.resposta;

        if (typeof respostaCorreta === 'number') {
            respostaCorreta = respostaCorreta.toString();
        } 
        else if (typeof respostaCorreta === 'string') {
            respostaCorreta = respostaCorreta.toUpperCase();
        }
        
        if (resposta === "") {
            alert("🤬POR FAVOR, PREENCHA O CAMPO DE RESPOSTA!");
            return;
        }

        if (resposta === respostaCorreta) {
            res.style.display = 'block';
            res.style.backgroundColor = 'green';
            res.innerHTML = `PARABÉNS! VOCÊ ACERTOU! É ${resposta}!`;
            await sleep(2000);
            window.location.href = '../ENTRADA.html';
            document.getElementById("VEL").value = "";
            setTimeout(function() {
                res.style.display = 'none';
            }, 3000);
        } 
        else {
            res.style.display = 'block';
            res.style.backgroundColor = 'red';
            res.innerHTML = `RESPOSTA ERRADA! NÃO É ${resposta}. A RESPOSTA CORRETA É ${respostaCorreta}!`;
            await sleep(3000);
            document.getElementById("VEL").value = "";
            responderButton.style.display = "none"; 
            res.style.display = 'none';
            selecionarPerguntaAleatoria();
            iniciarContagemRegressiva(responderButton);
        }
    }

    function iniciarContagemRegressiva(responderButton) {
        const countdownContainer = document.getElementById("countdownContainer");
        const countdownText = document.getElementById("countdownText");
        let countdown = 30;

        countdownContainer.style.display = "flex";

        const interval = setInterval(function() {
            countdown--;
            countdownText.innerHTML = countdown;

            if (countdown == 0) {
                clearInterval(interval);
                countdownContainer.style.display = "none";
                responderButton.style.display = "block"; 
            }
        }, 1000);
    }

    function PROXIMO() {
        selecionarPerguntaAleatoria();
    }

    function VOLTAR() {
        window.history.back();
    }

    window.responder = responder;
    window.VOLTAR = VOLTAR;
    window.PROXIMO = PROXIMO;
});
