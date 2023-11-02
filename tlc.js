const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function contentDets(){
    gsap.from('.page1 .content',{
          x:100,
          opacity:0,
          delay:0.5,
          duration:0.3,
          stagger:0.3
    })
}
contentDets();

function imgDets(){
    gsap.from('.page1 .imgcont',{ 
        x:100,
        opacity:0,
        delay:0.6,
        duration:0.3,
        stagger:0.3

    })
}
imgDets();

function content2(){
    gsap.from('.page1 .content2, .contentsmall',{
        x:100,
        opacity:0,
        delay:0.7,
        duration:0.5,
        stagger:0.3
    } )
}
content2()

var add = document.querySelector('.add')
var subtract = document.querySelector('.less')
var amount= document.querySelector('span')
var amt = document.querySelector('.amt')

add.addEventListener('click', function(value){
var currentValue = parseInt(amount.textContent);
currentValue += 1;
amount.textContent = currentValue;
var currentAmt = parseInt(amt.textContent);
currentAmt += 50;
amt.textContent = currentAmt + "$";
})
subtract.addEventListener('click', function(value){

var currentValue = parseInt(amount.textContent);
currentValue -= 1;
amount.textContent = currentValue;
var currentAmt = parseInt(amt.textContent);
currentAmt -= 50;
amt.textContent = currentAmt + "$";
})
