
$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(3000, function(){
            $('#btnFadeOut').text('Its Gone');
        });
    });

    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(3000, function(){
             $('#btnFadeIn').text('its start')
        });
    });
    $('#append').click(function(){
        $('#box2').append('<p>When the botton append is clicked the will add new text line</p>')
        $('#box2').css({color: 'balck', background: '#ccc'});
    });
    $('#change').click(function(){
        $('#box3').css({color: 'red'});
    });
});