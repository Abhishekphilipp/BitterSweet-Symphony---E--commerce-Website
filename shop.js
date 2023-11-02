const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loadingAnimation() {
    gsap.from('#page1 h1,p',{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.3,
    stagger:0.3
    })
    }
    loadingAnimation()
function loadingAnimationImg() {
    gsap.from('.page img',{
    y:100,
    opacity:0,
    delay:2,
    duration:0.4,
    stagger:0.3
    })
    }
    loadingAnimationImg()
