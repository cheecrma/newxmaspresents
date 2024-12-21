// src/components/quiz/Quiz12.js

"use client";

import { useState } from "react";

export default function Quiz12({ onCorrect, onClose }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  // 정답 설정
  const correctAnswer = "해운대";

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
        height: "50%",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f5f0e1",
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        "한화리조트 해운대는 부산의 대표 해변인 ___와 가까운 거리에 있다."
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
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: "#5a3e36",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        제출
      </button>
      {feedback !== null && (
        <p
          style={{
            fontSize: "16px",
            marginTop: "10px",
            color: feedback ? "green" : "red",
          }}
        >
          {feedback ? "정답입니다!" : "틀렸습니다. 다시 시도해 보세요."}
        </p>
      )}
      <button
        onClick={onClose}
        style={{
          padding: "10px 20px",
          backgroundColor: "#5a3e36",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        닫기
      </button>
    </div>
  );
}
