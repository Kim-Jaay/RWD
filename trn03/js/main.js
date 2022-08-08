$(function () {


    const closeBanner = () => {
        $('.TopBanner').slideToggle('on');
        // document.querySelector('.TopBanner').classList.toggle('on')
    }
    $('.TopBanner i').on('click', closeBanner);





    $('.MainSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        // speed: 5000,
        // cssEase: 'linear',
    });
    $('.ProductSlider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });

    function toggleClass() {

        $('.pop li').toggleClass('on')
        $('.Footer .popup').toggleClass('on');
    }
    $('.pop li').on('click', toggleClass);
    $('.popup i').on('click', toggleClass);


    function mopen() {
        $(this).toggleClass('on')
        $('.Gnb').toggleClass('on')
    }
    $('.mopen').on('click', mopen)

})