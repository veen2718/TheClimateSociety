document.addEventListener('scroll', function() {
    var transitionTrigger = document.getElementById('Clock');
    var triggerTop = transitionTrigger.offsetTop;
    var windowHeight = window.innerHeight;
    var pageScroll = window.scrollY;

    var background2 = document.getElementById('background2');

    if (pageScroll >= triggerTop - windowHeight && pageScroll <= triggerTop) {
        // var percentInView = (pageScroll - (triggerTop - windowHeight)) / windowHeight;
        // var opacitySecondImage = Math.min(1 * percentInView, 1);

        // background2.style.opacity = opacitySecondImage;
        document.body.style.background = 'url(/assets/home_burning.jpg) no-repeat center center fixed'
        document.body.style.backgroundSize = 'cover'

    } else {
        document.body.style.background = 'url(/assets/home.jpg) no-repeat center center fixed'
        document.body.style.backgroundSize = 'cover'
    }
});
