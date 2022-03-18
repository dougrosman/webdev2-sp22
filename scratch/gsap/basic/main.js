// gsap.to(".box", {
//     rotation: 27,
//     x: 100,
//     duration: 1});


let tl = gsap.timeline();

tl.to(".a", {right: '0', background: 'red', duration: 2})
  .to(".a", {bottom: '0', background: 'green', duration: 1})
  .to(".b", {bottom: '0', background: 'purple', duration: .5})