$(document).ready(function () {
    var navOpen = false;
    var transY = 2.5;
    $('.nav__btn-container').click(function () {
        if (!navOpen) {
            // nav__btn animation start                     
            $('.nav__btn-container').addClass('open');

            //dropdown menu animation start
            $('.nav__link').css('opacity', '1');
            for (var i = 2; i <= 5; i++) {
                $('.link' + i).css('transform', 'translateY(' + (transY * (i - 1)) + 'em)');
            };
            navOpen = true;
        } else {
            //dropdown menu animation start
            for (var i = 2; i <= 5; i++) {
                $('.link' + i).css('transform', 'translateY(0)');
            };
            $('.nav__link').css('opacity', '0');
            navOpen = false;
            
            // nav__btn animation start   
            $('.nav__btn-container').removeClass('open');
        }
    });

    $('.nav__link').click(function() {
        if(navOpen) {
            for (var i = 2; i <= 5; i++) {
                $('.link' + i).css('transform', 'translateY(0)');
            };
            $('.nav__link').css('opacity', '0');
            navOpen = false;
            
            // nav__btn animation start   
            $('.nav__btn-container').removeClass('open');
        }
    });
});