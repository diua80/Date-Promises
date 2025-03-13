import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const refs = {
    requiredTime: document.getElementById("datetime-picker"),
    startBtn: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}
refs.startBtn.disabled = true;

let countdownInterval;

let selectedDate = null;

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();
        if (selectedDates[0] <= currentDate) {
            alert("Будь ласка, виберіть дату в майбутньому");
            refs.startBtn.disabled = true;
        } else {
            selectedDate = selectedDates[0];
            refs.startBtn.disabled = false;         
        }
    },
});
refs.startBtn.addEventListener("click", startCountBack);

function startCountBack() {
    
    refs.startBtn.disabled = true;    
    countdownInterval = setInterval(() => {
        currentDate = new Date();
        const timeToCount = selectedDate - currentDate;
        if (timeToCount <= 0) {
            clearInterval(countdownInterval);
            alert("Час вийшов!");
            return;
    }
        
        const days = Math.floor(timeToCount / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeToCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeToCount % (1000 * 60 * 60) )/ (1000 * 60));
        const seconds = Math.floor((timeToCount % (1000 * 60)) / 1000);   
        
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = minutes;
        refs.seconds.textContent = seconds;
    }, 1000);
}