function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function entrar() {
    var NUM = window.document.querySelector('input#VEL')
    var res = window.document.querySelector('div#res')
    var ano = Number(NUM.value)

    if (ano == 2022) {
        res.innerHTML = `PARABÉNS! VOCÊ ACERTOU! É ${ano}!`
        res.style.color = 'green'
        await sleep(2000);
        window.location.href = '../HTML/ZZZ.html';
    }
    else {
        res.innerHTML = `RESPOSTA ERRADA! NÃO É ${ano}!`
        res.style.color = 'red'
    }
}

function VOLTAR() {
    window.history.back();
}
