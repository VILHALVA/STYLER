$(document).ready(function() {
    addMessage('🤖MODERADOR', './imagens/ROBO.jpg', 
    "😃CLIQUE NO MENU PRINCIPAL PARA EXPLORAR OS PRINCIPAIS CONCEITOS DA MODERAÇÃO!", 'sender-2');

    $('#send-btn').on('click', function() {
        let userInput = 'start'; 
        addMessage('👤VOCÊ', './imagens/VOCE.jpg', userInput, 'sender-1');
        setTimeout(function() {
            let botResponse = getBotResponse(userInput);
            addMessage('🤖MODERADOR', './imagens/ROBO.jpg', botResponse.text, 'sender-2');
            if (botResponse.buttons) {
                showInlineButtons(botResponse.buttons); 
            }
        }, 1000);
    });

    $(document).on('click', '.inline-buttons button', function() {
        let buttonText = $(this).text();
        addMessage('👤VOCÊ', './imagens/VOCE.jpg', buttonText, 'sender-1');
        
        setTimeout(function() {
            let botResponse = getBotResponse(buttonText);
            addMessage('🤖MODERADOR', './imagens/ROBO.jpg', botResponse.text, 'sender-2');
            
            if (botResponse.buttons) {
                showInlineButtons(botResponse.buttons); 
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

function showInlineButtons(buttons) {
    let buttonsHtml = `
        <div class="inline-buttons">
            ${buttons.map(button => `<button>${button}</button>`).join('')}
        </div>
    `;
    $('#chat-container').append(buttonsHtml);
    $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight); 
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
