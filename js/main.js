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

    //turn animation for angebote__persEntw and rotator-persEntw
    $('.turn-btn-persEntw').click(function () {        
        $('.angebote__persEntw').addClass('rotated-back');
        $('.rotator-persEntw').removeClass('rotated-back');
        $('.rotator-persEntw').addClass('rotated-front');
    });

    $('.back-persEntw').click(function () {
        $('.angebote__persEntw').removeClass('rotated-back');        
        $('.rotator-persEntw').removeClass('rotated-front');
        $('.rotator-persEntw').addClass('rotated-back');
    });

    //turn animation for angebote__lifeCoaching and rotator-lifeCoaching
    $('.turn-btn-lifeCoaching').click(function () {        
        $('.angebote__lifeCoaching').addClass('rotated-back');
        $('.rotator-lifeCoaching').removeClass('rotated-back');
        $('.rotator-lifeCoaching').addClass('rotated-front');
    });

    $('.back-lifeCoaching').click(function () {
        $('.angebote__lifeCoaching').removeClass('rotated-back');        
        $('.rotator-lifeCoaching').removeClass('rotated-front');
        $('.rotator-lifeCoaching').addClass('rotated-back');
    });

    //turn animation for angebote__karriereCoaching and rotator-karriereCoaching
    $('.turn-btn-karriereCoaching').click(function () {        
        $('.angebote__karriereCoaching').addClass('rotated-back');
        $('.rotator-karriereCoaching').removeClass('rotated-back');
        $('.rotator-karriereCoaching').addClass('rotated-front');
    });

    $('.back-karriereCoaching').click(function () {
        $('.angebote__karriereCoaching').removeClass('rotated-back');        
        $('.rotator-karriereCoaching').removeClass('rotated-front');
        $('.rotator-karriereCoaching').addClass('rotated-back');
    });

    //turn animation for angebote__gast and rotator-gast
    $('.turn-btn-gast').click(function () {        
        $('.angebote__gast').addClass('rotated-back');
        $('.rotator-gast').removeClass('rotated-back');
        $('.rotator-gast').addClass('rotated-front');
    });

    $('.back-gast').click(function () {
        $('.angebote__gast').removeClass('rotated-back');        
        $('.rotator-gast').removeClass('rotated-front');
        $('.rotator-gast').addClass('rotated-back');
    });

    //turn animation for angebote__spirits and rotator-spirits
    $('.turn-btn-spirits').click(function () {        
        $('.angebote__spirits').addClass('rotated-back');
        $('.rotator-spirits').removeClass('rotated-back');
        $('.rotator-spirits').addClass('rotated-front');
    });

    $('.back-spirits').click(function () {
        $('.angebote__spirits').removeClass('rotated-back');        
        $('.rotator-spirits').removeClass('rotated-front');
        $('.rotator-spirits').addClass('rotated-back');
    });
});