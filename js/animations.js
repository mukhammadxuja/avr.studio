const timeline = gsap.timeline();
console.log(timeline);

timeline.from(".heading", {
  delay: 0.5,
  duration: 0.8,
  skewY: 10,
  y: 100,
  x: -199,
  opacity: 0,
});

timeline.from(".video", {
  delay: 0,
  duration: 0.8,
  y: 100,
  opacity: 0,
});