import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { ImQuotesLeft } from "react-icons/im";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";

export default function about() {
  return (
    <>
      <Container fluid className="conAbout">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="divHeader">
                <p className="pHeader">About</p>
                <p className="pHeaderSub">Guerilla 360</p>
                <div className="divDesc">
                  <p className="pTitle">
                    GUERILLA 360 is a global business solutions company, focused
                    on providing integrated business solutions in the areas of
                    Software Solutions and Personnel Outsourcing. It is founded
                    by diverse group of industries ranging from finance,
                    Business Development Technology and Outsource Service
                    Solutions.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row style = {{marginTop: "40px"}}>
            <Col lg={12}>
              <img src="Image/mission.jpg" className = "img-fluid d-flex"></img>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
