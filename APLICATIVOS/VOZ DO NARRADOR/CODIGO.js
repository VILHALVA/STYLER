document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const ouvirButton = document.getElementById('ouvirButton');
    const clearButton = document.getElementById('clearButton');

    let utterance; 

    ouvirButton.addEventListener('click', function () {
        const text = inputText.value.trim();

        if (!text) {
            alert('Por favor, insira um texto!');
            return;
        }

        if (utterance && speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    });

    clearButton.addEventListener('click', function () {
        speechSynthesis.cancel();
        inputText.value = '';
    });
});
