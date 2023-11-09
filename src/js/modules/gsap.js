 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger.js";



  window.addEventListener('DOMContentLoaded', () => {
    animation();
})

function animation(){
    
    gsap.registerPlugin(ScrollTrigger);
    

    const tlIntro = gsap.timeline({})
    
    tlIntro.to('.start', {
      duration: 1,
      opacity: 1,
  })
  
    tlIntro.to('.start', {
          duration: 1,
          opacity: 0,
          zIndex: 0,
      })

    const tlStart = gsap.timeline({})

    tlStart.from('.promo__item-container', {
      duration: 0.5,
      xPercent: 150,
      stagger: 0.1,
  }, '=+2')
  
  tlStart.from('.promo__item-container', {
      duration: 0.7,
      width: '110%',
  })
  tlStart.to('.promo__item-container-one', {
      yPercent: -80,
      rotate: -40,
  })
  const tlArrow = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 30%',
    }
})
tlArrow.from('.contact__item-container:nth-of-type(2)',{
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "back.out(1)"
}, '<')
tlArrow.from('.contact__item-container:first-child',{
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "back.out(1)"
}, '<')
tlArrow.from('.contact__item-container:last-child',{
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "back.out(1)"
}, '<')

}

