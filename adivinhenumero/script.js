"use strict";

const btnCheck = document.querySelector(".check");
const inputGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const numberDiv = document.querySelector(".number");
const attempts = document.querySelector(".score");
const body = document.querySelector("body");
const again = document.querySelector(".again");
const paragraphHighscore = document.querySelector(".highscore");

let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (value) => {
  message.textContent = value;
};

btnCheck.addEventListener("click", () => {
  const guess = +inputGuess.value;

  // When there is no input
  if (!guess) {
    displayMessage("⛔ Sem número!");

    // When player wins
  } else if (guess === secrectNumber) {
    displayMessage("🎉 Número Correto!");
    body.style.backgroundColor = "#60b347";
    numberDiv.style.width = "30rem";
    numberDiv.textContent = secrectNumber;

    if (score > highscore) {
      highscore = score;
      paragraphHighscore.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      score--;
      displayMessage(
        guess > secrectNumber ? "📈 Muito Alto!" : "📉 Muito Baixo"
      );
      attempts.textContent = score;
    } else {
      displayMessage("💣 Você perdeu o jogo");
      attempts.textContent = 0;
    }
  }
});

again.addEventListener("click", () => {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Comece adivinhar...");
  attempts.textContent = score;
  numberDiv.textContent = "?";
  inputGuess.value = "";

  body.style.backgroundColor = "#222";
  numberDiv.style.width = "15rem";
});
