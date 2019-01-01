document.addEventListener('DOMContentLoaded', () => {

  const topScores = new Object();

  topScores.current1 = localStorage.getItem('Score1AdditionEasy');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1AdditionEasy = document.getElementsByClassName('topScoreAdditionEasy')[0];
    topScores.currentScore1AdditionEasy.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1AdditionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2AdditionEasy');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2AdditionEasy = document.getElementsByClassName('secondScoreAdditionEasy')[0];
    topScores.currentScore2AdditionEasy.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2AdditionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3AdditionEasy');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3AdditionEasy = document.getElementsByClassName('thirdScoreAdditionEasy')[0];
    topScores.currentScore3AdditionEasy.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3AdditionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4AdditionEasy');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4AdditionEasy = document.getElementsByClassName('fourthScoreAdditionEasy')[0];
    topScores.currentScore4AdditionEasy.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4AdditionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5AdditionEasy');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5AdditionEasy = document.getElementsByClassName('fifthScoreAdditionEasy')[0];
    topScores.currentScore5AdditionEasy.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5AdditionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1AdditionMedium');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1AdditionMedium = document.getElementsByClassName('topScoreAdditionMedium')[0];
    topScores.currentScore1AdditionMedium.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1AdditionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2AdditionMedium');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2AdditionMedium = document.getElementsByClassName('secondScoreAdditionMedium')[0];
    topScores.currentScore2AdditionMedium.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2AdditionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3AdditionMedium');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3AdditionMedium = document.getElementsByClassName('thirdScoreAdditionMedium')[0];
    topScores.currentScore3AdditionMedium.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3AdditionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4AdditionMedium');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4AdditionMedium = document.getElementsByClassName('fourthScoreAdditionMedium')[0];
    topScores.currentScore4AdditionMedium.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4AdditionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5AdditionMedium');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5AdditionMedium = document.getElementsByClassName('fifthScoreAdditionMedium')[0];
    topScores.currentScore5AdditionMedium.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5AdditionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1AdditionHard');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1AdditionHard = document.getElementsByClassName('topScoreAdditionHard')[0];
    topScores.currentScore1AdditionHard.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1AdditionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2AdditionHard');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2AdditionHard = document.getElementsByClassName('secondScoreAdditionHard')[0];
    topScores.currentScore2AdditionHard.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2AdditionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3AdditionHard');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3AdditionHard = document.getElementsByClassName('thirdScoreAdditionHard')[0];
    topScores.currentScore3AdditionHard.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3AdditionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4AdditionHard');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4AdditionHard = document.getElementsByClassName('fourthScoreAdditionHard')[0];
    topScores.currentScore4AdditionHard.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4AdditionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5AdditionHard');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5AdditionHard = document.getElementsByClassName('fifthScoreAdditionHard')[0];
    topScores.currentScore5AdditionHard.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5AdditionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1SubtractionEasy');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1SubtractionEasy = document.getElementsByClassName('topScoreSubtractionEasy')[0];
    topScores.currentScore1SubtractionEasy.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1SubtractionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2SubtractionEasy');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2SubtractionEasy = document.getElementsByClassName('secondScoreSubtractionEasy')[0];
    topScores.currentScore2SubtractionEasy.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2SubtractionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3SubtractionEasy');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3SubtractionEasy = document.getElementsByClassName('thirdScoreSubtractionEasy')[0];
    topScores.currentScore3SubtractionEasy.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3SubtractionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4SubtractionEasy');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4SubtractionEasy = document.getElementsByClassName('fourthScoreSubtractionEasy')[0];
    topScores.currentScore4SubtractionEasy.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4SubtractionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5SubtractionEasy');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5SubtractionEasy = document.getElementsByClassName('fifthScoreSubtractionEasy')[0];
    topScores.currentScore5SubtractionEasy.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5SubtractionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1SubtractionMedium');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1SubtractionMedium = document.getElementsByClassName('topScoreSubtractionMedium')[0];
    topScores.currentScore1SubtractionMedium.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1SubtractionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2SubtractionMedium');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2SubtractionMedium = document.getElementsByClassName('secondScoreSubtractionMedium')[0];
    topScores.currentScore2SubtractionMedium.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2SubtractionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3SubtractionMedium');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3SubtractionMedium = document.getElementsByClassName('thirdScoreSubtractionMedium')[0];
    topScores.currentScore3SubtractionMedium.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3SubtractionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4SubtractionMedium');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4SubtractionMedium = document.getElementsByClassName('fourthScoreSubtractionMedium')[0];
    topScores.currentScore4SubtractionMedium.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4SubtractionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5SubtractionMedium');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5SubtractionMedium = document.getElementsByClassName('fifthScoreSubtractionMedium')[0];
    topScores.currentScore5SubtractionMedium.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5SubtractionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1SubtractionHard');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1SubtractionHard = document.getElementsByClassName('topScoreSubtractionHard')[0];
    topScores.currentScore1SubtractionHard.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1SubtractionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2SubtractionHard');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2SubtractionHard = document.getElementsByClassName('secondScoreSubtractionHard')[0];
    topScores.currentScore2SubtractionHard.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2SubtractionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3SubtractionHard');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3SubtractionHard = document.getElementsByClassName('thirdScoreSubtractionHard')[0];
    topScores.currentScore3SubtractionHard.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3SubtractionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4SubtractionHard');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4SubtractionHard = document.getElementsByClassName('fourthScoreSubtractionHard')[0];
    topScores.currentScore4SubtractionHard.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4SubtractionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5SubtractionHard');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5SubtractionHard = document.getElementsByClassName('fifthScoreSubtractionHard')[0];
    topScores.currentScore5SubtractionHard.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5SubtractionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1MultiplicationEasy');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1MultiplicationEasy = document.getElementsByClassName('topScoreMultiplicationEasy')[0];
    topScores.currentScore1MultiplicationEasy.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1MultiplicationEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2MultiplicationEasy');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2MultiplicationEasy = document.getElementsByClassName('secondScoreMultiplicationEasy')[0];
    topScores.currentScore2MultiplicationEasy.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2MultiplicationEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3MultiplicationEasy');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3MultiplicationEasy = document.getElementsByClassName('thirdScoreMultiplicationEasy')[0];
    topScores.currentScore3MultiplicationEasy.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3MultiplicationEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4MultiplicationEasy');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4MultiplicationEasy = document.getElementsByClassName('fourthScoreMultiplicationEasy')[0];
    topScores.currentScore4MultiplicationEasy.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4MultiplicationEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5MultiplicationEasy');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5MultiplicationEasy = document.getElementsByClassName('fifthScoreMultiplicationEasy')[0];
    topScores.currentScore5MultiplicationEasy.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5MultiplicationEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1MultiplicationMedium');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1MultiplicationMedium = document.getElementsByClassName('topScoreMultiplicationMedium')[0];
    topScores.currentScore1MultiplicationMedium.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1MultiplicationMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2MultiplicationMedium');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2MultiplicationMedium = document.getElementsByClassName('secondScoreMultiplicationMedium')[0];
    topScores.currentScore2MultiplicationMedium.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2MultiplicationMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3MultiplicationMedium');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3MultiplicationMedium = document.getElementsByClassName('thirdScoreMultiplicationMedium')[0];
    topScores.currentScore3MultiplicationMedium.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3MultiplicationMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4MultiplicationMedium');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4MultiplicationMedium = document.getElementsByClassName('fourthScoreMultiplicationMedium')[0];
    topScores.currentScore4MultiplicationMedium.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4MultiplicationMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5MultiplicationMedium');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5MultiplicationMedium = document.getElementsByClassName('fifthScoreMultiplicationMedium')[0];
    topScores.currentScore5MultiplicationMedium.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5MultiplicationMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1MultiplicationHard');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1MultiplicationHard = document.getElementsByClassName('topScoreMultiplicationHard')[0];
    topScores.currentScore1MultiplicationHard.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1MultiplicationHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2MultiplicationHard');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2MultiplicationHard = document.getElementsByClassName('secondScoreMultiplicationHard')[0];
    topScores.currentScore2MultiplicationHard.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2MultiplicationHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3MultiplicationHard');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3MultiplicationHard = document.getElementsByClassName('thirdScoreMultiplicationHard')[0];
    topScores.currentScore3MultiplicationHard.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3MultiplicationHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4MultiplicationHard');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4MultiplicationHard = document.getElementsByClassName('fourthScoreMultiplicationHard')[0];
    topScores.currentScore4MultiplicationHard.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4MultiplicationHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5MultiplicationHard');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5MultiplicationHard = document.getElementsByClassName('fifthScoreMultiplicationHard')[0];
    topScores.currentScore5MultiplicationHard.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5MultiplicationHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1DivisionEasy');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1DivisionEasy = document.getElementsByClassName('topScoreDivisionEasy')[0];
    topScores.currentScore1DivisionEasy.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1DivisionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2DivisionEasy');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2DivisionEasy = document.getElementsByClassName('secondScoreDivisionEasy')[0];
    topScores.currentScore2DivisionEasy.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2DivisionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3DivisionEasy');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3DivisionEasy = document.getElementsByClassName('thirdScoreDivisionEasy')[0];
    topScores.currentScore3DivisionEasy.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3DivisionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4DivisionEasy');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4DivisionEasy = document.getElementsByClassName('fourthScoreDivisionEasy')[0];
    topScores.currentScore4DivisionEasy.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4DivisionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5DivisionEasy');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5DivisionEasy = document.getElementsByClassName('fifthScoreDivisionEasy')[0];
    topScores.currentScore5DivisionEasy.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5DivisionEasy')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1DivisionMedium');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1DivisionMedium = document.getElementsByClassName('topScoreDivisionMedium')[0];
    topScores.currentScore1DivisionMedium.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1DivisionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2DivisionMedium');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2DivisionMedium = document.getElementsByClassName('secondScoreDivisionMedium')[0];
    topScores.currentScore2DivisionMedium.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2DivisionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3DivisionMedium');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3DivisionMedium = document.getElementsByClassName('thirdScoreDivisionMedium')[0];
    topScores.currentScore3DivisionMedium.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3DivisionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4DivisionMedium');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4DivisionMedium = document.getElementsByClassName('fourthScoreDivisionMedium')[0];
    topScores.currentScore4DivisionMedium.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4DivisionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5DivisionMedium');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5DivisionMedium = document.getElementsByClassName('fifthScoreDivisionMedium')[0];
    topScores.currentScore5DivisionMedium.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5DivisionMedium')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.current1 = localStorage.getItem('Score1DivisionHard');
  if (topScores.current1 != null && topScores.current1 != 'null') {
    topScores.currentScore1DivisionHard = document.getElementsByClassName('topScoreDivisionHard')[0];
    topScores.currentScore1DivisionHard.innerHTML = `${topScores.current1}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix1DivisionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current2 = localStorage.getItem('Score2DivisionHard');
  if (topScores.current2 != null && topScores.current2 != 'null') {
    topScores.currentScore2DivisionHard = document.getElementsByClassName('secondScoreDivisionHard')[0];
    topScores.currentScore2DivisionHard.innerHTML = `${topScores.current2}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix2DivisionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current3 = localStorage.getItem('Score3DivisionHard');
  if (topScores.current3 != null && topScores.current3 != 'null') {
    topScores.currentScore3DivisionHard = document.getElementsByClassName('thirdScoreDivisionHard')[0];
    topScores.currentScore3DivisionHard.innerHTML = `${topScores.current3}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix3DivisionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current4 = localStorage.getItem('Score4DivisionHard');
  if (topScores.current4 != null && topScores.current4 != 'null') {
    topScores.currentScore4DivisionHard = document.getElementsByClassName('fourthScoreDivisionHard')[0];
    topScores.currentScore4DivisionHard.innerHTML = `${topScores.current4}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix4DivisionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }
  topScores.current5 = localStorage.getItem('Score5DivisionHard');
  if (topScores.current5 != null && topScores.current5 != 'null') {
    topScores.currentScore5DivisionHard = document.getElementsByClassName('fifthScoreDivisionHard')[0];
    topScores.currentScore5DivisionHard.innerHTML = `${topScores.current5}`;
  } else {
    topScores.scoreSuffix = document.getElementsByClassName('scoreSuffix5DivisionHard')[0];
    topScores.scoreSuffix.innerHTML = 'None';
  }

  topScores.reset = document.getElementsByClassName('resetScores')[0];

  topScores.reset.addEventListener("click", function(){
    let answer = prompt('Are you sure??? (Type "y" to confirm...)')
    if (answer === 'y') {
      localStorage.clear();
      window.location.href = '../index.html'
    }
  });

})
