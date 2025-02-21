import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const cube = document.querySelector(".cube");

    if (!cube) return;

    let angleX = 0;
    let angleY = 0;
    let animationFrameId;

    function rotateCube() {
      angleX += 1;
      angleY += 1;
      cube.style.transform = `rotateX(${angleX}deg) 
                        rotateY(${angleY}deg)`;
      animationFrameId = requestAnimationFrame(rotateCube);
    }

    rotateCube();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">Front</div>
        <div className="face back">Back</div>
        <div className="face top">Top</div>
        <div className="face bottom">Bottom</div>
        <div className="face left">Left</div>
        <div className="face right">Right</div>
      </div>
    </div>
  );
}
