import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import "./CharacterSelect.css";

function CharacterSelect() {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [name, setName] = useState("");

  // 캐릭터별 설명
  const characterDescriptions = {
    character1: "활발하고 에너지가 넘치는 모험가입니다.",
    character2: "차분하고 분석적인 전략가입니다.",
    character3: "창의적이고 호기심 많은 탐험가입니다.",
    character4: "친절하고 배려심 깊은 힐러입니다.",
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleStartAdventure = () => {
    if (!selectedCharacter) {
      alert("캐릭터를 선택해 주세요.");
      return;
    }
    if (!name.trim()) {
      alert("캐릭터 이름을 입력해 주세요.");
      return;
    }
    navigate("/map", { state: { selectedCharacter, name } });
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    if (input.length <= 7) {
      setName(input);
    }
  };

  return (
    <div className="character-select-container">
      <h1 className="title">캐릭터를 선택하고 이름을 입력하세요</h1>
      <div className="character-list">
        <CharacterCard
          imageSrc="/images/character1.png"
          name="캐릭터 1"
          isSelected={selectedCharacter === "character1"}
          onSelect={() => handleCharacterSelect("character1")}
        />
        <CharacterCard
          imageSrc="/images/character2.png"
          name="캐릭터 2"
          isSelected={selectedCharacter === "character2"}
          onSelect={() => handleCharacterSelect("character2")}
        />
        <CharacterCard
          imageSrc="/images/character3.png"
          name="캐릭터 3"
          isSelected={selectedCharacter === "character3"}
          onSelect={() => handleCharacterSelect("character3")}
        />
        <CharacterCard
          imageSrc="/images/character4.png"
          name="캐릭터 4"
          isSelected={selectedCharacter === "character4"}
          onSelect={() => handleCharacterSelect("character4")}
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
        placeholder="캐릭터 이름을 입력하세요 (최대 7글자)"
        value={name}
        onChange={handleNameChange}
        className="name-input"
      />
      <button className="start-button" onClick={handleStartAdventure}>
        모험 시작하기
      </button>
    </div>
  );
}

export default CharacterSelect;
