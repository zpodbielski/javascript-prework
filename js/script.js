function buttonClicked(argButtonName) {
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

  displayResult(argButtonName, computerMove);
}

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else {
    return 'nożyce';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  if (
    argPlayerMove == 'papier' && argComputerMove == 'kamień'
    || argPlayerMove == 'kamień' && argComputerMove == 'nożyce'
    || argPlayerMove == 'nożyce' && argComputerMove == 'papier'
  ) {
    printMessage('Wygrywasz, kompanie!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
