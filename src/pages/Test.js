import React from "react";

import "./Map.css";

// 축하 메시지 객체
// const characterMessages = {
//   rabbit: "언제나 웃으며 손님의 마음까지 헤아리는 배려의",
//   bear: "믿음직한 한마디로 고객의 신뢰를 사로잡는 설득의",
//   cat: "조용히 문제를 해결하며 팀의 뒤를 든든히 받쳐주는",
//   dog: "빠른 발걸음과 열정으로 현장을 누비는",
// };


function Test() {
 return (
    
        <div className="completion-container">
          {/* 증명서 영역 */}
          <div className="completion-certificate" id="certificate">
            <h3 className="completion-title">
              모험 완료 증명서
            </h3>
            <div>
              <img
                src={`/images/character/dog.jpg`}
                alt="Character"
                className="certificate-image"
              />
              <div>
              <p>이름란입니다</p>
              </div> 
            </div>
            <div>
              <p>설명</p>
            </div>

            <p className="certificate-message">
            언제나 웃으며 손님의 마음까지 <br></br>헤아리는 배려의 
              <span className="certificate-name">"000" 님</span>
            </p>
            <p className="completion-subtext">
              여러분의 노력으로 모든 도전을 성공적으로 완료했습니다. <br />
              함께 해주셔서 감사드리며, 새로운 모험을 기대합니다! <br />
            </p>
          </div>

        </div>
  
  );
}

export default Test;
