import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";

export default function about() {
  const [count, setCount] = useState(1);
  return (
    <>
      <Container fluid className="conAbout">
        <div id="stars" style={{ position: "relative" }}></div>
        <div id="stars2" style={{ position: "relative" }}></div>
        <div id="stars3" style={{ position: "relative" }}></div>
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
      <Container className="conMission" style={{ marginTop: "50px" }}>
        <Row>
          <Col lg={12}>
            <p className="pHeader">Our Mission</p>
          </Col>
          <Col lg={1}>
            <hr></hr>
          </Col>
          <Col lg={11}>
            <p className="pHeaderSub">
              ...we seek to lead companies towards business direction they would
              like to purse.
            </p>
          </Col>
          <Col lg={6}>
            <p className="pMission pLeft">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.{" "}
            </p>
          </Col>
          <Col lg={6}>
            <p className="pMission">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <img
              src="Image/mission.jpg"
              className="img-fluid d-flex imgMission"
            ></img>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col lg={12}>
            <p className="pHeader">Our Vission</p>
          </Col>
          <Col lg={1}>
            <hr></hr>
          </Col>
          <Col lg={11}>
            <p className="pHeaderSub">
              ...we seek to lead companies towards business direction they would
              like to purse.
            </p>
          </Col>
          <Col lg={6}>
            <p className="pMission pLeft">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.{" "}
            </p>
          </Col>
          <Col lg={6}>
            <p className="pMission">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.{" "}
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="conWorks">
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <p className="pCount">0{count}</p>
                <p className="pClient">Washwell</p>
                <p className="pDate">APRIL.2021</p>
                <p className="pDescName">Clean clothes at your doorstep</p>
                <p className="pDesc">
                  At Washwell, we work to provide a simple high-quality solution
                  to take care of everything in your closet so you have the time
                  for what really matters.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
