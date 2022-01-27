import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export default function footer() {
  return (
    <Container fluid className="conFooter">
      <Container>
        <Row>
          <Col lg={5}>
            <img
              src="Image/logo_white.png"
              className="img-fluid imgLogoFooter"
              style={{ width: "150px" }}
            ></img>
            <p className="pCopy">© Guerilla360 2021. All rights reserved.</p>
          </Col>
          <Col lg={4}>
            <p className="pTitle">Location</p>
            <p className="pAddress">
              290 Aguire Ave, Paranaque <br/>1720 Metro Manila
            </p>
            <p className="pTitle">Socials</p>
            <div className="form-inline divSocials">
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
