document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginBotao = document.getElementById('login');
    const arquivoInput = document.getElementById('arquivo');
    const loading = document.getElementById('loading');

    loginBotao.addEventListener('click', async function () {
        const nomeArquivo = 'STYLER.txt';

        if (arquivoInput.files.length > 0) {
            const arquivoEnviado = arquivoInput.files[0];
            
            if (arquivoEnviado.name === nomeArquivo) {
                loading.style.display = 'block';
                await new Promise(resolve => setTimeout(resolve, 3000));
                loading.style.display = 'none';
                window.location.href = '../../01_MENU/HTML/01_MENU PRINCIPAL.html';
                    
            } else {
                alert('🤬ARQUIVO INCORRETO. FAÇA UPLOAD DO PRIMEIRO ARQUIVO QUE VOCÊ BAIXOU AO SE CADASTRAR!');
            }
        } else {
            alert('😡POR FAVOR, FAÇA UPLOAD DO PRIMEIRO ARQUIVO QUE VOCÊ BAIXOU AO SE CADASTRAR!');
        }
    });
});
