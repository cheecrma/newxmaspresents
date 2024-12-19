import React from "react";
import { useNavigate } from "react-router-dom";

function Instructions() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/character-select");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>신비한 옷장에 오신 것을 환영합니다</h1>
        <p style={styles.description}>
          이 모험은 올 한 해 수고한 여러분을 위해 준비한 작은 놀이터입니다.
          <br />
          가볍게 즐기며 소소한 재미를 느껴보세요!
        </p>
        <p style={styles.note}>
          (제작자들이 업무 시간 외에 취미로 만든 프로젝트로 <br />
          재밌게 귀엽게 봐주시길 바랍니다)
        </p>
        <button style={styles.button} onClick={handleNext}>
          캐릭터 생성하기
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f0e1",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    color: "#5a3e36",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "'Dancing Script', cursive",
    marginBottom: "20px",
    color: "#5a3e36",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  note: {
    fontSize: "1rem",
    color: "#7d5a50",
    fontStyle: "italic",
    marginBottom: "30px",
    lineHeight: "1.4",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1.1rem",
    backgroundColor: "#5a3e36",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#7d5a50",
  },
};

export default Instructions;
