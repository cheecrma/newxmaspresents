import React, { useEffect, useState } from "react";
import "./Snowfall.css";

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 70; i++) {
        flakes.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 10 + 4,
          duration: Math.random() * 12 + 6,
          delay: 0, // 초기 눈송이는 지연 없음
        });
      }
      setSnowflakes(flakes);

      setTimeout(() => {
        const delayedFlakes = flakes.map((flake) => ({
          ...flake,
          delay: Math.random() * 5, // 이후 눈송이는 지연 추가
        }));
        setSnowflakes(delayedFlakes);
      }, 100); // 초기 눈송이 렌더 후 100ms 지연
    };

    createSnowflakes();
  }, []);

  return (
    <>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`, // 지연 시간 최소화
          }}
        ></div>
      ))}
    </>
  );
}
