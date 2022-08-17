let body = document.querySelector("body");
let timerLabel = document.getElementById("timer");
let startButton = document.getElementById("start-button");
let cycleCounterLabel = document.getElementById("cycle-counter");

let timerValue = 25 * 60;
let timer;
let timerIsOn = false;
let workTimerIsOn = false;
let restTimerIsOn = false;
let cycleCounter = 0;

let startTimer = () => {
  timerIsOn = true;
  timer = setInterval(tickTimer, 1000);
};

let startWorkTimer = () => {
  stopTimer();
  workTimerIsOn = true;
  timerValue = 25 * 60;
  body.setAttribute("class", "work-timer-on");
  startTimer();
};

let startRestTimer = () => {
  stopTimer();
  restTimerIsOn = true;
  timerValue = 5 * 60;
  body.setAttribute("class", "rest-timer-on");
  startTimer();
};

let startLongRestTimer = () => {
  stopTimer();
  restTimerIsOn = true;
  timerValue = 20 * 60;
  body.setAttribute("class", "rest-timer-on");
  startTimer();
};

let stopTimer = () => {
  timerIsOn = false;
  restTimerIsOn = false;
  workTimerIsOn = false;
  body.removeAttribute("class");
  clearInterval(timer);
  timerValue = 25 * 60;
  updateLabels();
};

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  timerIsOn ? stopTimer() : startWorkTimer();
});

function tickTimer() {
  timerValue--;

  if (timerValue <= 0) {
    if (workTimerIsOn && cycleCounter % 4 === 0 && cycleCounter != 0)
      startLongRestTimer();
    else if (workTimerIsOn) startRestTimer();
    else if (restTimerIsOn) {
      startWorkTimer();
      cycleCounter++;
    } else console.error("timer is running but no work/rest");
  }

  updateLabels();
}

function updateLabels() {
  let hourLabel = Math.floor(timerValue / 60).toString();
  if (hourLabel.length === 1) {
    hourLabel = "0" + hourLabel;
  }

  let secondLabel = (timerValue % 60).toString();
  if (secondLabel.length === 1) {
    secondLabel = "0" + secondLabel;
  }
  timerLabel.innerHTML = `
    ${hourLabel}:${secondLabel}`;

  cycleCounterLabel.innerHTML = "🔁: " + cycleCounter;
}

const params = new URLSearchParams(window.location.search);


