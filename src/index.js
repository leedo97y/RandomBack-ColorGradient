const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const button = document.querySelector("button");
const body = document.body;

function handleColor() {
  let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  let randomColor2 = colors[Math.floor(Math.random() * colors.length)];

  if (randomColor1 === randomColor2) {
    randomColor1 = colors[0];
    randomColor2 = colors[7];
  }
  body.style.background = `linear-gradient(0.25turn, ${randomColor1}, ${randomColor2})`;
}

button.addEventListener("click", handleColor);
