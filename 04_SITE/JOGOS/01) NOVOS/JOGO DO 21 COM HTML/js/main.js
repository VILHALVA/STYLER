let jogadorCartas = [];
let jogadorPontuacao = 0;
let resultadoElemento = document.getElementById('resultado');

function exibirCarta(carta) {
  const cartasJogadorElemento = document.getElementById('cartas-jogador');

  const elementoCarta = document.createElement('img');
  elementoCarta.src = carta.image;
  elementoCarta.alt = carta.code;

  cartasJogadorElemento.appendChild(elementoCarta);
}

function atualizarPontuacao() {
  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerText = `Pontuação: ${jogadorPontuacao}`;

  if (jogadorPontuacao > 21) {
    resultadoElemento.innerText = 'Você perdeu!';
    exibirVideoPerdeu()
    desabilitarBotoes();
  } else if (jogadorPontuacao === 21) {
    resultadoElemento.innerText = 'Você ganhou!';
    desabilitarBotoes();
  }
}

function desabilitarBotoes() {
  const btnComprar = document.getElementById('btn-comprar');
  const btnParar = document.getElementById('btn-parar');
  btnComprar.disabled = true;
  btnParar.disabled = true;
}

function comprarCarta() {
  fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => response.json())
    .then(data => {
      const carta = data.cards[0];
      jogadorCartas.push(carta);
      exibirCarta(carta);

      const valorCarta = obterValorCarta(carta);
      jogadorPontuacao += valorCarta;

      atualizarPontuacao();
    });
}

function obterValorCarta(carta) {
  const valor = carta.value;
  if (['KING', 'QUEEN', 'JACK'].includes(valor)) {
    return 10;
  } else if (valor === 'ACE') {
    return 11;
  } else {
    return parseInt(valor);
  }
}

document.getElementById('btn-comprar').addEventListener('click', comprarCarta);

document.getElementById('btn-parar').addEventListener('click', () => {
  desabilitarBotoes();
});

function exibirVideoPerdeu() {
  const resultadoElemento = document.getElementById('resultado');
  const videoPerdeu = document.getElementById('video-perdeu');

  videoPerdeu.style.display = 'block';
  resultadoElemento.innerText = 'Você perdeu!';
  desabilitarBotoes();

  videoPerdeu.style.position = 'fixed';
  videoPerdeu.style.top = '50%';
  videoPerdeu.style.left = '50%';
  videoPerdeu.style.transform = 'translate(-50%, -50%)';
  videoPerdeu.style.zIndex = '9999';

  videoPerdeu.muted = true; // Define o vídeo como mudo
  videoPerdeu.play(); // Inicia a reprodução automática do vídeo
}


  
  

  
