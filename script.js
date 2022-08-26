const startBtn = document.querySelector(".start"),
  resetBtn = document.querySelector(".reset"),
  pauseBtn = document.querySelector(".pause"),
  appendSeconds = document.querySelector(".seconds"),
  appendMinutes = document.querySelector(".minutes"),
  time = document.querySelector(".time"),
  appendMilisecond = document.querySelector(".milisecond");

var seconds = 0,
  minute = 0,
  milisecond = 0,
  interval;

startBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  seconds = "00";
  minute = "00";
  milisecond = "00";
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minute;
  appendMilisecond.innerHTML = milisecond;
});

function startTime() {
  milisecond++;
  if (milisecond < 10) {
    appendMilisecond.innerHTML = "0" + milisecond;
  }
  if (milisecond > 9) {
    appendMilisecond.innerHTML = milisecond;
  }
  if (milisecond > 99) {
    milisecond = 0;
    appendMilisecond.innerHTML = "0" + milisecond;

    seconds++;
    if (seconds < 10) {
      appendSeconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      minute++;
      if (minute < 10) {
        appendMinutes.innerHTML = "0" + minute;
      }
      if (minute > 9) {
        appendMinutes.innerHTML = minute;
      }
      seconds = 0;
      appendSeconds.innerHTML = "0" + seconds;
    }
  }
}
