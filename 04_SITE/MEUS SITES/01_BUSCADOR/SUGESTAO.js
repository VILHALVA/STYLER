document.addEventListener('DOMContentLoaded', function () {   
    const NameInput = document.getElementById('InputName');

    const suggestions = [
       "AMAZON BASICO", "BALOES DE CONVERSA", "BOTOES COM JQUERY", "BOTOES DESABILITADOS", "CABECALHO FIXO", "CAROUSEL EM JQUERY", "CARROCEL SLIDES", "CHATBOT", "CLONE DA NETFLIX 01", "CLONE DA NETFLIX 02", "COTACAO DE CRIPTOMOEDAS", "DURGER KING", "EFEITO SANFONA COM JQUERY", "EXPRESSOES REGULARES", "FADE TEXT ANIMATION", "FORM INPUT E OUTPUT", "FORMULARIO ANIMATE", "FORMULARIO DARK", "FORMULARIO EM VUEJS CDN", "GRAFICOS COM CHARTJS", "INTERACTIVE RATING", "LOJA DE RELOGIOS COM SCSS", "MENU DE NAVEGACAO", "MENU DE NAVEGACAO LIQUIDA", "MENU SPOTIFY", "ORIGAMID", "PAGINA DO SISTEMA SOLAR", "POPUP MODAL", "PORTFOLIO DO LOOPNERD", "PORTFOLIO DO NIKITA", "PORTFOLIO PONTOCOM", "RELOGIO 1", "RELOGIO 2", "RELOGIO 3", "ROBO ED", "SISTEMA SOLAR 1", "SISTEMA SOLAR 2", "SISTEMA SOLAR 3", "SITE BOOTSTRAP", "SITE DE MATERIALIZECSS", "SITE FRESCO", "SITE INCLIVEL", "TYPING ANIMATION"      
    ];

    NameInput.addEventListener('focus', function () {
        NameInput.setAttribute('list', 'suggestions');
    });

    NameInput.addEventListener('blur', function () {
        NameInput.removeAttribute('list');
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
