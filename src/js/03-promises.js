import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector(".form"),
  submit: document.querySelector('[type="submit"]'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}
refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(event.target.elements["delay"].value);
  const delay = Number(event.target.elements["step"].value);
  const amount = Number(event.target.elements["amount"].value);
  for (let i = 1; i <= amount; i++){
    const delayForCurrent = firstDelay + (i - 1) * delay;
    createPromise(i, delayForCurrent);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  })
    .then(({ position, delay }) => {
      Notify.success(`✅ Promise ${position} with delay ${delay} is fulfilled`);
    })
    .catch(({ position, delay }) => {
       Notify.failure(`❌ Promise ${position} with delay ${delay} is rejected`);
  })
}

// function handleSubmit(event) {
//   event.preventDefault();
//   const firstDelay = Number(event.target.elements["delay"].value);
//   const delay = Number(event.target.elements["step"].value);
//   const amount = Number(event.target.elements["amount"].value);
  
//   for (let i = 1; i <= amount; i++){
//     const delayForCurrent = firstDelay + (i - 1) * delay;
//     createPromise(i, delayForCurrent);
//   }
// }
// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay)
//   })
//     .then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(({ position, delay }) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     });
// }
