import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/common.css";
import "../styles/landing.css";

import github from "../resources/icons/github.svg";
import linkedin from "../resources/icons/linkedin.svg";
import instagram from "../resources/icons/instagram.svg";
import spotify from "../resources/icons/spotify.svg";

const Landing = function render() {
  return (
    <div className="Base">
      <Container className="Main-container flex-grow-1">
        <p className="Welcome-text h1">Hi,</p>
        <h1 className="Welcome-text">I&apos;m Simon Hoque.</h1>
        <h2 className="Welcome-subtext">Software Engineer @ Amazon</h2>
        <Container className="Landing-links-container">
          <Link to="/dev" className="Color-accent-orange Landing-links">
            Software Engineering
          </Link>
          <Link to="/photo" className="Color-accent-teal Landing-links">
            Photography
          </Link>
          <Link to="/travel" className="Color-secondary-text Landing-links">
            Travel
          </Link>
        </Container>
        <Row
          className="gap-4 Social-icon-container"
          xs="auto"
          sm="auto"
          md="auto"
          lg="auto"
          xl="auto"
          xxl="auto"
        >
          <a href="https://www.github.com/simon-th">
            <img src={github} className="Social-icon" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/simon-hoque">
            <img src={linkedin} className="Social-icon" alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/_simonhoque">
            <img src={instagram} className="Social-icon" alt="instagram" />
          </a>
          <a href="https://spoti.fi/3iTN4YT">
            <img src={spotify} className="Social-icon" alt="spotify" />
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
