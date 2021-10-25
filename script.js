let roundTracker = 0;
let gameOver = false;

const gameBoard = (() => {
  const gameArray = ["", "", "", "", "", "", "", "", ""];
  const gameBoardDiv = document.querySelector(".gameboard");

  gameArray.forEach((cell, index) => {
    const makeCell = document.createElement("div");
    makeCell.className = "cell";
    makeCell.setAttribute("data-index", `${index}`);
    gameBoardDiv.appendChild(makeCell);
  });

  // Generate event listeners
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (roundTracker % 2 === 0 && !cell.textContent && gameOver === false) {
        const index = cell.getAttribute("data-index");

        gameArray[index] = "X";
        cell.textContent = "X";
        roundTracker++;
        game.checkWin();
      }

      if (roundTracker % 2 > 0 && !cell.textContent && gameOver === false) {
        const index = cell.getAttribute("data-index");

        gameArray[index] = "O";
        cell.textContent = "O";
        roundTracker++;
        game.checkWin();
      }
    });
  });

  return {
    gameArray,
  };
})();

const game = (() => {
  const checkWin = () => {
    const gameArray = gameBoard.gameArray;
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if (roundTracker === 9 && gameOver === false) {
      gameOver = true;
      alert("Tie Game!");
    }

    winConditions.forEach((condition) => {
      if (
        gameArray[condition[0]] === "X" &&
        gameArray[condition[1]] === "X" &&
        gameArray[condition[2]] === "X" &&
        gameOver === false
      ) {
        gameOver = true;
        alert("X Wins!");
      }

      if (
        gameArray[condition[0]] === "O" &&
        gameArray[condition[1]] === "O" &&
        gameArray[condition[2]] === "O" &&
        gameOver === false
      ) {
        gameOver = true;
        alert("O Wins!");
      }
    });
  };

  return {
    checkWin,
  };
})();
