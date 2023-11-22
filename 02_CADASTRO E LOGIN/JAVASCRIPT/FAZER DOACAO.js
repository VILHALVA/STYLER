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
    window.location.href = '../../01_MENU/HTML/01_MENU PRINCIPAL.html';
}

var countdownTimer = setInterval(function() {
    var countdownText = document.querySelector(".countdown-circle .countdown-text");
    countdownText.innerHTML--;
  
    if (countdownText.innerHTML == 0) {
      var fechar = document.createElement("button");
      fechar.id = "fechar";
      fechar.innerHTML = "FECHAR";
      document.querySelector("#countdownContainer").appendChild(fechar);
      document.querySelector(".countdown-circle").style.display = "none";
  
      fechar.addEventListener("click", function() {
        clearInterval(countdownTimer);
        fazerFechar();
      });
    }
}, 1000);

function fazerFechar() {
    var loading = window.document.querySelector('div#loading');
    loading.style.display = 'block';

    setTimeout(function() {
        loading.style.display = 'none';
        window.location.href = 'CADASTRO.html';
    }, 1000); 
}
