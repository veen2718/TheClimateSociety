document.addEventListener('scroll', function() {
    var transitionTrigger = document.getElementById('Clock');
    var triggerTop = transitionTrigger.offsetTop;
    var windowHeight = window.innerHeight;
    var pageScroll = window.scrollY;

    var background2 = document.getElementById('background2');

    if (pageScroll >= triggerTop - windowHeight && pageScroll <= triggerTop) {
        var percentInView = (pageScroll - (triggerTop - windowHeight)) / windowHeight;
        var opacitySecondImage = Math.min(1 * percentInView, 1);

        background2.style.opacity = opacitySecondImage;

    } else {
        background2.style.opacity = 0;
    }
});
