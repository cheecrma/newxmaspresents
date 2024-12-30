import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snowfall from "../components/Snowfall";

function Instructions() {
  const navigate = useNavigate();
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleNext = () => {
    navigate("/character-select");
  };

  return (
    <div style={styles.container}>
      <Snowfall />
      <div style={styles.card}>
        <h1 style={styles.title}>
          신비한 '호앤리 옷장'에 <br />
          오신 것을 환영합니다!
        </h1>
        <p style={styles.description}>
          2024 한 해 수고하신 <br /> H&R 가족들을 위해 <br />
          준비한 작은 즐거움입니다.
          <br />
          가볍게 즐기며 소소한 재미를 느껴보세요!
        </p>
        <p style={styles.note}>
          * 제작자들이{" "}
          <span style={styles.note_span}>업무 시간 외에 취미로</span> <br />
          만들었습니다! 귀엽게 봐주세요..🖤 * 
        </p>
        <button
          style={{
            ...styles.button,
            ...(isButtonActive ? styles.buttonActive : {}),
          }}
          onMouseDown={() => setIsButtonActive(true)} // 눌림
          onMouseUp={() => setIsButtonActive(false)} // 원래 상태
          onMouseLeave={() => setIsButtonActive(false)} // 복귀
          onClick={handleNext}
        >
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
    padding: "40px 30px",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
    backgroundImage: "url('/images/instruction_img.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#5a3e36",
    wordWrap: "break-word",
    fontFamily: "LeeSeoyun",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    lineHeight: "1.6",
    wordWrap: "break-word",
    paddingLeft: "50px",
    paddingRight: "40px",
    fontFamily: "LeeSeoyun",
  },
  note: {
    fontSize: "0.8rem",
    color: "#7d5a50",
    // fontStyle: "italic",
    marginBottom: "30px",
    lineHeight: "1.4",
    fontFamily: "LeeSeoyun",
  },
  note_span: {
    textDecoration: "underline",
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1.1rem",
    backgroundColor: "#5a3e36",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    fontFamily: "LeeSeoyun",
  },
  buttonActive: {
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.2)",
    transform: "translateY(2px)",
    Animation: "shake 0.5s ease-in-out",
  },
};

export default Instructions;
