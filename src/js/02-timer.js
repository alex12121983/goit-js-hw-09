import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  outputDays: document.querySelector('[data-days]'),
  outputHours: document.querySelector('[data-hours]'),
  outputMinutes: document.querySelector('[data-minutes]'),
  outputSeconds: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;
const currentDate = new Date();
let userDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - currentDate >= 0) {
      refs.startBtn.disabled = false;
    } else {
      alert('Please choose a date in the future');
      refs.startBtn.disabled = true;
    }
    userDate = selectedDates[0];
  },
};
flatpickr('#datetime-picker', options);
refs.startBtn.addEventListener('click', timer);
function timer() {
  const intervalId = setInterval(() => {
    const dateTime = new Date();
    const deltaTime = userDate - dateTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    refs.outputDays.textContent = addLeadingZero(days);
    refs.outputHours.textContent = addLeadingZero(hours);
    refs.outputMinutes.textContent = addLeadingZero(minutes);
    refs.outputSeconds.textContent = addLeadingZero(seconds);
  }, 1000);
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  if (value.toString().length === 1) {
    return value.toString().padStart(2, '0');
  }
  return value;
}
