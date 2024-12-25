import React from "react";
import "./Quiz.css";
import Swal from "sweetalert2";

function Quiz1({ onCorrect, onClose }) {
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
    // alert("틀렸습니다. 다시 시도해보세요!"); // 오답일 때만 팝업 표시
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="quiz-title">더플라자 호텔</h2>
        <p className="quiz-question">
          더플라자호텔의 대표적인 레스토랑 이름은?
        </p>
        <div className="quiz-options">
          <button onClick={handleWrongAnswer} className="quiz-button">
            집게리아
          </button>
          <button onClick={handleCorrectAnswer} className="quiz-button">
            세븐스퀘어
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            이스라이브러리
          </button>
          <button onClick={handleWrongAnswer} className="quiz-button">
            블랑제리
          </button>
        </div>
        <button onClick={onClose} className="close-button">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Quiz1;
