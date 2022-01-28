import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { ImQuotesLeft } from "react-icons/im";
import { HiArrowNarrowRight } from "react-icons/hi";
import Marquee from "react-fast-marquee";
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
              <p className="pStroke">
                The Co-Founder <span style={{ color: "#fd6b3b" }}>.</span>
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }} className="align-items-center">
            <Col lg={6}>
              <div className="divFounderDesc">
                <div className="divLine"></div>
                <p className="pName">Randolph Yu</p>
                <p className="pPosition">Co-Founder & Managing Partner</p>
                <p className="pDesc">
                  Randolph is the head of operations and solutions architecture
                  for Guerilla 360. With his in-depth knowledge on the latest
                  cutting-edge technology and it’s real-world application for
                  enterprise solutions, he is able to integrate new practices
                  and applications geared towards a company’s growth and
                  digitalization through software applications and automations.
                  Formerly a full stack software engineer and solutions
                  architect, he is experienced in implementing highly customized
                  system applications that can scale towards any company size.
                  It is his directive that every project Guerilla 360 ensures
                  the proper solution is architected and built to scale
                  following a quality-first approach.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="divImageFounder">
                <img
                  src="Image/randolph_new.jpg"
                  className="img-fluid image2 mx-auto d-flex"
                ></img>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }} className="align-items-center">
            <Col lg={6}>
              <div className="divImageFounder">
                <img
                  src="Image/randolph_new.jpg"
                  className="img-fluid image2 mx-auto d-flex"
                ></img>
              </div>
            </Col>
            <Col lg={6}>
              <div className="divFounderDesc">
                <div className="divLine"></div>
                <p className="pName">Nathan Nakar</p>
                <p className="pPosition">Co-Founder & Managing Partner</p>
                <p className="pDesc">
                  Nathan Nakar is the co-founder and managing partner of
                  Guerilla 360 specializing in Innovations Ideation. With around
                  a decade of experience in business development and marketing,
                  he has been able to conceptualize and engineer new solutions
                  and innovations that create both value and revenue for a
                  business of any scale.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conTeam">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="pStroke">
                The Team <span style={{ color: "#fd6b3b" }}>.</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Row style={{ marginTop: "70px" }}>
          <Col lg={12}>
            <Marquee
              gradientColor={[26, 26, 26]}
              pauseOnHover={true}
              speed={80}
            >
              <div className="form-inline wrapper">
                <div className="card">
                  <div
                    className="photo"
                    style={{ background: "url('Image/alfonblack.jpg')" }}
                  ></div>
                  <div
                    className="photo"
                    style={{ background: "url('Image/alfonblack1.jpg')" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="photo"
                    style={{ background: "url('Image/eskyeblack.jpg')" }}
                  ></div>
                  <div
                    className="photo"
                    style={{ background: "url('Image/eskyeblack1.jpg')" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="photo"
                    style={{ background: "url('Image/alfonblack.jpg')" }}
                  ></div>
                  <div
                    className="photo"
                    style={{ background: "url('Image/alfonblack1.jpg')" }}
                  ></div>
                </div>
                <div className="card">
                  <div
                    className="photo"
                    style={{ background: "url('Image/alfonblack.jpg')" }}
                  ></div>
                  <div
                    className="photo"
                    style={{ background: "url('Image/alfonblack1.jpg')" }}
                  ></div>
                </div>
              </div>
            </Marquee>
          </Col>
        </Row>
      </Container>
      <Banner />
    </>
  );
}
