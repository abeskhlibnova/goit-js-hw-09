import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(".form"),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  btn: document.querySelector("button"),
}

refs.form.addEventListener("submit", timeout);

function timeout (e){
  e.preventDefault();
  let delay = parseInt(refs.delayInput.value);
  const step = parseInt(refs.stepInput.value);
  const amount = refs.amountInput.value;

for (let i = 0; i < amount; i += 1){
  createPromise(i + 1, delay)
  .then(ok)
  .catch(notOk);
  delay += step;
}
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay} ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay} ms`);
  }
}, delay);
})
}
    
  function ok(result) {
    Notiflix.Notify.success(result);
  }
  function notOk(error) {
    Notiflix.Notify.failure(error);
  }



