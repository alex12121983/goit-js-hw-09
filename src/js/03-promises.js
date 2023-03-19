const refs = {
  inputDelay: document.querySelector('.form input[name="delay"]'),
  inputStep: document.querySelector('.form input[name="step"]'),
  inputAmount: document.querySelector('.form input[name="amount"]'),
  button: document.querySelector('.form button[type="submit"]'),
};

refs.button.addEventListener('click', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  for (let i = 0; i < Number(refs.inputAmount.value); i += 1) {
    const position = i + 1;
    const delay =
      Number(refs.inputDelay.value) + Number(refs.inputStep.value) * i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
