function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fazerDoacao() {
    var loading = window.document.querySelector('div#loading');
    loading.style.display = 'block';

    var link = document.createElement('a');
    link.href = '../MIDIAS/DOACAO.zip';
    link.download = 'DOACAO.zip';
    document.body.appendChild(link);
    link.click();

    await sleep(3000);

    loading.style.display = 'none'; 

    window.location.href = '../HTML/01_MENU PRINCIPAL.html';
}

var countdownTimer = setInterval(function() {
    var countdownText = document.querySelector(".countdown-circle .countdown-text");
    countdownText.innerHTML--;
  
    if (countdownText.innerHTML == 0) {
      var voltar = document.createElement("button");
      voltar.id = "voltar";
      voltar.innerHTML = "FECHAR";
      document.querySelector("#countdownContainer").appendChild(voltar);
      document.querySelector(".countdown-circle").style.display = "none";
  
      voltar.addEventListener("click", function() {
        clearInterval(countdownTimer);
        fazerVoltar();
      });
    }
}, 1000);

function fazerVoltar() {
    var loading = window.document.querySelector('div#loading');
    loading.style.display = 'block';

    setTimeout(function() {
        loading.style.display = 'none';
        window.location.href = '../HTML/ENTRAR NO SITE.html';
    }, 1000); 
}
