"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import "./Quiz.css";

export default function Quiz13({ onCorrect, onClose }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitHover, setIsSubmitHover] = useState(false);
  const [isCloseHover, setIsCloseHover] = useState(false);

  const correctAnswers = ["테마파크", "루지"];
  const options = ["테마파크", "루지", "야구장", "광안리"];

  const swalButton = Swal.mixin({
    customClass: {
      popup: "popup", // 전체
      confirmButton: "confirmButton", // 확인 버튼
      title: "title", // 타이틀
      htmlContainer: "htmlContainer", // 내용
      icon: "swalicon", // 아이콘 스타일
    },
    buttonsStyling: false, // 버튼 스타일링 사용 안 함
  });

  const showPopup = (isCorrect) => {
    if (isCorrect) {
      swalButton
        .fire({
          icon: "success",
          html: `
          정답입니다! 🎉 
          훌륭해요! 다음으로 넘어가세요. 
          `,
          confirmButtonText: "확인",
        })
        .then((result) => {
          if (result.isConfirmed) {
            // 확인 버튼을 누른 경우에만 실행
            onCorrect();
          }
        });
    } else {
      swalButton.fire({
        icon: "error",
        html: `
        틀렸습니다 😥 
        다시 시도해보세요! 
        `,
        confirmButtonText: "확인",
      });
    }
  };

  const handleOptionClick = (option) => {
    // 선택한 옵션 추가/제거
    setSelectedAnswers(
      (prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option) // 이미 선택된 경우 제거
          : [...prev, option] // 선택되지 않은 경우 추가
    );
  };

  const handleSubmit = () => {
    // 선택한 정답과 실제 정답 비교
    const isCorrect =
      correctAnswers.length === selectedAnswers.length &&
      correctAnswers.every((answer) => selectedAnswers.includes(answer));

    showPopup(isCorrect);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#ffffff", // 배경색
        padding: "40px 30px", // 내부 여백
        borderRadius: "20px", // 둥근 모서리
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // 그림자 효과
        maxWidth: "420px", // 최대 너비
        width: "90%", // 상대적인 너비
        position: "relative", // 위치
        animation: "fadeIn 0.3s ease-in-out",
      }}
    >
      <h2 className="quiz-title">마티에 오시리아</h2>
      <p
        style={{
          fontFamily: "LeeSeoyun",
          fontSize: "18px",
          marginBottom: "20px",
        }}
      >
        "마티에 오시리아" 근처 3km 이내에서 <br /> 즐길 수 있는 것을 모두
        고르세요.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
          fontFamily: "LeeSeoyun",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              padding: "10px",
              fontSize: "1rem",
              backgroundColor: selectedAnswers.includes(option)
                ? "#5a3e36"
                : "white",
              color: selectedAnswers.includes(option) ? "white" : "#5a3e36",
              border: "2px solid #5a3e36",
              borderRadius: "5px",
              cursor: "pointer",
              fontFamily: "LeeSeoyun",
              width: "60%",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // 버튼을 가로로 정렬
          gap: "10px", // 버튼 간격
          marginTop: "10px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontFamily: "LeeSeoyun",
            transition: "background-color 0.3s ease",
            backgroundColor: isSubmitHover ? "#7d5a50" : "#5a3e36",
            color: "white",
          }}
          onMouseEnter={() => setIsSubmitHover(true)}
          onMouseLeave={() => setIsSubmitHover(false)}
          onClick={handleSubmit}
        >
          제출
        </button>
        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontFamily: "LeeSeoyun",
            transition: "background-color 0.3s ease",
            backgroundColor: isCloseHover ? "#cccccc" : "#e5e5e5",
            color: "#4a4a4a",
          }}
          onMouseEnter={() => setIsCloseHover(true)}
          onMouseLeave={() => setIsCloseHover(false)}
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
