import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PresentAnimation.css";

function PresentAnimation() {
  const navigate = useNavigate();

  useEffect(() => {
    const typingDuration = 5000; // 글자 애니메이션 시간 (5초)

    // 타이핑 애니메이션 완료 후 화면 전환
    const timer = setTimeout(() => {
      navigate("/instructions");
    }, typingDuration);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
// 12.21 Conflict 수정 > 문구 일부 변경 
    <div className="animation-container">
      <h1 className="animation-text">
        {"Present for H&R Family...♥".split("").map((char, index) => (
          <span key={index} className={char === " " ? "space" : ""}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default PresentAnimation;
