document.addEventListener('DOMContentLoaded', function () {   
    const musicNameInput = document.getElementById('musicName');

    // Adicione mais sugestões conforme necessário
    const suggestions = [
        "A DISTÂNCIA", "AGORA", "ALEM DAS NUVENS", "AMOR CORRESPONDIDO", "AMOR ETERNO", "AO TEU DISPOR", "AONDE VOCÊ FOI PARAR", "BALANÇOU", "BEM PERTO", "CADA VOLTA É UM RECOMEÇO", "CALICE", "CHAMANDO SEU NOME", "CHEGA O TEMPO", "CHEIRO DA VITÓRIA", "CORAÇÃO DE MULHER", "CORAÇÃO FERIDO", "DESEJO DE MULHER", "DOIS CORAÇÕES E UMA HISTÓRIA", "DOU A VIDA POR UM BEIJO", "ESTRADA DO AMOR", "ESTÁ COMIGO", "EU AMO", "EU NASCI PRA AMAR VOCÊ", "EU TE AMO", "EVIDÊNCIAS", "FALA SÉRIO", "FAÇA ALGUMA COISA", "HISTÓRIA DE UM LAR", "HOMEM SAFADO", "IMPERFEITO", "IMPREVISÍVEL", "INADIAVEL", "INDIFERENÇA", "MAIS PERTO MEU DEUS DE TI", "ME PERDOA", "MENINO CANTADOR", "MENTES TÃO BEM", "MEU CORAÇÃO", "MEU PAÍS", "MIL ANOS DE AMOR", "MIL CORAÇÕES", "MILAGRES SÃO REAIS", "MOMENTO DE REAGIR", "NA HORA DE AMAR", "NASCER DE TI", "NOSSO AMOR É OURO", "NOSSO CHÃO", "NOVA OPORTUNIDADE", "NUNCA AMEI ASSIM", "NUNCA MAIS FICAR SOZINHO", "NÃO ERA PRA SER ASSIM", "NÃO QUERO TE PERDER", "O MELHOR É DAR UM TEMPO", "O POVO FALA", "O QUE VAI SER DE NÓS", "O SEGREDO DA CONQUISTA", "O ÚLTIMO DOS APAIXONADOS", "ORAÇÃO DO AFLITO", "PAGUEI PRA VER", "PASSOU DA CONTA", "PERDOA", "PRA SEMPRE EM MIM", "PRECISO DE UM TEMPO", "PRESSENTIMENTO", "PRISIONEIRO DA SAUDADE", "PRIVILEGIADO", "PRO TEU CASO TEM JEITO", "QUANDO AGENTE AMA DEMAIS", "REFRIGERIO", "RESTAURA-ME", "SAUDADE", "SE FOR PRA JUDIAR", "SEM VOCÊ", "SEU MELHOR PRESENTE", "SORRISO BONITO", "SOU ASSIM", "SUFOCADO", "SÓ COM O OLHAR", "SÓ PENSANDO EM VOCÊ", "TANTO PRA TE DIZER", "TAPA NA CARA", "TARDE DEMAIS", "TE ENCONTREI", "TEMPO PERDIDO", "TONELADAS DE PAIXÃO", "TREMENDAMENTE SANTO", "TU ÉS MAIOR", "TUDO NOVO", "TÔ POR AI", "UM ANJO", "VAI DAR TUDO CERTO", "VALEU DEMAIS", "VERDAIRO AMOR", "VIVENDO POR VIVER", "VOCÊ MUDOU DEMAIS", "VOU FALAR COM DEUS", "ÁTOMOS", "É DISSO QUE EU PRECISO", "É MINHA VEZ", "É O AMOR"        
    ];

    musicNameInput.addEventListener('focus', function () {
        musicNameInput.setAttribute('list', 'suggestions');
    });

    musicNameInput.addEventListener('blur', function () {
        musicNameInput.removeAttribute('list');
    });

    const datalist = document.createElement('datalist');
    datalist.id = 'suggestions';
    suggestions.forEach(function (suggestion) {
        const option = document.createElement('option');
        option.value = suggestion;
        datalist.appendChild(option);
    });
    document.body.appendChild(datalist);    
});
