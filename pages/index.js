import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";

export default function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  const settings_client = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow: false,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <Container fluid className="h-100 bgCon">
        <Row className="h-100 align-items-center justty-content-center d-flex">
          <Col lg={12}>
            <p className="text-center pCenter">
              Innovative Outsource and <br />
              Digital Solutions
            </p>
            <p className="pCenterSub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="divCreate container">
              <Row className="align-items-center justty-content-center d-flex">
                <Col lg={7}>
                  <p className="pHeader">Create your team today!</p>
                  <p className="pHeaderSub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </Col>
                <Col lg={5}>
                  <button>
                    <span>Get Started</span>
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="con2" style={{ marginTop: "70px" }}>
        <Row>
          <Col lg={6}>
            <div
              style={{
                width: "550px",
                float: "right",
                marginTop: "30px",
                marginRight: "5%",
              }}
            >
              <p className="pHeader">Services We Provide</p>
              <div>
                <p className="pHeaderSub">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="divOblong">
              <p className="pTitle">Software Development and Design Services</p>
              <div style={{ maxWidth: "580px" }}>
                <p className="pTitleSub">
                  We build scalable software solutions that fit your business
                  requirements from Website Applications, Mobile Applications,
                  Bespoke Software and API Development.
                </p>
                <div className="btnLearn">
                  Learn more
                  <i>
                    <HiArrowNarrowRight />
                  </i>
                </div>
              </div>
            </div>
            <div className="divOblong">
              <div style={{ maxWidth: "580px" }}>
                <p className="pTitle">
                  Staff Augmentation, Shared Services & Team Management
                </p>
                <p className="pTitleSub">
                  Work with us to find and manage the right IT & Design Talent
                  to be fully integrated into your company’s ecosystem.
                </p>
                <div className="btnLearn">
                  Learn more
                  <i>
                    <HiArrowNarrowRight />
                  </i>
                </div>
              </div>
            </div>
            <div className="divOblong">
              <div style={{ maxWidth: "580px" }}>
                <p className="pTitle">
                  Custom BPO and Shared Staffing Solutions
                </p>
                <p className="pTitleSub">
                  Work with us to find and manage the right IT & Design Talent
                  to be fully integrated into your company’s ecosystem.
                </p>
                <div className="btnLearn">
                  Learn more
                  <i>
                    <HiArrowNarrowRight />
                  </i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="con3" style={{ marginTop: "70px" }}>
        <Row>
          <Col lg={6}>
            <div style={{ maxWidth: "600px" }}>
              <Row>
                <Col lg={2}>
                  <img
                    src="Image/new-moon.png"
                    className="img-fluid mx-auto"
                    style={{ width: "50px" }}
                  ></img>
                </Col>
                <Col lg={10}>
                  <p className="pHeader">Define</p>
                  <p className="pHeaderSub">
                    We define your project needs by working closely with you and
                    conducting business assessments. We will understand the
                    entire process of your project and provide you with
                    comprehensive analysis on the best ways to execute it.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <img
                    src="Image/new-moon.png"
                    className="img-fluid mx-auto"
                    style={{ width: "50px" }}
                  ></img>
                </Col>
                <Col lg={10}>
                  <p className="pHeader">Plan</p>
                  <p className="pHeaderSub">
                    We define your project needs by working closely with you and
                    conducting business assessments. We will understand the
                    entire process of your project and provide you with
                    comprehensive analysis on the best ways to execute it.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <img
                    src="Image/new-moon.png"
                    className="img-fluid mx-auto"
                    style={{ width: "50px" }}
                  ></img>
                </Col>
                <Col lg={10}>
                  <p className="pHeader">Development & Execution</p>
                  <p className="pHeaderSub">
                    We define your project needs by working closely with you and
                    conducting business assessments. We will understand the
                    entire process of your project and provide you with
                    comprehensive analysis on the best ways to execute it.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src="Image/con3.png"
              className="img-fluid mx-auto d-flex"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="con4" style={{ marginTop: "100px" }}>
        <Row>
          <Col lg={4}>
            <p className="pHeader">Case Studies</p>
            <p className="pHeaderSub">
              {" "}
              We define your project needs by working closely with you and
              conducting business assessments.
            </p>
            <button className="btnCase">View Case Studies</button>
          </Col>
          <Col lg={8}>
            <div>
              <Slider {...settings}>
                <div className="divCarousel"></div>
                <div className="divCarousel"></div>
                <div className="divCarousel"></div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="con5" style={{ marginTop: "100px" }}>
        <Row>
          <Col lg={12}>
            <p className="pHeader">Our Satisfied Clients</p>
          </Col>
        </Row>
        <Row className="align-items-center justifiy-conter-center d-flex">
          <Col lg={2}>
            <img src="Image/client_1.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_2.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_3.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_4.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_5.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_6.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_7.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_8.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_9.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_10.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_11.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_12.png" className="img-fluid d-flex"></img>
          </Col>
        </Row>
      </Container>
      <Container className="con6" style={{ marginTop: "20px" }}>
        <Row>
          <Col lg={12}>
            <div>
              <Slider {...settings_client}>
                <div className="divClient">
                  <p className="pDesc">
                    <div className="blob mx-auto d-flex"></div>
                    <p className="pName">Randolph Yu</p>
                    <i>
                      <ImQuotesLeft></ImQuotesLeft>
                    </i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
                <div className="divClient">
                  <p className="pDesc">
                    <div className="blob1 mx-auto d-flex"></div>
                    <p className="pName">Eskye Custodio</p>
                    <i>
                      <ImQuotesLeft></ImQuotesLeft>
                    </i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
                <div className="divClient">
                  <p className="pDesc">
                    <div className="blob2 mx-auto d-flex"></div>
                    <p className="pName">Eskye Custodio</p>
                    <i>
                      <ImQuotesLeft></ImQuotesLeft>
                    </i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
                <div className="divClient"></div>
                <div className="divClient"></div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="con7">
        <Row>
          <Col lg={5}>
            <p className="pHeader">Be part of our Team Today</p>
            <p className="pHeaderSub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <button className="btnCase">Apply now</button>
          </Col>
          <Col lg={7}>
            <div className="bg7">
              <div className="divTest">
                <p className="pName">Eskye Custodio</p>
                <p className="pDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="con8">
        <Row className="align-items-center justifiy-content-center d-flex">
          <Col lg={12}>
            <p className="pHeader">Discuss your next project with us</p>
            <p className="pHeaderSub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <button className="btnCase mx-auto d-block">Contact Us!</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
