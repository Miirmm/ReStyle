gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".image",
  start: "top top",
  end: "+=300px",
  pin: true,
  scrub: true,
});
