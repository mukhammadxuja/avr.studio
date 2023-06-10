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

const copyToClipboard = async () => {
  const copy = document.getElementById("copy");
  const copySpan = document.getElementById("copySpan");

  navigator.clipboard.writeText(copy.value);
  copySpan.textContent = "Copied!";
};

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("translate-x-0");
}
