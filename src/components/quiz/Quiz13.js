import React from "react";
import "./Quiz.css";

function Quiz13({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const handleWrongAnswer = () => {
    alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">마티에 오시리아</h2>
        <p className="quiz-question">
          마티에 오시리아가 위치한 오시리아 관광단지의 대표적인 명소는
          무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleCorrectAnswer} className="quiz-button">
            롯데월드 어드벤처 부산
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            경복궁
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            제주 성산일출봉
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            설악산 케이블카
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz13;
