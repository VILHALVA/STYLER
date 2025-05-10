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

