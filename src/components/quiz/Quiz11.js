import React from "react";
import "./Quiz.css";
import Swal from "sweetalert2";

function Quiz11({ onCorrect, onClose }) {
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

  const handleWrongAnswer = () => {
    swalButton.fire({
      icon: `error`,
      html: `
      틀렸습니다 😥 
      다시 시도해보세요! 
      `,
      showCancelButton: false,
      confirmButtonText: "확인",
    });
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
