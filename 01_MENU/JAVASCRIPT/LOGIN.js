document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginBotao = document.getElementById('login');
    const arquivoInput = document.getElementById('arquivo');

    loginBotao.addEventListener('click', function () {
        const nomeArquivo = 'STYLER.txt';

        if (arquivoInput.files.length > 0) {
            const arquivoEnviado = arquivoInput.files[0];

            if (arquivoEnviado.name === nomeArquivo) {
                alert('😃LOGIN BEM-SUCEDIDO! REDIRECIONANDO...');
                window.location.href = '../../01_MENU/HTML/01_MENU PRINCIPAL.html';
            } else {
                alert('🤬ARQUIVO INCORRETO. FAÇA UPLOAD DO ARQUIVO QUE VOCÊ BAIXOU AO SE CADASTRAR!');
            }
        } else {
            alert('😡POR FAVOR, FAÇA UPLOAD DO ARQUIVO QUE VOCÊ BAIXOU AO SE CADASTRAR!');
        }
    });
});
