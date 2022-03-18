import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

import { SiPaloaltosoftware } from "react-icons/si";

import Banner from "../components/modules/BannerHandler";
import ClientHandler from "../components/modules/ClientHandler";
import TestimonialHandler from "../components/modules/TestimonialHandler";
import GlobeCanvas from "../components/elements/globe";

//BAGO TO

export default function index() {
  return (
    <>
      <Container fluid className="conIndex">
        <Container fluid className="bg"></Container>
        <Container className="h-100" style={{ position: "relative" }}>
          <Row className="h-100 align-items-center">
            <Col lg={6}>
              <h1>We’ve always done things a bit </h1>
              <p className="pHeaderSub">
                GUERILLA 360 is a global business solutions company, focused on
                providing integrated business solutions in the areas of Software
                Solutions and Personnel Outsourcing.
              </p>
              <div className="divButton">
                <button className="button-53 button-index">Get started!</button>
              </div>
            </Col>
            <Col lg={6}>
              <GlobeCanvas />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conHow1">
        <Container>
          <Row>
            <Col lg={6}>
              <h1>
                To show the power of <span>humanity in business</span>
              </h1>
            </Col>
            <Col lg={6}>
              <svg>
                <g className="loader-3 center-2-of-3">
                  <circle />
                  <circle />
                  <circle />
                </g>
              </svg>
              <div className="form-inline">
                <p className="pNumber">01</p>
                <p className="pHeader">Define</p>
              </div>
              <p className="pDesc">
                We define your project needs by working closely with you and
                conducting business assessments. We will understand the entire
                process of your project and provide you with comprehensive
                analysis on the best ways to execute it.
              </p>
              <svg>
                <g className="loader-10 center-3-of-3">
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                </g>
              </svg>
              <div className="form-inline">
                <p className="pNumber">02</p>
                <p className="pHeader">Arrange</p>
              </div>
              <p className="pDesc">
                Once we have a clear understanding of your project scope, we
                will create a digital plan that will be used as our basis and
                reference to the development and execution of your project. The
                design plan will contain the User Stories, Design Options and
                Timetable. Our team will also appoint a Business Relationship
                Manager to directly interface with your company.
              </p>
              <svg>
                <g className="loader-20 center-1-of-3">
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                </g>
              </svg>
              <div className="form-inline">
                <p className="pNumber">03</p>
                <p className="pHeader">Execution</p>
              </div>
              <p className="pDesc">
                Our team of business analysts and software developers will begin
                the software development life cycle and create a feature tracker
                that will be shared with the client in order for the client to
                keep track of progress. Upon launch of project, client may opt
                for a complete turn over or maintenance under our BPO Services.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Container fluid className="conHow d-none">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="pHeader">How it works</p>
              <p className="pHeaderSub">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="pHeaderCount">01</p>
              <div className="divMethod">
                <div className="bubbles text-end">
                  <p className="pMethodName">Define</p>
                </div>
                <p className="pMethodDesc">
                  We define your project needs by working closely with you and
                  conducting business assessments. We will understand the entire
                  process of your project and provide you with comprehensive
                  analysis on the best ways to execute it.
                </p>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}>
              <p className="pHeaderCount text-end">02</p>
              <div className="divMethod">
                <div style={{ marginLeft: "auto", width: "max-content" }}>
                  <div className="bubbles">
                    <p className="pMethodName ">Arrange.</p>
                  </div>
                </div>
                <p className="pMethodDesc text-end">
                  Once we have a clear understanding of your project scope, we
                  will create a digital plan that will be used as our basis and
                  reference to the development and execution of your project.
                  The design plan will contain the User Stories, Design Options
                  and Timetable. Our team will also appoint a Business
                  Relationship Manager to directly interface with your company.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="pHeaderCount">03</p>
              <div className="divMethod float-end">
                <div className="bubbles text-end">
                  <p className="pMethodName">Execution</p>
                </div>
                <p className="pMethodDesc">
                  Our team of business analysts and software developers will
                  begin the software development life cycle and create a feature
                  tracker that will be shared with the client in order for the
                  client to keep track of progress. Upon launch of project,
                  client may opt for a complete turn over or maintenance under
                  our BPO Services.
                </p>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conDesc">
        <Row>
          <Col lg={12}>
            <Marquee
              gradientColor={[255, 255, 255]}
              pauseOnHover={true}
              speed={80}
            >
              <p className="pText">
                Design Website Mobile Business Outsource Solutions{" "}
              </p>
            </Marquee>
            <Marquee
              gradientColor={[255, 255, 255]}
              pauseOnHover={true}
              direction="right"
              speed={80}
            >
              <p className="pText">
                UI/UX Staffing Branding Firmware Business Android{" "}
              </p>
            </Marquee>
            <Marquee
              gradientColor={[255, 255, 255]}
              pauseOnHover={true}
              speed={80}
            >
              <p className="pText">
                Programs Development BPO Animation Application{" "}
              </p>
            </Marquee>
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-none" style={{ padding: "70px 15px" }}>
        <Container className="conServices" style={{ position: "relative" }}>
          <p className="pVertical">Passionate people helping clients win</p>
          <Row>
            <Col lg={6}>
              <p className="pHeader">
                Our <br />
                Services<span style={{ color: "black" }}>.</span>
              </p>
            </Col>
            <Col lg={6}>
              <p className="pOverview">
                Our core purpose is to provide companies extensive expertise and
                services at cost expertise and services at{" "}
                <span>cost effective price points</span>, while upholding a
                standard for quality service.
              </p>
              <p className="pOverviewSub">
                GUERILLA 360 is a global business solutions company, focused on
                providing integrated business solutions in the areas of Software
                Solutions and Personnel Outsourcing.
              </p>
              <p className="pValues d-none">Our values</p>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="card-container">
                <div className="cardCon">
                  <a href="hottub" className="card1">
                    <div className="card--display">
                      <div>
                        <i>
                          <SiPaloaltosoftware />
                        </i>
                        <h2>Software Development and Design Services</h2>
                      </div>
                    </div>
                    <div className="card--hover">
                      <h2>Software Development and Design Services</h2>
                      <p>
                        We build scalable software solutions that fit your
                        business requirements from Website Applications, Mobile
                        Applications, Bespoke Software and API Development.
                      </p>
                      <p className="link">Click to see project</p>
                    </div>
                  </a>
                  <div className="card--border"></div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card-container">
                <div className="cardCon">
                  <a href="hottub" className="card2">
                    <div className="card--display">
                      <div>
                        <i>
                          <SiPaloaltosoftware />
                        </i>
                        <h2>
                          {" "}
                          Staff Augmentation, Shared Services & Team Management
                        </h2>
                      </div>
                    </div>
                    <div className="card--hover">
                      <h2>
                        Staff Augmentation, Shared Services & Team Management
                      </h2>
                      <p>
                        Work with us to find and manage the right IT & Design
                        Talent to be fully integrated into your company’s
                        ecosystem.
                      </p>
                      <p className="link">Click to see project</p>
                    </div>
                  </a>
                  <div className="card--border"></div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card-container">
                <div className="cardCon">
                  <a href="hottub" className="card3">
                    <div className="card--display">
                      <div>
                        <i>
                          <SiPaloaltosoftware />
                        </i>
                        <h2> Custom BPO and Shared Staffing Solutions</h2>
                      </div>
                    </div>
                    <div className="card--hover">
                      <h2>Custom BPO and Shared Staffing Solutions</h2>
                      <p>
                        Work with us to find and manage the right IT & Design
                        Talent to be fully integrated into your company’s
                        ecosystem.
                      </p>
                      <p className="link">Click to see project</p>
                    </div>
                  </a>
                  <div className="card--border"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* CLIENT SHOW */}
      <ClientHandler />
      {/* CLIENT TESTIMONIALS */}
      <TestimonialHandler />
      {/* OUR CULTURE BANNER */}
      <Banner />
    </>
  );
}