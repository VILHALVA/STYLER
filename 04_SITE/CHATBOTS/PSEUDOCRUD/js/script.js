let users = [];
let lastCommand = "";
let userToEdit = null;

$(document).ready(function () {
    addMessage('🤖PSEUDOCRUD', './imagens/ROBO.jpg', "😃CLIQUE NO MENU DE BOTÕES PARA EXPLORAR O CRUD!", 'sender-2');
    showMenuButtons(["LISTAR", "CRIAR", "EDITAR", "APAGAR"]);
    $('.input-container').hide();

    $(document).on('click', '.button-container button', function () {
        processUserInput($(this).text());
    });

    $('#send-btn').on('click', function () {
        let userInput = $('#user-input').val();
        $('#user-input').val('');
        if (userInput) {
            processUserInput(userInput);
        }
    });

    $(document).on('click', '.inline-button', function () {
        processUserInput($(this).text());
    });
});

function processUserInput(userInput) {
    addMessage('👤VOCÊ', './imagens/VOCE.jpg', userInput, 'sender-1');

    setTimeout(function () {
        let botResponse = getBotResponse(userInput);
        addMessage('🤖PSEUDOCRUD', './imagens/ROBO.jpg', botResponse.text, 'sender-2');
        
        if (botResponse.buttons) {
            showMenuButtons(botResponse.buttons);
        } 
        else if (botResponse.inlineButtons) {
            showInlineButtons(botResponse.inlineButtons);
        } 
        else {
            clearButtons();
            $('.input-container').show();
        }
    }, 1000);
}

function addMessage(senderName, avatarUrl, text, senderClass) {
    $('#chat-container').append(`
        <div class="message ${senderClass}">
            <div class="avatar"><img src="${avatarUrl}" alt="${senderName}"></div>
            <div class="arrow ${senderClass === 'sender-1' ? 'arrow-left' : 'arrow-right'}"></div>
            <div class="message-bubble">
                <div class="sender-name">${senderName}</div>
                <p>${text}</p>
            </div>
        </div>
    `);
    $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight);
}

function showMenuButtons(buttons) {
    $('#button-container').html(buttons.map(button => `<button>${button}</button>`).join(''));
    $('.input-container').hide();
}

function showInlineButtons(buttons) {
    $('#chat-container').append(`<div class="inline-buttons-container">${buttons.map(button => `<button class="inline-button">${button.toUpperCase()}</button>`).join('')}</div>`);
    $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight);
}

function clearButtons() {
    $('#button-container').empty();
    $('.input-container').show();
}

function getBotResponse(userInput) {
    let lowerCaseInput = userInput.toLowerCase().trim();

    switch (lowerCaseInput) {
        case "listar":
            return users.length === 0 ? 
                { text: "Nenhum usuário cadastrado.", buttons: ["LISTAR", "CRIAR", "EDITAR", "APAGAR"] } : 
                { text: "Usuários cadastrados:", inlineButtons: users.map(user => `${user.name}, ${user.age}`) };

        case "criar":
            return { text: "DIGITE O NOME E A IDADE (Ex: Nome, Idade):" };

        case "editar":
            return users.length === 0 ? 
                { text: "Nenhum usuário para editar.", buttons: ["LISTAR", "CRIAR", "EDITAR", "APAGAR"] } : 
                { text: "CLIQUE NO BOTÃO INLINE PARA EDITAR O USUÁRIO:", inlineButtons: users.map(user => `${user.name}`) };

        case "apagar":
            return users.length === 0 ? 
                { text: "Nenhum usuário para apagar.", buttons: ["LISTAR", "CRIAR", "EDITAR", "APAGAR"] } : 
                { text: "CLIQUE NO BOTÃO INLINE PARA APAGAR O USUÁRIO:", inlineButtons: users.map(user => `${user.name}`) };

        default:
            if (/^[a-zA-Z]+,\s*\d+$/.test(lowerCaseInput)) {
                let [name, age] = lowerCaseInput.split(',').map(s => s.trim());
                let userExists = users.some(user => user.name.toLowerCase() === name.toLowerCase() && user.age === age);

                if (userExists) {
                    return { text: `Usuário ${name}, ${age} anos já foi cadastrado!`, buttons: ["LISTAR", "CRIAR", "EDITAR", "APAGAR"] };
                }

                if (lastCommand === "editar" && userToEdit) {
                    userToEdit.name = name;
                    userToEdit.age = age;
                    userToEdit = null;
                    return { text: `Usuário atualizado: ${name}, ${age} anos.`, buttons: ["LISTAR", "CRIAR", "EDITAR", "APAGAR"] };
                } 
                else {
                    users.push({ name, age });
                    return { text: `Usuário ${name}, ${age} anos foi cadastrado com sucesso!`, buttons: ["LISTAR", "CRIAR", "EDITAR", "APAGAR"] };
                }
            }

            let foundUser = users.find(user => user.name.toLowerCase() === lowerCaseInput);
            if (foundUser) {
                if (lastCommand === "editar") {
                    userToEdit = foundUser;
                    return { text: `Digite o novo nome e idade para ${foundUser.name} (Ex: Nome, Idade):` };
                } 
                else if (lastCommand === "apagar") {
                    users = users.filter(user => user.name.toLowerCase() !== lowerCaseInput);
                    return { text: `Usuário ${foundUser.name} foi apagado com sucesso.`, buttons: ["LISTAR", "CRIAR", "EDITAR", "APAGAR"] };
                }
            }

            return { text: "Desculpe, não entendi.", buttons: ["LISTAR", "CRIAR", "EDITAR", "APAGAR"] };
    }
}

$(document).on('click', '.button-container button', function () {
    lastCommand = $(this).text().toLowerCase();
});
