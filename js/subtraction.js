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
    calculationDisplay.innerHTML = 'Subtraction';
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
      gameContent.innerHTML = `${number1} - ${number2}`;
      setInterval(countdown, 1000);
    }

    setTimeout(ready, 0);
    setTimeout(getSet, 1000);
    setTimeout(go, 2000);
    setTimeout(gameStart, 3000);

    let number1 = parseInt(Math.random()*num1) + 1;
    let number2 = parseInt(Math.random()*num2) + 1;
    let correctAnswer = number1 - number2;
    checker = (multiplier1, multiplier2) => {
      if (answerArea.value == correctAnswer) {
        gameScore++;
        let number1 = parseInt(Math.random()*num1) + 1;
        let number2 = parseInt(Math.random()*num2) + 1;
        gameContent.innerHTML = `${number1} - ${number2}`;
        correctAnswer = number1 - number2;
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
        if (gameScore >= localStorage.getItem('Score1SubtractionEasy') || localStorage.getItem('Score1SubtractionEasy') == 'null') {
          localStorage.setItem('Score5SubtractionEasy', localStorage.getItem('Score4SubtractionEasy', gameScore));
          localStorage.setItem('Score4SubtractionEasy', localStorage.getItem('Score3SubtractionEasy', gameScore));
          localStorage.setItem('Score3SubtractionEasy', localStorage.getItem('Score2SubtractionEasy', gameScore));
          localStorage.setItem('Score2SubtractionEasy', localStorage.getItem('Score1SubtractionEasy', gameScore));
          localStorage.setItem('Score1SubtractionEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2SubtractionEasy') || localStorage.getItem('Score2SubtractionEasy') == 'null') {
          localStorage.setItem('Score5SubtractionEasy', localStorage.getItem('Score4SubtractionEasy', gameScore));
          localStorage.setItem('Score4SubtractionEasy', localStorage.getItem('Score3SubtractionEasy', gameScore));
          localStorage.setItem('Score3SubtractionEasy', localStorage.getItem('Score2SubtractionEasy', gameScore));
          localStorage.setItem('Score2SubtractionEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3SubtractionEasy') || localStorage.getItem('Score3SubtractionEasy') == 'null') {
          localStorage.setItem('Score5SubtractionEasy', localStorage.getItem('Score4SubtractionEasy', gameScore));
          localStorage.setItem('Score4SubtractionEasy', localStorage.getItem('Score3SubtractionEasy', gameScore));
          localStorage.setItem('Score3SubtractionEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4SubtractionEasy') || localStorage.getItem('Score4SubtractionEasy') == 'null') {
          localStorage.setItem('Score5SubtractionEasy', localStorage.getItem('Score4SubtractionEasy', gameScore));
          localStorage.setItem('Score4SubtractionEasy', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5SubtractionEasy') || localStorage.getItem('Score5SubtractionEasy') == 'null') {
          localStorage.setItem('Score5SubtractionEasy', gameScore);
        }
        localStorage.removeItem('currentScore');
      } else if (num1 == 49) {
        localStorage.setItem('currentScore', gameScore);
        if (gameScore >= localStorage.getItem('Score1SubtractionMedium') || localStorage.getItem('Score1SubtractionMedium') == 'null') {
          localStorage.setItem('Score5SubtractionMedium', localStorage.getItem('Score4SubtractionMedium', gameScore));
          localStorage.setItem('Score4SubtractionMedium', localStorage.getItem('Score3SubtractionMedium', gameScore));
          localStorage.setItem('Score3SubtractionMedium', localStorage.getItem('Score2SubtractionMedium', gameScore));
          localStorage.setItem('Score2SubtractionMedium', localStorage.getItem('Score1SubtractionMedium', gameScore));
          localStorage.setItem('Score1SubtractionMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2SubtractionMedium') || localStorage.getItem('Score2SubtractionMedium') == 'null') {
          localStorage.setItem('Score5SubtractionMedium', localStorage.getItem('Score4SubtractionMedium', gameScore));
          localStorage.setItem('Score4SubtractionMedium', localStorage.getItem('Score3SubtractionMedium', gameScore));
          localStorage.setItem('Score3SubtractionMedium', localStorage.getItem('Score2SubtractionMedium', gameScore));
          localStorage.setItem('Score2SubtractionMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3SubtractionMedium') || localStorage.getItem('Score3SubtractionMedium') == 'null') {
          localStorage.setItem('Score5SubtractionMedium', localStorage.getItem('Score4SubtractionMedium', gameScore));
          localStorage.setItem('Score4SubtractionMedium', localStorage.getItem('Score3SubtractionMedium', gameScore));
          localStorage.setItem('Score3SubtractionMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4SubtractionMedium') || localStorage.getItem('Score4SubtractionMedium') == 'null') {
          localStorage.setItem('Score5SubtractionMedium', localStorage.getItem('Score4SubtractionMedium', gameScore));
          localStorage.setItem('Score4SubtractionMedium', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5SubtractionMedium') || localStorage.getItem('Score5SubtractionMedium') == 'null') {
          localStorage.setItem('Score5SubtractionMedium', gameScore);
        }
        localStorage.removeItem('currentScore');
      } else if (num1 == 99) {
        localStorage.setItem('currentScore', gameScore);
        if (gameScore >= localStorage.getItem('Score1SubtractionHard') || localStorage.getItem('Score1SubtractionHard') == 'null') {
          localStorage.setItem('Score5SubtractionHard', localStorage.getItem('Score4SubtractionHard', gameScore));
          localStorage.setItem('Score4SubtractionHard', localStorage.getItem('Score3SubtractionHard', gameScore));
          localStorage.setItem('Score3SubtractionHard', localStorage.getItem('Score2SubtractionHard', gameScore));
          localStorage.setItem('Score2SubtractionHard', localStorage.getItem('Score1SubtractionHard', gameScore));
          localStorage.setItem('Score1SubtractionHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score2SubtractionHard') || localStorage.getItem('Score2SubtractionHard') == 'null') {
          localStorage.setItem('Score5SubtractionHard', localStorage.getItem('Score4SubtractionHard', gameScore));
          localStorage.setItem('Score4SubtractionHard', localStorage.getItem('Score3SubtractionHard', gameScore));
          localStorage.setItem('Score3SubtractionHard', localStorage.getItem('Score2SubtractionHard', gameScore));
          localStorage.setItem('Score2SubtractionHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score3SubtractionHard') || localStorage.getItem('Score3SubtractionHard') == 'null') {
          localStorage.setItem('Score5SubtractionHard', localStorage.getItem('Score4SubtractionHard', gameScore));
          localStorage.setItem('Score4SubtractionHard', localStorage.getItem('Score3SubtractionHard', gameScore));
          localStorage.setItem('Score3SubtractionHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score4SubtractionHard') || localStorage.getItem('Score4SubtractionHard') == 'null') {
          localStorage.setItem('Score5SubtractionHard', localStorage.getItem('Score4SubtractionHard', gameScore));
          localStorage.setItem('Score4SubtractionHard', gameScore);
        }
        else if (gameScore >= localStorage.getItem('Score5SubtractionHard') || localStorage.getItem('Score5SubtractionHard') == 'null') {
          localStorage.setItem('Score5SubtractionHard', gameScore);
        }
        localStorage.removeItem('currentScore');
      }
    };

  };

  easyGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(19, 19);
  };

  mediumGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(49, 49);
  };

  hardGame = () => {
    content.parentNode.removeChild(content);
    gamePlay(99, 99);
  };

  easyDifficulty.addEventListener('click', easyGame);
  mediumDifficulty.addEventListener('click', mediumGame);
  hardDifficulty.addEventListener('click', hardGame);

})
