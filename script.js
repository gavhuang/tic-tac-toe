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
      if (
        game.roundTracker % 2 === 0 &&
        !cell.textContent &&
        game.gameOver === false
      ) {
        const index = cell.getAttribute("data-index");

        gameArray[index] = "X";
        cell.textContent = "X";
        game.roundTracker++;
        game.checkWin();
      }

      if (
        game.roundTracker % 2 > 0 &&
        !cell.textContent &&
        game.gameOver === false
      ) {
        const index = cell.getAttribute("data-index");

        gameArray[index] = "O";
        cell.textContent = "O";
        game.roundTracker++;
        game.checkWin();
      }
    });
  });

  return {
    gameArray,
  };
})();

const game = (() => {
  let roundTracker = 0;
  let gameOver = false;

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

    if (game.roundTracker === 9 && game.gameOver === false) {
      game.gameOver = true;
      alert("Tie Game!");
    }

    winConditions.forEach((condition) => {
      if (
        gameArray[condition[0]] === "X" &&
        gameArray[condition[1]] === "X" &&
        gameArray[condition[2]] === "X" &&
        game.gameOver === false
      ) {
        game.gameOver = true;
        alert("X Wins!");
      }

      if (
        gameArray[condition[0]] === "O" &&
        gameArray[condition[1]] === "O" &&
        gameArray[condition[2]] === "O" &&
        game.gameOver === false
      ) {
        game.gameOver = true;
        alert("O Wins!");
      }
    });
  };

  return {
    checkWin,
    roundTracker,
    gameOver,
  };
})();
