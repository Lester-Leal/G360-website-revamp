import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default function navbar() {
  const [scrollNav, setScrollnav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      document.getElementById("navbarBg").style.backgroundColor = "white";
      setScrollnav(true);
    } else {
      document.getElementById("navbarBg").style.backgroundColor = "#0b173c";
      setScrollnav(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground, true);
  });

  return (
    <Navbar className="navbarBg" id="navbarBg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={!scrollNav ? "Image/logo_white.png" : "Image/logo_dark.png"}
            className="img-fluid"
            style={{ width: "150px" }}
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={scrollNav ? "navDark" : "navLight"}>
            Home
          </Nav.Link>
          <Nav.Link
            href="#features"
            className={scrollNav ? "navDark" : "navLight"}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            className={scrollNav ? "navDark" : "navLight"}
          >
            Services
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            className={scrollNav ? "navDark" : "navLight"}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            className={scrollNav ? "navDark" : "navLight"}
            style={{marginRight: "15px"}}
          >
            Careers
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            className={scrollNav ? "navDark" : "navLight"}
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
