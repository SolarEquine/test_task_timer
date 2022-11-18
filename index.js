const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let timer = 0;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    clearInterval(timer);
    timerEl.innerHTML = parseTime(seconds);
    timer = setInterval(()=>{
      seconds-=1;
      timerEl.innerHTML = parseTime(seconds);
      if (seconds<=0){
        clearInterval(timer);
      }
    }, 1000);
  };
};

function parseTime(seconds){
  let parsedHours = Math.floor(seconds/60/60);
  let parsedMinutes = Math.floor(seconds/60)%60;
  let parsedSeconds = seconds%60;
  let parsedTime = "";
  parsedTime = parsedHours +":"+parsedMinutes+":"+parsedSeconds;
  return parsedTime
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
