const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoConAnimated(){
    var videoCon = document.querySelector('#video-container')
var playBtn = document.querySelector('#play')

videoCon.addEventListener('mouseenter', function(){
    gsap.to(playBtn,{
    opacity:1,
    scale:1
    })
})
videoCon.addEventListener('mouseleave',function(){
    gsap.to(playBtn,{
    opacity:0,
    scale:0
    })
})
videoCon.addEventListener('mousemove',function(dets){
    gsap.to(playBtn,{
    left:dets.x-60,
    top:dets.y-90,
    })
})
}
videoConAnimated()

function loadingH1(){
    gsap.from('#page1 h1',{
        y:100,
    opacity:0,
    delay:0.5,
    duration:0.3,
    stagger:0.3,
    })
}
loadingH1()

function loadingVideo(){
    gsap.from('#video-container',{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.5,
    })
}
loadingVideo()

