document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const limparBotao = document.getElementById('limpar');
    const salvarBotao = document.getElementById('salvar');

    limparBotao.addEventListener('click', function () {
        formulario.reset();
    });

    salvarBotao.addEventListener('click', function () {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const anoNascimento = document.getElementById('ano-nascimento').value;
        const nomePai = document.getElementById('nome-pai').value;
        const nomeMae = document.getElementById('nome-mae').value;
        const cep = document.getElementById('cep').value;
        const genero = document.getElementById('genero').value; 
        const estadoCivil = document.getElementById('estado-civil').value;
        const endereco = document.getElementById('endereco').value;

        const texto = `
        NOME: "${nome}"
        EMAIL: "${email}"
        TELEFONE: "${telefone}"
        ANO DE NASCIMENTO: "${anoNascimento}"
        NOME DO PAI: "${nomePai}"
        NOME DA MÃE: "${nomeMae}"
        CEP: "${cep}"
        SEXO: "${genero}"
        ESTADO CIVIL: "${estadoCivil}"
        ENDEREÇO: "${endereco}"
        `;

        const blob = new Blob([texto], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dados_pessoais.txt';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });
});
