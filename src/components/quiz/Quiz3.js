import React from "react";
import "./Quiz.css";
import Swal from "sweetalert2";

function Quiz3({ onCorrect, onClose }) {
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
