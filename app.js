const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// END section
const section = document.querySelector("section");
const end = section.querySelector("h1");

// SCROLL MAGIC
const controller = new ScrollMagic.Controller();
// SCENES
let scene = new ScrollMagic.Scene({
  duration: 2500,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(".intro")
  .addTo(controller);

// TEXT ANIMATION
const textAnim = gsap.to(text, { opacity: 1, opacity: 0, duration: 1 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

// VIDEO ANIMATION
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000; // GET DURATION IN SECONDS
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 40);
