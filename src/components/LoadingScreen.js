import React, { useEffect, useState } from "react";
import "./LoadingScreen.css"; // 스타일 파일 import

export default function LoadingScreen({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);

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
      "/images/character1.png",
      "/images/character2.png",
      "/images/character3.png",
      "/images/character4.png",
      "/images/clear_stamp.png",
      "/images/instruction_img.png",
      "/images/map.png",
      "/images/wardrobe.png",
      "/images/help.png",
      // 필요한 다른 이미지 경로 추가
    ];

    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount += 1;
      setProgress(Math.round((loadedCount / images.length) * 100));
      if (loadedCount === images.length) {
        setTimeout(onLoadComplete, 500); // 모든 이미지 로드 완료 후 호출
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // 에러 발생 시에도 진행
    });
  }, [onLoadComplete]);

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
