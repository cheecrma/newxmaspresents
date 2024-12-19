import React from "react";
import "./CharacterCard.css";

function CharacterCard({ imageSrc, name, isSelected, onSelect }) {
  return (
    <div
      className={`character-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <img src={imageSrc} alt={name} className="character-image" />
      <h3 className="character-name">{name}</h3>
    </div>
  );
}

export default CharacterCard;
