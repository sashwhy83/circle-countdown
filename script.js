let countdownValue = 5;
const display = document.getElementById("countdown-number");

function animateNumber(num) {
  display.textContent = num;
  display.classList.remove("pop");
  void display.offsetWidth; // Force reflow to restart animation
  display.classList.add("pop");
}

function startCountdown() {
  const timer = setInterval(() => {
    animateNumber(countdownValue);

    countdownValue--;

    if (countdownValue < 0) {
      clearInterval(timer);
      display.textContent = "Let’s Go!";
      display.style.fontSize = "80px";
    }
  }, 1000);
}

startCountdown();
