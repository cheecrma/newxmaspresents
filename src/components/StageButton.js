import React from "react";
import "./StageButton.css";

function StageButton({ position, imageSrc, onClick }) {
  return (
    <div
      className="stage-button-container"
      style={{ top: position.top, left: position.left }}
    >
      <img
        src={imageSrc}
        alt="Stage Button"
        className="stage-button"
        onClick={onClick}
      />
      <div className="glow-effect"></div>
    </div>
  );
}

export default StageButton;
