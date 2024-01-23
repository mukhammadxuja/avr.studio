const timeline = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

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
    .from(
      "#heading",
      {
        duration: 0.8,
        skewY: 10,
        y: 100,
        x: -199,
        opacity: 0,
      },
      0
    )
    .from(
      "#video",
      {
        duration: 0.8,
        y: 100,
        opacity: 0,
      },
      0
    )
    .from(
      "#navbar",
      {
        duration: 0.8,
        y: -50,
        ease: Power0,
        opacity: 0,
      },
      0
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

const item2 = document.getElementsByClassName("item-2");

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

// function startCounter() {
//   let percent = document.getElementById("percent")
//   let currentPercent = 1;

//   function updateCounter() {
//     if (currentPercent === 100) return;

//     currentPercent += Math.floor(Math.random() * 10) + 1;

//     if (currentPercent > 100) {
//       currentPercent = 100;
//     }

//     percent.textContent = currentPercent + '%';

//     let delay = Math.floor(Math.random() * 200) + 50;
//     setTimeout(updateCounter, delay);
//   }

//   updateCounter();
// }

// startCounter();

// timeline.to("#percent", 0.25, {
//   delay: 4.5,
//   opacity: 0
// })

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
