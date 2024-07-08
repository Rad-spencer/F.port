
function loadingloaderanimation(){
    let NowAnimation = document.querySelector(".line h2");
let timer = document.querySelector("#line1-part1 h5");
let grow = 0;
let tl = gsap.timeline()

tl.from(".line h1",{
    y:150,
    stagger: 0.1,
    duration:0.6,
    delay:0.5
})

tl.from("#line1-part1",{
opacity:0,
onStart: function(){
    let h5growAnimation = setInterval(()=>{
        if(grow <= 100){
            timer.innerHTML = grow++;
     }
     else{
            clearInterval(h5growAnimation);
     } 
     
     },30)
}
})

tl.to(".line h2",{
animationName:"anime",
opacity:1,
})

tl.to("#loader",{
opacity:0,
duration:0.2,
delay:0
})
tl.from("#page1",{
delay:0.2,
y:1800,
opacity:0,
duration:0.5,
ease:Power4,
})

tl.to("#loader",{
display:"none",
})

tl.from("#nav",{
   opacity:0,
})
tl.from("#hero1 h1, #hero2 h2, #hero3 h1, #hero4 h1",{
    y:120,
    stagger:0.3,
})

}



function cursoranimation(){
    document.addEventListener("mousemove",(dets)=>{
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        
      });
}




loadingloaderanimation();
cursoranimation();