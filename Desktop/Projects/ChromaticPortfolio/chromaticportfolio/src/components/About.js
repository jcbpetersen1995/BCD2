import React from "react";
import { Container } from "reactstrap";
import "../css/about/index.css";
import logo from '../images/JP.logo.tiny.png';

function About() {
  return (
    <Container className="aboutBlock">
      <h1 className="aboutMe rainbowText">ABOUT ME</h1>

      <p className="aboutMeText">
        <img src={logo} alt="logo" className="aboutMeLogo" />
        I currently live in the Denver Metro area. I was born in sunny Southern
        California. In my spare time, I enjoy working on personal coding
        projects and going on long-distance runs. I also enjoy visiting the
        Disney theme parks on both ends of the country whenever I can. Web
        development is an exciting way for me to express my creativity.
      </p>
    </Container>
  );
}

export default About;
