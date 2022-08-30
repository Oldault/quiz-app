import React, { useState } from "react";
import JSONDATA from "./Questions.json";
import ProgressBar from "./Components/progress-bar";

export default function App() {
  const questions = JSONDATA;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreList, setScoreList] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetButton = (score) => {
    setScoreList(scoreList + score);
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="main-app">
          <div className="score-section">
            <p>
              You scored {score} out of {questions.length} and your acummulated
              score is {scoreList + score}.
            </p>
            <button onClick={() => handleResetButton(score)}>Retry!</button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-count">
            Question {currentQuestion + 1} / {questions.length}
          </div>
          <div>
            <ProgressBar length={(currentQuestion + 1)/questions.length*100} bgcolor={"#FBA92E"} completed={currentQuestion + 1} />
          </div>
          <div className="main-app">
            <div className="question-section">
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
