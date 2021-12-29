import React, { useState } from "react";

import logo from "../images/Logo.png";

function Landing() {
  // const [image, setImage] = useState(null);

  // const windowWidth = window.screen.width;

  // (function (width) {
  //   if (width > 1070 && image === null)
  //     import("../images/LandingHorizontal.png").then((obj) =>
  //       setImage(obj.default)
  //     );
  //   else if (width > 450 && image === null)
  //     import("../images/LandingSquare.png").then((obj) =>
  //       setImage(obj.default)
  //     );
  //   else if (width < 450 && image === null)
  //     import("../images/LandingVertical.png").then((obj) =>
  //       setImage(obj.default)
  //     );
  // })(windowWidth);

  return (
    <div className="landing-component">
      {/* <Header /> */}
      {/* <img className="home-image" src={image} alt="home" />
      <div className="overlay"
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div> */}
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
