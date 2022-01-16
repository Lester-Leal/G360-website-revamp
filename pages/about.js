import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";

export default function about() {
  return (
    <>
      <Container fluid className="conAbout">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title"></div>

        <Container>
          <Row>
            <Col lg={6}>
              <div className="divAbout">
                <p className="p1">
                  About Us<span style={{ color: "#fd6b3b" }}>.</span>
                </p>
                <p className="p2">
                  GUERILLA 360 is a global business solutions company, focused
                  on providing integrated business solutions in the areas of
                  Software Solutions and Personnel Outsourcing.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className = "conMission" style = {{marginTop: "50px"}}>
        <Row>
          <Col lg={12}>
            <p className = "pHeader">Our Mission</p>
            <p className = "pHeaderSub">
              ...we seek to lead companies towards business direction they would
              like to purse.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
