refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
}
// console.log(refs.startBtn);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.startBtn.addEventListener("click", startToChangeColor);
refs.stopBtn.addEventListener("click", stopToChangeColor);
let intervalId = null;

function stopToChangeColor() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
};

function startToChangeColor() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}