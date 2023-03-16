const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

startBtn.addEventListener('click', startTimeInterval);

stopBtn.addEventListener('click', stopTimeInterval);

function startTimeInterval() {
  timerId = setInterval(() => {
    let colorHex = getRandomHexColor();
    document.body.style.backgroundColor = colorHex;
  }, 1000);
  startBtn.disabled = true;
}

function stopTimeInterval() {
  clearInterval(timerId);
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
