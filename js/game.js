let submittedAnswer = '';

document.addEventListener('DOMContentLoaded', () => {
  content = document.getElementsByClassName('content')[0];

  easyDifficulty = document.getElementsByClassName('easyDifficultyButton')[0];
  easyDifficulty.addEventListener('click', easyGame.bind(null, easyDifficulty, content));

  mediumDifficulty = document.getElementsByClassName('mediumDifficultyButton')[0];
  mediumDifficulty.addEventListener('click', mediumGame.bind(null, mediumDifficulty, content));

  hardDifficulty = document.getElementsByClassName('hardDifficultyButton')[0];
  hardDifficulty.addEventListener('click', hardGame.bind(null, hardDifficulty, content));
})

easyGame = () => {
  let calculationType = getCalculationType(easyDifficulty);
  content.parentNode.removeChild(content);
  gamePlay("Easy", calculationType);
}

mediumGame = () => {
  let calculationType = getCalculationType(mediumDifficulty);
  content.parentNode.removeChild(content);
  gamePlay("Medium", calculationType);
}

hardGame = () => {
  let calculationType = getCalculationType(hardDifficulty);
  content.parentNode.removeChild(content);
  gamePlay("Hard", calculationType);
}

gamePlay = (difficulty, calculationType) => {
  let gameStarted = false;
  let gameScore = 0;
  let seconds = 30;
  let deciseconds = 0;
  let buttonArea = document.querySelector('.buttons');
  let homeButton = buttonArea.firstChild;
  let newButtonForReplay = document.createElement('button');
  let newButtonForDifficulty = document.createElement('a');
  let calculationTypeFileName = calculationType.charAt(0).toLowerCase() + calculationType.slice(1) + '.html';
  let newButtonForDifficultyContent = document.createElement('button');
  let body = document.querySelector('body');
  let button = document.querySelector('div');
  let countdownIntervalId = setInterval(countdown, 100);
  let rawCalculationNumberLimit1 = getRawCalculationNumberLimit1(difficulty, calculationType);
  let rawCalculationNumberLimit2 = getRawCalculationNumberLimit2(difficulty, calculationType, rawCalculationNumberLimit1);
  let calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, calculationType);
  let calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, calculationType);
  let correctAnswer;
  let correctAnswerGiven = false;
  let informationAndGameAndButtonsArea = createElementWithClasses('div', 'informationAndGameAndButtonsArea');
  let informationArea = createElementWithClasses('div', 'informationArea');
  let timerDisplay = createElementWithClasses('button', 'informationAreaElementTimer buttonToDivAppearance');
  let difficultyDisplay = createElementWithClasses('button', 'informationAreaElementDifficulty buttonToDivAppearance');

  difficultyDisplay.innerHTML = 'Difficulty: ' + difficulty;

  addInformationAreaToPage(informationArea, timerDisplay, difficultyDisplay,
    informationAndGameAndButtonsArea);

  let gameArea = createElementWithClasses('div', 'gameArea');
  let questionAndAnswerOutputArea = createElementWithClasses('div', 'questionAndAnswerOutputArea');
  let questionArea = createElementWithClasses('button', 'questionArea buttonToDivAppearance');
  let answerOutputArea = createElementWithClasses('button', 'answerOutputArea buttonToDivAppearance');
  let answerInputArea = createElementWithClasses('div', 'answerInputArea');
  let answerZeroArea = createAnswerInputButtonArea(answerInputArea, 0, 'smallAnswerArea', 'answerAreaBackground1');
  let answerZeroAreaWithoutEventListener = answerZeroArea.cloneNode(true);
  let answerOneArea = createAnswerInputButtonArea(answerInputArea, 1, 'smallAnswerArea', 'answerAreaBackground0');
  let answerOneAreaWithoutEventListener = answerOneArea.cloneNode(true);
  let answerTwoArea = createAnswerInputButtonArea(answerInputArea, 2, 'smallAnswerArea', 'answerAreaBackground1');
  let answerTwoAreaWithoutEventListener = answerTwoArea.cloneNode(true);
  let answerThreeArea = createAnswerInputButtonArea(answerInputArea, 3, 'smallAnswerArea', 'answerAreaBackground0');
  let answerThreeAreaWithoutEventListener = answerThreeArea.cloneNode(true);
  let answerFourArea = createAnswerInputButtonArea(answerInputArea, 4, 'smallAnswerArea', 'answerAreaBackground1');
  let answerFourAreaWithoutEventListener = answerFourArea.cloneNode(true);
  let answerFiveArea = createAnswerInputButtonArea(answerInputArea, 5, 'smallAnswerArea', 'answerAreaBackground0');
  let answerFiveAreaWithoutEventListener = answerFiveArea.cloneNode(true);
  let answerSixArea = createAnswerInputButtonArea(answerInputArea, 6, 'smallAnswerArea', 'answerAreaBackground1');
  let answerSixAreaWithoutEventListener = answerSixArea.cloneNode(true);
  let answerSevenArea = createAnswerInputButtonArea(answerInputArea, 7, 'smallAnswerArea', 'answerAreaBackground0');
  let answerSevenAreaWithoutEventListener = answerSevenArea.cloneNode(true);
  let answerEightArea = createAnswerInputButtonArea(answerInputArea, 8, 'smallAnswerArea', 'answerAreaBackground1');
  let answerEightAreaWithoutEventListener = answerEightArea.cloneNode(true);
  let answerNineArea = createAnswerInputButtonArea(answerInputArea, 9, 'smallAnswerArea', 'answerAreaBackground0');
  let answerNineAreaWithoutEventListener = answerNineArea.cloneNode(true);
  let answerMinusArea = createAnswerInputButtonArea(answerInputArea, '-', 'smallAnswerArea', 'answerAreaMinus');
  let answerMinusAreaWithoutEventListener = answerMinusArea.cloneNode(true);
  let answerDeleteArea = createAnswerInputButtonArea(answerInputArea, 'DELETE', 'bigAnswerArea', 'answerAreaDelete');
  let answerDeleteAreaWithoutEventListener = answerDeleteArea.cloneNode(true);
  let answerClearArea = createAnswerInputButtonArea(answerInputArea, 'CLEAR', 'bigAnswerArea', 'answerAreaClear');
  let answerClearAreaWithoutEventListener = answerClearArea.cloneNode(true);

  questionAndAnswerOutputArea.appendChild(questionArea);
  questionAndAnswerOutputArea.appendChild(answerOutputArea);
  gameArea.appendChild(questionAndAnswerOutputArea);
  gameArea.appendChild(answerInputArea);
  informationAndGameAndButtonsArea.appendChild(gameArea);

  enableEventListeners = () => {
    enableEventListener(answerZeroAreaWithoutEventListener, answerZeroArea);
    enableEventListener(answerOneAreaWithoutEventListener, answerOneArea);
    enableEventListener(answerTwoAreaWithoutEventListener, answerTwoArea);
    enableEventListener(answerThreeAreaWithoutEventListener, answerThreeArea);
    enableEventListener(answerFourAreaWithoutEventListener, answerFourArea);
    enableEventListener(answerFiveAreaWithoutEventListener, answerFiveArea);
    enableEventListener(answerSixAreaWithoutEventListener, answerSixArea);
    enableEventListener(answerSevenAreaWithoutEventListener, answerSevenArea);
    enableEventListener(answerEightAreaWithoutEventListener, answerEightArea);
    enableEventListener(answerNineAreaWithoutEventListener, answerNineArea);
    enableEventListener(answerMinusAreaWithoutEventListener, answerMinusArea);
    enableEventListener(answerDeleteAreaWithoutEventListener, answerDeleteArea);
    enableEventListener(answerClearAreaWithoutEventListener, answerClearArea);
  }

  disableEventListeners = () => {
    disableEventListener(answerZeroArea, answerZeroAreaWithoutEventListener);
    disableEventListener(answerOneArea, answerOneAreaWithoutEventListener);
    disableEventListener(answerTwoArea, answerTwoAreaWithoutEventListener);
    disableEventListener(answerThreeArea, answerThreeAreaWithoutEventListener);
    disableEventListener(answerFourArea, answerFourAreaWithoutEventListener);
    disableEventListener(answerFiveArea, answerFiveAreaWithoutEventListener);
    disableEventListener(answerSixArea, answerSixAreaWithoutEventListener);
    disableEventListener(answerSevenArea, answerSevenAreaWithoutEventListener);
    disableEventListener(answerEightArea, answerEightAreaWithoutEventListener);
    disableEventListener(answerNineArea, answerNineAreaWithoutEventListener);
    disableEventListener(answerMinusArea, answerMinusAreaWithoutEventListener);
    disableEventListener(answerDeleteArea, answerDeleteAreaWithoutEventListener);
    disableEventListener(answerClearArea, answerClearAreaWithoutEventListener);
  }

  setInterval(displayAnswer.bind(null, answerOutputArea), 1);

  playAgain = () => {
    clearInterval(countdownIntervalId);
    informationArea.parentNode.removeChild(informationArea);
    gameArea.parentNode.removeChild(gameArea);
    informationAndGameAndButtonsArea.parentNode.removeChild(informationAndGameAndButtonsArea);
    newButtonForDifficulty.parentNode.removeChild(newButtonForDifficulty);
    newButtonForReplay.parentNode.removeChild(newButtonForReplay);
    gamePlay(difficulty, calculationType);
  }

  newButtonForReplay.setAttribute('class', 'buttonStyle playAgainButton');
  newButtonForReplay.innerHTML = 'PLAY AGAIN';
  newButtonForReplay.addEventListener('click', playAgain);

  newButtonForDifficulty.setAttribute('href', calculationTypeFileName);

  newButtonForDifficultyContent.setAttribute('class', 'buttonStyle changeDifficultyButton');
  newButtonForDifficultyContent.innerHTML = 'CHANGE DIFFICULTY';
  newButtonForDifficulty.appendChild(newButtonForDifficultyContent);

  buttonArea.insertBefore(newButtonForReplay, homeButton);
  buttonArea.insertBefore(newButtonForDifficulty, homeButton);

  body.insertBefore(informationAndGameAndButtonsArea, button);

  timerDisplay.innerHTML = `Time Left: ${seconds}.${deciseconds}`;

  ready = () => {
    questionArea.style.background = 'red';
    questionArea.innerHTML = 'Ready...';
  }

  getSet = () => {
    questionArea.style.background = 'orange';
    questionArea.innerHTML = 'Get set...';
  }

  go = () => {
    questionArea.style.background = 'limegreen';
    questionArea.innerHTML = 'Go!';
  }

  gameStart = () => {
    questionArea.style.background = 'rgb(153, 204, 255)';
    gameStarted = true;
    correctAnswer = generateQuestionAndReturnCorrectAnswer();
    enableEventListeners();
  }

  countdown = () => {
    if (gameStarted === true) {
      if (seconds === 0 && deciseconds === 0) {
        seconds = -1;
        deciseconds = -1;
        timerDisplay.innerHTML = 'Out of time!';
        gameOver(countdownIntervalId, gameArea, gameScore, difficulty, calculationType);
      } else if (seconds > 0 || deciseconds > 0) {
        if (deciseconds > 0) {
          deciseconds--;
        } else {
          seconds--;
          deciseconds = 9;
        }
        timerDisplay.innerHTML = `Time Left: ${seconds}:${deciseconds}`;
      }
    }
  }

  disableEventListeners();
  ready();
  setTimeout(getSet, 1000);
  setTimeout(go, 2250);
  setTimeout(gameStart, 3500);

  chooseCalculationTypeAndGenerateNumbersAndQuestionAndReturnCorrectAnswer = () => {
    let randomNum = parseInt(Math.random()*4) + 1;
    if (randomNum == 1) {
      rawCalculationNumberLimit1 = getRawCalculationNumberLimit1(difficulty, "Addition");
      rawCalculationNumberLimit2 = getRawCalculationNumberLimit2(difficulty, "Addition", rawCalculationNumberLimit1);
      calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Addition");
      calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Addition");

      questionArea.innerHTML = `${calculationNumber1} + ${calculationNumber2}`;
      return calculationNumber1 + calculationNumber2;
    } else if (randomNum == 2) {
      rawCalculationNumberLimit1 = getRawCalculationNumberLimit1(difficulty, "Subtraction");
      rawCalculationNumberLimit2 = getRawCalculationNumberLimit2(difficulty, "Subtraction", rawCalculationNumberLimit1);
      calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Subtraction");
      calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Subtraction");

      questionArea.innerHTML = `${calculationNumber1} - ${calculationNumber2}`;
      return calculationNumber1 - calculationNumber2;
    } else if (randomNum == 3) {
      rawCalculationNumberLimit1 = getRawCalculationNumberLimit1(difficulty, "Multiplication");
      rawCalculationNumberLimit2 = getRawCalculationNumberLimit2(difficulty, "Multiplication", rawCalculationNumberLimit1);
      calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Multiplication");
      calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Multiplication");

      questionArea.innerHTML = `${calculationNumber1} x ${calculationNumber2}`;
      return calculationNumber1 * calculationNumber2;
    } else if (randomNum == 4) {
      rawCalculationNumberLimit1 = getRawCalculationNumberLimit1(difficulty, "Division");
      rawCalculationNumberLimit2 = getRawCalculationNumberLimit2(difficulty, "Division", rawCalculationNumberLimit1);
      calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Division");
      calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Division");
      checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen(calculationNumber1,
        calculationNumber2, rawCalculationNumberLimit1, rawCalculationNumberLimit2);

      questionArea.innerHTML = `${calculationNumber1} ÷ ${calculationNumber2}`;
      return calculationNumber1 / calculationNumber2;
    }
  }

  generateQuestionAndReturnCorrectAnswer = () => {
    if (gameStarted == true) {
      switch (calculationType) {
        case "Addition":
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Addition");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Addition");

        questionArea.innerHTML = `${calculationNumber1} + ${calculationNumber2} = ?`;
        return calculationNumber1 + calculationNumber2;
        break;
        case "Subtraction":
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Subtraction");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Subtraction");

        questionArea.innerHTML = `${calculationNumber1} - ${calculationNumber2} = ?`;
        return calculationNumber1 - calculationNumber2;
        break;
        case "Multiplication":
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Multiplication");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Multiplication");

        questionArea.innerHTML = `${calculationNumber1} x ${calculationNumber2} = ?`;
        return calculationNumber1 * calculationNumber2;
        break;
        case "Division":
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Division");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Division");

        checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen(calculationNumber1,
          calculationNumber2, rawCalculationNumberLimit1, rawCalculationNumberLimit2);
        questionArea.innerHTML = `${calculationNumber1} ÷ ${calculationNumber2} = ?`;
        return calculationNumber1 / calculationNumber2;
        break;
        case "AllOfThem":
        return chooseCalculationTypeAndGenerateNumbersAndQuestionAndReturnCorrectAnswer();
        break;
      }
    }
  }

  if (calculationType == "Division") {
    checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen(calculationNumber1,
      calculationNumber2, rawCalculationNumberLimit1, rawCalculationNumberLimit2);
  }

  generateNextQuestion = (calculationNumber1, calculationNumber2) => {
    submittedAnswer = '';
    correctAnswer = generateQuestionAndReturnCorrectAnswer();
    questionArea.style.background = 'rgb(153, 204, 255)';
    answerOutputArea.style.background = 'rgb(161, 240, 211)';
    enableEventListeners();
    correctAnswerGiven = false;
  }

  answerChecker = () => {
    if (submittedAnswer == correctAnswer && !correctAnswerGiven) {
      gameScore++;
      questionArea.style.background = 'rgb(33, 245, 22)';
      questionArea.innerHTML = 'CORRECT!';
      answerOutputArea.style.background = 'rgb(33, 245, 22)';

      correctAnswerGiven = true;

      disableEventListeners();
      setTimeout(generateNextQuestion.bind(null, calculationNumber1, calculationNumber2), 400);
    }
  }

  setInterval(answerChecker, 1);
}

