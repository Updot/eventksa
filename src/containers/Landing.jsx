import React from "react";
import Header from "../components/Header";
import horz from "../images/LandingHorizontal.png";
import square from "../images/LandingSquare.png";
import vert from "../images/LandingVertical.png";

// import logo from "../images/Logo.png";

let image;

if (window.screen.width > 1070) image = horz;
else if (window.screen.width > 400) image = square;
else image = vert;

function Landing() {
  return (
    <div className="landing-component">
      <Header />
      <img className="home-image" src={image} alt="home" />
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>
      {/* <div className="text-container">
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
      <p className="hashtag">#Tiaradream</p> */}
    </div>
  );
}

export default Landing;
