$(document).ready(function () {
    var navOpen = false;
    var transY = 2.5;

    //open nav-dropdown-menu on mobile devices
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

    //close nav-dropdown on mobile devices
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

    //scrollanimation for sub-headlines (angebote)
    var scrollLink = $('.scroll');

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 100
            
        }, 1000)
        console.log($(this.hash).offset().top);
    })

    //nav__link highlighting while scrolling

    var navScrollLink = $('.nav__link');

    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();        
        navScrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 100;

            if(sectionOffset <= scrollbarLocation) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
        })
    })
});