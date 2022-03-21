let paragraphs = document.querySelectorAll('.fade');

console.log(paragraphs);

paragraphs.forEach(p => {

  gsap.to(p, {
    scrollTrigger: {
      trigger: p,
      start: 'center 70%'
  },
  left: 1000,
  duration: 2
})
})

