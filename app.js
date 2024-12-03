const image = document.querySelector('.p-image');
const lenis = new Lenis()

function raf(time){
  lenis.raf(time)
  requestAnimationFrame(raf)
};
requestAnimationFrame(raf);

var tl= gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start: "0% 95%",
        end:"50% 50%",
       
        scrub: true,
        onUpdate: function() {
            // Dynamically calculate blur based on velocity
            const progress = this.progress(); // Progress of the animation (0 to 1)
            const blurAmount = Math.abs(progress - 0.5) * 10; // Simulate motion blur effect
            image.style.filter = `blur(${blurAmount}px)`;
          },
          onComplete: function() {
            // Reset blur at the end of animation
            image.style.filter = 'none';
          }

    }
})


tl.to(".p-image",{
    rotate:-0,
    top: "110%",
    left:"5%",
    scale:0.6,
}, 'amima')


var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start: "0% 95%",
        end:"50% 50%",
        scrub: true,
       
    }
})
tl2.to(".p-image",{
    rotate:-0,
    top: "220%",
    left:"60%",
    scale:1,
}, 'amima1')

var tl3= gsap.timeline({
    scrollTrigger:{
        trigger:".four",
        start: "0% 95%",
        end:"50% 50%",
        scrub: true,
       
    }
})
tl3.to(".p-image",{
    rotate:-23,
    top: "320%",
    left:"5%",
    scale:1
    
})

