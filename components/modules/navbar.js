import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
export default function navbar() {
  const router = useRouter();
  const [scrollNav, setScrollnav] = useState(false);
  const [pathUrl, setPathUrl] = useState("");
  const urlPath = router.pathname;
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      document.getElementById("navbarBg").style.backgroundColor = "#1a1a1a";
      setScrollnav(true);
    } else {
      document.getElementById("navbarBg").style.backgroundColor = "#1a1a1a";
      setScrollnav(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground, true);
  });
  useEffect(() => {
    setPathUrl(router.path);
  }, [urlPath]);

  return (
    <Navbar
      className={!scrollNav ? "navbarBg" : "navbarBg navbarShadow"}
      id="navbarBg"
      fixed="top"
    >
      <Container id={!scrollNav ? "conNav" : "conNavNoPad"}>
        <Navbar.Brand href="/">
          <img
            src={!scrollNav ? "Image/logo_white.png" : "Image/logo_white.png"}
            className="img-fluid"
            style={{ width: "140px" }}
          />
        </Navbar.Brand>
        <Nav className="m-auto" style={{ paddingLeft: "150px" }}>
          <Nav.Link
            href="#home"
            className={scrollNav ? "navLight" : "navLight"}
            id={urlPath === "/" ? "activeNav" : ""}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="about"
            className={scrollNav ? "navLight" : "navLight"}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            className={scrollNav ? "navLight" : "navLight"}
          >
            Services
          </Nav.Link>

          <Nav.Link
            href="#pricing"
            className={scrollNav ? "navLight" : "navLight"}
            style={{ marginRight: "15px" }}
          >
            Careers
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link
            href="#pricing"
            id="navContact"
            className={scrollNav ? "navLight" : "navLight"}
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
