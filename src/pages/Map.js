import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import StageButton from "../components/StageButton";
import Quiz1 from "../components/quiz/Quiz1";
import Quiz2 from "../components/quiz/Quiz2";
import Quiz3 from "../components/quiz/Quiz3";
import Quiz4 from "../components/quiz/Quiz4";
import Quiz5 from "../components/quiz/Quiz5";
import Quiz6 from "../components/quiz/Quiz6";
import Quiz7 from "../components/quiz/Quiz7";
import Quiz8 from "../components/quiz/Quiz8";
import Quiz9 from "../components/quiz/Quiz9";
import Quiz10 from "../components/quiz/Quiz10";
import Quiz11 from "../components/quiz/Quiz11";
import Quiz12 from "../components/quiz/Quiz12";
import Quiz13 from "../components/quiz/Quiz13";
import "./Map.css";

// 축하 메시지 객체
const characterMessages = {
  character1: "활발한 모험가여, 끝까지 완주한 당신을 축하합니다!",
  character2: "차분한 전략가여, 지혜롭게 모든 도전을 이겨냈군요!",
  character3: "호기심 많은 탐험가여, 새로운 세계를 밝혀냈습니다!",
  character4: "따뜻한 힐러여, 모두를 위해 헌신한 당신을 축복합니다!",
};

// 퀴즈 컴포넌트 배열
const quizComponents = [
  Quiz1,
  Quiz2,
  Quiz3,
  Quiz4,
  Quiz5,
  Quiz6,
  Quiz7,
  Quiz8,
  Quiz9,
  Quiz10,
  Quiz11,
  Quiz12,
  Quiz13,
];

// 버튼 위치
const buttonPositions = [
  { top: "31%", left: "44%" }, // 더플라자 호텔 quiz1
  { top: "23%", left: "49%" }, // 산정호수 안시 quiz2
  { top: "20%", left: "67%" }, // 설악 쏘라노 quiz3
  { top: "48%", left: "35%" }, // 대천 파로스 quiz4
  { top: "40%", left: "46%" }, // 용인 베잔송 quiz5
  { top: "27%", left: "74%" }, // 브리드호텔 양양 quiz6
  { top: "33%", left: "62%" }, // 평창 quiz7
  { top: "77%", left: "46%" }, // 여수 벨메르 quiz8
  { top: "74%", left: "60%" }, // 거제 quiz9
  { top: "55%", left: "78%" }, // 경주 quiz10
  { top: "92%", left: "30%" }, // 제주도 quiz11
  { top: "71%", left: "68%" }, // 해운대 quiz12
  { top: "68%", left: "76%" }, // 마티에 오시리아 quiz13
];

function Map() {
  const location = useLocation();
  const { selectedCharacter, name } = location.state || {
    selectedCharacter: "defaultCharacter",
    name: "플레이어",
  };
  const [clearedStages, setClearedStages] = useState(Array(13).fill(false));
  const [currentQuiz, setCurrentQuiz] = useState(null); // 현재 퀴즈 상태
  const [showCompletion, setShowCompletion] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  // 스테이지 클릭 시 퀴즈 열기
  const handleStageClick = (index) => {
    setCurrentQuiz(index);
  };

  // 퀴즈 닫기
  const handleQuizClose = () => {
    setCurrentQuiz(null);
  };

  // 퀴즈 정답 처리
  const handleQuizCorrect = (index) => {
    const newClearedStages = [...clearedStages];
    newClearedStages[index] = true;
    setClearedStages(newClearedStages);
    setCurrentQuiz(null);
    if (newClearedStages.every((stage) => stage)) {
      setShowCompletion(true);
    }
  };

  // 화면 캡처
  const captureMap = () => {
    html2canvas(mapRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "adventure_certificate.png";
      link.click();
    });
  };

  // 링크 복사
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
  };

  // 게임 재시작
  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div
      ref={mapRef}
      className="map-container"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <header className="map-header">
        <div className="character-info">
          <img
            src={`/images/${selectedCharacter}.png`}
            alt="Character"
            className="character-image"
          />
          <span className="character-name">{name}</span>
        </div>
        <h1 className="map-title">호앤리 &nbsp; 지도</h1>
        <button className="help-button" onClick={() => setShowHelp(true)}>
          도움말
        </button>
      </header>

      {/* 지도 UI */}
      <div className="map-wrapper">
        <img src="/images/map.png" alt="Map" className="map-image" />
        {buttonPositions.map((position, index) => (
          <React.Fragment key={index}>
            {/* 버튼 */}
            <StageButton
              position={position}
              imageSrc={`/images/button${index + 1}.png`}
              onClick={() => handleStageClick(index)}
              disabled={clearedStages[index]} // 이미 클리어된 스테이지는 클릭 비활성화
            />

            {/* 클리어 스탬프 */}
            {clearedStages[index] && (
              <img
                src="/images/clear_stamp.png"
                alt="Cleared"
                className="clear-stamp"
                style={{
                  top: position.top,
                  left: position.left,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 퀴즈 컴포넌트 렌더링 */}
      {currentQuiz !== null && (
        <div className="quiz-overlay">
          {React.createElement(quizComponents[currentQuiz], {
            onCorrect: () => handleQuizCorrect(currentQuiz),
            onClose: handleQuizClose,
          })}
        </div>
      )}

      {/* 완료 화면 */}
      {showCompletion && (
        <div className="completion-container">
          {/* 증명서 영역 */}
          <div className="completion-certificate" id="certificate">
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
          </div>

          {/* 버튼 영역 */}
          <div className="completion-buttons">
            <button onClick={captureMap}>증명서 저장하기</button>
            <button onClick={copyLink}>링크 복사</button>
            <button onClick={handleRestart}>처음으로 돌아가기</button>
          </div>
        </div>
      )}

      {/* 도움말 팝업 */}
      {showHelp && (
        <div className="help-overlay" onClick={() => setShowHelp(false)}>
          <div className="help-content">
            <p>
              각 스테이지를 클릭하고 문제를 해결하세요.
              <br />
              모든 스테이지를 완료하면
              <br />
              특별한 보상을 받을 수 있습니다!
              <br />
              <br />
              플레이가 저장되지 않으므로 주의 바랍니다.
            </p>
            <button
              className="help-close-button"
              onClick={() => setShowHelp(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Map;
