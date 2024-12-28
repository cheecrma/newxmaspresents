"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import "./Quiz.css";

export default function Quiz2({ onCorrect, onClose }) {
  const [answer, setAnswer] = useState("");
  const correctAnswer = "이동";

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

  const handleSubmit = () => {
    const isCorrect = answer.trim() === correctAnswer;
    showPopup(isCorrect);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 동작 방지
      handleSubmit(); // 제출 로직 호출
    }
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
        animation: "fadeIn 0.3s ease-in-out", // 부드러운 등장 애니메이션
      }}
    >
      <h2 className="quiz-title">산정호수 안시</h2>
      <p
        style={{
          fontFamily: "LeeSeoyun",
          fontSize: "18px",
          marginBottom: "20px",
        }}
      >
        "산정호수 안시"에 놀러와서 다같이 맛있게 먹을 수 있는 음식은 "00
        숯불갈비"이다.
      </p>
      <input
        type="text"
        value={answer}
        onKeyDown={handleKeyPress}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="정답을 입력하세요"
        style={{
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          border: "2px solid #5a3e36",
          borderRadius: "5px",
          width: "80%",
          fontFamily: "LeeSeoyun",
        }}
      />
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
            backgroundColor: "#5a3e36",
            color: "white",
          }}
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
            backgroundColor: "#e5e5e5",
            color: "#4a4a4a",
          }}
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
