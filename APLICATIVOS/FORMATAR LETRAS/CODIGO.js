function copyText() {
    const outputText = document.getElementById('outputText');
    const textarea = document.createElement('textarea');
    textarea.value = outputText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function clearFields() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').textContent = '';
    document.getElementById('outputText').style.display = 'none';
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.style.display = 'none';
}

function convertText() {
    const inputText = document.getElementById('inputText').value;
    const conversionType = document.getElementById('conversionType').value;
    const outputText = document.getElementById('outputText');
    const linkContainer = document.getElementById('linkContainer');
    const inputLink = document.getElementById('link').value;

    if (!inputText) {
        alert('Por favor, digite algo!');
        outputText.style.display = 'none';
        return;
    }

    switch (conversionType) {
        case 'grassetto':
            outputText.textContent = inputText;
            break;

        case 'italico':
            outputText.textContent = `_${inputText}_`;
            break;

        case 'code':
            outputText.textContent = inputText.split('').map(char => `\`${char}\``).join('');
            break;

        case 'blu':
            const charMapping = {
                'A': '🇦', 'B': '🇧', 'C': '🇨', 'D': '🇩', 'E': '🇪',
                'F': '🇫', 'G': '🇬', 'H': '🇭', 'I': '🇮', 'J': '🇯',
                'K': '🇰', 'L': '🇱', 'M': '🇲', 'N': '🇳', 'O': '🇴',
                'P': '🇵', 'Q': '🇶', 'R': '🇷', 'S': '🇸', 'T': '🇹',
                'U': '🇺', 'V': '🇻', 'W': '🇼', 'X': '🇽', 'Y': '🇾',
                'Z': '🇿',
            };
            outputText.textContent = inputText.toUpperCase().split('').map(char => charMapping[char] || char).join(' ');
            break;

        case 'barrato':
            outputText.textContent = inputText.split('').map(char => `${char}̶`).join('');
            break;

        case 'sottolineato':
            outputText.textContent = inputText.split('').map(char => `${char}̲`).join('');
            break;

        case 'grande':
            outputText.textContent = inputText.split('').map(char => `${char}ｇ`).join('');
            break;

        case 'maiuscoletto':
            outputText.textContent = inputText.split('').map(char => `${char.toUpperCase()}̷`).join('');
            break;

        case 'bolle':
            const bubbleMapping = {
                'A': 'ⓐ', 'B': 'ⓑ', 'C': 'ⓒ', 'D': 'ⓓ', 'E': 'ⓔ',
                'F': 'ⓕ', 'G': 'ⓖ', 'H': 'ⓗ', 'I': 'ⓘ', 'J': 'ⓙ',
                'K': 'ⓚ', 'L': 'ⓛ', 'M': 'ⓜ', 'N': 'ⓝ', 'O': 'ⓞ',
                'P': 'ⓟ', 'Q': 'ⓠ', 'R': 'ⓡ', 'S': 'ⓢ', 'T': 'ⓣ',
                'U': 'ⓤ', 'V': 'ⓥ', 'W': 'ⓦ', 'X': 'ⓧ', 'Y': 'ⓨ',
                'Z': 'ⓩ',
            };
            outputText.textContent = inputText.toUpperCase().split('').map(char => bubbleMapping[char] || char).join('');
            break;

        case 'link':
            if (!inputLink) {
                alert('Por favor, digite o link!');
                outputText.style.display = 'none';
                return;
            }
            outputText.textContent = `[${inputText}](${inputLink})`;
            break;

        default:
            outputText.textContent = inputText;
    }

    outputText.style.display = 'block';
    linkContainer.style.display = 'none';
}

document.getElementById('conversionType').addEventListener('change', function () {
    const linkContainer = document.getElementById('linkContainer');
    const selectedOption = this.value;

    if (selectedOption === 'link') {
        linkContainer.style.display = 'block';
    } else {
        linkContainer.style.display = 'none';
    }
});

document.getElementById('outputText').style.display = 'none';
