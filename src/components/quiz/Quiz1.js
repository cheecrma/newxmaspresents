import React from "react";
import "./Quiz.css";
import Swal from "sweetalert2";

function Quiz1({ onCorrect, onClose }) {
  const swalButton = Swal.mixin({
    customClass: {
      popup: "popup", // 전체
      confirmButton: "confirmButton", // 확인
      title: "title", // 타이틀
      htmlContainer: "htmlContainer", // 내용
      icon: "swalicon",
    },
    buttonsStyling: false,
  });

  const handleCorrectAnswer = () => {
    swalButton
      .fire({
        icon: "success",
        html: `
        정답입니다! 🎉 
        훌륭해요! 다음으로 넘어가세요. 
        `,
        confirmButtonText: "확인",
      })
      .then(() => {
        onCorrect(); // 정답 처리 후 실행
      });
  };

  const handleWrongAnswer = () => {
    swalButton.fire({
      icon: "error",
      html: `
      틀렸습니다 😥 
      다시 시도해보세요! 
      `,
      confirmButtonText: "확인",
    });
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
