$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightsize-menu--close');

    });

    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightsize-menu--close');

    });

})