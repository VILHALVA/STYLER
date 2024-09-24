let userResponses = []; 
let questionIndex = 0; 

$(document).ready(function() {
    addMessage('🤖ENTREVISTADOR', './imagens/ROBO.jpg', 
    "😃Olá! Eu sou o bot ENTREVISTADOR!\n\n🌚Irei começar com a seguinte pergunta:");

    setTimeout(function() {
        addMessage('🤖ENTREVISTADOR', './imagens/ROBO.jpg', getBotResponse(), 'sender-2');
    }, 1500); 

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
        addMessage('👤VOCÊ', './imagens/VOCE.jpg', userInput, 'sender-1');
        $('#user-input').val(''); 

        userResponses.push(userInput); 

        addTypingIndicator();

        setTimeout(function() {
            removeTypingIndicator();
            let botComment = getComment();
            if (botComment) {
                addMessage('🤖ENTREVISTADOR', './imagens/ROBO.jpg', botComment, 'sender-2');
            }

            setTimeout(function() {
                questionIndex++; 
                
                if (questionIndex < 6) {
                    addMessage('🤖ENTREVISTADOR', './imagens/ROBO.jpg', getBotResponse(), 'sender-2');
                } 
                else {
                    displayReport(); 
                }
            }, 1500); 

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

function getBotResponse() {
    switch (questionIndex) {
        case 0: 
            return "😎Qual é o seu nome?";
        case 1: 
            return "😎Informe o seu sexo[M/F]:";
        case 2: 
            return "😎Qual é a sua idade?";
        case 3: 
            return "😎Onde você mora?";
        case 4: 
            return "😎Você trabalha em quê?";
        case 5:
            return "😎Você tem o ensino médio completo? (Sim/Não)";
        default:
            return "Desculpe, não tenho uma resposta para essa pergunta. Pode tentar outra?";
    }
}

function getComment() {
    switch (questionIndex) {
        case 0: 
            const name = userResponses[0].toUpperCase();
            if (["SAMUEL", "DANIEL", "LUCAS", "MARIA", "ANA"].includes(name)) {
                return "😍Que nome lindo você tem!";
            } 
            else {
                return "😒Seu nome é tão comum!";
            }
        case 1: 
            const sexo = userResponses[1].toUpperCase();
            if (sexo === "M") {
                return "🌝Isso significa que você é HOMEM!!!";
            } 
            else if (sexo === "F") {
                return "🌝Isso significa que você é MULHER!!!";
            }
            break;
        case 2: 
            const idade = parseInt(userResponses[2]);
            if (idade <= 30) {
                return "😱Nossa, como você é jovem!!!";
            } 
            else {
                return "💪É...Ainda dá pro gasto!";
            }
        case 3: 
            const mora = userResponses[3].toUpperCase();
            if (mora.includes("ACRE") || mora.includes("SERGIPE")) {
                return "🌚Sei, na terra dos dinossauros!";
            } 
            else if (mora.includes("BRASIL") || mora.includes("ARGENTINA")) {
                return "😏Sei, no país menos corrupto!";
            } 
            else {
                return "🌎Excelente!!!";
            }
        case 4:
            const trabalha = userResponses[4].toUpperCase();
            if (trabalha.includes("NÃO") || trabalha.includes("DESEMPREGADO")) {
                return "😔Com essa crise fica difícil mesmo!";
            } 
            else {
                return "🙌Que bom!!!";
            }
        case 5: 
            const escola = userResponses[5].toUpperCase();
            if (escola.includes("SIM") || escola.includes("TENHO")) {
                return "👏PARABÉNS!!!";
            } 
            else {
                return "😔Assim fica complicado!";
            }
    }
    return null; 
}

function displayReport() {
    let report = `
        🌟 **RELATÓRIO DA ENTREVISTA:**
        - **NOME:** ${userResponses[0].toUpperCase()}
        - **SEXO:** ${userResponses[1].toUpperCase()}
        - **IDADE:** ${userResponses[2].toUpperCase()}
        - **LOCALIZAÇÃO:** ${userResponses[3].toUpperCase()}
        - **TRABALHO:** ${userResponses[4].toUpperCase()}
        - **ESCOLARIDADE:** ${userResponses[5].toUpperCase()}
    `;
    
    addMessage('🤖ENTREVISTADOR', './imagens/ROBO.jpg', '\n' + report, 'sender-2');

    addDownloadButton(report);
}

function addDownloadButton(reportContent) {
    const buttonHtml = `
        <button id="save-report-btn">
            SALVAR
        </button>
    `;

    $('#chat-container').append(buttonHtml);

    $('#save-report-btn').on('click', function() {
        downloadReport(reportContent);
    });
}

function downloadReport(content) {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const filename = `ENTREVISTADOR_${formattedDate}.txt`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    link.click();
    URL.revokeObjectURL(link.href);
}
