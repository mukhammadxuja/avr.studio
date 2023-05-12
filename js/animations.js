const timeline = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".gallery",
  start: "top top",
  end: "bottom bottom",
  pin: ".right",
})

isAnimating = false;

gsap
  .timeline({
    defaults: {
      duration: 1.2,
      ease: "power3.inOut",
    },
    onComplete: () => (isAnimating = true),
  })
  .addLabel("start", 0);

timeline.from(
  "#heading",
  {
    delay: 0.5,
    duration: 0.8,
    skewY: 10,
    y: 100,
    x: -199,
    opacity: 0,
  },
  4
);

timeline.from(
  "#video",
  {
    delay: 0.5,
    duration: 0.8,
    y: 100,
    opacity: 0,
  },
  4
);

window.addEventListener("load", () => {
  gsap.to("#preloader", {
    opacity: 0,
    duration: 0.5,
    delay: 4,
    onComplete: () => {
      document.querySelector("#preloader").style.display = "none";
    },
  });
});
