// NAV FUNCTIONS
function pageView(id, btn) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');

    document.querySelectorAll('footer button').forEach(button => {
        button.classList.remove('activeBtn');
    });

    if (btn) btn.classList.add('activeBtn');
}

function setProgress(percent) {
  const circle = document.querySelector('.progress');
  const text = document.getElementById('percentage');
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDashoffset = offset;
  text.textContent = `${percent}%`;
}

// Teste de progresso automático
let progress = 0;
const interval = setInterval(() => {
  if (progress > 100) clearInterval(interval);
  else {
    setProgress(progress);
    progress++;
  }
}, 40);