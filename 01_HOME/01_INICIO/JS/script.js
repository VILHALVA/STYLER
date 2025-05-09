function clickMenu() {
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
        menuAberto = false;
    } 
    else {
        itens.style.display = 'block';
        menuAberto = true;
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block';
    } 
    else {
        if (!menuAberto) {
            itens.style.display = 'none';
        }
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
        const isDark = themeStylesheet.getAttribute('href').includes('ESCURO.css');

        if (isDark) {
            themeStylesheet.setAttribute('href', './CSS/CLARO.css');
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        } 
        else {
            themeStylesheet.setAttribute('href', './CSS/ESCURO.css');
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        }
    });
});

const dataNascimentoStr = "10/06/1996"; 
function calcularIdade(dataNascimentoStr) {
  const [dia, mes, ano] = dataNascimentoStr.split("/").map(Number);
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const dataAniversarioEsteAno = new Date(anoAtual, mes - 1, dia); 

  let idade = anoAtual - ano;
  if (hoje < dataAniversarioEsteAno) {
    idade -= 1;
  }

  return idade;
}

document.addEventListener("DOMContentLoaded", () => {
  const idade = calcularIdade(dataNascimentoStr);
  document.getElementById("idade").textContent = idade;
});
