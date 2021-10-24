const gameBoard = (() => {
  const gameArray = ["", "", "", "", "", "", "", "", ""];

  return {
    gameArray,
  };
})();

const display = (() => {
  const gameBoard = document.querySelector(".gameboard");

  const selectCell = () => {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (roundTracker % 2 === 0 && cell.textContent === "") {
          cell.textContent = "X";
          console.log(roundTracker++);
        } else if (roundTracker % 2 > 0 && cell.textContent === "") {
          cell.textContent = "O";
          console.log(roundTracker++);
        } else {
          return;
        }

        if (roundTracker === 9) {
          return;
        }
      });
    });
  };

  const updateBoard = (gameArray) => {
    gameArray.forEach((choice, index) => {
      const makeCell = document.createElement("div");

      makeCell.className = "cell";
      makeCell.setAttribute("data-index", `${index}`);
      makeCell.textContent = `${choice}`;

      gameBoard.appendChild(makeCell);
    });
  };

  return {
    updateBoard,
    selectCell,
  };
})();

const player = (name, choice) => {
  return {
    name,
    choice,
  };
};

let roundTracker = 0;
const playerOne = player("Player One", "X");
const playerTwo = player("Player Two", "O");

display.updateBoard(gameBoard.gameArray);
display.selectCell();
