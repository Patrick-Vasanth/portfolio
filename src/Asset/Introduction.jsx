import React from "react";
import "./Common.css";
import Profile from "../Images/image.png";

export default function Introduction() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/PatrickVasanth_Resume.pdf"; // The file should be placed in the public folder
    link.download = "PatrickVasanth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="introduction">
      <div className="content">
        <h4>Hello, It's Me</h4>
        <h1>Patrick Vasanth Gnanadurai J</h1>
        <h3>
          And I'm a <b style={{ color: "#01eefe" }}>Frontend Developer</b>
        </h3>
        <div className="description">
          <b>🚀 Crafting Engaging & Interactive Web Experiences. </b>
          <br />
          I’m a passionate Front-End Developer who transforms ideas into
          beautiful, functional, and responsive websites. With expertise in
          HTML, CSS, JavaScript, and React.js, I bring designs to life with
          seamless animations, intuitive UI, and top-notch performance. Let’s
          build something amazing together! ✨
        </div>
        <div className="resume">
          <button onClick={handleDownload}>Download CV</button>
        </div>
      </div>
      <div className="imagePentagon">
        <svg viewBox="0 0 100 100" width="350" height="350">
          <defs>
            <clipPath id="pentagonClip" clipPathUnits="objectBoundingBox">
              <polygon points="0.5 0, 1 0.38, 0.82 1, 0.18 1, 0 0.38" />
            </clipPath>
          </defs>
          {/* The image is shifted up to make it extend outside the pentagon */}
          <image
            xlinkHref={Profile}
            width="100%"
            height="120%" /* Increases height so part of the image comes out */
            x="0"
            y="-20%" /* Moves the image up */
            clipPath="url(#pentagonClip)"
          />
        </svg>
      </div>
    </div>
  );
}
