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
  timer.style.fontSize = '30px';
  let timerContent = document.createElement('p');
  timer.appendChild(timerContent);
  let game = document.createElement('div');
  game.className = 'gameClass';
  game.style.height = '350px';
  game.style.width = '60%';
  game.style.background = 'rgb(177, 165, 158)';
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
  answerArea.style.background = 'rgb(198, 237, 240)';
  answerArea.style.border = '1px solid black';
  game.appendChild(answerArea);
  let body = document.querySelector('body');
  let button = document.querySelector('div');
  body.insertBefore(timer, button)
  body.insertBefore(game, button);
  timerContent.innerHTML = `Time Left: ${seconds}`;

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
      setTimeout(backgroundNormal, 200);
    }
  }
  backgroundNormal = () => {
    game.style.background = 'rgb(177, 165, 158)'
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
    game.style.background = 'rgb(238, 250, 15)';
    setTimeout(backgroundNormal, 1500);
    gameContent.innerHTML = 'Well done! You scored:';
    scoreArea.innerHTML = `${gameScore}`;
    answerArea.parentNode.removeChild(answerArea);
    let buttonArea = document.querySelector('.buttons');

    let newLinkForDifficulty = document.createElement('a');
    newLinkForDifficulty.setAttribute('href', 'subtraction.html');
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
