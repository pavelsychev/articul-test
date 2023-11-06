 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger.js";


  gsap.registerPlugin(ScrollTrigger);

  let mediaAnimation = gsap.matchMedia();
  
   mediaAnimation.add("(min-width: 1456px)", () => { 
  const tlStart = gsap.timeline({})
  tlStart.to('.start', {
    duration: 2,
    opacity: 1,
})

  tlStart.to('.start', {
        duration: 3,
        opacity: 0,
        zIndex: 0,
    })

  tlStart.from('.sidebar-main', {
      duration: 1.5,
      opacity: 0,
      x: 200,
      ease: "back.out(1.1)"
  })
  tlStart.from('.card-main', {
      duration: 1.1,
      opacity: 0,
      stagger: 0.2,
      y: -100,
      ease: "back.out(1.5)"
  })
  tlStart.from('.main__subtitle', {
    duration: 0.5,
    opacity: 0,
    y: 20,
    ease: "back.out(1.5)"
})
tlStart.from('.header-main', {
    duration: 2,
    opacity: 0,
    y: 20,
    ease: "back.out(1.5)"
})
const tlSecondPage = gsap.timeline({})

tlSecondPage.from('.header-slider', {
    duration: 1,
    opacity: 0,
    y: -350,
    ease: "back.out(1)"
}, '<')
tlSecondPage.from('.sidebar-slider', {
    duration: 1,
    opacity: 0,
    x: 200,
    ease: "back.out(1.1)"
}, '<')
})
mediaAnimation.add("(max-width: 1456px)", () => {

    const tlStart = gsap.timeline({});

    tlStart.to('.start', {
        duration: 2,
        opacity: 1,
    })
    
      tlStart.to('.start', {
            duration: 3,
            opacity: 0,
            zIndex: 0,
        })

    const iconsT = document.querySelectorAll('.card-main');
    iconsT.forEach(icon => {
    gsap.from(icon, {
        duration: 0.8,
        opacity: 0,
        yPercent: 20,
        ease: "back.out(1)",
        scrollTrigger: {
            trigger: icon,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
        }
    })
})

  })
