// src/components/quiz/Quiz5.js

"use client";

import { useState } from "react";
import "./Quiz.css";

export default function Quiz5({ onCorrect, onClose }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [isSubmitHover, setIsSubmitHover] = useState(false);
  const [isCloseHover, setIsCloseHover] = useState(false);

  // 정답 목록
  const correctAnswers = ["플라자CC", "37.5 시그니처"];
  const options = ["플라자CC", "워터피아","아쿠아플라넷", "37.5 시그니처"];

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

    setFeedback(isCorrect);
    if (isCorrect) {
      setTimeout(() => {
        onCorrect();
      }, 100); // 0.1초 후에 다음 단계로 진행
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
      <h2 className="quiz-title">용인 베잔송</h2>
      <p style={{ fontFamily: "LeeSeoyun", fontSize: "18px", marginBottom: "20px" }}>
        "용인 베잔송"에 있는 시설을 모두 고르세요.
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
      {feedback !== null && (
        <p
          style={{
            fontSize: "16px",
            marginTop: "10px",
            fontFamily: "LeeSeoyun",
            color: feedback ? "green" : "rgb(190, 63, 0)",
          }}
        >
          {feedback ? "정답입니다!" : "틀렸습니다. 다시 시도해 보세요."}
        </p>
      )}
      <div style={{
          display: "flex",
          flexDirection: "row", // 버튼을 가로로 정렬
          gap: "10px", // 버튼 간격
          marginTop: "10px",
        }}>
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
