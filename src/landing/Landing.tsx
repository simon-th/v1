import React from "react";
import { Container } from "react-bootstrap";
import "../common/common.css";
import "./landing.css"

const Landing = function render() {
  return (
    <div className="Base">
      <Container className="Main-container">
        <p className="Welcome-text h1">Hi,</p>
        <h1 className="Welcome-text">I&apos;m Simon Hoque.</h1>
        <h2 className="Welcome-subtext">Software Engineer @ Amazon</h2>
        <Container className="Landing-links-container">
          <a className="Link-swe Landing-links" href="https://www.github.com/simon-th">Software Engineering</a>
          <a className="Link-photo Landing-links" href="https://www.github.com/simon-th">Photography</a>
          <a className="Link-travel Landing-links" href="https://www.github.com/simon-th">Travel</a>
          <a className="Link-music Landing-links" href="https://www.github.com/simon-th">Music</a>
        </Container>
      </Container>
    </div>
  );
};

export default Landing;
