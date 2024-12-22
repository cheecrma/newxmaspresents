import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorAlert() {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/Home");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.error}>앗! 여기는 아무것도 없어요...</h1>
      <h1 style={{ ...styles.error, ...styles.highlight }}>
        404 Page Not Found
      </h1>
      <button style={styles.return_button} onClick={returnHome}>
        처음으로 돌아가기
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f5f0e1",
    minHeight: "100vh",
  },
  error: {
    fontSize: "2.2rem",
    color: "#5a3e36",
    marginBottom: "20px",
    fontFamily: "LeeSeoyun",
    position: "relative",
    zIndex: 1, 
  },
  highlight: {
    background: "linear-gradient(to top, #47b8be 30%, transparent 10%)",
    display: "inline-block", 
    padding: "0 5px", 
  },
  return_button: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    backgroundColor: "#5a3e36",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "200px",
    margin: "20px auto",
    fontFamily: "LeeSeoyun",
  },
};

export default ErrorAlert;
