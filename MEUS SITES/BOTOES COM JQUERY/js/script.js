$(document).ready(function() {
    var count = 0;
    
    $('#quantidade-mais').click(function() {
        count++;
        $('#quantidade .contador span').text(count);
    });

    $('#quantidade-menos').click(function() {
        if (count > 0) {
            count--;
            $('#quantidade .contador span').text(count);
        }
    });

    var thumbsCount = 0;
    $('#thumbs .icone').click(function() {
        thumbsCount++;
        $('#thumbs .contador span').text(thumbsCount);
    });

    // Efeitos nos botões
    $('#button1').click(function() {
        $(this).hide();
    });

    $('#button2').click(function() {
        $(this).fadeOut();
    });

    $('#button3').click(function() {
        $(this).slideUp();
    });

    $('#button4').click(function() {
        $(this).toggle("bounce", { times: 3 }, "slow");
    });

    $('#button5').click(function() {
        $(this).toggle("explode");
    });

    $('#button6').click(function() {
        $(this).toggle("pulsate");
    });

    $('#button7').click(function() {
        $(this).toggle("shake");
    });

    $('#button8').click(function() {
        $(this).toggle("size");
    });

    $('#button9').click(function() {
        $(this).toggle("fold");
    });

    $('#button10').click(function() {
        $(this).toggle("highlight");
    });

    $('#button11').click(function() {
        $(this).toggle("scale");
    });

    $('#button12').click(function() {
        $(this).toggle("puff");
    });

    $('#button13').click(function() {
        $(this).toggle("blind");
    });

    $('#button14').click(function() {
        $(this).toggle("clip");
    });

    $('#button15').click(function() {
        $(this).toggle("drop");
    });

    $('#button16').click(function() {
        $(this).toggle("slide");
    });

    $('#button17').click(function() {
        $(this).toggle("transfer");
    });

    $('#button18').click(function() {
        $(this).toggle("fade");
    });

    $('#button19').click(function() {
        $(this).animate({ left: '+=50px' }, 500);
    });

    $('#button20').click(function() {
        $(this).animate({ height: 'toggle' });
    });
});
