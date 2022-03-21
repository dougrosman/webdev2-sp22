let animationOptions = {
    rotation: 27,
    left: "50%",
    duration: 2
}

let tl = gsap.timeline();

tl.to('.a', {x: 200, rotate: 360, background: "red", duration: 2})
  .to('.a', {y: 200, rotate: 315, background: "green"})
  .to('.b', {y: 400, rotate: 1280, skewX: 45, border: "10px solid red"})

  console.log(gsap.globalTimeline)

// gsap.to(".box", animationOptions)



// console.log(animationOptions);
// let cat = {
//     legs: 4,
//     fur: "orange",
//     hungry: true
// }