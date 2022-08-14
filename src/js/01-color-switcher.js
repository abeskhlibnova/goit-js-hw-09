refs = {
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
    body: document.querySelector("body"),
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.btnStart.addEventListener("click", () => colorSwitcher.start());
refs.btnStop.addEventListener("click", () => colorSwitcher.stop());

const colorSwitcher = {
    intervalId: null,
    isActive: false,
    start() {
        if(this.isActive){
            return;
        }
        this.isActive = true;
            this.intervalId = setInterval(() => {
            refs.body.style.background = getRandomHexColor();
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    },
}