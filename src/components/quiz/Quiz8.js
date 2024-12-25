import React from "react";
import "./Quiz.css";
import Swal from "sweetalert2";

function Quiz8({ onCorrect, onClose }) {
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
