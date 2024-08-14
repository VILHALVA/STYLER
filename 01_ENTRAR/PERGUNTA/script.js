document.addEventListener("DOMContentLoaded", function() {
    const perguntas = [
        { pergunta: "EM QUE ANO ESSE SITE FOI CRIADO?", resposta: 2022 },
        { pergunta: "QUAL É A CAPITAL DO BRASIL?", resposta: "BRASÍLIA" },
        { pergunta: "QUAL O NOME DO FUNDADOR DA MICROSOFT?", resposta: "BILL GATES" },
        { pergunta: "QUAL É A RAIZ QUADRADA DE 144?", resposta: 12 },
        { pergunta: "QUAL O MAIOR OCEANO DO MUNDO?", resposta: "PACÍFICO" },
        { pergunta: "QUAL É O PLANETA MAIS PRÓXIMO DO SOL?", resposta: "MERCÚRIO" },
        { pergunta: "QUEM PINTOU A MONA LISA?", resposta: "LEONARDO DA VINCI" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'O'?", resposta: "OXIGÊNIO" },
        { pergunta: "QUEM DESCOBRIU A AMÉRICA?", resposta: "CRISTÓVÃO COLOMBO" },
        { pergunta: "QUAL É O PAÍS MAIS POPULOSO DO MUNDO?", resposta: "CHINA" },
        { pergunta: "QUAL É A MAIOR MONTANHA DO MUNDO?", resposta: "EVEREST" },
        { pergunta: "QUAL É O RIO MAIS LONGO DO MUNDO?", resposta: "NILO" },
        { pergunta: "QUAL É A LÍNGUA OFICIAL DO BRASIL?", resposta: "PORTUGUÊS" },
        { pergunta: "QUAL É A CAPITAL DA FRANÇA?", resposta: "PARIS" },
        { pergunta: "QUANTOS PLANETAS HÁ NO SISTEMA SOLAR?", resposta: 8 },
        { pergunta: "QUAL É O ANIMAL MAIS RÁPIDO DO MUNDO?", resposta: "GUEPARDO" },
        { pergunta: "QUAL É O MAIOR PAÍS EM ÁREA TERRITORIAL?", resposta: "RÚSSIA" },
        { pergunta: "QUAL É O PRIMEIRO ELEMENTO DA TABELA PERIÓDICA?", resposta: "HIDROGÊNIO" },
        { pergunta: "QUAL É O MENOR PAÍS DO MUNDO?", resposta: "VATICANO" },
        { pergunta: "QUEM ESCREVEU 'DOM QUIXOTE'?", resposta: "MIGUEL DE CERVANTES" },
        { pergunta: "QUAL É O CONTINENTE MAIS PEQUENO DO MUNDO?", resposta: "OCEANIA" },
        { pergunta: "QUANTOS LADOS TEM UM HEXÁGONO?", resposta: 6 },
        { pergunta: "QUAL É O METAL MAIS PRECIOSO?", resposta: "OURO" },
        { pergunta: "QUANTOS DIAS TEM UM ANO BISSEXTO?", resposta: 366 },
        { pergunta: "QUAL É O MAIOR DESERTO DO MUNDO?", resposta: "SAARA" },
        { pergunta: "QUAL É A CAPITAL DA ARGENTINA?", resposta: "BUENOS AIRES" },
        { pergunta: "QUAL É A MOEDA OFICIAL DO JAPÃO?", resposta: "IENE" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'NA'?", resposta: "SÓDIO" },
        { pergunta: "QUEM FOI O PRIMEIRO HOMEM A PISAR NA LUA?", resposta: "NEIL ARMSTRONG" },
        { pergunta: "QUANTOS CONTINENTES EXISTEM NO MUNDO?", resposta: 7 },
        { pergunta: "QUAL É O MAIOR MAMÍFERO DO MUNDO?", resposta: "BALEIA AZUL" },
        { pergunta: "QUAL É O PRINCIPAL INGREDIENTE DO GUACAMOLE?", resposta: "ABACATE" },
        { pergunta: "QUAL É O MAIOR PLANETA DO SISTEMA SOLAR?", resposta: "JÚPITER" },
        { pergunta: "QUAL É O NOME DA MAIOR ILHA DO MUNDO?", resposta: "GROENLÂNDIA" },
        { pergunta: "QUAL É O NOME DO PERSONAGEM PRINCIPAL DO FILME 'O REI LEÃO'?", resposta: "SIMBA" },
        { pergunta: "QUANTAS NOTAS HÁ EM UMA ESCALA MUSICAL?", resposta: 7 },
        { pergunta: "QUEM DESCOBRIU A PENICILINA?", resposta: "ALEXANDER FLEMING" },
        { pergunta: "QUAL É O NOME DO PRIMEIRO PRESIDENTE DOS ESTADOS UNIDOS?", resposta: "GEORGE WASHINGTON" },
        { pergunta: "QUANTOS SEGUNDOS HÁ EM UMA HORA?", resposta: 3600 },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'H'?", resposta: "HIDROGÊNIO" },
        { pergunta: "QUAL É A CAPITAL DA ITÁLIA?", resposta: "ROMA" },
        { pergunta: "QUAL É A CAPITAL DA ESPANHA?", resposta: "MADRI" },
        { pergunta: "QUAL É A PRIMEIRA LETRA DO ALFABETO GREGO?", resposta: "ALFA" },
        { pergunta: "QUAL É O NOME DO AUTOR DE 'HAMLET'?", resposta: "WILLIAM SHAKESPEARE" },
        { pergunta: "QUAL É O MAIOR PAÍS DA AMÉRICA DO SUL?", resposta: "BRASIL" },
        { pergunta: "QUAL É A CAPITAL DA ALEMANHA?", resposta: "BERLIM" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'C'?", resposta: "CARBONO" },
        { pergunta: "QUANTOS DIAS TEM UM ANO?", resposta: 365 },
        { pergunta: "QUAL É A CAPITAL DA RÚSSIA?", resposta: "MOSCOU" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'FE'?", resposta: "FERRO" },
        { pergunta: "QUAL É A CAPITAL DO JAPÃO?", resposta: "TÓQUIO" },
        { pergunta: "QUAL É O MAIOR ANIMAL TERRESTRE?", resposta: "ELEFANTE AFRICANO" },
        { pergunta: "QUAL É O ANIMAL MAIS ALTO DO MUNDO?", resposta: "GIRAFA" },
        { pergunta: "QUAL É O PLANETA MAIS DISTANTE DO SOL?", resposta: "NETUNO" },
        { pergunta: "QUAL É A CAPITAL DA AUSTRÁLIA?", resposta: "CAMBERRA" },
        { pergunta: "QUAL É A CAPITAL DO CANADÁ?", resposta: "OTTAWA" },
        { pergunta: "QUAL É A CAPITAL DA ÍNDIA?", resposta: "NOVA DELI" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'AU'?", resposta: "OURO" },
        { pergunta: "QUAL É A CAPITAL DO MÉXICO?", resposta: "CIDADE DO MÉXICO" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'AG'?", resposta: "PRATA" },
        { pergunta: "QUAL É A CAPITAL DO REINO UNIDO?", resposta: "LONDRES" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'HE'?", resposta: "HÉLIO" },
        { pergunta: "QUAL É O MAIOR DESERTO?", resposta: "SAARA" },
        { pergunta: "QUAL É A CAPITAL DA CHINA?", resposta: "PEQUIM" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'N'?", resposta: "NITROGÊNIO" },
        { pergunta: "QUAL É A CAPITAL DOS ESTADOS UNIDOS?", resposta: "WASHINGTON, D.C." },
        { pergunta: "QUAL É A CAPITAL DO CHILE?", resposta: "SANTIAGO" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'PB'?", resposta: "CHUMBO" },
        { pergunta: "QUAL É A CAPITAL DA SUÍÇA?", resposta: "BERNA" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'SN'?", resposta: "ESTANHO" },
        { pergunta: "QUAL É A CAPITAL DA COREIA DO SUL?", resposta: "SEUL" },
        { pergunta: "QUAL É A CAPITAL DO VIETNÃ?", resposta: "HANOI" },
        { pergunta: "QUAL É O ELEMENTO QUÍMICO REPRESENTADO PELO SÍMBOLO 'K'?", resposta: "POTÁSSIO" },
        { pergunta: "QUAL É A CAPITAL DO EGITO?", resposta: "CAIRO" },
        { pergunta: "QUAL É A CAPITAL DA GRÉCIA?", resposta: "ATENAS" },
        { pergunta: "QUAL É A CAPITAL DA ÁFRICA DO SUL?", resposta: "PRETÓRIA" },
        { pergunta: "QUAL É A CAPITAL DA SUÉCIA?", resposta: "ESTOCOLMO" },
        { pergunta: "QUAL É A CAPITAL DA NORUEGA?", resposta: "OSLO" }
    ];    

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
        var NUM = document.querySelector('input#VEL');
        var res = document.querySelector('div#res');
        var resposta = NUM.value.trim().toUpperCase(); 
        var responderButton = document.getElementById("responder");
        
        var perguntaElemento = document.getElementById("pergunta");
        if (!perguntaElemento) {
            console.error('Elemento com id "pergunta" não encontrado.');
            return;
        }
        
        var perguntaAtual = perguntaElemento.textContent.toUpperCase().replace('⭐PERGUNTA: ', '');
        var respostaCorreta = perguntaAleatoria.resposta;
    
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