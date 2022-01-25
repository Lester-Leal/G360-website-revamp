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
      setScrollnav(true);
      console.log(window.scrollY);
    } else {
      setScrollnav(false);
      console.log(window.scrollY);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground, true);
  });
  useEffect(() => {
    setPathUrl(router.path);
  }, [urlPath]);

  return (
    <Navbar
      className={
        !scrollNav
          ? "navbarBg navbarTransparent justify-content-between"
          : "navbarBg navbarTransparent justify-content-between"
      }
      id="navbarBg"
      fixed="top"
    >
      <Container fluid id={!scrollNav ? "conNav" : "conNavNoPad"}>
        <Nav className="ml-auto">
          <Navbar.Brand href="/">
            <img
              src={!scrollNav ? "Image/logo_white.png" : "Image/logo_white.png"}
              className="img-fluid"
              style={{ width: "140px" }}
            />
          </Navbar.Brand>
        </Nav>
        <Nav className="mx-auto text-center" style = {{position:"absolute", left: "50%", transform: "translate(-50%)"}}>
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
          <Navbar.Brand href="/">
            <Nav.Link
              href="#pricing"
              id="navContact"
              className={scrollNav ? "navLight" : "navLight"}
            >
              Contact Us
            </Nav.Link>
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}
