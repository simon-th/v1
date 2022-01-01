import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/common.css";
import "../styles/contact.css";

import github from "../resources/icons/github.svg";
import linkedin from "../resources/icons/linkedin.svg";
import instagram from "../resources/icons/instagram.svg";
import spotify from "../resources/icons/spotify.svg";

const Contact = function render() {
  return (
    <div>
      <h1 className="Site-h1">Contact</h1>
      <Container className="Contact-section">
        <h2 className="Site-h3">Connect with me:</h2>
        <a className="Site-p" href="mailto:simon.thoque@gmail.com">
          simon.thoque@gmail.com
        </a>
      </Container>
      <Container className="Contact-section">
        <h2 className="Site-h3">Check out my other websites and socials!</h2>
        <a
          href="https://www.simon-th.github.io/photo"
          className="Color-accent-orange Landing-links"
        >
          Photography
        </a>
        <a
          href="https://www.simon-th.github.io/photo"
          className="Color-accent-teal Landing-links"
        >
          Travel
        </a>
      </Container>
      <Container className="Contact-section p-0">
        <Row
          className="gap-4"
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

export default Contact;
