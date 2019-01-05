document.addEventListener('DOMContentLoaded', () => {

  easyDifficulty = document.getElementsByClassName('gameType')[0];
  mediumDifficulty = document.getElementsByClassName('gameType')[1];
  hardDifficulty = document.getElementsByClassName('gameType')[2];
  content = document.getElementsByClassName('content')[0];

  gamePlay = (num1, num2) => {
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
    calculationDisplay.innerHTML = 'Division';
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
    answerArea.setAttribute('type', 'number');
    answerArea.style.width = '80%';
    answerArea.style.marginTop = '60px';
    answerArea.style.fontSize = '30px';
    answerArea.style.textAlign = 'center';
    answerArea.style.background = 'rgb(2, 212, 167)';
    answerArea.style.border = '3px solid black';
    game.appendChild(answerArea);
    let body = document.querySelector('body');
    let button = document.querySelector('div');
    body.insertBefore(timer, button)
    body.insertBefore(game, button);
    timerContent.innerHTML = `Time Left: ${seconds}`;
    let correctAnswer;
    answerArea.focus();

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
      if (answerArea.value == correctAnswer) {
        gameScore++;
        let number1 = parseInt(Math.random()*num1) + 1;
        let number2 = parseInt(Math.random()*num2) + 2;
        divisionValidityChecker();
        answerArea.value = '';
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
      scoreArea.innerHTML = `${gameScore}`;
      answerArea.parentNode.removeChild(answerArea);
      delete answerArea;
      let buttonArea = document.querySelector('.buttons');

      let newLinkForDifficulty = document.createElement('a');
      newLinkForDifficulty.setAttribute('href', 'division.html');
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
