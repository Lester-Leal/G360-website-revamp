import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export default function footer() {
  return (
    <Container fluid className="conFooter">
      <Row>
        <Col lg={5}>
          <img
            src="Image/logo_white.png"
            className="img-fluid imgLogoFooter"
          ></img>
        </Col>
        <Col lg={7}>
          <ul className="ulFooter">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
          <div className="float-right">
            <i>
              <BsFacebook />
            </i>
            <i>
              <BsInstagram />
            </i>
            <i>
              <AiFillLinkedin />
            </i>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
