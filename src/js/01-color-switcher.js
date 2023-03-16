const startBtn = document.querySelector('button data-start');
const stopBtn = document.querySelector('button data-stop');

console.log(startBtn);
console.log(stopBtn);

let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});
