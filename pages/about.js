import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { ImQuotesLeft } from "react-icons/im";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import Banner from "../components/modules/banner";

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
          <Row style={{ marginTop: "70px" }}>
            <Col lg={12}>
              <div className="divImage">
                <img
                  src="Image/mission.jpg"
                  className="img-fluid d-flex imgAbout"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conValues">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="divValues">
                <img src="Image/mission1.jpg" className="img-fluid imgDiv" />
                <div className="form-inline">
                  <div></div>
                  <p className="p1">Our Mission</p>
                </div>
                <p className="p2">
                  Our core purpose is to provide{" "}
                  <span style={{ color: "#fd6b3b" }}>extensive</span> expertise.
                </p>
                <p className="pDesc">
                  Our core purpose is to provide companies extensive expertise
                  and services at cost expertise and services at cost effective
                  price points, while upholding a standard for quality service.
                  We seek to lead companies towards business directions they
                  would like to pursue both in the U.S. and globally.
                </p>
              </div>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conWhy">
        <Container>
          <Row>
            <Col lg={6}>
              <p className="pStroke">Why</p>
              <p className="pNoStroke">
                Choose Us<span style={{ color: "#fd6b3b" }}>?</span>
              </p>
            </Col>
            <Col lg={6}>
              <div style={{ width: "0 auto" }}>
                <p className="pOver">An overview of what we do</p>
                <p className="pDesc">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam"
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="conChoose">
          <Row>
            <Col lg={4}>
              <div className="cardChoose text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/fgkmrslx.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#fd6b3b"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
                <p className="p1">User Interface</p>
                <p className="pWork">Graphic Design</p>
                <p className="pWork">UI/UX Design</p>
                <p className="pWork">Web Design</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="cardChoose text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/jvucoldz.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#fd6b3b"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
                <p className="p1">Web Development</p>
                <p className="pWork">Frontend & Backend</p>
                <p className="pWork">Wordpress</p>
                <p className="pWork">Server</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="cardChoose text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/zpxybbhl.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#fd6b3b"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
                <p className="p1">Digital Marketting</p>
                <p className="pWork">Social Media Merketting</p>
                <p className="pWork">Search Engine Optimization</p>
                <p className="pWork">Blogging</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conValues">
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={8}>
              <div className="divValues">
                <div className="divInner">
                  <img src="Image/mission1.jpg" className="img-fluid imgDiv1" />
                  <div className="form-inline">
                    <div></div>
                    <p className="p1">Our Vission</p>
                  </div>
                  <p className="p2 ">
                    Our core purpose is to provide{" "}
                    <span style={{ color: "#fd6b3b" }}>extensive</span>{" "}
                    expertise.
                  </p>
                  <p className="pDesc">
                    Our core purpose is to provide companies extensive expertise
                    and services at cost expertise and services at cost
                    effective price points, while upholding a standard for
                    quality service. We seek to lead companies towards business
                    directions they would like to pursue both in the U.S. and
                    globally.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conFounder">
        <Container>
          <Row>
            <Col lg={12}>
              <p>The Founder</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Banner />
    </>
  );
}
