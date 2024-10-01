$(document).ready(function() {
    addMessage('🤖NAMORADA', './imagens/ROBO.jpg', 
    "😃Olá! Eu sou a sua NAMORADA VIRTUAL!\n\n🌚Você pode me fazer perguntas sobre esse assunto...");
    
    $('#send-btn').on('click', function() {
        sendMessage();
    });

    $('#user-input').on('keypress', function(event) {
        if (event.which === 13) {
            sendMessage();
        }
    });
});

function sendMessage() {
    let userInput = $('#user-input').val().trim();
    if (userInput) {
        addMessage('🐂GADO', './imagens/GADO.jpg', userInput, 'sender-1');
        $('#user-input').val(''); 

        addTypingIndicator();

        setTimeout(function() {
            let botResponse = getBotResponse(userInput);
            removeTypingIndicator();
            addMessage('🤖NAMORADA', './imagens/ROBO.jpg', botResponse, 'sender-2');
        }, 1500); 
    }
}

function addMessage(senderName, avatarUrl, text, senderClass) {
    let messageHtml = `
        <div class="message ${senderClass}">
            <div class="avatar">
                <img src="${avatarUrl}" alt="${senderName}">
            </div>
            <div class="arrow ${senderClass === 'sender-1' ? 'arrow-left' : 'arrow-right'}"></div>
            <div class="message-bubble">
                <div class="sender-name">${senderName}</div>
                <p>${text.replace(/\n/g, '<br>')}</p>
            </div>
        </div>
    `;
    $('#chat-container').append(messageHtml);
    $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight);
}

function addTypingIndicator() {
    let typingHtml = `
        <div class="message sender-2 typing-indicator" id="typing-indicator">
            <div class="avatar">
                <img src="./imagens/ROBO.jpg" alt="ROBÔ ED">
            </div>
            <div class="message-bubble">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
            </div>
        </div>
    `;
    $('#chat-container').append(typingHtml);
    $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight);
}

function removeTypingIndicator() {
    $('#typing-indicator').remove();
}

function getBotResponse(userInput) {
    let lowerCaseInput = userInput.toLowerCase();
    for (let key in responses) {
        if (lowerCaseInput.includes(key)) {
            return responses[key];
        }
    }
    return responses["default"];
}