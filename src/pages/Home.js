import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "../firebase";
import Wardrobe from "../components/Wardrobe";
import "./Home.css";
import Snowfall from "../components/Snowfall";

function Home() {
  const [participantCount, setParticipantCount] = useState(0);

  // Firebase에서 참여자 수 가져오기
  useEffect(() => {
    const countRef = ref(database, "participantCount");
    onValue(countRef, (snapshot) => {
      const count = snapshot.val() || 0; // 값이 없으면 0으로 설정
      setParticipantCount(count);
    });
  }, []);
  return (
    <div style={styles.container}>
      <Snowfall />
      <h1 style={styles.title}>
        <span className="title_highlight" style={styles.title_highlight}>
          신비한 호앤리 옷장{" "}
        </span>
        에 <br></br> 오신 것을 환영합니다
      </h1>
      <p style={styles.subtitle}>옷장을 클릭해서 모험을 시작하세요 🧙‍♀️ </p>
      <div style={styles.wardrobeContainer}>
        <Wardrobe />
      </div>
      <br></br>
      <br></br>
      <p>현재까지 {participantCount}명이 모험을 시작했습니다!</p>
      <p style={styles.subtitle_sub}>
        {" "}
        본 페이지는 악성코드가 포함되지 않았으며, <br></br>개인정보 수집을 하지
        않습니다.{" "}
      </p>
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
    fontFamily: "Cafe24Supermagic-Bold-v1.0",
  },
  title_highlight: {
    fontSize: "2.5rem",
    color: "#5a3e36",
    fontFamily: "Cafe24Supermagic-Bold-v1.0",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7d5a50",
    marginBottom: "40px",
    fontFamily: "LeeSeoyun",
  },
  subtitle_sub: {
    fontSize: "0.9rem",
    color: "#7d5a50",
    marginBottom: "40px",
    fontFamily: "LeeSeoyun",
  },
  wardrobeContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Home;
