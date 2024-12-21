// src/components/quiz/Quiz5.js

"use client";

import { useState } from "react";

export default function Quiz5({ onCorrect, onClose }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);

  // 정답 목록
  const correctAnswers = ["골프", "휴양지"];
  const options = ["골프", "바다", "휴양지"];

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
        height: "50%",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f5f0e1",
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        "용인 베잔송"과 공통점이 있는 단어들을 모두 고르세요.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              padding: "10px",
              fontSize: "16px",
              backgroundColor: selectedAnswers.includes(option)
                ? "#5a3e36"
                : "white",
              color: selectedAnswers.includes(option) ? "white" : "#5a3e36",
              border: "2px solid #5a3e36",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
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
          marginBottom: "10px",
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
          {feedback
            ? "정답입니다! 다음 단계로 이동합니다."
            : "틀렸습니다. 다시 시도해 보세요."}
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
