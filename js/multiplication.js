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
    gameContent.style.paddingTop = '40px';
    gameContent.style.fontSize = '40px';
    game.appendChild(gameContent);
    let scoreArea = document.createElement('p');
    scoreArea.style.fontSize = '40px';
    scoreArea.style.marginTop = '80px';
    game.appendChild(scoreArea);
    let answerArea = document.createElement('input');
    answerArea.setAttribute('type', 'number');
    answerArea.style.width = '80%';
    answerArea.style.marginTop = '60px';
    answerArea.style.marginBottom = '50px';
    answerArea.style.textAlign = 'center';
    answerArea.style.background = 'rgb(2, 212, 167)';
    answerArea.style.border = '3px solid black';
    game.appendChild(answerArea);
    let body = document.querySelector('body');
    let button = document.querySelector('div');
    body.insertBefore(timer, button)
    body.insertBefore(game, button);
    timerContent.innerHTML = `Time Left: ${seconds}`;
    answerArea.focus();

    mediaQuery = (windowSize) => {
      if (windowSize.matches) {
        game.style.width = '90%';
        timer.style.width = '90%';
        timerContent.style.fontSize = '3vw';
        calculationDisplay.style.fontSize = '3vw';
        difficultyDisplay.style.fontSize = '3vw';
        gameContent.style.fontSize = '5vw';
        game.style.height = '50%';
        answerArea.style.fontSize = '5vw';
      } else {
        game.style.width = '60%';
        timer.style.width = '60%';
        timerContent.style.fontSize = '20px';
        calculationDisplay.style.fontSize = '20px';
        difficultyDisplay.style.fontSize = '20px';
        gameContent.style.fontSize = '40px';
        answerArea.style.fontSize = '30px';
      }
    }
    let windowSize = window.matchMedia("(max-width: 500px)");
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
      if (answerArea.value == correctAnswer) {
        gameScore++;
        let number1 = parseInt(Math.random()*num1) + 2;
        let number2 = parseInt(Math.random()*num2) + 2;
        gameContent.innerHTML = `${number1} x ${number2}`;
        correctAnswer = number1 * number2;
        answerArea.value = '';
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
      scoreArea.innerHTML = `${gameScore}`;
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
