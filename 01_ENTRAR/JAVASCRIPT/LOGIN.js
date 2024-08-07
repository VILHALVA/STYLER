document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const limparBotao = document.getElementById('limpar');
    const loginBotao = document.getElementById('login');
    const arquivoInput = document.getElementById('arquivo');

    limparBotao.addEventListener('click', function () {
        loginForm.reset();
    });

    loginBotao.addEventListener('click', async function (event) {
        event.preventDefault(); 

        const nomeArquivoPadrao = /^STYLER \(\d+\)\.txt$/;

        if (arquivoInput.files.length > 0) {
            const arquivosEnviados = Array.from(arquivoInput.files);

            const arquivosMultiplos = arquivosEnviados.some(arquivo => nomeArquivoPadrao.test(arquivo.name));

            if (arquivosMultiplos) {
                loading.style.display = 'none';
                alert('😳VOCÊ SE CADASTROU MAIS DE UMA VEZ. ISSO NÃO É PERMITIDO. APAGUE TODOS ESSES ARQUIVOS MÚLTIPLOS E SE CADASTRE NOVAMENTE!');
                loginForm.reset();
            } 
            else if (arquivosEnviados.length === 1 && arquivosEnviados[0].name === 'STYLER.txt') {
                window.location.href = '../HTML/ZZZ.html';
                loginForm.reset();
            } 
            else {
                loading.style.display = 'none';
                alert('🤬ARQUIVO INCORRETO. FAÇA UPLOAD DO ARQUIVO QUE VOCÊ BAIXOU AO SE CADASTRAR!');
                loginForm.reset();
            }
        } 
        else {
            alert('😡VOCÊ NÃO ENVIOU O ARQUIVO. POR FAVOR, FAÇA UPLOAD DO MESMO QUE VOCÊ BAIXOU AO SE CADASTRAR!');
        }
    });
});