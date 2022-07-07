$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        // fade: true,
    });

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
    });

    // $('.mbtn').on('click', () => ($('.gnb').toggleClass('on'), console.log(이솝)))

    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideDown();
    })
})