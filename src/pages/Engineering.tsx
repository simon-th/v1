import React, { createRef } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import "../styles/common.css";
import "../styles/engineering.css";

function scrollToDiv(ref: React.RefObject<HTMLDivElement>) {
  const node = ref.current;
  if (node) {
    node.scrollIntoView({ behavior: "smooth" });
  }
}

const Engineering = function render() {
  const aboutRef = createRef<HTMLDivElement>();
  const experienceRef = createRef<HTMLDivElement>();
  const workRef = createRef<HTMLDivElement>();
  return (
    <div className="Base">
      <Navbar
        className="Dev-navbar justify-content-center pt-3 pb-0"
        sticky="top"
      >
        <Nav className="gap-5">
          <Nav.Link onClick={() => scrollToDiv(aboutRef)}>
            <p className="Dev-navbar-link">About</p>
          </Nav.Link>
          <Nav.Link onClick={() => scrollToDiv(experienceRef)}>
            <p className="Dev-navbar-link">Experience</p>
          </Nav.Link>
          <Nav.Link onClick={() => scrollToDiv(workRef)}>
            <p className="Dev-navbar-link">Work</p>
          </Nav.Link>
          <Nav.Link href="/">
            <p className="Dev-navbar-link">Contact</p>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container className="Main-container Dev-main-container flex-grow-1">
        <div className="First-section" ref={aboutRef}>
          <About />
        </div>
        <div className="Dev-padded-section" ref={experienceRef}>
          <Experience />
        </div>
        <div className="Dev-padded-section" ref={workRef}>
          <Work />
        </div>
      </Container>
    </div>
  );
};

export default Engineering;
