$(document).ready(function () {

    function highlight(getId) {
        $('.link' + getId).css('font-weight', '500');        
    }

    function regular(getId) {
        $('.link' + getId).css('font-weight', '300');        
    }

    const header = document.querySelector('header');    
    const modell = document.querySelector('.modell');
    const angebote = document.querySelector('.angebote');
    const about = document.querySelector('.about');    
    const footer = document.querySelector('footer');

    const options = {
        rootMargin: '-25px',
        threshold: [0.2, 0.5, 1]
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                highlight(entry.target.classList[0].charAt(4));
            } else {
                regular(entry.target.classList[0].charAt(4));
            }
        })
    }, options);

    
    observer.observe(header, {threshold: [0.5]});
    observer.observe(modell, {threshold: [0.5]});
    observer.observe(angebote, {threshold: [0.2]});
    observer.observe(about, {threshold: [1]});
    observer.observe(footer, {threshold: [1]});
});