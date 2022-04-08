import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export default function FooterHandler() {
  return (
    <Container fluid className="conFooter">
      <Container>
        <div className="pRow">
        <Col wg={6} className="pTxtCon">
          <p className="pTitle2">Have a Project in Mind?</p>
          <div className="pBoxFlex">
          <p className="pDesc2">
            Our core purposes is to provide companies extensive expertise and 
            service at cost expertise and services at cose effective price points,
            while upholding standard for quality service.
          </p>
          <button className="pLetBTN button-53 button-index">Let's have a Talk</button>
          </div>
        </Col>
        <Row>
          <Col lg={4}>
            <div className="pLogo">
            <img
              src="../Image/logo_white.png"
              className="img-fluid"
              style={{ width: "150px"}}
            ></img>
            <p className="pCopy">© Guerilla360 2021. All rights reserved.</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="p_router">
              <p className="pFooter">Home</p>
              <p className="pFooter">About</p>
              <p className="pFooter">Services</p>
              <p className="pFooter">Careers</p>
            </div>
          </Col>
          <Col lg={4}>
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
        </Row>
        </div>  
      </Container>
    </Container>
  );
}
