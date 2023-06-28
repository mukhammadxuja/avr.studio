window.addEventListener("load", () => {
  let loading = 0;
  gsap
    .to("#preloader", {
      duration: 5.2,
      easing: Power3.inOut,
      onUpdate: function () {
        loading = Math.floor(this.progress() * 100);
        document.querySelector("#percent").innerHTML = loading + "%";
      },
      onComplete: () => {
        document.querySelector("#preloader").style.display = "none";
      },
    })
    .to("#percent", {
      opacity: 0,
      duration: 0.5,
      delay: 4,
      onComplete: () => {
        document.querySelector("#percent").style.display = "none";
      },
    });
});

let lastMouseX = 0,
  lastMouseY = 0;
let rotX = 0,
  rotY = 0;

const setRotX = gsap.quickSetter("#heading", "rotationX");
const setRotY = gsap.quickSetter("#heading", "rotationY");

function mouseMoved(ev) {
  var deltaX = ev.pageX - lastMouseX;
  var deltaY = ev.pageY - lastMouseY;

  lastMouseX = ev.pageX;
  lastMouseY = ev.pageY;

  rotY -= deltaX * 0.02;
  rotX += deltaY * 0.02;

  setRotX(rotX + "deg");
  setRotY(rotY + "deg");
}

document.addEventListener("mousemove", mouseMoved);
