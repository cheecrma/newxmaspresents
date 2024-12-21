import React from "react";
import "./StageButton.css";

function StageButton({ position, imageSrc, onClick, disabled }) {
  return (
    <div
      className={`stage-button-container ${disabled ? "disabled" : ""}`} // 비활성화 상태 추가
      style={{ top: position.top, left: position.left }}
    >
      <div className="glow-effect"></div>
      <img
        src={imageSrc}
        alt="Stage Button"
        className="stage-button"
        onClick={!disabled ? onClick : undefined} // 비활성화 시 클릭 이벤트 제거
      />
    </div>
  );
}

export default StageButton;
