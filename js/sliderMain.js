$('.slider').slick({
    dots: true,
    prevArrow: '<div class="buttPrev"><img src="img/sliderPic/strelkaLeft.png"></div>',
    nextArrow: '<div class="buttNext"><img src="img/sliderPic/strelkaRight.png"></div>',
    arrows: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false
});