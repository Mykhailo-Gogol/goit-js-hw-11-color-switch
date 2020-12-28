const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

const colors = [
  "#000000",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

startRef.addEventListener("click", onStart);
stopRef.addEventListener("click", onStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let onChangeColor;

function onStart() {
  startRef.disabled = true;
  onChangeColor;
  console.log("start");
  onChangeColor = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 6)];
    console.log("1s");
  }, 1000);
}

function onStop() {
  startRef.disabled = false;
  clearInterval(onChangeColor);
  console.log("stop");
}