getCalculationType = (buttonClicked) => {
  switch (true) {
    case buttonClicked.classList.contains("addition"):
    return "Addition";
    break;
    case buttonClicked.classList.contains("subtraction"):
    return "Subtraction";
    break;
    case buttonClicked.classList.contains("multiplication"):
    return "Multiplication";
    break;
    case buttonClicked.classList.contains("division"):
    return "Division";
    break;
    case buttonClicked.classList.contains("allOfThem"):
    return "AllOfThem";
    break;
  }
}

createElementWithClasses = (type, classes) => {
  let newElement = document.createElement(type);
  newElement.className = classes;

  return newElement;
}

addInformationAreaToPage = (informationArea, timerDisplay, difficultyDisplay,
  informationAndGameAndButtonsArea) => {
  informationArea.appendChild(timerDisplay);
  informationArea.appendChild(difficultyDisplay);

  informationAndGameAndButtonsArea.appendChild(informationArea);
}

createAnswerInputButtonArea = (answerInputArea, number, size, type) => {
  let answerButton = createElementWithClasses('button', 'disableHighlightingOnAllBrowserTypes buttonToDivAppearance ' + size + ' ' + type);
  answerButton.innerHTML = number;

  if (number == 'DELETE') {
    answerButton.addEventListener('click', deleteLastNumber)
  } else if (number == 'CLEAR') {
    answerButton.addEventListener('click', clearAllNumbers)
  } else {
    answerButton.addEventListener('click', addNumber.bind(null, number))
  }

  answerInputArea.appendChild(answerButton);

  return answerButton;
}

