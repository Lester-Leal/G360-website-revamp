import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export default function FooterHandler() {
  return (
    <Container fluid className="conFooter">
      <Container>
        <Row>
          <Col lg={5}>
            <img
              src="../Image/logo_white.png"
              className="img-fluid imgLogoFooter"
              style={{ width: "150px" }}
            ></img>
            <p className="pCopy">© Guerilla360 2021. All rights reserved.</p>
          </Col>
          <Col lg={4}>
            <p className="pTitle">Location</p>
            <p className="pAddress">
              290 Aguire Ave, Paranaque <br />
              1720 Metro Manila
            </p>
            <p className="pTitle">Socials</p>
            <div className="divSocials">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3}>
            <p className="pFooter">Home</p>
            <p className="pFooter">About</p>
            <p className="pFooter">Services</p>
            <p className="pFooter">Careers</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
