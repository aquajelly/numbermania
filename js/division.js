document.addEventListener('DOMContentLoaded', () => {

  easyDifficulty = document.getElementsByClassName('gameType')[0];
  mediumDifficulty = document.getElementsByClassName('gameType')[1];
  hardDifficulty = document.getElementsByClassName('gameType')[2];
  content = document.getElementsByClassName('content')[0];

  gamePlay = (num1, num2) => {
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
    calculationDisplay.innerHTML = 'Division';
    timer.appendChild(calculationDisplay);
    let difficultyDisplay = document.createElement('p');
    difficultyDisplay.style.width = '30%';
    difficultyDisplay.style.background = 'white';
    difficultyDisplay.style.border = '2px solid black';
    difficultyDisplay.style.borderRadius = '20px';
    difficultyDisplay.style.padding = '5px';
    difficultyDisplay.style.margin = 'auto';
    difficultyDisplay.style.marginTop = '20px';
    if (num1 == 49) {
      difficultyDisplay.innerHTML = 'Difficulty: Easy';
    } else if (num1 == 99) {
      difficultyDisplay.innerHTML = 'Difficulty: Medium';
    } else if (num1 == 199) {
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
    answerButtonsArea.appendChild(answerButtonsArea1);
    answerButtonsArea.appendChild(answerButtonsArea2);
    answerButtonsArea.appendChild(answerButtonsArea3);
    addNumber = (number) => {
      if (number <= 9) {
        submittedAnswer += number;
      } else if (number == 10) {
        submittedAnswer += '-';
      } else if (number == 11) {
        submittedAnswer = submittedAnswer.substr(0, submittedAnswer.length-1);
      } else {
        submittedAnswer = '';
      }
    }
    let answerZero = document.createElement('button');
    answerZero.setAttribute('class', 'answerButtons');
    answerZero.setAttribute('type', 'button');
    answerZero.innerHTML = '0';
    answerZero.style.margin = '5px';
    answerZero.addEventListener('click', function() {addNumber(0)});
    answerButtonsArea1.appendChild(answerZero);
    let answerOne = document.createElement('button');
    answerOne.setAttribute('class', 'answerButtons');
    answerOne.setAttribute('type', 'button');
    answerOne.innerHTML = '1';
    answerOne.style.margin = '5px';
    answerOne.addEventListener('click', function() {addNumber(1)});
    answerButtonsArea1.appendChild(answerOne);
    let answerTwo = document.createElement('button');
    answerTwo.setAttribute('class', 'answerButtons');
    answerTwo.setAttribute('type', 'button');
    answerTwo.innerHTML = '2';
    answerTwo.style.margin = '5px';
    answerTwo.addEventListener('click', function() {addNumber(2)});
    answerButtonsArea1.appendChild(answerTwo);
    let answerThree = document.createElement('button');
    answerThree.setAttribute('class', 'answerButtons');
    answerThree.setAttribute('type', 'button');
    answerThree.innerHTML = '3';
    answerThree.style.margin = '5px';
    answerThree.addEventListener('click', function() {addNumber(3)});
    answerButtonsArea1.appendChild(answerThree);
    let answerFour = document.createElement('button');
    answerFour.setAttribute('class', 'answerButtons');
    answerFour.setAttribute('type', 'button');
    answerFour.innerHTML = '4';
    answerFour.style.margin = '5px';
    answerFour.addEventListener('click', function() {addNumber(4)});
    answerButtonsArea1.appendChild(answerFour);
    let answerFive = document.createElement('button');
    answerFive.setAttribute('class', 'answerButtons');
    answerFive.setAttribute('type', 'button');
    answerFive.innerHTML = '5';
    answerFive.style.margin = '5px';
    answerFive.addEventListener('click', function() {addNumber(5)});
    answerButtonsArea2.appendChild(answerFive);
    let answerSix = document.createElement('button');
    answerSix.setAttribute('class', 'answerButtons');
    answerSix.setAttribute('type', 'button');
    answerSix.innerHTML = '6';
    answerSix.style.margin = '5px';
    answerSix.addEventListener('click', function() {addNumber(6)});
    answerButtonsArea2.appendChild(answerSix);
    let answerSeven = document.createElement('button');
    answerSeven.setAttribute('class', 'answerButtons');
    answerSeven.setAttribute('type', 'button');
    answerSeven.innerHTML = '7';
    answerSeven.style.margin = '5px';
    answerSeven.addEventListener('click', function() {addNumber(7)});
    answerButtonsArea2.appendChild(answerSeven);
    let answerEight = document.createElement('button');
    answerEight.setAttribute('class', 'answerButtons');
    answerEight.setAttribute('type', 'button');
    answerEight.innerHTML = '8';
    answerEight.style.margin = '5px';
    answerEight.addEventListener('click', function() {addNumber(8)});
    answerButtonsArea2.appendChild(answerEight);
    let answerNine = document.createElement('button');
    answerNine.setAttribute('class', 'answerButtons');
    answerNine.setAttribute('type', 'button');
    answerNine.innerHTML = '9';
    answerNine.style.margin = '5px';
    answerNine.addEventListener('click', function() {addNumber(9)});
    answerButtonsArea2.appendChild(answerNine);
    let answerMinus = document.createElement('button');
    answerMinus.setAttribute('class', 'answerButtons');
    answerMinus.setAttribute('type', 'button');
    answerMinus.innerHTML = '-';
    answerMinus.style.margin = '5px';
    answerMinus.addEventListener('click', function() {addNumber(10)});
    answerButtonsArea3.appendChild(answerMinus);
    let answerDelete = document.createElement('button');
    answerDelete.setAttribute('class', 'deleteButton');
    answerDelete.setAttribute('type', 'button');
    answerDelete.innerHTML = 'Delete';
    answerDelete.style.margin = '5px';
    answerDelete.addEventListener('click', function() {addNumber(11)});
    answerButtonsArea3.appendChild(answerDelete);
    let answerClear = document.createElement('button');
    answerClear.setAttribute('class', 'clearButton');
    answerClear.setAttribute('type', 'button');
    answerClear.innerHTML = 'Clear';
    answerClear.style.margin = '5px';
    answerClear.addEventListener('click', function() {addNumber(12)});
    answerButtonsArea3.appendChild(answerClear);
    game.appendChild(answerButtonsArea);

    let body = document.querySelector('body');
    let button = document.querySelector('div');
    body.insertBefore(timer, button)
    body.insertBefore(game, button);
    timerContent.innerHTML = `Time Left: ${seconds}`;
    let correctAnswer;
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
    }
    getSet = () => {
      gameContent.innerHTML = 'Get set...';
    }
    go = () => {
      gameContent.innerHTML = 'Go!';
    }
    gameStart = () => {
      answerArea.removeAttribute('placeholder');
      divisionValidityChecker();
      setInterval(countdown, 1000);
      setInterval(checker, 10);
    }

    setTimeout(ready, 0);
    setTimeout(getSet, 1000);
    setTimeout(go, 2000);
    setTimeout(gameStart, 3000);

    divisionValidityChecker = () => {
      let number1 = parseInt(Math.random()*num1) + 1;
      let number2 = parseInt(Math.random()*num2) + 2;
      if (number1 % number2 == 0) {
        correctAnswer = number1 / number2;
        gameContent.innerHTML = `${number1} ÷ ${number2}`;
      } else {
        let number1 = parseInt(Math.random()*num1) + 1;
        let number2 = parseInt(Math.random()*num2) + 2;
        divisionValidityChecker();
      }
    }

    checker = () => {
      if (submittedAnswer == correctAnswer) {
        gameScore++;
        let number1 = parseInt(Math.random()*num1) + 1;
        let number2 = parseInt(Math.random()*num2) + 2;
        divisionValidityChecker();
        submittedAnswer = '';
        game.style.background = 'rgb(33, 245, 22)';
        setTimeout(backgroundNormal, 250);
      }
    }
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
      }
    }

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
        if (num1 == 49) {
          gamePlay(49, 3);
        } else if (num1 == 99) {
          gamePlay(99, 18);
        } else if (num1 == 199) {
          gamePlay(199, 48);
        }
      };
      newButtonForReplay.addEventListener('click', replayTypeDecider);

      if (num1 == 49) {
        localStorage.setItem('currentScore', gameScore);
        if (gameScore >= localStorage.getItem('Score1DivisionEasy') || localStorage.getItem('Score1DivisionEasy') == 'null') {
          localStorage.setItem('Score5DivisionEasy', localStorage.getItem('Score4DivisionEasy', gameScore));
          localStorage.setItem('Score4DivisionEasy', localStorage.getItem('Score3DivisionEasy', gameScore));
          localStorage.setItem('Score3DivisionEasy', localStorage.getItem('Score2DivisionEasy', gameScore));
          localStorage.setItem('Score2DivisionEasy', localStorage.getItem('Score1DivisionEasy', gameScore));
          localStorage.setItem('Score1DivisionEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2DivisionEasy') || localStorage.getItem('Score2DivisionEasy') == 'null') {
          localStorage.setItem('Score5DivisionEasy', localStorage.getItem('Score4DivisionEasy', gameScore));
          localStorage.setItem('Score4DivisionEasy', localStorage.getItem('Score3DivisionEasy', gameScore));
          localStorage.setItem('Score3DivisionEasy', localStorage.getItem('Score2DivisionEasy', gameScore));
          localStorage.setItem('Score2DivisionEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3DivisionEasy') || localStorage.getItem('Score3DivisionEasy') == 'null') {
          localStorage.setItem('Score5DivisionEasy', localStorage.getItem('Score4DivisionEasy', gameScore));
          localStorage.setItem('Score4DivisionEasy', localStorage.getItem('Score3DivisionEasy', gameScore));
          localStorage.setItem('Score3DivisionEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4DivisionEasy') || localStorage.getItem('Score4DivisionEasy') == 'null') {
          localStorage.setItem('Score5DivisionEasy', localStorage.getItem('Score4DivisionEasy', gameScore));
          localStorage.setItem('Score4DivisionEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5DivisionEasy') || localStorage.getItem('Score5DivisionEasy') == 'null') {
          localStorage.setItem('Score5DivisionEasy', gameScore);
        }
        localStorage.removeItem('currentScore');
      } else if (num1 == 99) {
        localStorage.setItem('currentScore', gameScore);
        if (gameScore >= localStorage.getItem('Score1DivisionMedium') || localStorage.getItem('Score1DivisionMedium') == 'null') {
          localStorage.setItem('Score5DivisionMedium', localStorage.getItem('Score4DivisionMedium', gameScore));
          localStorage.setItem('Score4DivisionMedium', localStorage.getItem('Score3DivisionMedium', gameScore));
          localStorage.setItem('Score3DivisionMedium', localStorage.getItem('Score2DivisionMedium', gameScore));
          localStorage.setItem('Score2DivisionMedium', localStorage.getItem('Score1DivisionMedium', gameScore));
          localStorage.setItem('Score1DivisionMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2DivisionMedium') || localStorage.getItem('Score2DivisionMedium') == 'null') {
          localStorage.setItem('Score5DivisionMedium', localStorage.getItem('Score4DivisionMedium', gameScore));
          localStorage.setItem('Score4DivisionMedium', localStorage.getItem('Score3DivisionMedium', gameScore));
          localStorage.setItem('Score3DivisionMedium', localStorage.getItem('Score2DivisionMedium', gameScore));
          localStorage.setItem('Score2DivisionMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3DivisionMedium') || localStorage.getItem('Score3DivisionMedium') == 'null') {
          localStorage.setItem('Score5DivisionMedium', localStorage.getItem('Score4DivisionMedium', gameScore));
          localStorage.setItem('Score4DivisionMedium', localStorage.getItem('Score3DivisionMedium', gameScore));
          localStorage.setItem('Score3DivisionMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4DivisionMedium') || localStorage.getItem('Score4DivisionMedium') == 'null') {
          localStorage.setItem('Score5DivisionMedium', localStorage.getItem('Score4DivisionMedium', gameScore));
          localStorage.setItem('Score4DivisionMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5DivisionMedium') || localStorage.getItem('Score5DivisionMedium') == 'null') {
          localStorage.setItem('Score5DivisionMedium', gameScore);
        }
        localStorage.removeItem('currentScore');
      } else if (num1 == 199) {
        localStorage.setItem('currentScore', gameScore);
        if (gameScore >= localStorage.getItem('Score1DivisionHard') || localStorage.getItem('Score1DivisionHard') == 'null') {
          localStorage.setItem('Score5DivisionHard', localStorage.getItem('Score4DivisionHard', gameScore));
          localStorage.setItem('Score4DivisionHard', localStorage.getItem('Score3DivisionHard', gameScore));
          localStorage.setItem('Score3DivisionHard', localStorage.getItem('Score2DivisionHard', gameScore));
          localStorage.setItem('Score2DivisionHard', localStorage.getItem('Score1DivisionHard', gameScore));
          localStorage.setItem('Score1DivisionHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2DivisionHard') || localStorage.getItem('Score2DivisionHard') == 'null') {
          localStorage.setItem('Score5DivisionHard', localStorage.getItem('Score4DivisionHard', gameScore));
          localStorage.setItem('Score4DivisionHard', localStorage.getItem('Score3DivisionHard', gameScore));
          localStorage.setItem('Score3DivisionHard', localStorage.getItem('Score2DivisionHard', gameScore));
          localStorage.setItem('Score2DivisionHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3DivisionHard') || localStorage.getItem('Score3DivisionHard') == 'null') {
          localStorage.setItem('Score5DivisionHard', localStorage.getItem('Score4DivisionHard', gameScore));
          localStorage.setItem('Score4DivisionHard', localStorage.getItem('Score3DivisionHard', gameScore));
          localStorage.setItem('Score3DivisionHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4DivisionHard') || localStorage.getItem('Score4DivisionHard') == 'null') {
          localStorage.setItem('Score5DivisionHard', localStorage.getItem('Score4DivisionHard', gameScore));
          localStorage.setItem('Score4DivisionHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5DivisionHard') || localStorage.getItem('Score5DivisionHard') == 'null') {
          localStorage.setItem('Score5DivisionHard', gameScore);
        }
        localStorage.removeItem('currentScore');
      }
    };

  };

  easyGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(49, 3);
  };

  mediumGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(99, 18);
  };

  hardGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(199, 48);
  };

  easyDifficulty.addEventListener('click', easyGame);
  mediumDifficulty.addEventListener('click', mediumGame);
  hardDifficulty.addEventListener('click', hardGame);

})
