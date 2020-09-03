import React from "react";
import { Row, Col, Container } from "reactstrap";
import "../css/howItWorks/index.css";
import {
  PodcastButton,
  AudiobookButton,
  VoiceOverButton,
  WebDevButton
} from "./Buttons";
import { IoIosArrowDown } from "react-icons/io";
import denver from '../images/AdobeStock_230523774.jpeg';

function HowItWorks() {
  return (
    <section className="howItWorksSection">
      <img className="denverSkyline" src={denver} alt="denverSkyline" />
      <Container>
        <h1 className="introText">WELCOME TO DA MEDIA</h1>
        <p className="whoWeAre">
          We are a Team of Engineering, Editing, and Production Experts that
          provide Podcast Editing & Production Services, AudioBook Narration &
          Production, Voice Over Work, and Website Development. Conviently
          located in Broomfield, Colorado.
        </p>
        <Row>
          <Col xs="12" md="3">
            <PodcastButton />
          </Col>
          <Col xs="12" md="3">
            <AudiobookButton />
          </Col>
          <Col xs="12" md="3">
            <VoiceOverButton />
          </Col>
          <Col xs="12" md="3">
            <WebDevButton />
          </Col>
        </Row>
        <Row>
          <IoIosArrowDown className="arrowDown" />
        </Row>
      </Container>
    </section>
  );
}

export default HowItWorks;
