const boxes = document.querySelectorAll('.box');
const restart = document.querySelector('#reset');
const displayWinner = document.querySelector('.message');
let player = 'X';

const table = ["", "", "", "", "", "", "", "", ""];

const winner = {
  0: [0, 1, 2],
  1: [3, 4, 5],
  2: [6, 7, 8],
  3: [0, 3, 6],
  4: [1, 4, 7],
  5: [2, 5, 8],
  6: [0, 4, 8],
  7: [2, 4, 6]
};


const checkWinner = () => {
  for (let i = 0; i < 8; i++) {
    const [a, b, c] = winner[i];
    if (table[a] && table[a] === table[b] && table[a] === table[c]) {
      return table[a];
    }
  }
  return null;
}



boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    if (table[index] === '' && !checkWinner()) {
      table[index] = player;
      box.style.backgroundColor = player === 'X' ? 'blue' : 'red';
      player = player === 'X' ? 'O' : 'X';
    }
    if (checkWinner()) {
      displayWinner.hidden = false;
      displayWinner.innerHTML = `Player ${checkWinner()} wins!`;
    }
    else if (!table.includes('')) {
      displayWinner.hidden = false;
      displayWinner.innerHTML = `It's a draw!`;
    }
  });
});

const restartGame = () => {
  table.fill('');
  displayWinner.hidden = true;
  boxes.forEach(box => box.style.backgroundColor = 'white');
  boxes.forEach(box => box.innerHTML = '');
  player = 'X';
}

restart.addEventListener('click', restartGame);


