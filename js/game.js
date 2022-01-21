document.addEventListener('DOMContentLoaded', () => {

  easyDifficulty = document.getElementsByClassName('easyDifficultyButton')[0];
  mediumDifficulty = document.getElementsByClassName('mediumDifficultyButton')[0];
  hardDifficulty = document.getElementsByClassName('hardDifficultyButton')[0];
  content = document.getElementsByClassName('content')[0];

  gamePlay = (difficulty, calculationType) => {
    let gameStarted = false;
    let gameScore = 0;
    let seconds = 30;
    let deciseconds = 0;

    const informationAndGameAndButtonsArea = document.createElement('div');
    informationAndGameAndButtonsArea.className = 'informationAndGameAndButtonsArea';

    const informationArea = document.createElement('div');
    informationArea.className = 'informationArea';

    const timerDisplay = document.createElement('button');
    timerDisplay.className = 'informationAreaElementTimer buttonToDivAppearance';

    const difficultyDisplay = document.createElement('button');
    difficultyDisplay.className = 'informationAreaElementDifficulty buttonToDivAppearance';
    difficultyDisplay.innerHTML = 'Difficulty: ' + difficulty;

    populateInformationArea = () => {
      informationArea.appendChild(timerDisplay);
      informationArea.appendChild(difficultyDisplay);

      informationAndGameAndButtonsArea.appendChild(informationArea);
    }

    populateInformationArea();

    const gameArea = document.createElement('div');
    gameArea.className = 'gameArea';

    const questionAndAnswerOutputArea = document.createElement('div');
    questionAndAnswerOutputArea.className = 'questionAndAnswerOutputArea';

    const questionArea = document.createElement('button');
    questionArea.className = 'questionArea buttonToDivAppearance';

    const answerOutputArea = document.createElement('button');
    answerOutputArea.className = 'answerOutputArea buttonToDivAppearance';

    const answerInputArea = document.createElement('div');
    answerInputArea.className = 'answerInputArea';

    const answerZeroArea = document.createElement('button');
    answerZeroArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground0 buttonToDivAppearance';
    answerZeroArea.innerHTML = "0";
    answerZeroArea.addEventListener('click', function() {
      addNumber(0)
    })

    const answerOneArea = document.createElement('button');
    answerOneArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground1 buttonToDivAppearance';
    answerOneArea.innerHTML = "1";
    answerOneArea.addEventListener('click', function() {
      addNumber(1)
    })

    const answerTwoArea = document.createElement('button');
    answerTwoArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground0 buttonToDivAppearance';
    answerTwoArea.innerHTML = "2";
    answerTwoArea.addEventListener('click', function() {
      addNumber(2)
    })

    const answerThreeArea = document.createElement('button');
    answerThreeArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground1 buttonToDivAppearance';
    answerThreeArea.innerHTML = "3";
    answerThreeArea.addEventListener('click', function() {
      addNumber(3)
    })

    const answerFourArea = document.createElement('button');
    answerFourArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground0 buttonToDivAppearance';
    answerFourArea.innerHTML = "4";
    answerFourArea.addEventListener('click', function() {
      addNumber(4)
    })

    const answerFiveArea = document.createElement('button');
    answerFiveArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground1 buttonToDivAppearance';
    answerFiveArea.innerHTML = "5";
    answerFiveArea.addEventListener('click', function() {
      addNumber(5)
    })

    const answerSixArea = document.createElement('button');
    answerSixArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground0 buttonToDivAppearance';
    answerSixArea.innerHTML = "6";
    answerSixArea.addEventListener('click', function() {
      addNumber(6)
    })

    const answerSevenArea = document.createElement('button');
    answerSevenArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground1 buttonToDivAppearance';
    answerSevenArea.innerHTML = "7";
    answerSevenArea.addEventListener('click', function() {
      addNumber(7)
    })

    const answerEightArea = document.createElement('button');
    answerEightArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground0 buttonToDivAppearance';
    answerEightArea.innerHTML = "8";
    answerEightArea.addEventListener('click', function() {
      addNumber(8)
    })

    const answerNineArea = document.createElement('button');
    answerNineArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaBackground1 buttonToDivAppearance';
    answerNineArea.innerHTML = "9";
    answerNineArea.addEventListener('click', function() {
      addNumber(9)
    })

    const answerMinusArea = document.createElement('button');
    answerMinusArea.className = 'disableHighlightingOnAllBrowserTypes smallAnswerArea answerAreaMinus buttonToDivAppearance';
    answerMinusArea.innerHTML = "-";
    answerMinusArea.addEventListener('click', function() {
      addNumber(10)
    })

    const answerDeleteArea = document.createElement('button');
    answerDeleteArea.className = 'disableHighlightingOnAllBrowserTypes bigAnswerArea answerAreaDelete buttonToDivAppearance';
    answerDeleteArea.innerHTML = "DELETE";
    answerDeleteArea.addEventListener('click', function() {
      addNumber(11)
    })

    const answerClearArea = document.createElement('button');
    answerClearArea.className = 'disableHighlightingOnAllBrowserTypes bigAnswerArea answerAreaClear buttonToDivAppearance';
    answerClearArea.innerHTML = "CLEAR";
    answerClearArea.addEventListener('click', function() {
      addNumber(12)
    })

    const answerZeroAreaWithoutEventListener = answerZeroArea.cloneNode(true);
    const answerOneAreaWithoutEventListener = answerOneArea.cloneNode(true);
    const answerTwoAreaWithoutEventListener = answerTwoArea.cloneNode(true);
    const answerThreeAreaWithoutEventListener = answerThreeArea.cloneNode(true);
    const answerFourAreaWithoutEventListener = answerFourArea.cloneNode(true);
    const answerFiveAreaWithoutEventListener = answerFiveArea.cloneNode(true);
    const answerSixAreaWithoutEventListener = answerSixArea.cloneNode(true);
    const answerSevenAreaWithoutEventListener = answerSevenArea.cloneNode(true);
    const answerEightAreaWithoutEventListener = answerEightArea.cloneNode(true);
    const answerNineAreaWithoutEventListener = answerNineArea.cloneNode(true);
    const answerMinusAreaWithoutEventListener = answerMinusArea.cloneNode(true);
    const answerDeleteAreaWithoutEventListener = answerDeleteArea.cloneNode(true);
    const answerClearAreaWithoutEventListener = answerClearArea.cloneNode(true);

    enableEventListeners = () => {
      answerZeroAreaWithoutEventListener.replaceWith(answerZeroArea);
      answerOneAreaWithoutEventListener.replaceWith(answerOneArea);
      answerTwoAreaWithoutEventListener.replaceWith(answerTwoArea);
      answerThreeAreaWithoutEventListener.replaceWith(answerThreeArea);
      answerFourAreaWithoutEventListener.replaceWith(answerFourArea);
      answerFiveAreaWithoutEventListener.replaceWith(answerFiveArea);
      answerSixAreaWithoutEventListener.replaceWith(answerSixArea);
      answerSevenAreaWithoutEventListener.replaceWith(answerSevenArea);
      answerEightAreaWithoutEventListener.replaceWith(answerEightArea);
      answerNineAreaWithoutEventListener.replaceWith(answerNineArea);
      answerMinusAreaWithoutEventListener.replaceWith(answerMinusArea);
      answerDeleteAreaWithoutEventListener.replaceWith(answerDeleteArea);
      answerClearAreaWithoutEventListener.replaceWith(answerClearArea);
    }

    disableEventListeners = () => {
      answerZeroArea.replaceWith(answerZeroAreaWithoutEventListener);
      answerOneArea.replaceWith(answerOneAreaWithoutEventListener);
      answerTwoArea.replaceWith(answerTwoAreaWithoutEventListener);
      answerThreeArea.replaceWith(answerThreeAreaWithoutEventListener);
      answerFourArea.replaceWith(answerFourAreaWithoutEventListener);
      answerFiveArea.replaceWith(answerFiveAreaWithoutEventListener);
      answerSixArea.replaceWith(answerSixAreaWithoutEventListener);
      answerSevenArea.replaceWith(answerSevenAreaWithoutEventListener);
      answerEightArea.replaceWith(answerEightAreaWithoutEventListener);
      answerNineArea.replaceWith(answerNineAreaWithoutEventListener);
      answerMinusArea.replaceWith(answerMinusAreaWithoutEventListener);
      answerDeleteArea.replaceWith(answerDeleteAreaWithoutEventListener);
      answerClearArea.replaceWith(answerClearAreaWithoutEventListener);
    }

    answerInputArea.appendChild(answerZeroArea);
    answerInputArea.appendChild(answerOneArea);
    answerInputArea.appendChild(answerTwoArea);
    answerInputArea.appendChild(answerThreeArea);
    answerInputArea.appendChild(answerFourArea);
    answerInputArea.appendChild(answerFiveArea);
    answerInputArea.appendChild(answerSixArea);
    answerInputArea.appendChild(answerSevenArea);
    answerInputArea.appendChild(answerEightArea);
    answerInputArea.appendChild(answerNineArea);
    answerInputArea.appendChild(answerMinusArea);
    answerInputArea.appendChild(answerDeleteArea);
    answerInputArea.appendChild(answerClearArea);

    questionAndAnswerOutputArea.appendChild(questionArea);
    questionAndAnswerOutputArea.appendChild(answerOutputArea);
    gameArea.appendChild(questionAndAnswerOutputArea);
    gameArea.appendChild(answerInputArea);
    informationAndGameAndButtonsArea.appendChild(gameArea);

    let submittedAnswer = '';

    displayAnswer = () => {
      answerOutputArea.innerHTML = `Answer: ${submittedAnswer}`;
    }

    setInterval(displayAnswer, 1);

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

    playAgain = () => {
      clearInterval(countdownIntervalId);
      informationArea.parentNode.removeChild(informationArea);
      gameArea.parentNode.removeChild(gameArea);
      informationAndGameAndButtonsArea.parentNode.removeChild(informationAndGameAndButtonsArea);
      newButtonForDifficulty.parentNode.removeChild(newButtonForDifficulty);
      newButtonForReplay.parentNode.removeChild(newButtonForReplay);
      gamePlay(difficulty, calculationType);
    }

    const buttonArea = document.querySelector('.buttons');
    const homeButton = buttonArea.firstChild;

    const newButtonForReplay = document.createElement('button');
    newButtonForReplay.setAttribute('class', 'buttonStyle playAgainButton');
    newButtonForReplay.innerHTML = 'PLAY AGAIN';
    newButtonForReplay.addEventListener('click', playAgain);

    const newButtonForDifficulty = document.createElement('a');

    const calculationTypeFileName = calculationType.charAt(0).toLowerCase() + calculationType.slice(1) + '.html';
    newButtonForDifficulty.setAttribute('href', calculationTypeFileName);

    const newButtonForDifficultyContent = document.createElement('button');
    newButtonForDifficultyContent.setAttribute('class', 'buttonStyle changeDifficultyButton');
    newButtonForDifficultyContent.innerHTML = 'CHANGE DIFFICULTY';
    newButtonForDifficulty.appendChild(newButtonForDifficultyContent);

    buttonArea.insertBefore(newButtonForReplay, homeButton);
    buttonArea.insertBefore(newButtonForDifficulty, homeButton);

    const body = document.querySelector('body');
    const button = document.querySelector('div');
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
          gameOver();
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

    const countdownIntervalId = setInterval(countdown, 100);

    getRawCalculationNumberLimit1 = (givenCalculationType) => {
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

    getRawCalculationNumberLimit2 = (givenCalculationType) => {
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

    checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen = () => {
      if (calculationNumber1 % calculationNumber2 != 0 ||
          calculationNumber1 / calculationNumber2 == 1 ||
          calculationNumber1 / calculationNumber2 == 10) {
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Division");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Division");
        checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen();
      }
    }

    chooseCalculationTypeAndGenerateNumbersAndQuestionAndReturnCorrectAnswer = () => {
      let randomNum = parseInt(Math.random()*4) + 1;
      if (randomNum == 1) {
        rawCalculationNumberLimit1 = getRawCalculationNumberLimit1("Addition");
        rawCalculationNumberLimit2 = getRawCalculationNumberLimit2("Addition");
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Addition");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Addition");

        questionArea.innerHTML = `${calculationNumber1} + ${calculationNumber2}`;
        return calculationNumber1 + calculationNumber2;
      } else if (randomNum == 2) {
        rawCalculationNumberLimit1 = getRawCalculationNumberLimit1("Subtraction");
        rawCalculationNumberLimit2 = getRawCalculationNumberLimit2("Subtraction");
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Subtraction");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Subtraction");

        questionArea.innerHTML = `${calculationNumber1} - ${calculationNumber2}`;
        return calculationNumber1 - calculationNumber2;
      } else if (randomNum == 3) {
        rawCalculationNumberLimit1 = getRawCalculationNumberLimit1("Multiplication");
        rawCalculationNumberLimit2 = getRawCalculationNumberLimit2("Multiplication");
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Multiplication");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Multiplication");

        questionArea.innerHTML = `${calculationNumber1} x ${calculationNumber2}`;
        return calculationNumber1 * calculationNumber2;
      } else if (randomNum == 4) {
        rawCalculationNumberLimit1 = getRawCalculationNumberLimit1("Division");
        rawCalculationNumberLimit2 = getRawCalculationNumberLimit2("Division");
        calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, "Division");
        calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, "Division");
        checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen();

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

          checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen();
          questionArea.innerHTML = `${calculationNumber1} ÷ ${calculationNumber2} = ?`;
          return calculationNumber1 / calculationNumber2;
          break;
          case "AllOfThem":
          return chooseCalculationTypeAndGenerateNumbersAndQuestionAndReturnCorrectAnswer();
          break;
        }
      }
    }

    let rawCalculationNumberLimit1 = getRawCalculationNumberLimit1(calculationType);
    let rawCalculationNumberLimit2 = getRawCalculationNumberLimit2(calculationType);
    let calculationNumber1 = getCalculationNumber(rawCalculationNumberLimit1, calculationType);
    let calculationNumber2 = getCalculationNumber(rawCalculationNumberLimit2, calculationType);

    if (calculationType == "Division") {
      checkCalculationNumbersAreValidAndThatTheAnswerIsNotOneOrTen();
    }

    let correctAnswer;
    let correctAnswerGiven = false;

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

    generateGameOverMessage = () => {
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

    generateScoreRating = () => {
      let scoreRating = gameScore / 2;
      if (scoreRating > 10) {
        return 10;
      }
      return scoreRating;
    }

    generateDifficultyMultiplier = () => {
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

    generateRating = () => {
      let scoreRating = generateScoreRating();
      let difficultyMultiplier = generateDifficultyMultiplier();

      let rating = scoreRating * difficultyMultiplier;
      let ratingToOneDecimalPlace = Math.round(rating * 10) / 10;

      return ratingToOneDecimalPlace;
    }

    wellDonePopup = (wellDonePopupArea) => {
      const wellDonePopupText = document.createElement('button');
      wellDonePopupText.className = 'fadeIn wellDonePopupArea buttonToDivAppearance';
      wellDonePopupText.innerHTML = generateGameOverMessage();
      wellDonePopupArea.appendChild(wellDonePopupText);
    }

    scorePopup = (scorePopupArea) => {
      const scorePopupText = document.createElement('button');
      scorePopupText.className = 'fadeIn scorePopupArea buttonToDivAppearance';
      scorePopupText.innerHTML = `Score: ${gameScore}`;
      scorePopupArea.appendChild(scorePopupText);
    }

    ratingPopup = (ratingPopupArea) => {
      const ratingPopupText = document.createElement('button');
      ratingPopupText.className = 'fadeIn ratingPopupArea buttonToDivAppearance';
      ratingPopupText.innerHTML = "Rating: " + generateRating() + "/10";
      ratingPopupArea.appendChild(ratingPopupText);
    }

    gameOverPopup = () => {
      const gameOverPopup = document.createElement('div');
      gameOverPopup.className = 'fadeIn gameOverPopup';

      const wellDonePopupArea = document.createElement('div');
      wellDonePopupArea.className = 'fadeIn wellDonePopupArea';

      const scorePopupArea = document.createElement('div');
      scorePopupArea.className = 'fadeIn scorePopupArea';

      const ratingPopupArea = document.createElement('div');
      ratingPopupArea.className = 'fadeIn ratingPopupArea';

      gameOverPopup.appendChild(wellDonePopupArea);
      gameOverPopup.appendChild(scorePopupArea);
      gameOverPopup.appendChild(ratingPopupArea);
      gameArea.appendChild(gameOverPopup);

      setTimeout(wellDonePopup.bind(null, wellDonePopupArea), 1000);
      setTimeout(scorePopup.bind(null, scorePopupArea), 2000);
      setTimeout(ratingPopup.bind(null, ratingPopupArea), 3000);
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
      clearInterval(countdownIntervalId);
      disableEventListeners();
      setTimeout(gameOverPopup, 500);

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

  easyDifficulty.addEventListener('click', easyGame);
  mediumDifficulty.addEventListener('click', mediumGame);
  hardDifficulty.addEventListener('click', hardGame);

})
