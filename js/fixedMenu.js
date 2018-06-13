$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 290) {
            $('nav.nav_menu').addClass('stickytop');
        }
    else{
            $('nav.nav_menu').removeClass('stickytop');
        }
    });
});