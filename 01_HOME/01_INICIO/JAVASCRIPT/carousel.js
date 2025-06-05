$(function () {
    var totalImages = 54;
    var carousel = $('#carousel');

    for (var i = 1; i <= totalImages; i++) {
        var numeroFormatado = i.toString().padStart(2, '0');
        carousel.append('<img src="./IMAGENS/VILHALVA/' + numeroFormatado + '.jpg" alt="VILHALVA ' + numeroFormatado + '">');
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
