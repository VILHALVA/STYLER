const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const jogar = document.getElementById("buttonStartStop");
let interval; 

function randomNumberGen() {
    return Math.floor(Math.random() * (8 + 1) + 1);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function entrar(message) {
    jogar.style.display = "none";
    const userMessage = document.getElementById('userMessage');
    userMessage.innerHTML = ''; 
    userMessage.appendChild(message);
    (async () => {
        await sleep(3000);
        window.location.href = '../ENTRADA.html';
    })();
}

function iniciarContagemRegressiva() {
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
            jogar.style.display = "block"; 
        }
    }, 1000);
}

async function changeSlotImg() {
    let random1 = 0;
    let random2 = 0;
    let random3 = 0;

    jogar.style.backgroundColor = 'red'; 

    interval = setInterval(() => {
        console.log('iniciou setInterval');
        const userMessage = document.getElementById('userMessage');
        random1 = randomNumberGen();
        random2 = randomNumberGen();
        random3 = randomNumberGen();

        slot1.src = `./IMG/${random1}.png`;
        slot2.src = `./IMG/${random2}.png`;
        slot3.src = `./IMG/${random3}.png`;

        userMessage.innerText = '';
        console.log({repeat});
    }, 200);
}

function stopSlotImg() {
    clearInterval(interval);
    
    const random1 = slot1.src.split('/').pop().split('.').shift();
    const random2 = slot2.src.split('/').pop().split('.').shift();
    const random3 = slot3.src.split('/').pop().split('.').shift();

    const userMessage = document.getElementById('userMessage');
    
    jogar.style.backgroundColor = 'blue'; 

    if (random1 === '1' && random2 === '1' && random3 === '1') {
        const span = document.createElement('span');
        span.innerHTML = '<b>7 7 7!</b> Você será direcionado para o site!';
        entrar(span);       
    } 
    else if (random1 === '8' && random2 === '8' && random3 === '8') {
        const span = document.createElement('span');
        span.innerHTML = '<b>JackPot!</b> Você será direcionado para o site!';
        entrar(span);
    } 
    else if (random1 === random2 && random2 === random3) { 
        const span = document.createElement('span');
        span.innerHTML = '<b>TRIPLE!</b> Você será direcionado para o site!';
        entrar(span);
    } 
    else if (random1 === random2 || random1 === random3 || random2 === random3) {
        const span = document.createElement('span');
        span.innerHTML = '<b>DOUBLE!</b> Você será direcionado para o site!';
        entrar(span);
    } 
    else {
        const span = document.createElement('span');
        span.innerHTML = 'Você perdeu! Clique no Botão Novamente!';
        jogar.style.display = "none";
        iniciarContagemRegressiva();
        userMessage.appendChild(span);
    }
}

function clicked() {
    if (!interval) {
        changeSlotImg();
    } 
    else {
        stopSlotImg();
        interval = null;
    }
}

const buttonStartStop = document.getElementById('buttonStartStop');
buttonStartStop.addEventListener('click', clicked);

function VOLTAR() {
    window.history.back();
}