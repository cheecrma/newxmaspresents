import React from "react";
import "./Quiz.css";

function Quiz7({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">한화리조트 평창</h2>
        <p className="quiz-question">
          한화리조트 평창에서 겨울철 가장 인기 있는 활동은 무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleWrongAnswer} className="quiz-button">
            서핑
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            바다낚시
          </button>
          <button onClick={handleCorrectAnswer} className="quiz-button">
            스키
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            골프
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz7;
