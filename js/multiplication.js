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
    calculationDisplay.innerHTML = 'Multiplication';
    timer.appendChild(calculationDisplay);
    let difficultyDisplay = document.createElement('p');
    difficultyDisplay.style.width = '30%';
    difficultyDisplay.style.background = 'white';
    difficultyDisplay.style.border = '2px solid black';
    difficultyDisplay.style.borderRadius = '20px';
    difficultyDisplay.style.padding = '5px';
    difficultyDisplay.style.margin = 'auto';
    difficultyDisplay.style.marginTop = '20px';
    if (num1 == 4) {
      difficultyDisplay.innerHTML = 'Difficulty: Easy';
    } else if (num1 == 9) {
      difficultyDisplay.innerHTML = 'Difficulty: Medium';
    } else if (num1 == 19) {
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
    body.insertBefore(timer, button)
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
        if (num1 == 4) {
          gamePlay(4, 4);
        } else if (num1 == 9) {
          gamePlay(9, 9);
        } else if (num1 == 19) {
          gamePlay(19, 19);
        }
      };
      newButtonForReplay.addEventListener('click', replayTypeDecider);

      if (num1 == 4) {
        localStorage.setItem('currentScore', gameScore);
        if (gameScore >= localStorage.getItem('Score1MultiplicationEasy') || localStorage.getItem('Score1MultiplicationEasy') == 'null') {
          localStorage.setItem('Score5MultiplicationEasy', localStorage.getItem('Score4MultiplicationEasy', gameScore));
          localStorage.setItem('Score4MultiplicationEasy', localStorage.getItem('Score3MultiplicationEasy', gameScore));
          localStorage.setItem('Score3MultiplicationEasy', localStorage.getItem('Score2MultiplicationEasy', gameScore));
          localStorage.setItem('Score2MultiplicationEasy', localStorage.getItem('Score1MultiplicationEasy', gameScore));
          localStorage.setItem('Score1MultiplicationEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2MultiplicationEasy') || localStorage.getItem('Score2MultiplicationEasy') == 'null') {
          localStorage.setItem('Score5MultiplicationEasy', localStorage.getItem('Score4MultiplicationEasy', gameScore));
          localStorage.setItem('Score4MultiplicationEasy', localStorage.getItem('Score3MultiplicationEasy', gameScore));
          localStorage.setItem('Score3MultiplicationEasy', localStorage.getItem('Score2MultiplicationEasy', gameScore));
          localStorage.setItem('Score2MultiplicationEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3MultiplicationEasy') || localStorage.getItem('Score3MultiplicationEasy') == 'null') {
          localStorage.setItem('Score5MultiplicationEasy', localStorage.getItem('Score4MultiplicationEasy', gameScore));
          localStorage.setItem('Score4MultiplicationEasy', localStorage.getItem('Score3MultiplicationEasy', gameScore));
          localStorage.setItem('Score3MultiplicationEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4MultiplicationEasy') || localStorage.getItem('Score4MultiplicationEasy') == 'null') {
          localStorage.setItem('Score5MultiplicationEasy', localStorage.getItem('Score4MultiplicationEasy', gameScore));
          localStorage.setItem('Score4MultiplicationEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5MultiplicationEasy') || localStorage.getItem('Score5MultiplicationEasy') == 'null') {
          localStorage.setItem('Score5MultiplicationEasy', gameScore);
        }
        localStorage.removeItem('currentScore');
      } else if (num1 == 9) {
        localStorage.setItem('currentScore', gameScore);
        if (gameScore >= localStorage.getItem('Score1MultiplicationMedium') || localStorage.getItem('Score1MultiplicationMedium') == 'null') {
          localStorage.setItem('Score5MultiplicationMedium', localStorage.getItem('Score4MultiplicationMedium', gameScore));
          localStorage.setItem('Score4MultiplicationMedium', localStorage.getItem('Score3MultiplicationMedium', gameScore));
          localStorage.setItem('Score3MultiplicationMedium', localStorage.getItem('Score2MultiplicationMedium', gameScore));
          localStorage.setItem('Score2MultiplicationMedium', localStorage.getItem('Score1MultiplicationMedium', gameScore));
          localStorage.setItem('Score1MultiplicationMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2MultiplicationMedium') || localStorage.getItem('Score2MultiplicationMedium') == 'null') {
          localStorage.setItem('Score5MultiplicationMedium', localStorage.getItem('Score4MultiplicationMedium', gameScore));
          localStorage.setItem('Score4MultiplicationMedium', localStorage.getItem('Score3MultiplicationMedium', gameScore));
          localStorage.setItem('Score3MultiplicationMedium', localStorage.getItem('Score2MultiplicationMedium', gameScore));
          localStorage.setItem('Score2MultiplicationMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3MultiplicationMedium') || localStorage.getItem('Score3MultiplicationMedium') == 'null') {
          localStorage.setItem('Score5MultiplicationMedium', localStorage.getItem('Score4MultiplicationMedium', gameScore));
          localStorage.setItem('Score4MultiplicationMedium', localStorage.getItem('Score3MultiplicationMedium', gameScore));
          localStorage.setItem('Score3MultiplicationMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4MultiplicationMedium') || localStorage.getItem('Score4MultiplicationMedium') == 'null') {
          localStorage.setItem('Score5MultiplicationMedium', localStorage.getItem('Score4MultiplicationMedium', gameScore));
          localStorage.setItem('Score4MultiplicationMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5MultiplicationMedium') || localStorage.getItem('Score5MultiplicationMedium') == 'null') {
          localStorage.setItem('Score5MultiplicationMedium', gameScore);
        }
        localStorage.removeItem('currentScore');
      } else if (num1 == 19) {
        localStorage.setItem('currentScore', gameScore);
        if (gameScore >= localStorage.getItem('Score1MultiplicationHard') || localStorage.getItem('Score1MultiplicationHard') == 'null') {
          localStorage.setItem('Score5MultiplicationHard', localStorage.getItem('Score4MultiplicationHard', gameScore));
          localStorage.setItem('Score4MultiplicationHard', localStorage.getItem('Score3MultiplicationHard', gameScore));
          localStorage.setItem('Score3MultiplicationHard', localStorage.getItem('Score2MultiplicationHard', gameScore));
          localStorage.setItem('Score2MultiplicationHard', localStorage.getItem('Score1MultiplicationHard', gameScore));
          localStorage.setItem('Score1MultiplicationHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2MultiplicationHard') || localStorage.getItem('Score2MultiplicationHard') == 'null') {
          localStorage.setItem('Score5MultiplicationHard', localStorage.getItem('Score4MultiplicationHard', gameScore));
          localStorage.setItem('Score4MultiplicationHard', localStorage.getItem('Score3MultiplicationHard', gameScore));
          localStorage.setItem('Score3MultiplicationHard', localStorage.getItem('Score2MultiplicationHard', gameScore));
          localStorage.setItem('Score2MultiplicationHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3MultiplicationHard') || localStorage.getItem('Score3MultiplicationHard') == 'null') {
          localStorage.setItem('Score5MultiplicationHard', localStorage.getItem('Score4MultiplicationHard', gameScore));
          localStorage.setItem('Score4MultiplicationHard', localStorage.getItem('Score3MultiplicationHard', gameScore));
          localStorage.setItem('Score3MultiplicationHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4MultiplicationHard') || localStorage.getItem('Score4MultiplicationHard') == 'null') {
          localStorage.setItem('Score5MultiplicationHard', localStorage.getItem('Score4MultiplicationHard', gameScore));
          localStorage.setItem('Score4MultiplicationHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5MultiplicationHard') || localStorage.getItem('Score5MultiplicationHard') == 'null') {
          localStorage.setItem('Score5MultiplicationHard', gameScore);
        }
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
