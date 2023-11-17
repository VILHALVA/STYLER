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
        const idade = document.getElementById('idade').value;
        const anoAtual = document.getElementById('ano-atual').value;
        const res = document.getElementById('res');

        if (nome && email && idade && anoAtual) {
            loading.style.display = 'block';

            const texto = `
            SITE: "https://vilhalva.github.io/STYLER/STYLER.html"
            NOME: "${nome}"
            EMAIL: "${email}"
            IDADE: "${idade}"
            ANO ATUAL: "${anoAtual}"
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

            window.location.href = '../../01_MENU/HTML/01_MENU PRINCIPAL.html';
        } else {
            alert('😡POR FAVOR, PREENCHA TODOS OS CAMPOS ANTES DE CADASTRAR!');
        }
    });

    loginBotao.addEventListener('click', async function () {
        
        window.location.href = '../HTML/LOGIN.html';
    });
});