gsap.to('.box',{
  scrollTrigger: {
    trigger: '.box',
    start: 'top center',
    toggleActions: 'play pause resume reset'
  },
  x: 400,
  duration: 4
})