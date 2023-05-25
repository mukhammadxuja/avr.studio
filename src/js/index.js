const blurryImageLoad = new BlurryImageLoad();
blurryImageLoad.load();

const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

nameInput.addEventListener("keyup", () => {
  // disabling the button if a input field value is empty
  if (nameInput.value.trim() === "") {
    btn.disabled = true;
  } else {
    // enabling the button
    btn.disabled = false;
  }
});

btn.addEventListener("click", function () {
  // Change the text of the button to "Sending..."
  btn.textContent = "Sending request...";

  // Add the "sending" class to the button to display the sending animation
  btn.classList.add(".sending");

  // Disable the button to prevent multiple clicks
  btn.disabled = true;

  // Wait for 3000ms (3 seconds) before changing the text back to "Send", removing the ".sending" class, and enabling the button
  setTimeout(function () {
    btn.textContent = "Send";
    btn.classList.remove(".sending");
    btn.disabled = false;
  }, 2000);
});

var values = [];

// select all the buttons
const serviceButtons = document.querySelectorAll("#serviceBtn");
const budgetButtons = document.querySelectorAll("#budgetBtn");
var inputs = document.querySelectorAll(
  "input[type='text'], input[type='email'], input[type='number']"
);

function showToast() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function getValues() {
  for (let i = 0; i < inputs.length; i++) {
    values.push(inputs[i].value);
  }

  const templateParams = {
    values: values,
  };

  emailjs.send("service_cg9hipg", "template_htxj4xt", templateParams).then(
    function (response) {
      console.log("SUCCESS", response);
      showToast();
    },
    function (error) {
      console.log("FAILED", error);
    }
  );
  console.log(values);
}

const buttons = [...serviceButtons, ...budgetButtons];

// add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // check if the button value is already in the array
    if (values.includes(button.value)) {
      // if it is, remove it from the array
      values = values.filter((value) => value !== button.value);

      button.style.background = "transparent";
      button.style.color = "#ac90d9";
    } else {
      // if it isn't, add it to the array
      values.push(button.value);
      button.style.background = "#ac90d9";
      button.style.color = "#fff";
    }
  });
});

// Get
const canvas = document.querySelector("canvas");
const audio = document.querySelector("#audio");

audio.volume = 0.2;

let opt = {
  width: canvas.offsetWidth,
  height: canvas.offsetHeight,
  midY: canvas.offsetHeight / 2,
  points: 80,
  stretch: 10,
  sinHeight: 0,
  speed: -0.1,
  strokeColor: "#AC90D9",
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
    TweenMax.to(opt, 1, {
      sinHeight: 4,
      stretch: 5,
      ease: Power2.easeInOut,
    });
  } else {
    audio.pause();
    TweenMax.to(opt, 1, {
      sinHeight: 0,
      stretch: 10,
      ease: Power3.easeOut,
    });
  }
});

// function showStatus() {
//   var x = document.querySelector(".status");
//   x.className = "show";
//   setTimeout(function () {
//     x.className = x.className.replace("show", "");
//   }, 3000);
// }
