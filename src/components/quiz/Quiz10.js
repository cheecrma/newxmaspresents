import React from "react";
import "./Quiz.css";

function Quiz10({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">한화리조트 경주</h2>
        <p className="quiz-question">
          한화리조트 경주에서 가장 가까운 대표적인 유적지는 어디일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleCorrectAnswer} className="quiz-button">
            불국사
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            경복궁
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            첨성대
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            독립문
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz10;
