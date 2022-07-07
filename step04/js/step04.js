$(function () {


    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
    })


    $('.gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            event.preventDefault();
            // $('.smenu').show(); ← 다 열리게 함

            // ↓ 다른 메뉴 닫히게함
            $('.smenu').hide();

            $(this).next().slideToggle();
        }

    });


    // ↓ 디스플레이 규격 변경 시 다단메뉴 창 스타일 제거
    $(window).on('resize', function () {
        $('.smenu').removeAttr('style');
    });



})