enableEventListener = (areaWithoutEventListener, areaWithEventListener) => {
  areaWithoutEventListener.replaceWith(areaWithEventListener);
}

disableEventListener = (areaWithEventListener, areaWithoutEventListener) => {
  areaWithEventListener.replaceWith(areaWithoutEventListener);
}

displayAnswer = (answerOutputArea) => {
  answerOutputArea.innerHTML = `Answer: ${submittedAnswer}`;
}

addNumber = (number) => {
  if (submittedAnswer.length < 5) {
    submittedAnswer += number;
  }
}

deleteLastNumber = () => {
  submittedAnswer = submittedAnswer.substr(0, submittedAnswer.length - 1);
}

clearAllNumbers = () => {
  submittedAnswer = '';
}

getRawCalculationNumberLimit1 = (difficulty, givenCalculationType) => {
  switch (difficulty) {
    case "Easy":
    switch (givenCalculationType) {
      case "Addition":
      return 15;
      break;
      case "Subtraction":
      return 15;
      break;
      case "Multiplication":
      return 6;
      break;
      case "Division":
      return 30;
      break;
      case "AllOfThem":
      return 1337;
      break;
    }
    break;
    case "Medium":
    switch (givenCalculationType) {
      case "Addition":
      return 60;
      break;
      case "Subtraction":
      return 60;
      break;
      case "Multiplication":
      return 12;
      break;
      case "Division":
      return 150;
      break;
      case "AllOfThem":
      return 1337;
      break;
    }
    break;
    case "Hard":
    switch (givenCalculationType) {
      case "Addition":
      return 150;
      break;
      case "Subtraction":
      return 150;
      break;
      case "Multiplication":
      return 25;
      break;
      case "Division":
      return 300;
      break;
      case "AllOfThem":
      return 1337;
      break;
    }
    break;
  }
}

