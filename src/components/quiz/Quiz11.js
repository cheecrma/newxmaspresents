import React from "react";
import "./Quiz.css";

function Quiz11({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">한화리조트 제주</h2>
        <p className="quiz-question">
          한화리조트 제주와 가까운 자연 명소는 무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleWrongAnswer} className="quiz-button">
            경포대
          </button>
          <button onClick={handleCorrectAnswer} className="quiz-button">
            한라산
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            설악산
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            남산
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
