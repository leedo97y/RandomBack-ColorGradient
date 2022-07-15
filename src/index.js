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

  do {
    randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  } while (randomColor1 === randomColor2);

  /**
   * [ 커뮤니티를 통해 새롭게 알게 된 방식 ]
   * filter를 통해 1에서 사용된 색상을 제외하고 2에서 선택하게 만들 수 있다.
   *
   * const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
   * const filterColors = colors.filter((element) => element !== randomColor1);
   *
   * const randomColor2 = filterColors[Math.floor(Math.random() * filterColors.length)];
   */

  body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
}

button.addEventListener("click", handleColor);
