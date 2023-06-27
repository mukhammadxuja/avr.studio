window.addEventListener("load", () => {
  gsap.to("#preloader", {
    delay: 4.5,
    opacity: 0,
    easing: Power3.inOut,
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
