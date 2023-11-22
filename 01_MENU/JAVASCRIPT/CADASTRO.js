document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const limparBotao = document.getElementById('limpar');
    const cadastrarBotao = document.getElementById('cadastrar');
    const loginBotao = document.getElementById('login');
    const loading = document.getElementById('loading');

    limparBotao.addEventListener('click', function () {
        formulario.reset();
    });

    cadastrarBotao.addEventListener('click', async function () {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const res = document.getElementById('res');

        if (nome && email) {
            loading.style.display = 'block';

            const texto = `
            #==========🚀SOBRE O SITE:=================
            🔵SITE: https://vilhalva.github.io/STYLER/STYLER.html
            🔵CRIADOR: SAMUEL MARTINS VILHALVA
            🔵GITHUB: https://github.com/VILHALVA
            🔵CANAL CODERS: https://t.me/CODIGOCN
            🔵CANAL DO VILHALVA: https://t.me/VILHALVA100_CANAL
            🔵CANAL NO YOUTUBE: https://www.youtube.com/channel/UCmSPU_gp3NA7a8pb5Iwy3lQ
            🔵PERFIL NO FACEBOOK: https://facebook.com/VILHALVA100
            🔵PERFIL NO LINKEDIN: http://www.linkedin.com/in/vilhalva
            🔵SOU FREELANCER: https://telegra.ph/FREELANCER-10-19-9
            🔵PARCERIA: https://t.me/DIVULGACAO2023

            #===========👥SOBRE O USUÁRIO:================
            🔵NOME: "${nome}"
            🔵EMAIL: "${email}"

            #==========🤑FAÇA UMA DOAÇÃO:==================
            Contribua para o avanço contínuo deste projeto enviando qualquer valor via PIX para a chave 03333113295 (SAMUEL MARTINS VILHALVA). 
            Sua generosidade nos auxilia a manter e aprimorar este projeto, permitindo o lançamento constante de novas atualizações. Agradecemos imensamente pelo seu apoio!
            `;

            const blob = new Blob([texto], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'STYLER.txt';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);

            await new Promise(resolve => setTimeout(resolve, 3000));

            loading.style.display = 'none';

            window.location.href = '../HTML/LOGIN.html';
        } else {
            alert('😡POR FAVOR, PREENCHA TODOS OS CAMPOS ANTES DE CADASTRAR!');
        }
    });

    loginBotao.addEventListener('click', async function () {
        
        window.location.href = '../HTML/LOGIN.html';
    });
});