import React from "react";

import logo from "../images/logo2.png";

function Landing() {
  return (
    <div className="landing-component">
      <div className="text-container">
        <div className="part1">
          <h1 className="page-title">Tiara dream</h1>
          <h2 className="page-subtitle">
            Immersive experience around the Tiara
          </h2>
        </div>
        <div className="part2">
          <p className="date">13 - 24 January 2022</p>
          <p className="place">King Fahad national library, Riyadh</p>
        </div>
        <img src={logo} alt="Chaumet" />
      </div>
      <p className="hashtag">#Tiaradream</p>
    </div>
  );
}

export default Landing;
