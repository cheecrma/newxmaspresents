import React from "react";
import "./CharacterCard.css";

function CharacterCard({ imageSrc, name, isSelected, onSelect }) {
  return (
    <div
      className={`character-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <img src={imageSrc} alt={name} className="character-image" />
      <p className="character-name">{name}</p>
    </div>
  );
}

export default CharacterCard;
