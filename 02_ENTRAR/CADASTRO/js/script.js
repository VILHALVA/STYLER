document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const limparBotao = document.getElementById('limpar');
    const cadastrarBotao = document.getElementById('cadastrar');
    const loginBotao = document.getElementById('login');
    const loading = document.getElementById('loading');

    function verificarCampos() {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        
        const camposPreenchidos = nome !== '' && email !== '';
        cadastrarBotao.disabled = !camposPreenchidos;
        limparBotao.disabled = !camposPreenchidos;
    }

    formulario.addEventListener('input', verificarCampos);

    limparBotao.addEventListener('click', function () {
        formulario.reset();
        verificarCampos(); 
    });

    cadastrarBotao.addEventListener('click', async function () {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();

        const nomeValido = /^[a-zA-Z\s]{10,}$/.test(nome);
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (nome && email) {
            if (nomeValido && emailValido) {
                loading.style.display = 'block';

                const texto = `
                #===========👥SOBRE O USUÁRIO:================
                🔵NOME: "${nome}"
                🔵EMAIL: "${email}"

                #==========🚀SOBRE O SITE:=================
                🔵SITE: https://vilhalva.github.io/STYLER/index.html
                🔵CRIADOR: SAMUEL MARTINS VILHALVA
                🔵GITHUB: https://github.com/VILHALVA
                🔵CANAL CODERS: https://t.me/CODIGOCN
                🔵CANAL DO VILHALVA: https://t.me/VILHALVA100_CANAL
                🔵CANAL NO YOUTUBE: https://www.youtube.com/channel/UCmSPU_gp3NA7a8pb5Iwy3lQ
                🔵PERFIL NO FACEBOOK: https://facebook.com/VILHALVA100
                🔵PERFIL NO LINKEDIN: http://www.linkedin.com/in/vilhalva
                🔵SOU FREELANCER: https://vilhalva.github.io/STYLER/01_HOME/FREELANCER/index.html
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

                formulario.reset(); 
                window.location.href = '../LOGIN/index.html';
            } 
            else {
                alert('😡POR FAVOR, PREENCHA TODOS OS CAMPOS CORRETAMENTE ANTES DE CADASTRAR!');
                formulario.reset();
                verificarCampos(); 
            }
        } 
    });

    loginBotao.addEventListener('click', async function () {
        window.location.href = '../LOGIN/index.html';
    });
    
    verificarCampos();
});
