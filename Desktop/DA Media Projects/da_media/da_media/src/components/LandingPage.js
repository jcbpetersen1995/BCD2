import React from "react";
import "../css/landingPage/index.css";
import NavbarComponent from "./NavbarComponent";
// import AerialTest from "../videos/videoblocks-denver-union-station-exterior-historical-city-train-station_b-zvyugkeb__9d548f7e951289fcb83b3684513cecef__P360.mp4";
import DAMediaWelcome from "./DAMediaWelcome";
import HowItWorks from "./HowItWorks";
import ColorBlockOne from './ColorBlockOne';
import ColorBlockTwo from './ColorBlockTwo';

function LandingPage() {
  return (
    <div>
      {/* <DAMediaWelcome /> */}
      <NavbarComponent />
      {/* <video className="landingPageVideo" autoPlay muted loop>
        <source src={AerialTest} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
      <HowItWorks />
      <ColorBlockOne />
      <ColorBlockTwo />
    </div>
  );
}

export default LandingPage;
