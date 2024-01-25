function copyText() {
    const outputText = document.getElementById('outputText');
    const textarea = document.createElement('textarea');
    textarea.value = outputText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    var copiadoMensagem = document.getElementById("copiadoMensagem");
    copiadoMensagem.style.display = 'block';

    setTimeout(function () {
        copiadoMensagem.style.display = 'none';
    }, 2000);
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
        alert('😡POR FAVOR, DIGITE ALGO!');
        outputText.style.display = 'none';
        return;
    }

    switch (conversionType) {
        case 'azul':
            const charAzul = {
                'A': '🇦', 'B': '🇧', 'C': '🇨', 'D': '🇩', 'E': '🇪',
                'F': '🇫', 'G': '🇬', 'H': '🇭', 'I': '🇮', 'J': '🇯',
                'K': '🇰', 'L': '🇱', 'M': '🇲', 'N': '🇳', 'O': '🇴',
                'P': '🇵', 'Q': '🇶', 'R': '🇷', 'S': '🇸', 'T': '🇹',
                'U': '🇺', 'V': '🇻', 'W': '🇼', 'X': '🇽', 'Y': '🇾',
                'Z': '🇿', '0': '0️⃣', '1': '1️⃣', '2': '2️⃣', '3': '3️⃣', '4': '4️⃣', '5': '5️⃣', '6': '6️⃣', '7': '7️⃣', '8': '8️⃣', '9': '9️⃣' 
            }; 
            outputText.textContent = inputText.toUpperCase().split('').map(char => charAzul[char] || char).join(' ');
            break;
        
        case 'topicos':
            const charTopicos = {
                'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼',
                'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
                'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆',
                'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
                'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐',
                'Z': 'ℤ', '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡' 
            };                                   
            outputText.textContent = inputText.toUpperCase().split('').map(char => charTopicos[char] || char).join(' ');
            break;

        case 'barrato':
            outputText.textContent = inputText.split('').map(char => `${char}̶`).join('');
            break;

        case 'sottolineato':
            outputText.textContent = inputText.split('').map(char => `${char}̲`).join('');
            break;

        case 'grande':                                   
            const charGrande = {
                'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ',
                'F': 'Ｆ', 'G': 'G', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ',
                'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ',
                'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ',
                'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ',
                'Z': 'Z'
            };
            outputText.textContent = inputText.toUpperCase().split('').map(char => charGrande[char] || char).join(' ');
            break;

        case 'quadrado_preto':                                   
        const charQuadradoPreto = {
            'A': '🅰', 'B': '🅱', 'C': '​🅲', 'D': '🅳', 'E': '🅴',
            'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
            'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾',
            'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
            'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈',
            'Z': '🆉'
        };   
            outputText.textContent = inputText.toUpperCase().split('').map(char => charQuadradoPreto[char] || char).join(' ');
            break;

        case 'quadrado_branco':                                   
        const charQuadradoBranco = {
            'A': '🄰', 'B': '🄱', 'C': '​🄲', 'D': '🄳', 'E': '🄴',
            'F': '🄵', 'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹',
            'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾',
            'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃',
            'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈',
            'Z': '🅉'
        };   
            outputText.textContent = inputText.toUpperCase().split('').map(char => charQuadradoBranco[char] || char).join(' ');
            break;

        case 'maiuscoletto':
            outputText.textContent = inputText.split('').map(char => `${char.toUpperCase()}̷`).join('');
            break;

        case 'bolha_preto':
            const bubbleBolhaPreto = {
                'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔',
                'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙',
                'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞',
                'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣',
                'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨',
                'Z': '🅩', '0': '⓿', '1': '❶', '2': '❷', '3': '❸', '4': '❹', '5': '❺', '6': '❻', '7': '❼', '8': '❽', '9': '❾'
            }; 
            outputText.textContent = inputText.toUpperCase().split('').map(char => bubbleBolhaPreto[char] || char).join('');
            break;

        case 'bolha_branco':
            const bubbleBolhaBranco = {
                'A': 'ⓐ', 'B': 'ⓑ', 'C': 'ⓒ', 'D': 'ⓓ', 'E': 'ⓔ',
                'F': 'ⓕ', 'G': 'ⓖ', 'H': 'ⓗ', 'I': 'ⓘ', 'J': 'ⓙ',
                'K': 'ⓚ', 'L': 'ⓛ', 'M': 'ⓜ', 'N': 'ⓝ', 'O': 'ⓞ',
                'P': 'ⓟ', 'Q': 'ⓠ', 'R': 'ⓡ', 'S': 'ⓢ', 'T': 'ⓣ',
                'U': 'ⓤ', 'V': 'ⓥ', 'W': 'ⓦ', 'X': 'ⓧ', 'Y': 'ⓨ',
                'Z': 'ⓩ', '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
            }; 
            outputText.textContent = inputText.toUpperCase().split('').map(char => bubbleBolhaBranco[char] || char).join('');
            break;

        case 'ingles_antigo':
            const bubbleInglesAntigo = {
                'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰',
                'F': '𝕱', 'G': '𝕲', 'H': '𝕳', 'I': '𝕴', 'J': '𝕵',
                'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹', 'O': '𝕺',
                'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿',
                'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄',
                'Z': '𝖅'
            }; 
            outputText.textContent = inputText.toUpperCase().split('').map(char => bubbleInglesAntigo[char] || char).join('');
            break;

        case 'cursivo_preto':
            const bubbleCursivoPreto = {
                'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔',
                'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
                'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞',
                'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
                'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨',
                'Z': '𝓩'
            }; 
            outputText.textContent = inputText.toUpperCase().split('').map(char => bubbleCursivoPreto[char] || char).join('');
            break;

        case 'cursivo_branco':
            const bubbleCursivoBranco = {
                'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ',
                'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
                'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪',
                'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
                'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴',
                'Z': '𝒵'
            }; 
            outputText.textContent = inputText.toUpperCase().split('').map(char => bubbleCursivoBranco[char] || char).join('');
            break;

        case 'negrito':
            const bubbleNegrito = {
                'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘',
                'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
                'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢',
                'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
                'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬',
                'Z': '𝗭'
            }; 
            outputText.textContent = inputText.toUpperCase().split('').map(char => bubbleNegrito[char] || char).join('');
            break;

        case 'link':
            if (!inputLink) {
                alert('POR FAVOR, DIGITE O LINK!');
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
