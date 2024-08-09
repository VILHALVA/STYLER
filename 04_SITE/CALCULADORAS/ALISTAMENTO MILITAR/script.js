function verificarAlistamento() {
    const genero = document.getElementById('genero').value;
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const anoAtual = new Date().getFullYear();

    let mensagem = '';

    if (anoNascimento && anoNascimento <= anoAtual) {
        const idade = anoAtual - anoNascimento;

        if (genero === 'homem') {
            if (idade >= 18) {
                mensagem = `Você tem ${idade} anos e está apto para o alistamento militar!`;
            } 
            else {
                const idadeFaltante = 18 - idade;
                mensagem = `Você tem ${idade} anos e ainda não está apto para o alistamento militar. Faltam ${idadeFaltante} ano(s).`;
            }
        } 
        else {
            mensagem = 'O alistamento militar não é obrigatório para mulheres no Brasil.';
        }
    } 
    else {
        mensagem = 'Por favor, informe um ano de nascimento válido.';
    }

    document.getElementById('resultado').textContent = mensagem;
}

function limparCampos() {
    document.getElementById('genero').value = 'homem';
    document.getElementById('anoNascimento').value = '';
    document.getElementById('resultado').textContent = '';
}
