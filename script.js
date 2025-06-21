const numberEl = document.getElementById('number');
let count = 5;

function showNumber(n) {
  numberEl.textContent = n;
  numberEl.style.animation = 'none';
  void numberEl.offsetWidth; // reset animation
  numberEl.style.animation = 'glow-pop 1s ease-in-out forwards';
}

function startCountdown() {
  const timer = setInterval(() => {
    if (count > 0) {
      showNumber(count);
      count--;
    } else {
      clearInterval(timer);
      numberEl.textContent = 'GO!';
      numberEl.style.fontSize = '100px';
      numberEl.style.animation = 'glow-pop 1s ease-in-out forwards';
    }
  }, 1000);
}

startCountdown();
