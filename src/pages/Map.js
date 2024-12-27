import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import Confetti from "react-canvas-confetti";
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
  useEffect(() => {
    // Kakao SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("e032b9ff6767e937469dda8e44bb72e2"); // Kakao JavaScript 키
      console.log("Kakao initialized:", window.Kakao.isInitialized());
    }
  }, []);

  const shareOnKakao = () => {
    if (!window.Kakao.isInitialized()) return;

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "Happy New Year!",
        description: "13개의 스테이지를 모두 클리어하세요!",
        imageUrl: `/images/${selectedCharacter}.png`, // 공유할 이미지 URL
        link: {
          mobileWebUrl: "https://your-app-url.com",
          webUrl: "https://your-app-url.com",
        },
      },
      buttons: [
        {
          title: "플레이하러 가기",
          link: {
            mobileWebUrl: "https://your-app-url.com",
            webUrl: "https://your-app-url.com",
          },
        },
      ],
    });
  };
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
  const confettiInstance = useRef(null);
  const navigate = useNavigate();

  const getInstance = (instance) => {
    confettiInstance.current = instance;
  };

  // 컨페티 애니메이션
  const fireConfetti = () => {
    const duration = 5 * 1000; // 5초
    const end = Date.now() + duration;

    const frame = () => {
      confettiInstance.current &&
        confettiInstance.current({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });

      confettiInstance.current &&
        confettiInstance.current({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

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
      fireConfetti();
    }
  };

  // 화면 캡처 (현재 화면과 동일하게 캡처)
  const captureMap = () => {
    const certificateElement = document.getElementById("certificate"); // 증명서 요소 선택
    if (certificateElement) {
      html2canvas(certificateElement, {
        useCORS: true, // 크로스오리진 리소스 허용
        scale: window.devicePixelRatio || 1, // 화면 해상도와 동일한 비율로 캡처
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "adventure_certificate.png"; // 저장 파일명
        link.click();
      });
    } else {
      alert("증명서를 찾을 수 없습니다.");
    }
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
      <Confetti refConfetti={getInstance} />
      <header className="map-header">
        <div className="character-info">
          <img
            src={`/images/${selectedCharacter}.png`}
            alt="Character"
            className="character-image"
          />
          <span className="character-name">
            <span>{name}</span> 모험가님
          </span>
        </div>
        <h1 className="map-title">호앤리&nbsp;모험지도 </h1>

        <button className="help-button" onClick={() => setShowHelp(true)}>
          <img src={`/images/help.png`} alt="Help" className="help-image"></img>
          <p> 도움말</p>
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
            <h3 className="completion-title">
              🏆 축하합니다! 모험을 완료했습니다 🏆
            </h3>
            <img
              src={`/images/${selectedCharacter}.png`}
              alt="Character"
              className="certificate-image"
            />
            <p className="certificate-message">
              "{name}" 님, {characterMessages[selectedCharacter]}
            </p>
            <p className="completion-subtext">
              여러분의 노력으로 모든 도전을 성공적으로 완료했습니다. <br />
              함께 해주셔서 감사드리며, 새로운 모험을 기대합니다!
            </p>
          </div>

          {/* 버튼 영역 */}
          <div className="completion-buttons">
            <button onClick={captureMap}>화면 저장</button>
            {/* 카카오톡 공유 버튼 */}
            <button onClick={shareOnKakao} className="kakao-share-button">
              카카오톡 공유
            </button>
            <button onClick={handleRestart}>처음으로 돌아가기</button>
          </div>
        </div>
      )}

      {/* 도움말 팝업 */}
      {showHelp && (
        <div className="help-overlay" onClick={() => setShowHelp(false)}>
          <div className="help-content">
            <p>
              각 사업본부 스테이지를 클릭해 문제를 풀어주세요!<br></br>
              <br />
              모든 스테이지를 완료하면
              <br />
              특별한 무언가가 기다리고 있을지도 ...
              <br />
              <br />
              <span>⚠ 플레이는 저장되지 않습니다</span> <br></br>(뒤로가면
              처음부터 다시 ..)
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
