import React, { useEffect, useState } from "react";
import "./LoadingScreen.css"; // 스타일 파일 import
import { database, ref, get } from "../firebase";

export default function LoadingScreen({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);
  const [participantCount, setParticipantCount] = useState(null);

  useEffect(() => {
    const images = [
      "/images/background.png",
      "/images/button1.png",
      "/images/button2.png",
      "/images/button3.png",
      "/images/button4.png",
      "/images/button5.png",
      "/images/button6.png",
      "/images/button7.png",
      "/images/button8.png",
      "/images/button9.png",
      "/images/button10.png",
      "/images/button11.png",
      "/images/button12.png",
      "/images/button13.png",
      "/images/character/bear.jpg",
      "/images/character/cat.jpg",
      "/images/character/dog.jpg",
      "/images/character/rabbit.jpg",
      "/images/completion_img/rabbit.png",
      "/images/completion_img/bear.png",
      "/images/completion_img/dog.png",
      "/images/completion_img/cat.png",
      "/images/clear_stamp.png",
      "/images/instruction_img.png",
      "/images/map.png",
      "/images/wardrobe.png",
      "/images/help.png",
      // 필요한 다른 이미지 경로 추가
    ];

    let loadedCount = 0;

    // Firebase 데이터 로드
    const fetchParticipantCount = async () => {
      try {
        const countRef = ref(database, "participantCount");
        const snapshot = await get(countRef);
        const count = snapshot.val() || 0;
        setParticipantCount(count); // participantCount 업데이트
        checkIfLoadingComplete();
      } catch (error) {
        console.error("Firebase 데이터 로드 실패:", error);
        checkIfLoadingComplete(); // 에러 시에도 로딩 완료 처리
      }
    };

    // 이미지 로드 진행
    const handleImageLoad = () => {
      loadedCount += 1;
      setProgress(Math.round((loadedCount / images.length) * 100));
      checkIfLoadingComplete();
    };

    const checkIfLoadingComplete = () => {
      // 이미지와 Firebase 데이터 모두 로드 완료 시
      if (loadedCount === images.length && participantCount !== null) {
        setTimeout(onLoadComplete, 500); // 모든 로드 완료 후 500ms 대기
      }
    };

    // 이미지 로드 시작
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // 에러 발생 시에도 진행
    });

    // Firebase 데이터 로드 시작
    fetchParticipantCount();
  }, [onLoadComplete, participantCount]);

  return (
    <div className="loading-container">
      <h1 className="loading-text">모험을 준비하는 중...</h1>
      <div className="loading-bar">
        <div
          className="loading-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
