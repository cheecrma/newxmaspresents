import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import "./CharacterSelect.css";
import { database, ref, get, set } from "../firebase";

function CharacterSelect() {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [name, setName] = useState("");

  // 캐릭터별 설명
  const characterDescriptions = {
    rabbit: "언제나 웃으며 손님의 마음까지 헤아리는 배려의 달인.",
    bear: "믿음직한 한마디로 고객의 신뢰를 사로잡는 설득의 전문가.",
    cat: "조용히 문제를 해결하며 팀의 뒤를 든든히 받쳐주는 묵묵한 헌신가.",
    dog: "빠른 발걸음과 열정으로 현장을 누비는 해결사.",
  };

  // 캐릭터 선택 핸들러
  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  // 모험 시작 핸들러
  const handleStartAdventure = async () => {
    if (!selectedCharacter) {
      alert("캐릭터를 선택해 주세요.");
      return;
    }
    if (!name.trim()) {
      alert("캐릭터 이름을 입력해 주세요.");
      return;
    }

    try {
      // Firebase에서 참여자 수 증가
      const countRef = ref(database, "participantCount");
      const snapshot = await get(countRef);
      const currentCount = snapshot.val() || 0;
      await set(countRef, currentCount + 1);
      console.log("참여자 수 업데이트 완료:", currentCount + 1);
    } catch (error) {
      console.error("Firebase 업데이트 실패:", error);
      alert("참여자 수를 업데이트하는 중 문제가 발생했습니다.");
      return; // Firebase 업데이트 실패 시 화면 이동 차단
    }

    // 페이지 이동
    navigate("/map", { state: { selectedCharacter, name } });
  };

  // 이름 입력 핸들러
  const handleNameChange = (e) => {
    const input = e.target.value;
    if (input.length <= 7) {
      setName(input);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleStartAdventure();
    }
  };

  console.log("select", selectedCharacter);
  return (
    <div className="character-select-container">
      <h1 className="title">캐릭터를 선택하고 이름을 입력하세요 ❗</h1>
      <div className="character-list">
        <CharacterCard
          className="character-img"
          imageSrc="/images/character/rabbit.jpg"
          name="친절한 프런트 토끼"
          isSelected={selectedCharacter === "rabbit"}
          onSelect={() => handleCharacterSelect("rabbit")}
        />
        <CharacterCard
          className="character-img"
          imageSrc="/images/character/dog.jpg"
          name="바쁜 부대업장 강아지"
          isSelected={selectedCharacter === "dog"}
          onSelect={() => handleCharacterSelect("dog")}
        />
        <CharacterCard
          className="character-img"
          imageSrc="/images/character/bear.jpg"
          name="든든한 세일즈 곰돌이"
          isSelected={selectedCharacter === "bear"}
          onSelect={() => handleCharacterSelect("bear")}
        />
        <CharacterCard
          className="character-img"
          imageSrc="/images/character/cat.jpg"
          name="야근하는 지원부서 고양이"
          isSelected={selectedCharacter === "cat"}
          onSelect={() => handleCharacterSelect("cat")}
        />
      </div>

      {/* 캐릭터 설명 표시 */}
      {selectedCharacter && (
        <p className="character-description">
          {characterDescriptions[selectedCharacter]}
        </p>
      )}

      <input
        type="text"
        placeholder="이름을 입력하세요 (최대 7글자)"
        value={name}
        onChange={handleNameChange}
        className="name-input"
        onKeyDown={handleKeyDown}
      />

      <button className="start-button" onClick={handleStartAdventure}>
        시작하기
      </button>
    </div>
  );
}

export default CharacterSelect;
