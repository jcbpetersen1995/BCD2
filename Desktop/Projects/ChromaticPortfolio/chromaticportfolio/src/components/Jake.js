import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import "../css/jake/index.css";
import jake from '../images/JacobPetersen_r1_DEN_3082.jpg';

function Jake() {
  return (
    <Container className="jakeBlock">
      <h1 className="myName rainbowText">JAKE PETERSEN</h1>
      
      <p className="jakeText">
      <img src={jake} alt="Profile Photo" className="profilePhoto" />
        My name is Jake. I'm a full-stack web developer for DA Media, and a
        front-end web developer for Bluejestic Inc. I enjoy the the creative
        aspect of coding and creating beautiful user interfaces. With mainly
        high-line automotive industry and customer service backgrounds, I am
        looking to move my career focus towards web and app development. I've
        attended a 24-week, intensive full-stack web development bootcamp, as
        well as taught myself Swift, Wordpress, and some Python.
      </p>
    </Container>
  );
}

export default Jake;
