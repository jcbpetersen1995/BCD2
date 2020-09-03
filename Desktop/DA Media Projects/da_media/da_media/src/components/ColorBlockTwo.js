import React from "react";
import "../css/colorBlockTwo/index.css";
import webDevImage from "../images/web.jpeg";
import { Container } from "reactstrap";

function colorBlockTwo() {
  return (
    <section className="colorBlockTwo">
      <img
        src={webDevImage}
        className="webDevImage"
        alt="Web Development Image"
      />
      <Container className="content">
          <h1>Hello, World!</h1>
      </Container>
    </section>
  );
}

export default colorBlockTwo;
