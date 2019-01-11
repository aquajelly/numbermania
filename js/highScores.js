document.addEventListener('DOMContentLoaded', () => {

  const topScores = new Object();

  scoreDesign = (current, score, currentScore, className, suffix) => {
    current = localStorage.getItem(score);
    if (current != null && current != 'null') {
      currentScore = document.getElementsByClassName(className)[0];
      currentScore.innerHTML = `${current}`;
    } else {
      topScores.scoreSuffix = document.getElementsByClassName(suffix)[0];
      topScores.scoreSuffix.innerHTML = 'None';
    }
  }

  scoreDesign(topScores.current1, 'Score1AdditionEasy', topScores.currentScore1AdditionEasy, 'topScoreAdditionEasy', 'scoreSuffix1AdditionEasy');
  scoreDesign(topScores.current2, 'Score2AdditionEasy', topScores.currentScore2AdditionEasy, 'secondScoreAdditionEasy', 'scoreSuffix2AdditionEasy');
  scoreDesign(topScores.current3, 'Score3AdditionEasy', topScores.currentScore3AdditionEasy, 'thirdScoreAdditionEasy', 'scoreSuffix3AdditionEasy');
  scoreDesign(topScores.current4, 'Score4AdditionEasy', topScores.currentScore4AdditionEasy, 'fourthScoreAdditionEasy', 'scoreSuffix4AdditionEasy');
  scoreDesign(topScores.current5, 'Score5AdditionEasy', topScores.currentScore5AdditionEasy, 'fifthScoreAdditionEasy', 'scoreSuffix5AdditionEasy');

  scoreDesign(topScores.current1, 'Score1AdditionMedium', topScores.currentScore1AdditionMedium, 'topScoreAdditionMedium', 'scoreSuffix1AdditionMedium');
  scoreDesign(topScores.current2, 'Score2AdditionMedium', topScores.currentScore2AdditionMedium, 'secondScoreAdditionMedium', 'scoreSuffix2AdditionMedium');
  scoreDesign(topScores.current3, 'Score3AdditionMedium', topScores.currentScore3AdditionMedium, 'thirdScoreAdditionMedium', 'scoreSuffix3AdditionMedium');
  scoreDesign(topScores.current4, 'Score4AdditionMedium', topScores.currentScore4AdditionMedium, 'fourthScoreAdditionMedium', 'scoreSuffix4AdditionMedium');
  scoreDesign(topScores.current5, 'Score5AdditionMedium', topScores.currentScore5AdditionMedium, 'fifthScoreAdditionMedium', 'scoreSuffix5AdditionMedium');

  scoreDesign(topScores.current1, 'Score1AdditionHard', topScores.currentScore1AdditionHard, 'topScoreAdditionHard', 'scoreSuffix1AdditionHard');
  scoreDesign(topScores.current2, 'Score2AdditionHard', topScores.currentScore2AdditionHard, 'secondScoreAdditionHard', 'scoreSuffix2AdditionHard');
  scoreDesign(topScores.current3, 'Score3AdditionHard', topScores.currentScore3AdditionHard, 'thirdScoreAdditionHard', 'scoreSuffix3AdditionHard');
  scoreDesign(topScores.current4, 'Score4AdditionHard', topScores.currentScore4AdditionHard, 'fourthScoreAdditionHard', 'scoreSuffix4AdditionHard');
  scoreDesign(topScores.current5, 'Score5AdditionHard', topScores.currentScore5AdditionHard, 'fifthScoreAdditionHard', 'scoreSuffix5AdditionHard');


  scoreDesign(topScores.current1, 'Score1SubtractionEasy', topScores.currentScore1SubtractionEasy, 'topScoreSubtractionEasy', 'scoreSuffix1SubtractionEasy');
  scoreDesign(topScores.current2, 'Score2SubtractionEasy', topScores.currentScore2SubtractionEasy, 'secondScoreSubtractionEasy', 'scoreSuffix2SubtractionEasy');
  scoreDesign(topScores.current3, 'Score3SubtractionEasy', topScores.currentScore3SubtractionEasy, 'thirdScoreSubtractionEasy', 'scoreSuffix3SubtractionEasy');
  scoreDesign(topScores.current4, 'Score4SubtractionEasy', topScores.currentScore4SubtractionEasy, 'fourthScoreSubtractionEasy', 'scoreSuffix4SubtractionEasy');
  scoreDesign(topScores.current5, 'Score5SubtractionEasy', topScores.currentScore5SubtractionEasy, 'fifthScoreSubtractionEasy', 'scoreSuffix5SubtractionEasy');

  scoreDesign(topScores.current1, 'Score1SubtractionMedium', topScores.currentScore1SubtractionMedium, 'topScoreSubtractionMedium', 'scoreSuffix1SubtractionMedium');
  scoreDesign(topScores.current2, 'Score2SubtractionMedium', topScores.currentScore2SubtractionMedium, 'secondScoreSubtractionMedium', 'scoreSuffix2SubtractionMedium');
  scoreDesign(topScores.current3, 'Score3SubtractionMedium', topScores.currentScore3SubtractionMedium, 'thirdScoreSubtractionMedium', 'scoreSuffix3SubtractionMedium');
  scoreDesign(topScores.current4, 'Score4SubtractionMedium', topScores.currentScore4SubtractionMedium, 'fourthScoreSubtractionMedium', 'scoreSuffix4SubtractionMedium');
  scoreDesign(topScores.current5, 'Score5SubtractionMedium', topScores.currentScore5SubtractionMedium, 'fifthScoreSubtractionMedium', 'scoreSuffix5SubtractionMedium');

  scoreDesign(topScores.current1, 'Score1SubtractionHard', topScores.currentScore1SubtractionHard, 'topScoreSubtractionHard', 'scoreSuffix1SubtractionHard');
  scoreDesign(topScores.current2, 'Score2SubtractionHard', topScores.currentScore2SubtractionHard, 'secondScoreSubtractionHard', 'scoreSuffix2SubtractionHard');
  scoreDesign(topScores.current3, 'Score3SubtractionHard', topScores.currentScore3SubtractionHard, 'thirdScoreSubtractionHard', 'scoreSuffix3SubtractionHard');
  scoreDesign(topScores.current4, 'Score4SubtractionHard', topScores.currentScore4SubtractionHard, 'fourthScoreSubtractionHard', 'scoreSuffix4SubtractionHard');
  scoreDesign(topScores.current5, 'Score5SubtractionHard', topScores.currentScore5SubtractionHard, 'fifthScoreSubtractionHard', 'scoreSuffix5SubtractionHard');


  scoreDesign(topScores.current1, 'Score1MultiplicationEasy', topScores.currentScore1MultiplicationEasy, 'topScoreMultiplicationEasy', 'scoreSuffix1MultiplicationEasy');
  scoreDesign(topScores.current2, 'Score2MultiplicationEasy', topScores.currentScore2MultiplicationEasy, 'secondScoreMultiplicationEasy', 'scoreSuffix2MultiplicationEasy');
  scoreDesign(topScores.current3, 'Score3MultiplicationEasy', topScores.currentScore3MultiplicationEasy, 'thirdScoreMultiplicationEasy', 'scoreSuffix3MultiplicationEasy');
  scoreDesign(topScores.current4, 'Score4MultiplicationEasy', topScores.currentScore4MultiplicationEasy, 'fourthScoreMultiplicationEasy', 'scoreSuffix4MultiplicationEasy');
  scoreDesign(topScores.current5, 'Score5MultiplicationEasy', topScores.currentScore5MultiplicationEasy, 'fifthScoreMultiplicationEasy', 'scoreSuffix5MultiplicationEasy');

  scoreDesign(topScores.current1, 'Score1MultiplicationMedium', topScores.currentScore1MultiplicationMedium, 'topScoreMultiplicationMedium', 'scoreSuffix1MultiplicationMedium');
  scoreDesign(topScores.current2, 'Score2MultiplicationMedium', topScores.currentScore2MultiplicationMedium, 'secondScoreMultiplicationMedium', 'scoreSuffix2MultiplicationMedium');
  scoreDesign(topScores.current3, 'Score3MultiplicationMedium', topScores.currentScore3MultiplicationMedium, 'thirdScoreMultiplicationMedium', 'scoreSuffix3MultiplicationMedium');
  scoreDesign(topScores.current4, 'Score4MultiplicationMedium', topScores.currentScore4MultiplicationMedium, 'fourthScoreMultiplicationMedium', 'scoreSuffix4MultiplicationMedium');
  scoreDesign(topScores.current5, 'Score5MultiplicationMedium', topScores.currentScore5MultiplicationMedium, 'fifthScoreMultiplicationMedium', 'scoreSuffix5MultiplicationMedium');

  scoreDesign(topScores.current1, 'Score1MultiplicationHard', topScores.currentScore1MultiplicationHard, 'topScoreMultiplicationHard', 'scoreSuffix1MultiplicationHard');
  scoreDesign(topScores.current2, 'Score2MultiplicationHard', topScores.currentScore2MultiplicationHard, 'secondScoreMultiplicationHard', 'scoreSuffix2MultiplicationHard');
  scoreDesign(topScores.current3, 'Score3MultiplicationHard', topScores.currentScore3MultiplicationHard, 'thirdScoreMultiplicationHard', 'scoreSuffix3MultiplicationHard');
  scoreDesign(topScores.current4, 'Score4MultiplicationHard', topScores.currentScore4MultiplicationHard, 'fourthScoreMultiplicationHard', 'scoreSuffix4MultiplicationHard');
  scoreDesign(topScores.current5, 'Score5MultiplicationHard', topScores.currentScore5MultiplicationHard, 'fifthScoreMultiplicationHard', 'scoreSuffix5MultiplicationHard');


  scoreDesign(topScores.current1, 'Score1DivisionEasy', topScores.currentScore1DivisionEasy, 'topScoreDivisionEasy', 'scoreSuffix1DivisionEasy');
  scoreDesign(topScores.current2, 'Score2DivisionEasy', topScores.currentScore2DivisionEasy, 'secondScoreDivisionEasy', 'scoreSuffix2DivisionEasy');
  scoreDesign(topScores.current3, 'Score3DivisionEasy', topScores.currentScore3DivisionEasy, 'thirdScoreDivisionEasy', 'scoreSuffix3DivisionEasy');
  scoreDesign(topScores.current4, 'Score4DivisionEasy', topScores.currentScore4DivisionEasy, 'fourthScoreDivisionEasy', 'scoreSuffix4DivisionEasy');
  scoreDesign(topScores.current5, 'Score5DivisionEasy', topScores.currentScore5DivisionEasy, 'fifthScoreDivisionEasy', 'scoreSuffix5DivisionEasy');

  scoreDesign(topScores.current1, 'Score1DivisionMedium', topScores.currentScore1DivisionMedium, 'topScoreDivisionMedium', 'scoreSuffix1DivisionMedium');
  scoreDesign(topScores.current2, 'Score2DivisionMedium', topScores.currentScore2DivisionMedium, 'secondScoreDivisionMedium', 'scoreSuffix2DivisionMedium');
  scoreDesign(topScores.current3, 'Score3DivisionMedium', topScores.currentScore3DivisionMedium, 'thirdScoreDivisionMedium', 'scoreSuffix3DivisionMedium');
  scoreDesign(topScores.current4, 'Score4DivisionMedium', topScores.currentScore4DivisionMedium, 'fourthScoreDivisionMedium', 'scoreSuffix4DivisionMedium');
  scoreDesign(topScores.current5, 'Score5DivisionMedium', topScores.currentScore5DivisionMedium, 'fifthScoreDivisionMedium', 'scoreSuffix5DivisionMedium');

  scoreDesign(topScores.current1, 'Score1DivisionHard', topScores.currentScore1DivisionHard, 'topScoreDivisionHard', 'scoreSuffix1DivisionHard');
  scoreDesign(topScores.current2, 'Score2DivisionHard', topScores.currentScore2DivisionHard, 'secondScoreDivisionHard', 'scoreSuffix2DivisionHard');
  scoreDesign(topScores.current3, 'Score3DivisionHard', topScores.currentScore3DivisionHard, 'thirdScoreDivisionHard', 'scoreSuffix3DivisionHard');
  scoreDesign(topScores.current4, 'Score4DivisionHard', topScores.currentScore4DivisionHard, 'fourthScoreDivisionHard', 'scoreSuffix4DivisionHard');
  scoreDesign(topScores.current5, 'Score5DivisionHard', topScores.currentScore5DivisionHard, 'fifthScoreDivisionHard', 'scoreSuffix5DivisionHard');


  scoreDesign(topScores.current1, 'Score1AllOfThemEasy', topScores.currentScore1AllOfThemEasy, 'topScoreAllOfThemEasy', 'scoreSuffix1AllOfThemEasy');
  scoreDesign(topScores.current2, 'Score2AllOfThemEasy', topScores.currentScore2AllOfThemEasy, 'secondScoreAllOfThemEasy', 'scoreSuffix2AllOfThemEasy');
  scoreDesign(topScores.current3, 'Score3AllOfThemEasy', topScores.currentScore3AllOfThemEasy, 'thirdScoreAllOfThemEasy', 'scoreSuffix3AllOfThemEasy');
  scoreDesign(topScores.current4, 'Score4AllOfThemEasy', topScores.currentScore4AllOfThemEasy, 'fourthScoreAllOfThemEasy', 'scoreSuffix4AllOfThemEasy');
  scoreDesign(topScores.current5, 'Score5AllOfThemEasy', topScores.currentScore5AllOfThemEasy, 'fifthScoreAllOfThemEasy', 'scoreSuffix5AllOfThemEasy');

  scoreDesign(topScores.current1, 'Score1AllOfThemMedium', topScores.currentScore1AllOfThemMedium, 'topScoreAllOfThemMedium', 'scoreSuffix1AllOfThemMedium');
  scoreDesign(topScores.current2, 'Score2AllOfThemMedium', topScores.currentScore2AllOfThemMedium, 'secondScoreAllOfThemMedium', 'scoreSuffix2AllOfThemMedium');
  scoreDesign(topScores.current3, 'Score3AllOfThemMedium', topScores.currentScore3AllOfThemMedium, 'thirdScoreAllOfThemMedium', 'scoreSuffix3AllOfThemMedium');
  scoreDesign(topScores.current4, 'Score4AllOfThemMedium', topScores.currentScore4AllOfThemMedium, 'fourthScoreAllOfThemMedium', 'scoreSuffix4AllOfThemMedium');
  scoreDesign(topScores.current5, 'Score5AllOfThemMedium', topScores.currentScore5AllOfThemMedium, 'fifthScoreAllOfThemMedium', 'scoreSuffix5AllOfThemMedium');

  scoreDesign(topScores.current1, 'Score1AllOfThemHard', topScores.currentScore1AllOfThemHard, 'topScoreAllOfThemHard', 'scoreSuffix1AllOfThemHard');
  scoreDesign(topScores.current2, 'Score2AllOfThemHard', topScores.currentScore2AllOfThemHard, 'secondScoreAllOfThemHard', 'scoreSuffix2AllOfThemHard');
  scoreDesign(topScores.current3, 'Score3AllOfThemHard', topScores.currentScore3AllOfThemHard, 'thirdScoreAllOfThemHard', 'scoreSuffix3AllOfThemHard');
  scoreDesign(topScores.current4, 'Score4AllOfThemHard', topScores.currentScore4AllOfThemHard, 'fourthScoreAllOfThemHard', 'scoreSuffix4AllOfThemHard');
  scoreDesign(topScores.current5, 'Score5AllOfThemHard', topScores.currentScore5AllOfThemHard, 'fifthScoreAllOfThemHard', 'scoreSuffix5AllOfThemHard');

  topScores.reset = document.getElementsByClassName('resetScores')[0];
  topScores.reset.addEventListener("click", function(){
    let answer = prompt('Are you sure??? (Type "y" to confirm...)')
    if (answer === 'y') {
      localStorage.clear();
      window.location.href = '../index.html'
    }
  });

})