getRawCalculationNumberLimit2 = (difficulty, givenCalculationType, rawCalculationNumberLimit1) => {
  if (givenCalculationType == "Division") {
    switch (difficulty) {
      case "Easy":
      return 8;
      break;
      case "Medium":
      return 20;
      break;
      case "Hard":
      return 50;
      break;
    }
  } else {
    return rawCalculationNumberLimit1;
  }
}

getCalculationNumber = (rawCalculationNumber, givenCalculationType) => {
  switch (givenCalculationType) {
    case "Addition":
    return parseInt(randomScaleSkewedToGetLargerNumbers()*rawCalculationNumber) + 1;
    break;
    case "Subtraction":
    return parseInt(randomScaleSkewedToGetLargerNumbers()*rawCalculationNumber) + 1;
    break;
    case "Multiplication":
    return reshuffleIfEqualToOneOrTenAndSometimesTwo(
      parseInt(randomScaleSkewedToGetLargerNumbers()*rawCalculationNumber) + 1);
    break;
    case "Division":
    return reshuffleIfEqualToOneOrTenAndSometimesTwo(
      parseInt(randomScaleSkewedToGetLargerNumbers()*rawCalculationNumber) + 1);
    break;
    case "AllOfThem":
    return 1337;
    break;
  }
}

