import React, { useState, useRef, useEffect } from "react";
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
  rabbit: "언제나 웃으며 손님의 마음까지 헤아리는 배려의",
  bear: "믿음직한 한마디로 고객의 신뢰를 사로잡는 설득의",
  cat: "조용히 문제를 해결하며 팀의 뒤를 든든히 받쳐주는",
  dog: "빠른 발걸음과 열정으로 현장을 누비는",
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
        title: `☃️${name}님의 초대장☃️`, // 닉네임 포함
        description: "신비한 호앤리 옷장 모험에 같이 참여해요!",
        imageUrl: `https://hnrgift.shop/images/character/${selectedCharacter}.jpg`, // 이미지 경로
        link: {
          mobileWebUrl: "https://hnrgift.shop",
          webUrl: "https://hnrgift.shop",
        },
      },
      buttons: [
        {
          title: "플레이하러가기🖤 ",
          link: {
            mobileWebUrl: "https://hnrgift.shop",
            webUrl: "https://hnrgift.shop",
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
  const [showHelp, setShowHelp] = useState(false);
  const mapRef = useRef(null);
  const [showCompletion, setShowCompletion] = useState(false);
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

  const captureMap = () => {
    const certificateElement = document.querySelector(
      ".completion-certificate"
    ); // 특정 요소 선택

    if (certificateElement) {
      html2canvas(certificateElement, {
        useCORS: true, // 외부 리소스 허용
        scale: 2,
        onclone: (clonedDoc) => {
          // Map.css의 폰트를 클론된 DOM에 강제로 추가
          const style = document.createElement("style");
          style.textContent = `
            @import url("https://fonts.googleapis.com/css2?family=LeeSeoyun&display=swap");
            
            .completion-certificate {
              font-family: "LeeSeoyun", sans-serif;
            }
          `;
          clonedDoc.head.appendChild(style);
        },
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "completion-certificate.png";
        link.click();
      });
    } else {
      alert("캡처할 요소를 찾을 수 없습니다.");
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
      <header className="map-header">
        <div className="character-info">
          <img
            src={`/images/character/${selectedCharacter}.jpg`}
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
        <div className="triangle-ribbon"></div> 
          <img
              src={`/images/completion_img/${selectedCharacter}.png`}
              alt="Character"
              className="certificate-image"
            />
          <h3 className="completion-title">
            모험 완료 증명서
          </h3>
          <div class="certificate-details">
            <div>
            <p className="completion-subtext">{characterMessages[selectedCharacter]},</p> 
            <p className="certificate-name">{name} <span>모험가님</span></p>
            </div> 
          </div>
          <div className="completion-subtext">
            <p>
              여러분의 노력으로 모든 도전을 <br></br>성공적으로 완료했습니다. <br />
              2024 한 해 너무 고생많으셨으며, <br></br> 새로운 모험을 기대합니다! <br />
            </p>
          </div>
        </div>

          {/* 버튼 영역 */}
          <div className="completion-buttons">
            <button onClick={captureMap} className="capture-button">
              화면 저장하기
            </button>
            {/* 카카오톡 공유 버튼 */}
            <button onClick={shareOnKakao} className="kakao-share-button">
              카카오톡 공유하기
            </button>
            <button onClick={handleRestart} className="replay-button">
              처음으로 돌아가기
            </button>
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
