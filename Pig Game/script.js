"use strict";
const playerOne = document.querySelector(".player-0");
const playerTwo = document.querySelector(".player-1");
const playerOnePoint = document.querySelector(".player-0-point");
const playerTwoPoint = document.querySelector(".player-1-point");
const playerOneCurrentPoint = document.querySelector(".player-0-current-point");
const playerTwoCurrentPoint = document.querySelector(".player-1-current-point");
const diceImg = document.querySelector(".dice-img");
const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
let total = 0;
let playerActive = 0;

playerOnePoint.textContent = 0;
playerTwoPoint.textContent = 0;
diceImg.classList.add("hidden");

//roll dice function
const rollDiceFunc = () => {
  let numFromRollDice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove("hidden");
  diceImg.src = `dice-${numFromRollDice}.png`;

  if (numFromRollDice !== 1) {
    total += numFromRollDice;
    document.querySelector(
      `.player-${playerActive}-current-point`
    ).textContent = total;
  } else {
    document.querySelector(
      `.player-${playerActive}-current-point`
    ).textContent = 0;
    total = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    playerOne.classList.toggle("active");
    playerTwo.classList.toggle("active");
  }
};

//hold button function
const holdFunc = () => {
  let playerPointNum = Number(
    document.querySelector(`.player-${playerActive}-point`).textContent
  );

  let playerCurrentPointNum = Number(
    document.querySelector(`.player-${playerActive}-current-point`).textContent
  );

  playerPointNum += playerCurrentPointNum;

  document.querySelector(
    `.player-${playerActive}-point`
  ).textContent = playerPointNum;

  if (playerPointNum >= 10) {
    diceImg.classList.add("hidden");
    rollDice.classList.add("hidden");
    hold.classList.add("hidden");
  } else {
    document.querySelector(
      `.player-${playerActive}-current-point`
    ).textContent = 0;
    total = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    playerOne.classList.toggle("active");
    playerTwo.classList.toggle("active");
  }
};

//new game function
const newGameFunc = () => {
  diceImg.classList.remove("hidden");
  rollDice.classList.remove("hidden");
  hold.classList.remove("hidden");

  playerActive = 0;
  document.querySelector(`.player-${playerActive}-point`).textContent = 0;
  document.querySelector(`.player-${playerActive + 1}-point`).textContent = 0;
  document.querySelector(
    `.player-${playerActive}-current-point`
  ).textContent = 0;
  document.querySelector(
    `.player-${playerActive + 1}-current-point`
  ).textContent = 0;
  total = 0;
  playerOne.classList.toggle("active");
};

//roll dice button functionality
rollDice.addEventListener("click", () => {
  rollDiceFunc();
});

//hold button functionality
hold.addEventListener("click", () => {
  holdFunc();
});

//new game button functionality
newGame.addEventListener("click", () => {
  newGameFunc();
});
