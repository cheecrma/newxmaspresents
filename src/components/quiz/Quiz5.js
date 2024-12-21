import React from "react";
import "./Quiz.css";

function Quiz5({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">용인 베잔송</h2>
        <p className="quiz-question">
          용인 베잔송의 이름은 무엇에서 유래되었을까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleWrongAnswer} className="quiz-button">
            한국의 전통 마을
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            유명 요리사의 이름
          </button>
          <button onClick={handleCorrectAnswer} className="quiz-button">
            프랑스의 도시
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            고대 신화의 영웅
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz5;
