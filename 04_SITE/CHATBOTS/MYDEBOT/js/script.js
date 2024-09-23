$(document).ready(function() {
    addMessage('🤖MYDEBOT', './imagens/ROBO.jpg', 
    "😃CLIQUE NO MENU DE BOTÕES PARA EXPLORAR OS COMANDOS!", 'sender-2');
});

$(document).ready(function() {
    $('#send-btn').on('click', function() {
        let userInput = 'start'; 
        addMessage('👤VOCÊ', './imagens/VOCE.jpg', userInput, 'sender-1');
        
        setTimeout(function() {
            let botResponse = getBotResponse(userInput);
            addMessage('🤖MYDEBOT', './imagens/ROBO.jpg', botResponse.text, 'sender-2');
            if (botResponse.buttons) {
                showButtons(botResponse.buttons);
                $('.input-container').hide(); 
            } 
            else {
                clearButtons();
            }
        }, 1000);
    });

    $(document).on('click', '.button-container button', function() {
        let buttonText = $(this).text();
        addMessage('👤VOCÊ', './imagens/VOCE.jpg', buttonText, 'sender-1');
        setTimeout(function() {
            let botResponse = getBotResponse(buttonText);
            addMessage('🤖MYDEBOT', './imagens/ROBO.jpg', botResponse.text, 'sender-2');
            if (botResponse.buttons) {
                showButtons(botResponse.buttons);
                $('.input-container').hide(); 
            } 
            else {
                clearButtons();
                $('.input-container').show(); 
            }
        }, 1000);
    });
});

function addMessage(senderName, avatarUrl, text, senderClass) {
    let messageHtml = `
        <div class="message ${senderClass}">
            <div class="avatar">
                <img src="${avatarUrl}" alt="${senderName}">
            </div>
            <div class="arrow ${senderClass === 'sender-1' ? 'arrow-left' : 'arrow-right'}"></div>
            <div class="message-bubble">
                <div class="sender-name">${senderName}</div>
                <p>${text}</p>
            </div>
        </div>
    `;
    $('#chat-container').append(messageHtml);
    $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight);
}

function showButtons(buttons) {
    let buttonsHtml = buttons.map(button => `
        <button>${button}</button>
    `).join('');
    $('#button-container').html(buttonsHtml);
}

function clearButtons() {
    $('#button-container').empty();
}

function getBotResponse(userInput) {
    let lowerCaseInput = userInput.toLowerCase();
    for (let key in responses) {
        if (lowerCaseInput.includes(key.toLowerCase())) {
            return responses[key];
        }
    }
    return responses["default"];
}
