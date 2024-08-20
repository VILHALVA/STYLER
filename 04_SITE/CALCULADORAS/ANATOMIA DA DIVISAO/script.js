document.getElementById('divisionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dividendo = parseInt(document.getElementById('dividendo').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    const resultSection = document.getElementById('resultSection');
    const errorElement = document.getElementById('error');

    if (divisor === 0) {
        resultSection.style.display = 'block';
        errorElement.textContent = 'Erro: Divisão por zero não é permitida.';
        document.getElementById('resultDividendo').textContent = '';
        document.getElementById('resultDivisor').textContent = '';
        document.getElementById('resultResto').textContent = '';
        document.getElementById('resultQuociente').textContent = '';
    } 
    else {
        const quociente = Math.floor(dividendo / divisor);
        const resto = dividendo % divisor;

        document.getElementById('resultDividendo').textContent = dividendo;
        document.getElementById('resultDivisor').textContent = divisor;
        document.getElementById('resultResto').textContent = resto;
        document.getElementById('resultQuociente').textContent = quociente;

        resultSection.style.display = 'block';
        errorElement.textContent = '';
    }
});