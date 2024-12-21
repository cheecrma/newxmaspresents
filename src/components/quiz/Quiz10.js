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
          한화리조트 경주에서 꼭 먹어봐야 할 경주의 대표 음식은 무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleCorrectAnswer} className="quiz-button">
            경주 황남빵
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            평양냉면
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            제주 흑돼지
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            춘천 닭갈비
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
