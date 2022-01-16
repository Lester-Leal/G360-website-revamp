import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export default function footer() {
  return (
    <Container fluid className = "conFooter">
      <Container>
        <Row>
          <Col lg={5}>
            <img
              src="Image/logo_white.png"
              className="img-fluid imgLogoFooter"
            ></img>
            <p className="pCopy">
              © 2021 Guerilla 360 Integrated Solutions. All Rights Reserved.
            </p>
          </Col>
          <Col lg={7}>
            <div className="divFooterUl">
              <ul className="ulFooter">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
              <div>
                <i>
                  <AiFillLinkedin />
                </i>
                <i>
                  <BsInstagram />
                </i>
                <i>
                  <BsFacebook />
                </i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
