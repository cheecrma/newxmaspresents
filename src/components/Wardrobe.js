import React from "react";
import { useNavigate } from "react-router-dom";

function Wardrobe() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/animation"); // 애니메이션 페이지로 이동
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      <img src="/images/wardrobe.png" alt="Wardrobe" width="200" />
    </div>
  );
}

export default Wardrobe;
