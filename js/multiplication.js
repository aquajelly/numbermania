document.addEventListener('DOMContentLoaded', () => {

  easyDifficulty = document.getElementsByClassName('easyDifficultyButton')[0];
  mediumDifficulty = document.getElementsByClassName('mediumDifficultyButton')[0];
  hardDifficulty = document.getElementsByClassName('hardDifficultyButton')[0];
  content = document.getElementsByClassName('content')[0];

  gamePlay = (num1, num2) => {
    let gameScore = 0;
    let seconds = 30;

    creatingUpperDisplay = () => {
      timer.className = 'upperDisplayElementsContainer';
      timerContent.className = 'upperDisplayElements';
      calculationDisplay.className = 'upperDisplayElements';
      calculationDisplay.innerHTML = 'Multiplication';
      difficultyDisplay.className = 'upperDisplayElements';
      timer.appendChild(timerContent);
      timer.appendChild(calculationDisplay);
      timer.appendChild(difficultyDisplay);
    }
    const timer = document.createElement('div');
    const timerContent = document.createElement('p');
    const calculationDisplay = document.createElement('p');
    const difficultyDisplay = document.createElement('p');
    creatingUpperDisplay();

    settingDifficultyDisplay = () => {
      if (num1 == 4) {
        difficultyDisplay.innerHTML = 'Difficulty: Easy';
      } else if (num1 == 9) {
        difficultyDisplay.innerHTML = 'Difficulty: Medium';
      } else if (num1 == 19) {
        difficultyDisplay.innerHTML = 'Difficulty: Hard';
      }
    }
    settingDifficultyDisplay();

    const game = document.createElement('div');
    game.className = 'gameClass';
    const gameContent = document.createElement('p');
    gameContent.style.fontSize = '40px';
    game.appendChild(gameContent);

    const answerArea = document.createElement('p');
    answerArea.className = 'answerArea';
    game.appendChild(answerArea);
    let submittedAnswer = '';

    displayAnswer = () => {
      answerArea.innerHTML = `${submittedAnswer}`;
    }
    setInterval(displayAnswer, 10);

    const answerButtonsArea = document.createElement('div');
    answerButtonsArea.className = 'buttons';

    const answerButtonsArea1 = document.createElement('div');
    const answerButtonsArea2 = document.createElement('div');
    const answerButtonsArea3 = document.createElement('div');
    const answerButtonsArea4 = document.createElement('div');
    const answerButtonsArea5 = document.createElement('div');

    answerButtonsArray = [answerButtonsArea1, answerButtonsArea2, answerButtonsArea3, answerButtonsArea4, answerButtonsArea5];

    differentButtonSections = () => {
      for (i=0; i<answerButtonsArray.length; i++) {
        answerButtonsArea.appendChild(answerButtonsArray[i]);
      }
    }
    differentButtonSections();

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
      } else if (number == 12) {
        submittedAnswer = '';
      }
    }

    const answerZero = document.createElement('button');
    answerZero.addEventListener('click', function() {addNumber(0)});
    const answerOne = document.createElement('button');
    answerOne.addEventListener('click', function() {addNumber(1)});
    const answerTwo = document.createElement('button');
    answerTwo.addEventListener('click', function() {addNumber(2)});
    const answerThree = document.createElement('button');
    answerThree.addEventListener('click', function() {addNumber(3)});
    const answerFour = document.createElement('button');
    answerFour.addEventListener('click', function() {addNumber(4)});
    const answerFive = document.createElement('button');
    answerFive.addEventListener('click', function() {addNumber(5)});
    const answerSix = document.createElement('button');
    answerSix.addEventListener('click', function() {addNumber(6)});
    const answerSeven = document.createElement('button');
    answerSeven.addEventListener('click', function() {addNumber(7)});
    const answerEight = document.createElement('button');
    answerEight.addEventListener('click', function() {addNumber(8)});
    const answerNine = document.createElement('button');
    answerNine.addEventListener('click', function() {addNumber(9)});
    const answerMinus = document.createElement('button');
    answerMinus.addEventListener('click', function() {addNumber(10)});
    const answerDelete = document.createElement('button');
    answerDelete.addEventListener('click', function() {addNumber(11)});
    const answerClear = document.createElement('button');
    answerClear.addEventListener('click', function() {addNumber(12)});

    buttonArray = [answerZero, answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven, answerEight, answerNine, answerMinus, answerDelete, answerClear];

    buttonArrangement = () => {
      for (i=0; i<buttonArray.length; i++) {
        buttonArray[i].setAttribute('type', 'button');
        switch (i) {
          case (11):
            buttonArray[i].setAttribute('class', 'deleteButton');
            buttonArray[i].innerHTML = 'Delete';
            answerButtonsArea4.appendChild(buttonArray[i]);
          break;
          case (10):
            buttonArray[i].setAttribute('class', 'answerButtons');
            buttonArray[i].innerHTML = '-';
            answerButtonsArea5.appendChild(buttonArray[i]);
          break;
          case (12):
            buttonArray[i].setAttribute('class', 'clearButton');
            buttonArray[i].innerHTML = 'Clear';
            answerButtonsArea5.appendChild(buttonArray[i]);
          break;
          default:
            buttonArray[i].setAttribute('class', 'answerButtons');
            buttonArray[i].innerHTML = i;
            if (i > 6 && i < 10) {
              answerButtonsArea1.appendChild(buttonArray[i]);
            } else if (i > 3 && i < 7) {
              answerButtonsArea2.appendChild(buttonArray[i]);
            } else if (i > 0 && i < 4) {
              answerButtonsArea3.appendChild(buttonArray[i]);
            } else {
              answerButtonsArea4.appendChild(buttonArray[i]);
            }
        }
      }
    }
    buttonArrangement();
    game.appendChild(answerButtonsArea);

    const body = document.querySelector('body');
    const button = document.querySelector('div');
    const homeButton = document.querySelector('.homeButton');
    body.insertBefore(timer, button);
    body.insertBefore(game, button);
    timerContent.innerHTML = `Time Left: ${seconds}`;

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
    }
    getSet = () => {
      gameContent.innerHTML = 'Get set...';
    }
    go = () => {
      gameContent.innerHTML = 'Go!';
    }
    gameStart = () => {
      answerArea.removeAttribute('placeholder');
      gameContent.innerHTML = `${number1} x ${number2}`;
      setInterval(countdown, 1000);
    }

    setTimeout(ready, 0);
    setTimeout(getSet, 1000);
    setTimeout(go, 2000);
    setTimeout(gameStart, 3000);

    let number1 = parseInt(Math.random()*num1) + 2;
    let number2 = parseInt(Math.random()*num2) + 2;
    let correctAnswer = number1 * number2;
    checker = () => {
      if (submittedAnswer == correctAnswer) {
        gameScore++;
        let number1 = parseInt(Math.random()*num1) + 2;
        let number2 = parseInt(Math.random()*num2) + 2;
        gameContent.innerHTML = `${number1} x ${number2}`;
        correctAnswer = number1 * number2;
        submittedAnswer = '';
        game.style.background = 'rgb(33, 245, 22)';
        setTimeout(backgroundNormal, 250);
      }
    }
    backgroundNormal = () => {
      game.style.background = 'white'
    };
    setInterval(checker, 10);

    countdown = () => {
      if (seconds === 0) {
        seconds = -1;
        timerContent.innerHTML = 'Out of time!';
        gameOver();
      } else if (seconds > 0) {
        seconds--;
        timerContent.innerHTML = `Time Left: ${seconds}`;
      }
    }

    gameOverDisplay = () => {
      const container = document.querySelector('.container');
      homeButton.classList.toggle('fadeIn');
      const buttonArea = document.createElement('div');
      buttonArea.className = 'buttons';
      buttonArea.style.textAlign = 'center';

      const newButtonForReplay = document.createElement('button');
      newButtonForReplay.setAttribute('class', 'gameType');
      newButtonForReplay.setAttribute('type', 'button');
      newButtonForReplay.innerHTML = 'Play Again';
      newButtonForReplay.style.margin = '5px';

      const newLinkForDifficulty = document.createElement('a');
      newLinkForDifficulty.setAttribute('href', 'multiplication.html');
      const newButtonForDifficulty = document.createElement('button');
      newButtonForDifficulty.setAttribute('class', 'gameType');
      newButtonForDifficulty.setAttribute('type', 'button');
      newButtonForDifficulty.innerHTML = 'Change Difficulty';
      newButtonForDifficulty.style.margin = '5px';

      newLinkForDifficulty.appendChild(newButtonForDifficulty);

      buttonArea.appendChild(newButtonForReplay);
      buttonArea.appendChild(newLinkForDifficulty);

      body.insertBefore(buttonArea, button);
      buttonArea.classList.add('disappear');

      fadeForReplayButtons = () => {
        buttonArea.classList.toggle('fadeIn');
        homeButton.classList.remove('disappear', 'fadeIn');
      }
      setTimeout(fadeForReplayButtons, 500);

      replayTypeDecider = () => {
        game.parentNode.removeChild(game);
        timer.parentNode.removeChild(timer);
        clearTimeout(gameStart);
        buttonArea.removeChild(newLinkForDifficulty);
        buttonArea.removeChild(newButtonForReplay);
        if (num1 == 4) {
          gamePlay(4, 4);
        } else if (num1 == 9) {
          gamePlay(9, 9);
        } else if (num1 == 19) {
          gamePlay(19, 19);
        }
      };
      newButtonForReplay.addEventListener('click', replayTypeDecider);
    }

    scoreRearranger = (score1, score2, score3, score4, score5, gameScore) => {
      if (score4 == 'dummy') {
        localStorage.setItem(score5, gameScore);
      } else if (score3 == 'dummy') {
        localStorage.setItem(score5, localStorage.getItem(score4, gameScore));
        localStorage.setItem(score4, gameScore);
      } else if (score2 == 'dummy') {
        localStorage.setItem(score5, localStorage.getItem(score4, gameScore));
        localStorage.setItem(score4, localStorage.getItem(score3, gameScore));
        localStorage.setItem(score3, gameScore);
      } else if (score1 == 'dummy') {
        localStorage.setItem(score5, localStorage.getItem(score4, gameScore));
        localStorage.setItem(score4, localStorage.getItem(score3, gameScore));
        localStorage.setItem(score3, localStorage.getItem(score2, gameScore));
        localStorage.setItem(score2, gameScore);
      } else {
        localStorage.setItem(score5, localStorage.getItem(score4, gameScore));
        localStorage.setItem(score4, localStorage.getItem(score3, gameScore));
        localStorage.setItem(score3, localStorage.getItem(score2, gameScore));
        localStorage.setItem(score2, localStorage.getItem(score1, gameScore));
        localStorage.setItem(score1, gameScore);
      }
    }

    scoreDecider = (score1, score2, score3, score4, score5, gameScore) => {
      if (gameScore >= localStorage.getItem(score1) || localStorage.getItem(score1) == 'null') {
        scoreRearranger(score1, score2, score3, score4, score5, gameScore);
      }
      else if (gameScore >= localStorage.getItem(score2) || localStorage.getItem(score2) == 'null') {
        scoreRearranger('dummy', score2, score3, score4, score5, gameScore);
      }
      else if (gameScore >= localStorage.getItem(score3) || localStorage.getItem(score3) == 'null') {
        scoreRearranger('dummy', 'dummy', score3, score4, score5, gameScore);
      }
      else if (gameScore >= localStorage.getItem(score4) || localStorage.getItem(score4) == 'null') {
        scoreRearranger('dummy', 'dummy', 'dummy', score4, score5, gameScore);
      }
      else if (gameScore >= localStorage.getItem(score5) || localStorage.getItem(score5) == 'null') {
        scoreRearranger('dummy', 'dummy', 'dummy', 'dummy', score5, gameScore);
      }
    }

    gameOver = () => {
      backgroundNormal();
      gameContent.innerHTML = 'Well done! You scored:';
      answerButtonsArea.innerHTML = `${gameScore}`;
      answerButtonsArea.style.paddingBottom = '20px';
      answerArea.parentNode.removeChild(answerArea);
      delete answerArea;
      homeButton.classList.add('disappear');

      setTimeout(gameOverDisplay, 1000);

      if (num1 == 4) {
        localStorage.setItem('currentScore', gameScore);
        scoreDecider('Score1MultiplicationEasy', 'Score2MultiplicationEasy', 'Score3MultiplicationEasy', 'Score4MultiplicationEasy', 'Score5MultiplicationEasy', gameScore);
        localStorage.removeItem('currentScore');
      } else if (num1 == 9) {
        localStorage.setItem('currentScore', gameScore);
        scoreDecider('Score1MultiplicationMedium', 'Score2MultiplicationMedium', 'Score3MultiplicationMedium', 'Score4MultiplicationMedium', 'Score5MultiplicationMedium', gameScore);
        localStorage.removeItem('currentScore');
      } else if (num1 == 19) {
        localStorage.setItem('currentScore', gameScore);
        scoreDecider('Score1MultiplicationHard', 'Score2MultiplicationHard', 'Score3MultiplicationHard', 'Score4MultiplicationHard', 'Score5MultiplicationHard', gameScore);
        localStorage.removeItem('currentScore');
      }
    };
  };

  easyGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(4, 4);
  };

  mediumGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(9, 9);
  };

  hardGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(19, 19);
  };

  easyDifficulty.addEventListener('click', easyGame);
  mediumDifficulty.addEventListener('click', mediumGame);
  hardDifficulty.addEventListener('click', hardGame);

})
