function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function voltar() {
    var loading = window.document.querySelector('div#loading');
    loading.style.display = 'block'; 
    await sleep(1000);
    loading.style.display = 'none'; 
    window.location.href = '../HTML/FAZER DOACAO.html';
}

async function entrar() {
    var NUM = window.document.querySelector('input#VEL');
    var res = window.document.querySelector('div#res');
    var loading = window.document.querySelector('div#loading');
    var ano = Number(NUM.value);

    if (ano == 03333113295) {
        res.innerHTML = `PARABÉNS! VOCÊ ACERTOU! É ${ano}!`;
        res.style.background = 'green';
        res.style.color = 'white';
        loading.style.display = 'block'; 
        await sleep(2000);
        loading.style.display = 'none'; 
        window.location.href = '../HTML/01_MENU PRINCIPAL.html'; 
    } 
    else {
        res.innerHTML = `RESPOSTA ERRADA! NÃO É ${ano}!`;
        res.style.background = 'red';
        res.style.color = 'white';
    }

    setTimeout(function() {
        NUM.value = '';
        res.innerHTML = '';
    }, 3000);
}