randomScaleSkewedToGetLargerNumbers = () => {
  let scale = Math.random();
  let randomNumberBetween1And3 = parseInt(Math.random()*3) + 1;

  if (scale < 0.5) {
    if (randomNumberBetween1And3 == 1) {
      scale += 0.1;
    } else if (randomNumberBetween1And3 == 2) {
      scale += 0.3;
    } else {
      scale += 0.5;
    }
  }

  return scale;
}

reshuffleIfEqualToOneOrTenAndSometimesTwo = (calculationNumber) => {
  let randomNumberBetween1And3 = parseInt(Math.random()*3) + 1;

  if (calculationNumber == 1) {
    if (randomNumberBetween1And3 == 1) {
      calculationNumber += 2;
    } else if (randomNumberBetween1And3 == 2) {
      calculationNumber += 3;
    } else {
      calculationNumber += 5;
    }
  }

  if (calculationNumber == 2) {
    if (randomNumberBetween1And3 == 1) {
      calculationNumber += 1;
    }
  }

  if (calculationNumber == 10) {
    if (randomNumberBetween1And3 == 1) {
      calculationNumber += 1;
    } else if (randomNumberBetween1And3 == 2) {
      calculationNumber += 2;
    } else {
      calculationNumber -= 1;
    }
  }

  return calculationNumber;
}

checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen = (calculationNumber1,
  calculationNumber2, rawCalculationNumberLimit1, rawCalculationNumberLimit2) => {
    if (calculationNumber1 % calculationNumber2 != 0 ||
      calculationNumber1 / calculationNumber2 == 1 ||
      calculationNumber1 / calculationNumber2 == 10) {
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Division");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Division");
        checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen(calculationNumber1,
          calculationNumber2, rawCalculationNumberLimit1, rawCalculationNumberLimit2);
  }
}

generateGameOverMessage = (gameScore) => {
  switch (true) {
    case gameScore < 5:
    return "I KNOW you can do better than that!";
    break;
    case gameScore < 10:
    return "Not bad - practice makes perfect!";
    break;
    case gameScore < 15:
    return "Good score - well done!";
    break;
    case gameScore < 20:
    return "That's incredible! What a score!";
    break;
    case gameScore >= 20:
    return "PHENOMENAL!!!";
    break;
  }
}

generateScoreRating = (gameScore) => {
  let scoreRating = gameScore / 2;
  if (scoreRating > 10) {
    return 10;
  }
  return scoreRating;
}

generateDifficultyMultiplier = (difficulty) => {
  switch (difficulty) {
    case "Easy":
    return 0.7;
    break;
    case "Medium":
    return 0.85;
    break;
    case "Hard":
    return 1;
    break;
  }
}

