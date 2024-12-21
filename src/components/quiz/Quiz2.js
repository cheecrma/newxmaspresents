import React from "react";
import "./Quiz.css";

function Quiz2({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">산정호수 안시</h2>
        <p className="quiz-question">
          산정호수 안시에서 가장 인기 있는 활동은 무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleWrongAnswer} className="quiz-button">
            스쿠버다이빙
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            사막 탐험
          </button>
          <button onClick={handleCorrectAnswer} className="quiz-button">
            호수 산책
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            스노클링
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz2;
