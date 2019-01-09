document.addEventListener('DOMContentLoaded', () => {

easyDifficulty = document.getElementsByClassName('gameType')[0];
mediumDifficulty = document.getElementsByClassName('gameType')[1];
hardDifficulty = document.getElementsByClassName('gameType')[2];
content = document.getElementsByClassName('content')[0];

gamePlay = (num1, num2, num3, num4, num5, num6) => {
  let gameScore = 0;
  let seconds = 30;
  let timer = document.createElement('div');
  timer.style.textAlign = 'center';
  timer.style.marginTop = '20px';
  timer.style.marginBottom = '20px';
  timer.style.margin = 'auto';
  timer.style.display = 'flex';
  let timerContent = document.createElement('p');
  timerContent.style.width = '30%';
  timerContent.style.background = 'white';
  timerContent.style.border = '2px solid black';
  timerContent.style.borderRadius = '20px';
  timerContent.style.padding = '5px';
  timerContent.style.margin = 'auto';
  timerContent.style.marginTop = '20px';
  timer.appendChild(timerContent);
  let calculationDisplay = document.createElement('p');
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
  game.style.background = 'white';
  game.style.border = '5px solid black';
  game.style.textAlign = 'center';
  game.style.margin = 'auto';
  game.style.marginTop = '20px';
  game.style.marginBottom = '20px';
  game.style.borderRadius = '20px';
  let gameContent = document.createElement('p');
  gameContent.style.fontSize = '40px';
  game.appendChild(gameContent);

  let submittedAnswer = '';
  let answerArea = document.createElement('p');
  displayAnswer = () => {
    answerArea.innerHTML = `${submittedAnswer}`;
  }
  setInterval(displayAnswer, 10);
  answerArea.style.margin = 'auto';
  answerArea.style.height = '1em';
  answerArea.style.padding = '0.2em';
  answerArea.style.width = '80%';
  answerArea.style.textAlign = 'center';
  answerArea.style.background = 'rgb(2, 212, 167)';
  answerArea.style.border = '3px solid black';
  game.appendChild(answerArea);
  let answerButtonsArea = document.createElement('div');
  answerButtonsArea.className = 'buttons';
  answerButtonsArea.style.textAlign = 'center';
  let answerButtonsArea1 = document.createElement('div');
  let answerButtonsArea2 = document.createElement('div');
  let answerButtonsArea3 = document.createElement('div');
  let answerButtonsArea4 = document.createElement('div');
  let answerButtonsArea5 = document.createElement('div');
  answerButtonsArea.appendChild(answerButtonsArea1);
  answerButtonsArea.appendChild(answerButtonsArea2);
  answerButtonsArea.appendChild(answerButtonsArea3);
  answerButtonsArea.appendChild(answerButtonsArea4);
  answerButtonsArea.appendChild(answerButtonsArea5);
  addNumber = (number) => {
    if (submittedAnswer.length < 5) {
      if (number <= 9) {
        submittedAnswer += number;
      } else if (number == 10) {
        submittedAnswer += '-';
      }
    }
    if (number == 11) {
      submittedAnswer = submittedAnswer.substr(0, submittedAnswer.length-1);
    } else if (number == 12){
      submittedAnswer = '';
    }
  }
  let answerZero = document.createElement('button');
  // const answers = document.getElementById('button-array')
  // answers.map(button => {
  //   button.setAttribute('class', 'answerButton')
  // })
  answerZero.setAttribute('class', 'answerButtons');
  answerZero.setAttribute('type', 'button');
  answerZero.innerHTML = '0';
  answerZero.addEventListener('click', function() {addNumber(0)});
  answerButtonsArea4.appendChild(answerZero);
  let answerOne = document.createElement('button');
  answerOne.setAttribute('class', 'answerButtons');
  answerOne.setAttribute('type', 'button');
  answerOne.innerHTML = '1';
  answerOne.addEventListener('click', function() {addNumber(1)});
  answerButtonsArea3.appendChild(answerOne);
  let answerTwo = document.createElement('button');
  answerTwo.setAttribute('class', 'answerButtons');
  answerTwo.setAttribute('type', 'button');
  answerTwo.innerHTML = '2';
  answerTwo.addEventListener('click', function() {addNumber(2)});
  answerButtonsArea3.appendChild(answerTwo);
  let answerThree = document.createElement('button');
  answerThree.setAttribute('class', 'answerButtons');
  answerThree.setAttribute('type', 'button');
  answerThree.innerHTML = '3';
  answerThree.addEventListener('click', function() {addNumber(3)});
  answerButtonsArea3.appendChild(answerThree);
  let answerFour = document.createElement('button');
  answerFour.setAttribute('class', 'answerButtons');
  answerFour.setAttribute('type', 'button');
  answerFour.innerHTML = '4';
  answerFour.addEventListener('click', function() {addNumber(4)});
  answerButtonsArea2.appendChild(answerFour);
  let answerFive = document.createElement('button');
  answerFive.setAttribute('class', 'answerButtons');
  answerFive.setAttribute('type', 'button');
  answerFive.innerHTML = '5';
  answerFive.addEventListener('click', function() {addNumber(5)});
  answerButtonsArea2.appendChild(answerFive);
  let answerSix = document.createElement('button');
  answerSix.setAttribute('class', 'answerButtons');
  answerSix.setAttribute('type', 'button');
  answerSix.innerHTML = '6';
  answerSix.addEventListener('click', function() {addNumber(6)});
  answerButtonsArea2.appendChild(answerSix);
  let answerSeven = document.createElement('button');
  answerSeven.setAttribute('class', 'answerButtons');
  answerSeven.setAttribute('type', 'button');
  answerSeven.innerHTML = '7';
  answerSeven.addEventListener('click', function() {addNumber(7)});
  answerButtonsArea1.appendChild(answerSeven);
  let answerEight = document.createElement('button');
  answerEight.setAttribute('class', 'answerButtons');
  answerEight.setAttribute('type', 'button');
  answerEight.innerHTML = '8';
  answerEight.addEventListener('click', function() {addNumber(8)});
  answerButtonsArea1.appendChild(answerEight);
  let answerNine = document.createElement('button');
  answerNine.setAttribute('class', 'answerButtons');
  answerNine.setAttribute('type', 'button');
  answerNine.innerHTML = '9';
  answerNine.addEventListener('click', function() {addNumber(9)});
  answerButtonsArea1.appendChild(answerNine);
  let answerMinus = document.createElement('button');
  answerMinus.setAttribute('class', 'answerButtons');
  answerMinus.setAttribute('type', 'button');
  answerMinus.innerHTML = '-';
  answerMinus.addEventListener('click', function() {addNumber(10)});
  answerButtonsArea5.appendChild(answerMinus);
  let answerDelete = document.createElement('button');
  answerDelete.setAttribute('class', 'deleteButton');
  answerDelete.setAttribute('type', 'button');
  answerDelete.innerHTML = 'Delete';
  answerDelete.addEventListener('click', function() {addNumber(11)});
  answerButtonsArea4.appendChild(answerDelete);
  let answerClear = document.createElement('button');
  answerClear.setAttribute('class', 'clearButton');
  answerClear.setAttribute('type', 'button');
  answerClear.innerHTML = 'Clear';
  answerClear.addEventListener('click', function() {addNumber(12)});
  answerButtonsArea5.appendChild(answerClear);
  game.appendChild(answerButtonsArea);

  let body = document.querySelector('body');
  let button = document.querySelector('div');
  body.insertBefore(timer, button);
  body.insertBefore(game, button);
  timerContent.innerHTML = `Time Left: ${seconds}`;
  answerArea.focus();

  mediaQuery = (windowSize) => {
    if (windowSize.matches) {
      game.style.width = '90%';
      timer.style.width = '100%';
      timerContent.style.fontSize = '2.6vw';
      calculationDisplay.style.fontSize = '2.6vw';
      difficultyDisplay.style.fontSize = '2.6vw';
      gameContent.style.fontSize = '5vw';
      game.style.height = '50%';
      answerArea.style.fontSize = '5vw';
      answerButtonsArea.style.fontSize = '5vw';
    } else {
      game.style.width = '60%';
      timer.style.width = '90%';
      timerContent.style.fontSize = '20px';
      calculationDisplay.style.fontSize = '20px';
      difficultyDisplay.style.fontSize = '20px';
      gameContent.style.fontSize = '40px';
      answerArea.style.fontSize = '30px';
      answerButtonsArea.style.fontSize = '30px';
    }
  }
  let windowSize = window.matchMedia("(max-width: 600px)");
  mediaQuery(windowSize);
  windowSize.addListener(mediaQuery);

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
    let number3 = parseInt(Math.random()*num3) + 2;
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
    if (submittedAnswer == correctAnswer) {
      gameScore++;
      submittedAnswer = '';
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
    backgroundNormal();
    game.style.background = 'rgb(238, 250, 15)';
    gameContent.innerHTML = 'Well done! You scored:';
    answerButtonsArea.innerHTML = `${gameScore}`;
    answerButtonsArea.style.paddingBottom = '20px';
    answerArea.parentNode.removeChild(answerArea);
    delete answerArea;

    let buttonArea = document.createElement('div');
    buttonArea.className = 'buttons';
    buttonArea.style.textAlign = 'center';

    let newButtonForReplay = document.createElement('button');
    newButtonForReplay.setAttribute('class', 'gameType');
    newButtonForReplay.setAttribute('type', 'button');
    newButtonForReplay.innerHTML = 'Play Again';
    newButtonForReplay.style.margin = '5px';

    let newLinkForDifficulty = document.createElement('a');
    newLinkForDifficulty.setAttribute('href', 'addition.html');
    let newButtonForDifficulty = document.createElement('button');
    newButtonForDifficulty.setAttribute('class', 'gameType');
    newButtonForDifficulty.setAttribute('type', 'button');
    newButtonForDifficulty.innerHTML = 'Change Difficulty';
    newButtonForDifficulty.style.margin = '5px';
    newLinkForDifficulty.appendChild(newButtonForDifficulty);

    buttonArea.appendChild(newButtonForReplay);
    buttonArea.appendChild(newLinkForDifficulty);

    body.insertBefore(buttonArea, button);

    replayTypeDecider = () => {
      game.parentNode.removeChild(game);
      timer.parentNode.removeChild(timer);
      clearTimeout(gameStart);
      buttonArea.removeChild(newLinkForDifficulty);
      buttonArea.removeChild(newButtonForReplay);
      if (num1 == 19) {
        gamePlay(19, 19, 4, 4, 49, 3);
      } else if (num1 == 49) {
        gamePlay(49, 49, 9, 9, 99, 18);
      } else if (num1 == 99) {
        gamePlay(99, 99, 19, 19, 199, 48);
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
  gamePlay(19, 19, 4, 4, 49, 3);
};

mediumGame = () => {
  content.parentNode.removeChild(content);
  gamePlay(49, 49, 9, 9, 99, 18);
};

hardGame = () => {
  content.parentNode.removeChild(content);
  gamePlay(99, 99, 19, 19, 199, 48);
};

easyDifficulty.addEventListener('click', easyGame);
mediumDifficulty.addEventListener('click', mediumGame);
hardDifficulty.addEventListener('click', hardGame);

})
