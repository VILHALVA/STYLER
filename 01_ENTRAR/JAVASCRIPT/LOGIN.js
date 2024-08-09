document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const limparBotao = document.getElementById('limpar');
    const loginBotao = document.getElementById('login');
    const arquivoInput = document.getElementById('arquivo');

    function verificarArquivo() {
        const arquivoSelecionado = arquivoInput.files.length > 0;
        loginBotao.disabled = !arquivoSelecionado;
        limparBotao.disabled = !arquivoSelecionado;
    }

    arquivoInput.addEventListener('change', verificarArquivo);

    limparBotao.addEventListener('click', function () {
        loginForm.reset();
        verificarArquivo(); 
    });

    loginBotao.addEventListener('click', async function (event) {
        event.preventDefault();

        const nomeArquivoPadrao = /^STYLER \(\d+\)\.txt$/;

        if (arquivoInput.files.length > 0) {
            const arquivosEnviados = Array.from(arquivoInput.files);

            const arquivosMultiplos = arquivosEnviados.some(arquivo => nomeArquivoPadrao.test(arquivo.name));

            if (arquivosMultiplos) {
                alert('😳VOCÊ SE CADASTROU MAIS DE UMA VEZ. ISSO NÃO É PERMITIDO. APAGUE TODOS ESSES ARQUIVOS MÚLTIPLOS E SE CADASTRE NOVAMENTE!');
                loginForm.reset();
                verificarArquivo(); 
            } 
            else if (arquivosEnviados.length === 1 && arquivosEnviados[0].name === 'STYLER.txt') {
                loginForm.reset(); 
                window.location.href = '../HTML/ZZZ.html';
            } 
            else {
                alert('🤬ARQUIVO INCORRETO. FAÇA UPLOAD DO ARQUIVO QUE VOCÊ BAIXOU AO SE CADASTRAR!');
                loginForm.reset();
                verificarArquivo(); 
            }
        }
    });

    verificarArquivo();
});
