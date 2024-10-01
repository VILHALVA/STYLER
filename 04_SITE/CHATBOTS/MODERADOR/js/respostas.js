let responses = {
    "start": {
        text: "👮‍♂️Muito bem, você está no MENU. Escolha sua opção:",
        buttons: ["BOAS VINDAS", "ANTI-SPAM", "ANTI-FLOOD", "BLOQUEIO DE MÍDIA"]
    },
    "BOAS VINDAS": {
        text: "Você pode definir uma mensagem de boas-vindas com textos formatados, mídias e botões que serão enviados quando alguém entrar no grupo. <a href='https://t.me/ADM_GROUP_BOT' target='_blank' style='color: #007bff; text-decoration: underline;'>SAIBA MAIS</a>."
    },
    "ANTI-SPAM": {
        text: "Anti-spam é um conjunto de ferramentas, serviços ou softwares que bloqueiam a entrada de links indesejados, também conhecidos como spams. Os anti-spams funcionam como filtros que analisam cada mensagem que chega, identificando características de spam ou definidas pelo usuário. Com base nessa análise, as mensagens são tratadas de acordo com as definições do usuário. <a href='https://gatefy.com/pt-br/blog/o-que-e-antispam/#:~:text=tamb%C3%A9m%20das%20empresas.-,Antispam%20visto%20como%20um%20software,antispam%20protege%20a%20sua%20empresa%E2%80%9D.' target='_blank' style='color: #007bff; text-decoration: underline;'>SAIBA MAIS</a>."
    },
    "ANTI-FLOOD": {
        text: "Anti-flood refere-se a um sistema de segurança contra transbordamento de mensagens. <a href='https://www.linguee.com.br/ingles-portugues/traducao/anti-flood.html' target='_blank' style='color: #007bff; text-decoration: underline;'>SAIBA MAIS</a>."
    },
        "BLOQUEIO DE MÍDIA": {
        "text": "📸 Foto<br>🎞 Vídeo<br>🖼 Álbum<br>🎥 Gif<br>🎤 Voz<br>🎧 Áudio<br>🃏 Sticker<br>🎭 Sticker animado<br>🎲 Jogos animados<br>😀 Emoji Animado<br>👾 Emoji Personalizado<br>👁‍🗨 Vídeo redondo<br>💾 Arquivo<br>🎮 Jogos<br>🏷 Contatos<br>📊 Enquetes<br>📍 Localização<br>🆎 Caixa alta<br>💶 Pagamentos<br>🤖 Bot inline<br>📲 Story<br>🗯 Spoiler<br>🌌 Mídia com Spoiler<br>🎁 Sorteio<br><a href='https://t.me/ADM_GROUP_BOT' target='_blank' style='color: #007bff; text-decoration: underline;'>SAIBA MAIS</a>."
    }
};

function addMessage(senderName, avatarUrl, text, senderClass) {
    let messageHtml = `
        <div class="message ${senderClass}">
            <div class="avatar">
                <img src="${avatarUrl}" alt="${senderName}">
            </div>
            <div class="arrow ${senderClass === 'sender-1' ? 'arrow-left' : 'arrow-right'}"></div>
            <div class="message-bubble">
                <div class="sender-name">${senderName}</div>
                <p>${text}</p> <!-- O texto agora pode conter HTML, incluindo links -->
            </div>
        </div>
    `;
    $('#chat-container').append(messageHtml);
    $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight);
}
