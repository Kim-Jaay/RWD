$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        // fade: true,
    });

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    // $('.mbtn').on('click', () => ($('.gnb').toggleClass('on'), console.log(이솝)))

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.smenu').removeAttr('style');
    });

});
