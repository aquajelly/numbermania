document.addEventListener('DOMContentLoaded', () => {

easyDifficulty = document.getElementsByClassName('gameType')[0];
mediumDifficulty = document.getElementsByClassName('gameType')[1];
hardDifficulty = document.getElementsByClassName('gameType')[2];
content = document.getElementsByClassName('content')[0];

gamePlay = (num1, num2, num3, num4, num5, num6) => {
  let gameScore = 0;
  let seconds = 30;
  let multiplier1 = num1;
  let multiplier2 = num2;
  let timer = document.createElement('div');
  timer.style.textAlign = 'center';
  timer.style.marginTop = '20px';
  timer.style.marginBottom = '20px';
  timer.style.width = '60%';
  timer.style.margin = 'auto';
  timer.style.display = 'flex';
  let timerContent = document.createElement('p');
  timerContent.style.fontSize = '20px';
  timerContent.style.width = '30%';
  timerContent.style.background = 'white';
  timerContent.style.border = '2px solid black';
  timerContent.style.borderRadius = '20px';
  timerContent.style.padding = '5px';
  timerContent.style.margin = 'auto';
  timerContent.style.marginTop = '20px';
  timer.appendChild(timerContent);
  let calculationDisplay = document.createElement('p');
  calculationDisplay.style.fontSize = '20px';
  calculationDisplay.style.width = '30%';
  calculationDisplay.style.background = 'white';
  calculationDisplay.style.border = '2px solid black';
  calculationDisplay.style.borderRadius = '20px';
  calculationDisplay.style.padding = '5px';
  calculationDisplay.style.margin = 'auto';
  calculationDisplay.style.marginTop = '20px';
  calculationDisplay.innerHTML = 'All Types';
  timer.appendChild(calculationDisplay);
  let difficultyDisplay = document.createElement('p');
  difficultyDisplay.style.fontSize = '20px';
  difficultyDisplay.style.width = '30%';
  difficultyDisplay.style.background = 'white';
  difficultyDisplay.style.border = '2px solid black';
  difficultyDisplay.style.borderRadius = '20px';
  difficultyDisplay.style.padding = '5px';
  difficultyDisplay.style.margin = 'auto';
  difficultyDisplay.style.marginTop = '20px';
  if (num1 == 19) {
    difficultyDisplay.innerHTML = 'Difficulty: Easy';
  } else if (num1 == 49) {
    difficultyDisplay.innerHTML = 'Difficulty: Medium';
  } else if (num1 == 99) {
    difficultyDisplay.innerHTML = 'Difficulty: Hard';
  }
  timer.appendChild(difficultyDisplay);
  let game = document.createElement('div');
  game.className = 'gameClass';
  game.style.height = '350px';
  game.style.width = '60%';
  game.style.background = 'white';
  game.style.border = '5px solid black';
  game.style.textAlign = 'center';
  game.style.margin = 'auto';
  game.style.marginTop = '20px';
  game.style.marginBottom = '20px';
  game.style.borderRadius = '20px';
  let gameContent = document.createElement('p');
  gameContent.style.paddingTop = '40px';
  gameContent.style.fontSize = '40px';
  game.appendChild(gameContent);
  let scoreArea = document.createElement('p');
  scoreArea.style.fontSize = '40px';
  scoreArea.style.marginTop = '80px';
  game.appendChild(scoreArea);
  let answerArea = document.createElement('input');
  answerArea.setAttribute('type', 'text');
  answerArea.setAttribute('placeholder', 'Click here to start typing!');
  answerArea.style.width = '80%';
  answerArea.style.marginTop = '60px';
  answerArea.style.fontSize = '30px';
  answerArea.style.textAlign = 'center';
  answerArea.style.background = 'rgb(2, 212, 167)';
  answerArea.style.border = '3px solid black';
  game.appendChild(answerArea);
  let body = document.querySelector('body');
  let button = document.querySelector('div');
  body.insertBefore(timer, button);
  body.insertBefore(game, button);
  timerContent.innerHTML = `Time Left: ${seconds}`;

  ready = () => {
    gameContent.innerHTML = 'Ready...';
  };
  getSet = () => {
    gameContent.innerHTML = 'Get set...';
  };
  go = () => {
    gameContent.innerHTML = 'Go!';
  };
  gameStart = () => {
    answerArea.removeAttribute('placeholder');

    calculationChooser();

    setInterval(countdown, 1000);
    setInterval(checker, 10);
  };

  setTimeout(ready, 0);
  setTimeout(getSet, 1000);
  setTimeout(go, 2000);
  setTimeout(gameStart, 3000);

  let correctAnswer;

  calculationChooser = () => {
    let number1 = parseInt(Math.random()*num1) + 1;
    let number2 = parseInt(Math.random()*num2) + 1;
    let number3 = parseInt(Math.random()*num3) + 1;
    let number4 = parseInt(Math.random()*num4) + 2;
    let randomNum = parseInt(Math.random()*4) + 1;
    if (randomNum == 1) {
      correctAnswer = number1 + number2;
      gameContent.innerHTML = `${number1} + ${number2}`;
    } else if (randomNum == 2) {
      correctAnswer = number1 - number2;
      gameContent.innerHTML = `${number1} - ${number2}`;
    } else if (randomNum == 3) {
      correctAnswer = number3 * number4;
      gameContent.innerHTML = `${number3} x ${number4}`;
    } else if (randomNum == 4) {
      divisionValidityChecker();
    }
  }

  divisionValidityChecker = () => {
    let number5 = parseInt(Math.random()*num5) + 1;
    let number6 = parseInt(Math.random()*num6) + 2;
    if (number5 % number6 == 0) {
      correctAnswer = number5 / number6;
      gameContent.innerHTML = `${number5} ÷ ${number6}`;
    } else {
      let number5 = parseInt(Math.random()*num5) + 1;
      let number6 = parseInt(Math.random()*num6) + 2;
      divisionValidityChecker();
    }
  }

  checker = () => {
    if (answerArea.value == correctAnswer) {
      gameScore++;
      answerArea.value = '';
      game.style.background = 'rgb(33, 245, 22)';
      setTimeout(backgroundNormal, 250);
      calculationChooser();
    };
  };

  backgroundNormal = () => {
    game.style.background = 'white'
  };

  countdown = () => {
    if (seconds === 0) {
      seconds = -1;
      timerContent.innerHTML = 'Out of time!';
      gameOver();
    } else if (seconds > 0) {
      seconds--;
      timerContent.innerHTML = `Time Left: ${seconds}`;
    };
  };

  gameOver = () => {
    game.style.background = 'rgb(238, 250, 15)';
    gameContent.innerHTML = 'Well done! You scored:';
    scoreArea.innerHTML = `${gameScore}`;
    answerArea.parentNode.removeChild(answerArea);
    let buttonArea = document.querySelector('.buttons');

    let newLinkForDifficulty = document.createElement('a');
    newLinkForDifficulty.setAttribute('href', 'allOfThem.html');
    let newButtonForDifficulty = document.createElement('button');
    newButtonForDifficulty.setAttribute('class', 'gameType weirdButtonThing');
    newButtonForDifficulty.setAttribute('type', 'button');
    newButtonForDifficulty.innerHTML = 'Change Difficulty';
    newLinkForDifficulty.appendChild(newButtonForDifficulty);

    let newButtonForReplay = document.createElement('button');
    newButtonForReplay.setAttribute('class', 'gameType');
    newButtonForReplay.setAttribute('type', 'button');
    newButtonForReplay.innerHTML = 'Play Again';

    buttonArea.appendChild(newLinkForDifficulty);
    buttonArea.appendChild(newButtonForReplay);

    replayTypeDecider = () => {
      game.parentNode.removeChild(game);
      timer.parentNode.removeChild(timer);
      clearTimeout(gameStart);
      buttonArea.removeChild(newLinkForDifficulty);
      buttonArea.removeChild(newButtonForReplay);
      if (num1 == 19) {
        gamePlay(19, 19);
      } else if (num1 == 49) {
        gamePlay(49, 49);
      } else if (num1 == 99) {
        gamePlay(99, 99);
      }
    };
    newButtonForReplay.addEventListener('click', replayTypeDecider);

    if (num1 == 19) {
      localStorage.setItem('currentScore', gameScore);
      if (gameScore >= localStorage.getItem('Score1AllOfThemEasy') || localStorage.getItem('Score1AllOfThemEasy') == 'null') {
        localStorage.setItem('Score5AllOfThemEasy', localStorage.getItem('Score4AllOfThemEasy', gameScore));
        localStorage.setItem('Score4AllOfThemEasy', localStorage.getItem('Score3AllOfThemEasy', gameScore));
        localStorage.setItem('Score3AllOfThemEasy', localStorage.getItem('Score2AllOfThemEasy', gameScore));
        localStorage.setItem('Score2AllOfThemEasy', localStorage.getItem('Score1AllOfThemEasy', gameScore));
        localStorage.setItem('Score1AllOfThemEasy', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score2AllOfThemEasy') || localStorage.getItem('Score2AllOfThemEasy') == 'null') {
        localStorage.setItem('Score5AllOfThemEasy', localStorage.getItem('Score4AllOfThemEasy', gameScore));
        localStorage.setItem('Score4AllOfThemEasy', localStorage.getItem('Score3AllOfThemEasy', gameScore));
        localStorage.setItem('Score3AllOfThemEasy', localStorage.getItem('Score2AllOfThemEasy', gameScore));
        localStorage.setItem('Score2AllOfThemEasy', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score3AllOfThemEasy') || localStorage.getItem('Score3AllOfThemEasy') == 'null') {
        localStorage.setItem('Score5AllOfThemEasy', localStorage.getItem('Score4AllOfThemEasy', gameScore));
        localStorage.setItem('Score4AllOfThemEasy', localStorage.getItem('Score3AllOfThemEasy', gameScore));
        localStorage.setItem('Score3AllOfThemEasy', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score4AllOfThemEasy') || localStorage.getItem('Score4AllOfThemEasy') == 'null') {
        localStorage.setItem('Score5AllOfThemEasy', localStorage.getItem('Score4AllOfThemEasy', gameScore));
        localStorage.setItem('Score4AllOfThemEasy', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score5AllOfThemEasy') || localStorage.getItem('Score5AllOfThemEasy') == 'null') {
        localStorage.setItem('Score5AllOfThemEasy', gameScore);
      }
      localStorage.removeItem('currentScore');
    } else if (num1 == 49) {
      localStorage.setItem('currentScore', gameScore);
      if (gameScore >= localStorage.getItem('Score1AllOfThemMedium') || localStorage.getItem('Score1AllOfThemMedium') == 'null') {
        localStorage.setItem('Score5AllOfThemMedium', localStorage.getItem('Score4AllOfThemMedium', gameScore));
        localStorage.setItem('Score4AllOfThemMedium', localStorage.getItem('Score3AllOfThemMedium', gameScore));
        localStorage.setItem('Score3AllOfThemMedium', localStorage.getItem('Score2AllOfThemMedium', gameScore));
        localStorage.setItem('Score2AllOfThemMedium', localStorage.getItem('Score1AllOfThemMedium', gameScore));
        localStorage.setItem('Score1AllOfThemMedium', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score2AllOfThemMedium') || localStorage.getItem('Score2AllOfThemMedium') == 'null') {
        localStorage.setItem('Score5AllOfThemMedium', localStorage.getItem('Score4AllOfThemMedium', gameScore));
        localStorage.setItem('Score4AllOfThemMedium', localStorage.getItem('Score3AllOfThemMedium', gameScore));
        localStorage.setItem('Score3AllOfThemMedium', localStorage.getItem('Score2AllOfThemMedium', gameScore));
        localStorage.setItem('Score2AllOfThemMedium', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score3AllOfThemMedium') || localStorage.getItem('Score3AllOfThemMedium') == 'null') {
        localStorage.setItem('Score5AllOfThemMedium', localStorage.getItem('Score4AllOfThemMedium', gameScore));
        localStorage.setItem('Score4AllOfThemMedium', localStorage.getItem('Score3AllOfThemMedium', gameScore));
        localStorage.setItem('Score3AllOfThemMedium', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score4AllOfThemMedium') || localStorage.getItem('Score4AllOfThemMedium') == 'null') {
        localStorage.setItem('Score5AllOfThemMedium', localStorage.getItem('Score4AllOfThemMedium', gameScore));
        localStorage.setItem('Score4AllOfThemMedium', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score5AllOfThemMedium') || localStorage.getItem('Score5AllOfThemMedium') == 'null') {
        localStorage.setItem('Score5AllOfThemMedium', gameScore);
      }
      localStorage.removeItem('currentScore');
    } else if (num1 == 99) {
      localStorage.setItem('currentScore', gameScore);
      if (gameScore >= localStorage.getItem('Score1AllOfThemHard') || localStorage.getItem('Score1AllOfThemHard') == 'null') {
        localStorage.setItem('Score5AllOfThemHard', localStorage.getItem('Score4AllOfThemHard', gameScore));
        localStorage.setItem('Score4AllOfThemHard', localStorage.getItem('Score3AllOfThemHard', gameScore));
        localStorage.setItem('Score3AllOfThemHard', localStorage.getItem('Score2AllOfThemHard', gameScore));
        localStorage.setItem('Score2AllOfThemHard', localStorage.getItem('Score1AllOfThemHard', gameScore));
        localStorage.setItem('Score1AllOfThemHard', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score2AllOfThemHard') || localStorage.getItem('Score2AllOfThemHard') == 'null') {
        localStorage.setItem('Score5AllOfThemHard', localStorage.getItem('Score4AllOfThemHard', gameScore));
        localStorage.setItem('Score4AllOfThemHard', localStorage.getItem('Score3AllOfThemHard', gameScore));
        localStorage.setItem('Score3AllOfThemHard', localStorage.getItem('Score2AllOfThemHard', gameScore));
        localStorage.setItem('Score2AllOfThemHard', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score3AllOfThemHard') || localStorage.getItem('Score3AllOfThemHard') == 'null') {
        localStorage.setItem('Score5AllOfThemHard', localStorage.getItem('Score4AllOfThemHard', gameScore));
        localStorage.setItem('Score4AllOfThemHard', localStorage.getItem('Score3AllOfThemHard', gameScore));
        localStorage.setItem('Score3AllOfThemHard', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score4AllOfThemHard') || localStorage.getItem('Score4AllOfThemHard') == 'null') {
        localStorage.setItem('Score5AllOfThemHard', localStorage.getItem('Score4AllOfThemHard', gameScore));
        localStorage.setItem('Score4AllOfThemHard', gameScore);
      }
      else if (gameScore >= localStorage.getItem('Score5AllOfThemHard') || localStorage.getItem('Score5AllOfThemHard') == 'null') {
        localStorage.setItem('Score5AllOfThemHard', gameScore);
      }
      localStorage.removeItem('currentScore');
    }
  };
};

easyGame = () => {
  content.parentNode.removeChild(content);
  gamePlay(19, 19, 4, 3, 49, 3);
};

mediumGame = () => {
  content.parentNode.removeChild(content);
  gamePlay(49, 49, 9, 8, 99, 18);
};

hardGame = () => {
  content.parentNode.removeChild(content);
  gamePlay(99, 99, 19, 18, 199, 48);
};

easyDifficulty.addEventListener('click', easyGame);
mediumDifficulty.addEventListener('click', mediumGame);
hardDifficulty.addEventListener('click', hardGame);

})
