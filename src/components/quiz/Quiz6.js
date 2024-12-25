import React from "react";
import "./Quiz.css";
import Swal from "sweetalert2";

function Quiz6({ onCorrect, onClose }) {
  const handleCorrectAnswer = () => {
    onCorrect(); // 정답 처리 후 바로 화면 닫기
  };

  const swalButton = Swal.mixin({
    customClass: {
      popup: "popup", // 전체
      confirmButton: "confirmButton", // 확인
      title: "title", // 타이틀
      htmlContainer: "htmlContainer", // 내용
      icon: "swalicon"
    },
    buttonsStyling: false,
  });

  const handleWrongAnswer = () => {
    swalButton.fire({
      icon: `error`,
      html: `
      틀렸습니다 😥 
      다시 시도해보세요! 
      `,
      showCancelButton: false,
      confirmButtonText: "확인",
  })
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">브리드호텔 양양</h2>
        <p className="quiz-question">
          브리드호텔 양양에서 가장 유명한 액티비티는 무엇일까요?
        </p>
        <div className="quiz-options">
          <button onClick={handleWrongAnswer} className="quiz-button">
            등산
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            골프
          </button>
          <button onClick={handleCorrectAnswer} className="quiz-button">
            서핑
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

export default Quiz6;