generateRating = (gameScore, difficulty) => {
  let scoreRating = generateScoreRating(gameScore);
  let difficultyMultiplier = generateDifficultyMultiplier(difficulty);

  let rating = scoreRating * difficultyMultiplier;
  let ratingToOneDecimalPlace = Math.round(rating * 10) / 10;

  return ratingToOneDecimalPlace;
}

wellDonePopup = (wellDonePopupArea, gameScore) => {
  let wellDonePopupText = document.createElement('button');
  wellDonePopupText.className = 'fadeIn wellDonePopupArea buttonToDivAppearance';
  wellDonePopupText.innerHTML = generateGameOverMessage(gameScore);
  wellDonePopupArea.appendChild(wellDonePopupText);
}

scorePopup = (scorePopupArea, gameScore) => {
  let scorePopupText = document.createElement('button');
  scorePopupText.className = 'fadeIn scorePopupArea buttonToDivAppearance';
  scorePopupText.innerHTML = `Score: ${gameScore}`;
  scorePopupArea.appendChild(scorePopupText);
}

ratingPopup = (ratingPopupArea, gameScore, difficulty) => {
  let ratingPopupText = document.createElement('button');
  ratingPopupText.className = 'fadeIn ratingPopupArea buttonToDivAppearance';
  ratingPopupText.innerHTML = "Rating: " + generateRating(gameScore, difficulty) + "/10";
  ratingPopupArea.appendChild(ratingPopupText);
}

gameOverPopup = (gameArea, gameScore, difficulty) => {
  let gameOverPopup = document.createElement('div');
  gameOverPopup.className = 'fadeIn gameOverPopup';

  let wellDonePopupArea = document.createElement('div');
  wellDonePopupArea.className = 'fadeIn wellDonePopupArea';

  let scorePopupArea = document.createElement('div');
  scorePopupArea.className = 'fadeIn scorePopupArea';

  let ratingPopupArea = document.createElement('div');
  ratingPopupArea.className = 'fadeIn ratingPopupArea';

  gameOverPopup.appendChild(wellDonePopupArea);
  gameOverPopup.appendChild(scorePopupArea);
  gameOverPopup.appendChild(ratingPopupArea);
  gameArea.appendChild(gameOverPopup);

  setTimeout(wellDonePopup.bind(null, wellDonePopupArea, gameScore), 1000);
  setTimeout(scorePopup.bind(null, scorePopupArea, gameScore), 2000);
  setTimeout(ratingPopup.bind(null, ratingPopupArea, gameScore, difficulty), 3000);
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

gameOver = (countdownIntervalId, gameArea, gameScore, difficulty, calculationType) => {
  clearInterval(countdownIntervalId);
  disableEventListeners();
  setTimeout(gameOverPopup.bind(null, gameArea, gameScore, difficulty), 500);

  if (difficulty == "Easy") {
    localStorage.setItem('currentScore', gameScore);
    scoreDecider(
      'Score1' + calculationType + 'Easy',
      'Score2' + calculationType + 'Easy',
      'Score3' + calculationType + 'Easy',
      'Score4' + calculationType + 'Easy',
      'Score5' + calculationType + 'Easy',
      gameScore
    );
    localStorage.removeItem('currentScore');
  } else if (difficulty == "Medium") {
    localStorage.setItem('currentScore', gameScore);
    scoreDecider(
      'Score1' + calculationType + 'Medium',
      'Score2' + calculationType + 'Medium',
      'Score3' + calculationType + 'Medium',
      'Score4' + calculationType + 'Medium',
      'Score5' + calculationType + 'Medium',
      gameScore
    );
    localStorage.removeItem('currentScore');
  } else if (difficulty == "Hard") {
    localStorage.setItem('currentScore', gameScore);
    scoreDecider(
      'Score1' + calculationType + 'Hard',
      'Score2' + calculationType + 'Hard',
      'Score3' + calculationType + 'Hard',
      'Score4' + calculationType + 'Hard',
      'Score5' + calculationType + 'Hard',
      gameScore
    );
    localStorage.removeItem('currentScore');
  }
}
