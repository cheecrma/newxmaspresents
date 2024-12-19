import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PresentAnimation.css";

function PresentAnimation() {
  const navigate = useNavigate();
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationDone(true);
      setTimeout(() => {
        navigate("/instructions");
      }, 1000); // 페이드 아웃 후 1초 후에 이동
    }, 4000); // 타이핑 애니메이션 시간 (5초)

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`animation-container ${isAnimationDone ? "fade-out" : ""}`}>
      <h1 className="animation-text">Present for you</h1>
    </div>
  );
}

export default PresentAnimation;
