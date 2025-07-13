let boxes = document.querySelectorAll(".boxes");
let playerIsX = true;
let winnerText = document.querySelector(".winner");
let gameOver = false;
let mode = document.querySelector(".mode");

let winningCombinatioms = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "" && !gameOver) {
      box.innerText = playerIsX ? "X" : "O";
      checkForWinner(box);
      playerIsX = !playerIsX;
    }
  });
});

const checkForWinner = (box) => {
  for (pattern of winningCombinatioms) {
    if (
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[1]].innerText === boxes[pattern[2]].innerText &&
      boxes[pattern[0]].innerText !== "" &&
      boxes[pattern[1]].innerText !== "" &&
      boxes[pattern[2]].innerText !== ""
    ) {
      console.log(box);
      winnerText.innerText = `Player ${box.innerText} wins!`;
      gameOver = true;
    }
  }
};

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
