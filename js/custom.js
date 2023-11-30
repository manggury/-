$(function () {

    $('.visual_wrap').slick({
        arrows: true,
        autoplay: true,
        autoPlaySpeed: 5,
    });

    $('.mainVisual .visual_wrap').on('afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.mainVisual .num strong').text(c + 1);
    });

    $('.header_wrap .gnb ul .menu_btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('.header_wrap .sub_menu').toggleClass('on');
        //$('.sub_menu .menu_box').toggleClass('menu_box')
        //$('.sub_menu .menu_box').removeClass('on')
        //$('.sub_menu .menu_box').addClass('on')
    });

    $('.banner_slide').slick({
        slidesToShow: 3,
        arrows: true,
        autoPlay: false,
    });
})