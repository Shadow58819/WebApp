let currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
let scoreX = '0';
let scoreO = '0';
let isRestart = false;
const cells = document.querySelectorAll(".cell");

function updateScore() {
  document.getElementById('score-x').innerHTML = `Spieler X: ${scoreX}`;
  document.getElementById('score-o').innerHTML = `Spieler O: ${scoreO}`;
}

function resetScore() {
  scoreX = 0;
  scoreO = 0;
  updateScore();
  resetBoard();
}

updateScore();

function checkWinner() {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.backgroundColor = "#90EE90";
      cells[b].style.backgroundColor = "#90EE90";
      cells[c].style.backgroundColor = "#90EE90";
      isRestart = false;
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return Array.from(cells).every((cell) => cell.textContent);
}

function resetBoard(isReset = false) {

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.backgroundColor = "#333333";
  });

  if (scoreX < scoreO) {
    currentPlayer = "X";
  } else if(scoreX > scoreO) {
    currentPlayer = "O";
  } else {
    currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
  }

  document.getElementById('result').innerHTML = `Spieler ${currentPlayer} ist dran`;

  isRestart = isReset;
}

function makeMove(index) {
  if (cells[index].textContent || checkWinner()) return;

  cells[index].textContent = currentPlayer;

  if (checkWinner()) {
    if (currentPlayer === "X") {
      scoreX++;
    } else {
      scoreO++;
    }
    updateScore();
    setTimeout(function () {
      document.getElementById('result').innerHTML = `Spieler ${currentPlayer} hat Gewonnen!`;
    }, 1);
    
    setTimeout(() => {
      if(!isRestart){
        resetBoard();
      }
    }, 2500);

  } else if (checkDraw()) {
    setTimeout(() => {
      if(!isRestart){
        resetBoard();
      }
    }, 2500);
    
    setTimeout(function () {
      document.getElementById('result').innerHTML = "Niemand hat Gewonnen!";
      cells.forEach((cell) => {
        cell.style.backgroundColor = "#ff8383";
      });
    }, 1);
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById('result').innerHTML = `Spieler ${currentPlayer} ist dran`;
  }
}

resetBoard();

function back() {
  window.location = "../index_2.html";
}
