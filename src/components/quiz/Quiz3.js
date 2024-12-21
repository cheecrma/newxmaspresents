import React from "react";
import "./Quiz.css";

function Quiz3({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">설악 쏘라노</h2>
        <p className="quiz-question">
          설악 쏘라노 리조트에서 여름철 가족들에게 인기 있는 시설은 무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleWrongAnswer} className="quiz-button">
            스키 슬로프
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            PC 방
          </button>
          <button onClick={handleCorrectAnswer} className="quiz-button">
            워터파크
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            아쿠아리움
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz3;
