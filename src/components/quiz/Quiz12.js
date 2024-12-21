import React from "react";
import "./Quiz.css";

function Quiz12({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">한화리조트 해운대</h2>
        <p className="quiz-question">
          한화리조트 해운대에서 가장 유명한 근처 명소는 무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleCorrectAnswer} className="quiz-button">
            해운대 해변
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            남산타워
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            설악산
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            제주 오름
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz12;
