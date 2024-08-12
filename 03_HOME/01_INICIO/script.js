function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }
    
    else {
        itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block' 
    }
    
    else {
        itens.style.display = 'none'
    }
}

$(function () {
    var totalImages = 10;
    var carousel = $('#carousel');

    for (var i = 1; i <= totalImages; i++) {
        carousel.append('<img src="./VILHALVA/' + i + '.jpg" alt="VILHALVA ' + i + '">');
    }

    $('#carousel img:eq(0)').addClass("ativo").show();

    setInterval(slideFunction, 3000);

    function slideFunction() {
        if ($('.ativo').next().length) {
            $('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
        } 
        else {
            $('.ativo').fadeOut().removeClass("ativo");
            $('#carousel img:eq(0)').fadeIn().addClass("ativo");
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modeIcon = document.getElementById('mode_icon');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    modeIcon.addEventListener('click', () => {
        if (modeIcon.classList.contains('fa-moon')) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
            themeStylesheet.setAttribute('href', './TEMA_02.css'); 
        } 
        else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
            themeStylesheet.setAttribute('href', './TEMA_01.css'); 
        }
    });
});
