var audioContext;
var sourceNode;
var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');
var voltarButton = document.getElementById('voltarButton');
var youtubeLinkInput = document.getElementById('youtubeLink');

function playAudio() {
  var youtubeLink = youtubeLinkInput.value;
  if (!youtubeLink.trim()) {
    alert("POR FAVOR, INSIRA UM LINK DO YOUTUBE ANTES DE CLICAR EM PLAY!");
    return;
  }

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

  sourceNode = audioContext.createMediaElementSource(audioElement);
  var splitter = audioContext.createChannelSplitter(2);
  var merger = audioContext.createChannelMerger(2);

  sourceNode.connect(splitter);
  splitter.connect(merger, 0, 0); 
  splitter.connect(merger, 1, 1); 

  merger.connect(audioContext.destination);
  audioElement.play();
}

function stopAudio() {
  if (!youtubeLinkInput.value.trim()) {
    alert("POR FAVOR, INSIRA UM LINK DO YOUTUBE ANTES DE CLICAR EM STOP!");
    return;
  }

  var playerDiv = document.getElementById('player');
  playerDiv.innerHTML = '';
  
  if (sourceNode) {
    sourceNode.disconnect();
    sourceNode = null;
  }

  if (audioContext) {
    audioContext.close().then(function() {
      audioContext = null;
    });
  }

  clearInput();
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

function voltar() {
  window.history.back();
}

playButton.addEventListener('click', playAudio);
stopButton.addEventListener('click', stopAudio);
voltarButton.addEventListener('click', voltar);
