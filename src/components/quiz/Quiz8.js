import React from "react";
import "./Quiz.css";

function Quiz8({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">여수 벨메르</h2>
        <p className="quiz-question">"벨메르(Belmer)"는 무슨 뜻일까요?</p>
        <div className="quiz-options">
          <button onClick={handleCorrectAnswer} className="quiz-button">
            아름다운 바다
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            달콤한 꿈
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            찬란한 아침
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            평화로운 노래
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz8;
