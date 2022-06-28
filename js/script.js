function buttonClicked(argButtonName) {
  clearMessages();

  var randomNumber = Math.floor(Math.random() * 3 + 1);
  var computerMove = getMoveName(randomNumber);

  displayResult(playerMove, computerMove);
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

var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
