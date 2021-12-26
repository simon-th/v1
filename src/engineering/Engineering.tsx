import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import "../common/common.css";
import "./engineering.css";

const Engineering = function render() {
  return (
    <div className="Base">
      <Navbar className="Dev-navbar justify-content-center navbar-fixed-top">
        <Nav className="gap-5">
          <Nav.Link href="/">
            <p className="Dev-navbar-link">About</p>
          </Nav.Link>
          <Nav.Link href="/">
            <p className="Dev-navbar-link">Experience</p>
          </Nav.Link>
          <Nav.Link href="/">
            <p className="Dev-navbar-link">Work</p>
          </Nav.Link>
          <Nav.Link href="/">
            <p className="Dev-navbar-link">Contact</p>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container className="Main-container Dev-main-container flex-grow-1">
        <div className="Dev-padded-section">
          <About />
        </div>
        <div className="Dev-padded-section">
          <Experience />
        </div>
        <div className="Dev-padded-section">
          <Work />
        </div>
      </Container>
    </div>
  );
};

export default Engineering;
