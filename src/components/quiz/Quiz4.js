// src/components/quiz/Quiz4.js

"use client";

import { useState } from "react";
import "./Quiz.css";

export default function Quiz4({ onCorrect, onClose }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isSubmitHover, setIsSubmitHover] = useState(false);
  const [isCloseHover, setIsCloseHover] = useState(false);

  // 정답 설정
  const correctAnswer = "조개구이";

  const handleSubmit = () => {
    if (answer.trim() === correctAnswer) {
      setFeedback(true);
      setTimeout(() => {
        onCorrect();
      }, 100); // 0.1초 후에 다음 단계로 진행
    } else {
      setFeedback(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
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
      <h2 className="quiz-title">대천 파로스</h2>
      <p style={{ fontFamily: "LeeSeoyun",fontSize: "18px", marginBottom: "10px" }}>
        "대천 파로스 근처에서 꼭 먹어야 하는 ____."
      </p>
      <p
        style={{
          fontSize: "14px",
          marginBottom: "20px",
          color: "#888",
          fontStyle: "italic",
          fontFamily: "LeeSeoyun",
        }}
      >
        힌트: 불 위에 구워 먹는 신선한 조개 요리
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
