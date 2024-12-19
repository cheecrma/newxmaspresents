import React from "react";
import "./Quiz.css";

function Quiz11({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    alert("정답입니다!");
    onCorrect();
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!");
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">퀴즈 1</h2>
        <p className="quiz-question">
          다음 중 React에서 상태를 관리하는 Hook은 무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleWrongAnswer} className="quiz-button">
            useEffect
          </button>
          <button onClick={handleCorrectAnswer} className="quiz-button">
            useState
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            useRef
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            useContext
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz11;
