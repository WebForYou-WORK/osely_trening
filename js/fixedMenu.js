$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 200) {
            $('.nav').addClass('stickytop');
        }
        else{
            $('.nav').removeClass('stickytop');
        }
    });
});