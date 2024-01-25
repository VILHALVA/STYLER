document.addEventListener('DOMContentLoaded', function() {
    const senhaField = document.getElementById('senha');
    const gerarButton = document.getElementById('gerar');
    const copiarButton = document.getElementById('copiar');
    const copiadoMensagem = document.getElementById('copiadoMensagem');

    gerarButton.addEventListener('click', function() {
        const senha = gerarSenha();
        senhaField.textContent = senha;
        senhaField.classList.remove('oculto');
        copiarButton.classList.remove('disabled');
    });

    copiarButton.addEventListener('click', function() {
        const senha = senhaField.textContent;
        navigator.clipboard.writeText(senha)
            .then(function() {
                copiadoMensagem.textContent = "COPIADO PARA ÁREA DE TRANSFERÊNCIA!";
                setTimeout(function() {
                    copiadoMensagem.textContent = "";
                    senhaField.textContent = "";
                    senhaField.classList.add('oculto');
                    copiarButton.classList.add('disabled');
                }, 3000);
            })
            .catch(function(err) {
                console.error('Erro ao copiar: ', err);
            });
    });

    function gerarSenha() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        const tamanho = Math.floor(Math.random() * 13) + 8; 
        let senha = '';
        for (let i = 0; i < tamanho; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(randomIndex);
        }
        return senha;
    }
});
