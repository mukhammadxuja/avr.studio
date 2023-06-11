console.log("working");
// Get
const canvas = document.querySelector("canvas");
const audio = document.querySelector("#audio");
const musicValue = document.querySelector("#musicValue");

audio.volume = 0.2;

let opt = {
  width: canvas.offsetWidth,
  height: canvas.offsetHeight,
  midY: canvas.offsetHeight / 2,
  points: 80,
  stretch: 10,
  sinHeight: 0,
  speed: -0.1,
  strokeColor: "#000",
  strokeWidth: 1.5,
  power: false,
};

canvas.width = opt.width * 2;
canvas.height = opt.height * 2;
canvas.style.width = opt.width;
canvas.style.height = opt.height;

const context = canvas.getContext("2d");
context.scale(2, 2);

context.strokeStyle = opt.strokeColor;
context.lineWidth = opt.strokeWidth;
context.lineCap = "round";
context.lineJoin = "round";

let time = 0;

const render = () => {
  window.requestAnimationFrame(render);
  context.clearRect(0, 0, opt.width, opt.height);
  time += 1;
  context.beginPath();
  let increment = 0;

  for (i = 0; i <= opt.points; i++) {
    if (i < opt.points / 2) {
      increment += 0.1;
    } else {
      increment += -0.1;
    }

    const x = (opt.width / opt.points) * i;
    const y =
      opt.midY +
      Math.sin((time * opt.speed * i) / opt.stretch) *
        opt.sinHeight *
        increment;
    context.lineTo(x, y);
  }

  context.stroke();
};

render();

canvas.addEventListener("click", () => {
  opt.power = !opt.power;

  if (opt.power) {
    audio.play();
    musicValue.textContent = "On";
    TweenMax.to(opt, 1, {
      sinHeight: 4,
      stretch: 5,
      ease: Power2.easeInOut,
    });
  } else {
    audio.pause();
    musicValue.textContent = "Off";
    TweenMax.to(opt, 1, {
      sinHeight: 0,
      stretch: 10,
      ease: Power3.easeOut,
    });
  }
});
