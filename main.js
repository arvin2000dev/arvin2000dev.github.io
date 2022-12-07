const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc",
  });

var firstTime = true;

["mouseover"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    if (firstTime == true) {
      button.textContent = ":)";
      firstTime = false;
    }

    button.textContent += ")";

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

const container = document.querySelector(".container");
let allEmojis = ["😂", "🤡"];
let index = 0;

container.addEventListener("click", (e) => {
  buttonClick();
});

var clicked = false;
button.addEventListener("click", (e) => {
  clicked = true;
  play();
  buttonClick();
});

function buttonClick() {
  const box = document.createElement("div");
  box.classList.add("awesome");
  box.innerHTML = allEmojis[randomInteger(0, allEmojis.length - 1)];
  box.style.fontSize = `120px`;
  box.style.position = "absolute";
  box.style.left = `${randomInteger(0, 90)}%`;
  box.style.top = `${randomInteger(0, 90)}%`;
  box.style.zIndex = index++;
  container.appendChild(box);

  if (clicked) window.setInterval(buttonClick, 500);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
