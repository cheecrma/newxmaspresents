import React from "react";
import Wardrobe from "../components/Wardrobe";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>신비한 옷장에 오신 것을 환영합니다</h1>
      <p style={styles.subtitle}>옷장을 클릭해서 모험을 시작하세요</p>
      <div style={styles.wardrobeContainer}>
        <Wardrobe />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "100px",
    backgroundColor: "#f5f0e1",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    color: "#5a3e36",
    marginBottom: "20px",
    fontFamily: "'Dancing Script', cursive",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7d5a50",
    marginBottom: "40px",
  },
  wardrobeContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Home;
