import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(".form"),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  btn: document.querySelector("button"),
}

let position = 0;

refs.form.addEventListener("submit", timeout);

function timeout (e){
    e.preventDefault();
    setTimeout(() => {
    interval();
  }, refs.delayInput.value)
}

function interval() {
  position = 0;
  setInterval(() => {
  position += 1;
  if (position > refs.amountInput.value) {
      return;
    }
  createPromise(position, refs.delayInput.value)
    .then(ok)
    .catch(notOk);
  }, refs.stepInput.value);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
;
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay} ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay} ms`);
  }
    })
  }
    
  function ok(result) {
    Notiflix.Notify.success(result);
  }
  function notOk(error) {
    Notiflix.Notify.failure(error);
  }



