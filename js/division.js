document.addEventListener('DOMContentLoaded', () => {

easyDifficulty = document.getElementsByClassName('gameType')[0];
mediumDifficulty = document.getElementsByClassName('gameType')[1];
hardDifficulty = document.getElementsByClassName('gameType')[2];
content = document.getElementsByClassName('content')[0];
let gameScore = 0;
let seconds = 30;

gamePlay = (num1, num2) => {
  let multiplier1 = num1;
  let multiplier2 = num2;
  content.parentNode.removeChild(content);
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
  game.style.width = '800px';
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
  answerArea.style.width = '400px';
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
  let correctAnswer;

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
      setTimeout(backgroundNormal, 200);
    }
  }
  backgroundNormal = () => {
    game.style.background = 'rgb(177, 165, 158)'
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
    game.style.background = 'rgb(238, 250, 15)';
    setTimeout(backgroundNormal, 1500);
    gameContent.innerHTML = 'Well done! You scored:';
    scoreArea.innerHTML = `${gameScore}`;
    answerArea.parentNode.removeChild(answerArea);
  };

};

easyGame = () => {
  gamePlay(49, 3);
};

mediumGame = () => {
  gamePlay(99, 18);
};

hardGame = () => {
  gamePlay(199, 48);
};

easyDifficulty.addEventListener('click', easyGame);
mediumDifficulty.addEventListener('click', mediumGame);
hardDifficulty.addEventListener('click', hardGame);

})
