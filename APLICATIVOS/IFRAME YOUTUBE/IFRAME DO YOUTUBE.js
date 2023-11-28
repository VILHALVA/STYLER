window.onload = function () {
  const previousPage = document.referrer;
  const allowedPages = [
      'https://vilhalva.github.io/STYLER/BOAS%20MUSICAS/BUSCADOR/index.html'
  ];

  if (allowedPages.includes(previousPage)) {
      alert('🌹ATENÇÃO: VOCÊ PODE COLAR AQUI O LINK DA MÚSICA PARA OUVIR EM IFRAME. SE QUIZER RETORNAR AO SISTEMA DE BUSCA, É SÓ CLICAR EM <-');
  }

  const audioContext;
  const sourceNode;
  const playButton = document.getElementById('playButton');
  const stopButton = document.getElementById('stopButton');
  const clearButton = document.getElementById('clearButton');
  const youtubeLinkInput = document.getElementById('youtubeLink');

  function playAudio() {
      var youtubeLink = youtubeLinkInput.value;
      var videoId = extractVideoId(youtubeLink);
      if (!videoId) {
          console.error('URL do YouTube inválida');
          return;
      }

      var embedUrl = 'https://www.youtube.com/embed/' + videoId;
      var iframe = document.createElement('iframe');
      iframe.setAttribute('width', '560');
      iframe.setAttribute('height', '315');
      iframe.setAttribute('src', embedUrl);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', 'true');

      var playerDiv = document.getElementById('player');
      playerDiv.innerHTML = '';
      playerDiv.appendChild(iframe);

      if (!audioContext) {
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
          audioContext.resume();
      }

      var audioUrl = 'https://www.youtube.com/watch?v=' + videoId;
      var audioElement = new Audio();
      audioElement.src = audioUrl;
      audioElement.crossOrigin = 'anonymous';

      var sourceNode = audioContext.createMediaElementSource(audioElement);
      var splitter = audioContext.createChannelSplitter(2);
      var merger = audioContext.createChannelMerger(2);

      sourceNode.connect(splitter);
      splitter.connect(merger, 0, 0);
      splitter.connect(merger, 1, 1);

      merger.connect(audioContext.destination);
      audioElement.play();
  }

  function stopAudio() {
      var playerDiv = document.getElementById('player');
      playerDiv.innerHTML = '';

      if (sourceNode) {
          sourceNode.disconnect();
          sourceNode = null;
      }

      if (audioContext) {
          audioContext.close().then(function () {
              audioContext = null;
          });
      }
  }

  function clearInput() {
      youtubeLinkInput.value = '';
      var playerDiv = document.getElementById('player');
      playerDiv.innerHTML = '';
      if (sourceNode) {
          sourceNode.disconnect();
          sourceNode = null;
      }

      if (audioContext) {
          audioContext.close().then(function () {
              audioContext = null;
          });
      }
  }

  function extractVideoId(url) {
      var videoId = null;
      var match;
      match = url.match(/[?&]v=([^&#]+)/);
      if (match) {
          videoId = match[1];
      }
      else {
          match = url.match(/youtu\.be\/([^&#]+)/);
          if (match) {
              videoId = match[1];
          }
      }

      return videoId;
  }

  playButton.addEventListener('click', playAudio);
  stopButton.addEventListener('click', stopAudio);
  clearButton.addEventListener('click', clearInput);
};
