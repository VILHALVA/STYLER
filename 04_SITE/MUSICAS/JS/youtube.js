document.getElementById('youtubeBtn').addEventListener('click', function () {
    const titulo = document.querySelector('header > h1').textContent.trim();
    const artista = document.querySelector('header > p').textContent.trim();
    const busca = encodeURIComponent(`MÚSICA: ${titulo} ${artista}`);
    const url = `https://www.youtube.com/results?search_query=${busca}`;
    window.open(url, '_blank');
});

