import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dataTimePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const today = Date.now();
const dayS = document.querySelector("[data-days]");
const hourS = document.querySelector("[data-hours]");
const minS = document.querySelector("[data-minutes]");
const secS = document.querySelector("[data-seconds]");
let parseData = null;

const dataOptions = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) { 
        parseData = Date.parse(selectedDates);
        console.log(parseData);
        if(selectedDates[0] < today){
            Notiflix.Notify.failure("Please choose a date in the future");
            startBtn.setAttribute("disabled",  "disabled");
            
        } else{
            startBtn.removeAttribute("disabled");
        }
    },
};

flatpickr(dataTimePicker, dataOptions)
startBtn.addEventListener("click", () =>  timer.start());

const timer = {
    intervalId: null,
    isActive: false,
start() {
    if(this.isActive) {
        return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() =>{
    const curretnTime = Date.now();
    const total = parseData - curretnTime;
    if(parseData > curretnTime) {
        let time = convertMs(total);
        updateClock(time);
        startBtn.setAttribute("disabled",  "disabled");
        dataTimePicker.setAttribute("disabled",  "disabled");
    } else {
        clearInterval(this.intervalId) ;
        startBtn.removeAttribute("disabled"); 
        dataTimePicker.removeAttribute("disabled"); 
    }
}, 1000);
},
}

function updateClock({ days, hours, minutes, seconds }) {
dayS.textContent = `${days}`;
hourS.textContent = `${hours}`;
minS.textContent = `${minutes}`;
secS.textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0")
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}


