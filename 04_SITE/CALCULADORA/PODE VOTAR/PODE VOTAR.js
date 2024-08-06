document.addEventListener('DOMContentLoaded', function () {
    const anoNascimentoInput = document.getElementById('anoNascimento');
    const idadeSpan = document.getElementById('idade');
    const statusVotoSpan = document.getElementById('statusVoto');
    const resultado = document.getElementById('input-res');
    const calcularButton = document.getElementById('calcular');
    const limparButton = document.getElementById('limpar');

    calcularButton.addEventListener('click', function () {
        const anoAtual = new Date().getFullYear();
        const anoNascimento = parseInt(anoNascimentoInput.value);
        const idade = anoAtual - anoNascimento;

        if (isNaN(anoNascimento) || anoNascimento <= 0) {
            alert('Por favor, insira um ano de nascimento válido.');
            return;
        }

        idadeSpan.textContent = idade + ' anos';
        resultado.style.display = 'block';

        if (idade < 16) {
            statusVotoSpan.textContent = 'É PROIBIDO';
        } 
        else if (idade >= 16 && idade < 18 || idade >= 60) {
            statusVotoSpan.textContent = 'É OPCIONAL';
        } 
        else {
            statusVotoSpan.textContent = 'É OBRIGATÓRIO';
        }
    });

    limparButton.addEventListener('click', function () {
        resultado.style.display = 'none';
        anoNascimentoInput.value = '';
    });
});
