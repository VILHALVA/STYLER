document.getElementById('convertButton').addEventListener('click', function() {
    var text = document.getElementById('text').value.trim();
    if (text === "") {
      alert("😡POR FAVOR, INSIRA UM TEXTO ANTES DE CONVERTER!");
      return;
    }
    var conversion = document.getElementById('conversion').value;
    var convertedText = '';

    switch(conversion) {
      case 'upper':
        convertedText = text.toUpperCase();
        break;
      case 'lower':
        convertedText = text.toLowerCase();
        break;
        case 'mixed':
        var lowercaseText = text.toLowerCase();
        convertedText = lowercaseText.replace(/\b\w/g, function(char) {
          return char.toUpperCase();
        });
        break;
    }

    document.getElementById('convertedText').textContent = convertedText;
    document.getElementById('convertedText').style.display = 'block';
    document.querySelector('.copy-button').style.display = 'block';
    document.querySelector('.limpar').style.display = 'block';
  });

  document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('text').value = '';
    document.getElementById('convertedText').textContent = '';
    document.getElementById('convertedText').style.display = 'none';
    document.querySelector('.copy-button').style.display = 'none';
    document.querySelector('.limpar').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
  });

  document.getElementById('copyButton').addEventListener('click', function() {
    var convertedText = document.getElementById('convertedText').textContent;
    navigator.clipboard.writeText(convertedText);
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(function() {
      document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});