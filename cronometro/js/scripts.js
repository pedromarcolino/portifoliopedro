const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

/* startBtn.addEventListener("click", () => {}); */
/* startBtn.addEventListener("click", function () {}); */
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", continueTimer);
resetBtn.addEventListener("click", resetTimer);

/* 
1- Quando startTimer() for chamado:
    Ele define um intervalo que a cada 10 milissegundos executa o código dentro do setInterval.
    A cada 10 milissegundos, a função verifica se o cronômetro não está pausado (!isPaused).

2- Se o cronômetro não estiver pausado:
    O valor de milliseconds será incrementado em 10, contando o tempo que passou.

3- Se o cronômetro estiver pausado:
    O valor de milliseconds não será alterado, pois o código dentro do if não será executado.

4 - o setInterval em JavaScript é uma função que executa uma callback    (função de retorno) repetidamente após um intervalo de tempo especificado. Essa callback não bloqueia a execução do restante do código; ou seja, o código que vem logo em seguida ao setInterval é executado de forma assíncrona, sem esperar que o intervalo termine.

5 - Isso significa que o código após o setInterval continua a ser executado normalmente, enquanto a callback dentro do setInterval é chamada repetidamente em paralelo a cada intervalo de tempo definido.

6 - o setInterval continuará sendo executado indefinidamente, mas quando isPaused for true, ele simplesmente não passará da primeira condição if (!isPaused), o que significa que a lógica dentro do bloco if será ignorada. A callback ainda será chamada no intervalo de 10 milissegundos, mas não fará nada, ou seja, callback estará sempre rodando de 10 em 10 milissegundos
*/
function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilliseconds(milliseconds);
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

function continueTimer() {
  isPaused = false;
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
}

/* voltar tudo ao seu estado inicial */
/* clearInterval(interval) interrompe esse temporizador, o que significa que a callback associada ao setInterval não será mais chamada. No entanto, o código da função callback ainda está no seu script, apenas não será invocado repetidamente */
function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  millisecondsEl.textContent = "000";

  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";

  isPaused = false;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

/* 
Se time for menor que 100, a função tenta usar padStart para adicionar zeros à esquerda até que o comprimento total da string seja 3.
Para usar o metodo padStart preciso transformar o número em uma string
*/
function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
