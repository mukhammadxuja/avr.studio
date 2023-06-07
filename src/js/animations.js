const timeline = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".gallery",
  start: "top top",
  end: "bottom bottom",
  pin: ".right",
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
      delay: 4,
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

const openNav = () => {
  // animateOpenNav();
  const toggleBtn = document.getElementById("menu-toggle-btn");
  console.log(toggleBtn);
  toggleBtn.onclick = (e) => {
    toggleBtn.classList.toggle(".show-menu");
    timeline.reversed(!timeline.reversed());
  };
};

openNav();
