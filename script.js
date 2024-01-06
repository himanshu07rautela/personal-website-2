const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.to("#nav1 img",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        
        start:"top 0",
        end:"top -5%",
        scrub:true
    }

})
gsap.to("#nav2 #links",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        opacity:0,
        scroller:"#main",
        
        start:"top 0",
        end:"top -5%",
        scrub:true
    }

})

function video(){
let videocon=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
  gsap.to(playbtn,{
    scale:1,
    opacity:1

  })

})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    
      })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-80,
        top:dets.y-80
    
      })
})
}
video();

function h1loading(){
    gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.2

})
gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:1.2,
    duration:0.5,
})
}
h1loading();

function cursor(){
document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y

    })
})
document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%)scale(1)"
    })
})
document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%)scale(0)"
    })
})

document.querySelector("#child2").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%)scale(1)"
    })
})
document.querySelector("#child2").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%)scale(0)"
    })
})
document.querySelector("#child3").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%)scale(1)"
    })
})
document.querySelector("#child3").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%)scale(0)"
    })
})
document.querySelector("#child4").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%)scale(1)"
    })
})
document.querySelector("#child4").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%)scale(0)"
    })
})
}
cursor();


//opacity ke liye
document.addEventListener("DOMContentLoaded", function() {
    var innerElements = document.querySelectorAll('.inner3');
    var innerpElements = document.querySelectorAll('.innerp3');

    innerElements.forEach(function(element) {
        element.addEventListener('mouseover', function() {
            // Set the opacity of elements with class 'innerp' to 1 when one is hovered
            innerpElements.forEach(function(innerpElement) {
                innerpElement.style.opacity = 1;
            });
        });

        element.addEventListener('mouseout', function() {
            // Reset the opacity of elements with class 'innerp' when the mouse leaves
            innerpElements.forEach(function(innerpElement) {
                innerpElement.style.opacity = ''; // Reset to the default style
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var innerElements = document.querySelectorAll('.inner2');
    var innerpElements = document.querySelectorAll('.innerp2');

    innerElements.forEach(function(element) {
        element.addEventListener('mouseover', function() {
            // Set the opacity of elements with class 'innerp' to 1 when one is hovered
            innerpElements.forEach(function(innerpElement) {
                innerpElement.style.opacity = 1;
            });
        });

        element.addEventListener('mouseout', function() {
            // Reset the opacity of elements with class 'innerp' when the mouse leaves
            innerpElements.forEach(function(innerpElement) {
                innerpElement.style.opacity = ''; // Reset to the default style
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var innerElements = document.querySelectorAll('.inner1');
    var innerpElements = document.querySelectorAll('.innerp1');

    innerElements.forEach(function(element) {
        element.addEventListener('mouseover', function() {
            // Set the opacity of elements with class 'innerp' to 1 when one is hovered
            innerpElements.forEach(function(innerpElement) {
                innerpElement.style.opacity = 1;
            });
        });

        element.addEventListener('mouseout', function() {
            // Reset the opacity of elements with class 'innerp' when the mouse leaves
            innerpElements.forEach(function(innerpElement) {
                innerpElement.style.opacity = ''; // Reset to the default style
            });
        });
    });
});


