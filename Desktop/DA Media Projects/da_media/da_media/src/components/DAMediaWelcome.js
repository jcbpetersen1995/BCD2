import React from "react";
import { Row, Col, Container } from "reactstrap";
import "../css/DAMediaWelcome/index.css";
import { IoIosArrowDown } from 'react-icons/io';

function DAMediaWelcome() {
  return (
    <Container className="welcomeTextBox">
      <Row>
        <h1 className="welcomeText">DA MEDIA</h1>
      </Row>
      <Row>
          <h3 className="premierText">
              DENVER'S PREMIER MULTIMEDIA PRODUCTION COMPANY
          </h3>
      </Row>
      <Row>
        {/* <a href="/Home"><IoIosArrowDown className="arrowDown"/></a> */}
        <a href="/Home"><button className="getStartedButton">GET STARTED</button></a>
      </Row>
    </Container>
  );
}

export default DAMediaWelcome;
