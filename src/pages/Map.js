import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import StageButton from "../components/StageButton";
import Quiz1 from "../components/quiz/Quiz1";
import "./Map.css";

const quizComponents = [
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
  Quiz1,
];

const buttonPositions = [
  { top: "12%", left: "15%" },
  { top: "20%", left: "35%" },
  { top: "25%", left: "60%" },
  { top: "35%", left: "25%" },
  { top: "40%", left: "50%" },
  { top: "50%", left: "70%" },
  { top: "60%", left: "10%" },
  { top: "65%", left: "40%" },
  { top: "70%", left: "60%" },
  { top: "75%", left: "80%" },
  { top: "80%", left: "30%" },
  { top: "85%", left: "50%" },
  { top: "90%", left: "70%" },
];

// 캐릭터별 축하 메시지
const characterMessages = {
  character1: "활발한 모험가여, 끝까지 완주한 당신을 축하합니다!",
  character2: "차분한 전략가여, 지혜롭게 모든 도전을 이겨냈군요!",
  character3: "호기심 많은 탐험가여, 새로운 세계를 밝혀냈습니다!",
  character4: "따뜻한 힐러여, 모두를 위해 헌신한 당신을 축복합니다!",
};

function Map() {
  const location = useLocation();
  const { selectedCharacter, name } = location.state || {
    selectedCharacter: "defaultCharacter",
    name: "플레이어",
  };
  const [clearedStages, setClearedStages] = useState(Array(13).fill(false));
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [showCompletion, setShowCompletion] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  const handleStageClick = (index) => {
    setCurrentQuiz(index);
  };

  const handleQuizClose = () => {
    setCurrentQuiz(null);
  };

  const handleQuizCorrect = (index) => {
    const newClearedStages = [...clearedStages];
    newClearedStages[index] = true;
    setClearedStages(newClearedStages);
    setCurrentQuiz(null);
    if (newClearedStages.every((stage) => stage)) {
      setShowCompletion(true);
    }
  };

  const captureMap = () => {
    html2canvas(mapRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "adventure_certificate.png";
      link.click();
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
  };

  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div ref={mapRef} className="map-container">
      {/* 상단바 */}
      <header className="map-header">
        <div className="character-info">
          <img
            src={`/images/${selectedCharacter}.png`}
            alt="Character"
            className="character-image"
          />
          <span className="character-name">{name}</span>
        </div>
        <h1 className="map-title">스테이지 맵</h1>
        <button className="help-button" onClick={() => setShowHelp(true)}>
          도움말
        </button>
      </header>

      {!showCompletion && (
        <>
          <img src="/images/map.png" alt="Map" className="map-image" />
          {buttonPositions.map((position, index) => (
            <React.Fragment key={index}>
              <StageButton
                position={position}
                imageSrc={`/images/button${index + 1}.png`}
                onClick={() => handleStageClick(index)}
              />
              {clearedStages[index] && (
                <img
                  src="/images/clear_stamp.png"
                  alt="Cleared"
                  className="clear-stamp"
                  style={{ top: position.top, left: position.left }}
                />
              )}
            </React.Fragment>
          ))}

          {currentQuiz !== null && (
            <div className="quiz-overlay">
              {React.createElement(quizComponents[currentQuiz], {
                onCorrect: () => handleQuizCorrect(currentQuiz),
                onClose: handleQuizClose,
              })}
            </div>
          )}
        </>
      )}

      {showCompletion && (
        <div className="completion-certificate">
          <h2>🎉 모험 완료 증명서 🎉</h2>
          <img
            src={`/images/${selectedCharacter}.png`}
            alt="Character"
            className="certificate-image"
          />
          <p className="certificate-message">
            {characterMessages[selectedCharacter]}
          </p>
          <p className="certificate-name">{name}</p>
          <div className="completion-buttons">
            <button onClick={captureMap}>화면 저장</button>
            <button onClick={copyLink}>링크 복사</button>
            <button onClick={handleRestart}>처음으로 돌아가기</button>
          </div>
        </div>
      )}

      {showHelp && (
        <div className="help-overlay" onClick={() => setShowHelp(false)}>
          <div className="help-content">
            <p>
              각 스테이지를 클릭하고 문제를 해결하세요. 모든 스테이지를 완료하면
              특별한 보상을 받을 수 있습니다!
            </p>
            <button onClick={() => setShowHelp(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Map;
