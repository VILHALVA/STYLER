const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const exibirButton = document.getElementById('exibir');
    const limparButton = document.getElementById('limpar');
    const resDiv = document.getElementById('res');

    nameInput.addEventListener('input', validateInputs);
    ageInput.addEventListener('input', validateInputs);

    function validateInputs() {
        exibirButton.disabled = !nameInput.value || !ageInput.value;
        limparButton.disabled = !nameInput.value && !ageInput.value;

        exibirButton.classList.toggle('enabled', !exibirButton.disabled);
        limparButton.classList.toggle('enabled', !limparButton.disabled);
    }

    exibirButton.addEventListener('click', function() {
        if (nameInput.value && ageInput.value) {
            const nomeParagrafo = document.createElement('p');
            nomeParagrafo.textContent = `❇️NOME -> ${nameInput.value}`;
           
            const idadeParagrafo = document.createElement('p');
            idadeParagrafo.textContent = `❇️IDADE -> ${ageInput.value}`;
            
            resDiv.appendChild(nomeParagrafo);
            resDiv.appendChild(idadeParagrafo);
            
            resDiv.style.display = 'block';

            document.getElementById('name').disabled = true;
            document.getElementById('age').disabled = true;
            document.getElementById('exibir').disabled = true; 
            nameInput.style.color = '#444'; 
            ageInput.style.color = '#444'; 
        }
    });    

    limparButton.addEventListener('click', function() {
        nameInput.value = '';
        ageInput.value = '';
        resDiv.textContent = '';
        resDiv.style.display = 'none';
        validateInputs();

        document.getElementById('name').disabled = false;
        document.getElementById('age').disabled = false;
        nameInput.style.color = '#fff'; 
        ageInput.style.color = '#fff'; 
    });