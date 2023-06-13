const timeline = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

const item2 = document.getElementsByClassName("item-2");
console.log(item2);

ScrollTrigger.create({
  trigger: ".gallery",
  start: "top top",
  end: "bottom bottom",
  pin: ".right",
});

gsap.to("#works", {
  scrollTrigger: "#works", // start the animation when ".section" enters the viewport (once)
  backgroundColor: "white",
});

gsap.from(item2, {
  scrollTrigger: {
    trigger: ".sticky-wrapper",
    scrub: true,
    start: "top top",
    end: "+=100%",
    pin: ".sticky",
  },
  clipPath: "inset(100% 0px 0px)",
  ease: "none",
});

gsap.set(".follower", {
  xPercent: -50,
  yPercent: -50,
  opacity: 1,
});

const preloader = document.getElementById("preloader");

preloader.addEventListener("mousemove", (e) => {
  gsap.to(".follower", {
    duration: 1.5,
    overwrite: "auto",
    x: e.clientX,
    y: e.clientY,
    stagger: 0.15,
    ease: "power3.out",
  });

  let timeline = gsap.timeline({
    defaults: { duration: 0.5, ease: "none" },
  });

  timeline.to(".follower", {
    scale: 1,
    overwrite: "auto",
    stagger: { amount: 0.15, from: "start", ease: "none" },
  });
  timeline.to(
    ".follower",
    {
      overwrite: "auto",
      stagger: { amount: 0.15, from: "end", ease: "none" },
    },
    "<+=2.5"
  );
});

isAnimating = false;

window.addEventListener("load", () => {
  gsap
    .timeline({
      defaults: {
        duration: 1.2,
        ease: "power3.inOut",
      },
      onComplete: () => (isAnimating = true),
    })
    .addLabel("start", 0);

  timeline
    .to("#preloader", {
      opacity: 0,
      duration: 0.5,
      delay: 4.5,
      onComplete: () => {
        document.querySelector("#preloader").style.display = "none";
      },
    })
    .from(
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
    )
    .from(
      "#video",
      {
        delay: 0.5,
        duration: 0.8,
        y: 100,
        opacity: 0,
      },
      4
    )
    .from(
      "#navbar",
      {
        duration: 0.8,
        y: -50,
        ease: Power0,
        opacity: 0,
      },
      4
    )
    .to(
      "#entrance",
      {
        duration: 1,
        opacity: 1,
      },
      0
    )
    .to(
      "#reveal",
      {
        duration: 1,
        ease: "expo",
        startAt: {
          y: 200,
          rotation: 15,
        },
        y: "0%",
        rotation: 0,
        opacity: 1,
      },
      0
    )
    .to(
      "#projectsNav",
      {
        duration: 0.3,
        y: 0,
        opacity: 1,
      },
      0
    );
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "horizontal",
});

// Get all title elements
const titles = document.querySelectorAll(".horizontal-title");

// Set initial position of titles
let position = 0;
titles.forEach((title, index) => {
  title.style.left = `${position}px`;
  position += 600; // Width of each title
});

// Animate titles on scroll
scroll.on("scroll", function () {
  const scrollX = this.scroll.instance.scroll.x;
  titles.forEach((title, index) => {
    const titleX = parseInt(title.style.left);
    const distance = titleX - scrollX;
    const speed = distance * 0.1; // Adjust speed as needed
    gsap.to(title, {
      x: `+=${speed}`,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});
