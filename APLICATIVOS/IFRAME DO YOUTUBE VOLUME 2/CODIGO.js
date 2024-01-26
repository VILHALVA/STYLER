var audioContext;
var sourceNode;

function reproduzirVideo() {
    var youtubeLink = document.getElementById('videoLink').value;
    if (!youtubeLink.trim()) {
        alert("POR FAVOR, INSIRA UM LINK DO YOUTUBE ANTES DE CLICAR EM REPRODUZIR!");
        return;
    }

    var videoId = extrairVideoId(youtubeLink);
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

    var playerDiv = document.getElementById('videoContainer');
    playerDiv.innerHTML = '';
    playerDiv.appendChild(iframe);
}

function extrairVideoId(videoLink) {
    var regex = /[?&]v=([^&#]+)/;
    var match = videoLink.match(regex);
    if (match && match[1]) {
        return match[1];
    } else {
        var partes = videoLink.split("/");
        if (partes && partes.length > 0) {
            return partes[partes.length - 1];
        } else {
            console.error('URL do YouTube inválida');
            return null;
        }
    }
}

function pararReproducao() {
    var videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "";
    var img = document.createElement("img");
    img.src = "YOUTUBE.jpg";
    img.alt = "Vídeo não reproduzido";
    img.style.borderRadius = "10px";
    videoContainer.appendChild(img);
    document.getElementById("videoLink").value = "";
}
