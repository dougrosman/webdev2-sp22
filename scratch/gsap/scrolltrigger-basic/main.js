// let tl = gsap.timeline();

// tl.to(".a", {right: '0', background: 'red', duration: 2})
//   .to(".a", {bottom: '0', background: 'green', duration: 1})
//   .to(".b", {bottom: '0', background: 'purple', duration: .5})

gsap.to('.box', {
  scrollTrigger: {
    trigger: ".divider",
    start: "top center",
    toggleActions: "play pause none none"
  },
  x: 800,
  rotation: 360,
  duration: 3
  
})

let paragraphs = document.querySelectorAll('.fade');

console.log(paragraphs);

paragraphs.forEach(p => {
  gsap.to(p,{
    scrollTrigger: {
      trigger: p,
      start: 'center 80%'
    },
    opacity: 1,
    duration: 3
  })
})

