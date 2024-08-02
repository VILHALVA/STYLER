document.addEventListener('DOMContentLoaded', function () {
    const entrarForm = document.getElementById('entrarForm');
    const limparBotao = document.getElementById('limpar');
    const entrarBotao = document.getElementById('entrar');
    const arquivoInput = document.getElementById('arquivo');
    const loading = document.getElementById('loading');

    limparBotao.addEventListener('click', function () {
        entrarForm.reset();
    });

    entrarBotao.addEventListener('click', async function (event) {
        event.preventDefault();

        const nomeArquivoPadrao = /^DOACAO \(\d+\)\.zip$/;

        if (arquivoInput.files.length > 0) {
            const arquivosEnviados = Array.from(arquivoInput.files);

            const arquivosMultiplos = arquivosEnviados.some(arquivo => nomeArquivoPadrao.test(arquivo.name));

            if (arquivosMultiplos) {
                loading.style.display = 'none';
                alert('😳PARECE QUE VOCÊ FEZ MAIS DE UM DOWNLOAD! RECOMENDO VOCÊ APAGAR ESSES ARQUIVOS MULTIPLOS MAIS TARDER!');
                window.location.href = '../../01_MENU/HTML/01_MENU PRINCIPAL.html';
                entrarForm.reset();
            } else if (arquivosEnviados.length === 1 && arquivosEnviados[0].name === 'DOACAO.zip') {
                loading.style.display = 'block';
                try {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    loading.style.display = 'none';
                    window.location.href = '../../01_MENU/HTML/01_MENU PRINCIPAL.html';
                    entrarForm.reset();
                } catch (error) {
                    loading.style.display = 'none';
                    console.error('Erro durante o processamento assíncrono:', error);
                    alert('Ocorreu um erro durante o processamento. Tente novamente mais tarde.');
                    entrarForm.reset();
                }
            } else {
                loading.style.display = 'none';
                alert('🤬ARQUIVO INCORRETO. FAÇA UPLOAD DO ARQUIVO QUE VOCÊ BAIXOU AO FAZER O DOWNLOAD!');
                entrarForm.reset();
            }
        } else {
            alert('😡VOCÊ NÃO ENVIOU O ARQUIVO. POR FAVOR, FAÇA UPLOAD DO MESMO QUE VOCÊ BAIXOU AO FAZER O DOWNLOAD!');
        }
    });
});
