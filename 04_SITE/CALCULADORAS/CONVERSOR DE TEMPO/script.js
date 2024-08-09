function convertUnit() {
    var selectedUnit = document.getElementById('unit').value;
    var valueInput = document.getElementById('value');
    var value = parseInt(valueInput.value);
    var resultContainer = document.getElementById('result');

    resultContainer.innerHTML = '';

    if (isNaN(value) || value <= 0) {
        document.getElementById('value').value = '';
        alert('POR FAVOR, INSIRA UM VALOR VÁLIDO!');
        return;
    }    

    switch (selectedUnit) {
        case 'segundos':
        var minutos = Math.floor(value / 60);
        var horas = Math.floor(minutos / 60);
        var minutosRestantes = minutos % 60;
        resultContainer.innerHTML += `MINUTOS: ${minutosRestantes}<br>`;
        resultContainer.innerHTML += `HORAS: ${horas}<br>`;
        break;

        case 'minutos':
        var minutos = value;
        var segundos = minutos * 60;
        var horas = minutos / 60;
        var dias = horas / 24;
        resultContainer.innerHTML += `SEGUNDOS: ${segundos.toFixed(2)}<br>`;
        resultContainer.innerHTML += `HORAS: ${horas.toFixed(2)}<br>`;
        resultContainer.innerHTML += `DIAS: ${dias.toFixed(2)}<br>`;
        break;

        case 'horas':
            var horas = value;
            var minutos = horas * 60;
            var segundos = horas * 3600;
            var dias = Math.floor(horas / 24);
            resultContainer.innerHTML += `SEGUNDOS: ${segundos.toFixed(2)}<br>`;
            resultContainer.innerHTML += `MINUTOS: ${minutos.toFixed(2)}<br>`;
            resultContainer.innerHTML += `DIAS: ${dias.toFixed(2)}<br>`;
            break;
        
        case 'dias':
            var anos = Math.floor(value / 365);
            var reDias = value % 365;
            var meses = Math.floor(reDias / 30);
            reDias = reDias % 30;
            var horas = value * 24;
            var minutos = horas * 60;
            var segundos = horas * 3600;
            resultContainer.innerHTML += `SEGUNDOS: ${segundos.toFixed(2)}<br>`;
            resultContainer.innerHTML += `HORAS: ${horas.toFixed(2)}<br>`;
            resultContainer.innerHTML += `MINUTOS: ${minutos.toFixed(2)}<br>`;         
            resultContainer.innerHTML += `MESES: ${meses.toFixed(2)}<br>`;
            resultContainer.innerHTML += `ANOS: ${anos.toFixed(2)}<br>`;            
            break;
                   
        case 'meses':        
            var meses = value;
            var dias = meses * 30;
            var horas = dias * 24;
            var minutos = horas * 60;
            var segundos = horas * 3600; 
            var anos = meses / 12;      
            resultContainer.innerHTML += `SEGUNDOS: ${segundos.toFixed(2)}<br>`; 
            resultContainer.innerHTML += `MINUTOS: ${minutos.toFixed(2)}<br>`;
            resultContainer.innerHTML += `HORAS: ${horas.toFixed(2)}<br>`;
            resultContainer.innerHTML += `DIAS: ${dias.toFixed(2)}<br>`; 
            resultContainer.innerHTML += `ANOS: ${anos.toFixed(2)}<br>`;           
            break;
            
        case 'anos':
            var anos = value;
            var dias = anos * 365; 
            var meses = anos * 12;
            var horas = dias * 24;
            var minutos = horas * 60;
            var segundos = minutos * 60;
            var decadas = anos / 10;
            var seculos = anos / 100;
            var milenios = anos / 1000;        
            resultContainer.innerHTML += `SEGUNDOS: ${segundos.toFixed(2)}<br>`;
            resultContainer.innerHTML += `MINUTOS: ${minutos.toFixed(2)}<br>`;
            resultContainer.innerHTML += `HORAS: ${horas.toFixed(2)}<br>`;
            resultContainer.innerHTML += `DIAS: ${dias.toFixed(2)}<br>`;
            resultContainer.innerHTML += `MESES: ${meses.toFixed(2)}<br>`;
            resultContainer.innerHTML += `DÉCADAS: ${decadas.toFixed(2)}<br>`;
            resultContainer.innerHTML += `SÉCULOS: ${seculos.toFixed(2)}<br>`;
            resultContainer.innerHTML += `MILÊNIOS: ${milenios.toFixed(2)}<br>`;
            break;
                                          
        default:
            break;
    }

    resultContainer.style.display = 'block';
}

function reset() {
    document.getElementById('unit').value = 'minutes';
    document.getElementById('value').value = '';
    document.getElementById('result').style.display = 'none';
}
