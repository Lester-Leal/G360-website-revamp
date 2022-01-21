import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import {
  HiArrowNarrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { SiPaloaltosoftware } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";

import Slider from "react-slick";

export default function index() {
  const ref = useRef(null);
  const refClient = useRef(null);
  const [next, setNext] = useState(1);
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

  const settings_testimonials = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  };

  const handleNextSlide = () => {
    ref.current.slickNext();
  };
  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };
  const handleNextSlideClient = () => {
    refClient.current.slickNext();
    setNext(2);
  };
  const handlePrevSlideClient = () => {
    refClient.current.slickPrev();
    setNext(1);
  };

  return (
    <>
      <Container fluid className="h-100 bgCon">
        <Container className="h-100">
          <Row className="h-100 align-items-center justty-content-center d-flex">
            <Col lg={6}>
              <p className="pCenter">
                Innovative <span style={{ color: "#fd6b3b" }}>Outsource</span>{" "}
                and Digital <span style={{ color: "#fd6b3b" }}>Solutions</span>
              </p>
              <p className="pCenterSub">
                We seek to lead companies towards business directions they would
                like to pursue both in the U.S. and globally.
              </p>
              <div id="container">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Get Started</span>
                </button>
              </div>
              <p className="pCall">If you're in a hurry, quick call to us</p>
              <div className="divCall">
                <div>
                  <i>
                    <BiPhoneCall />
                  </i>
                </div>
                <div className="divPhone">
                  <p className="p1">Phone number</p>
                  <p className="pNumber">+63 917 766 1380 | +53 999 124 4211</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div id="geo-globe" className="mx-auto d-flex">
                <canvas id="scene"></canvas>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conHow">
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
                <p className="pMethodName">Define.</p>
                <p className="pMethodDesc">
                  We define your project needs by working closely with you and
                  conducting business assessments. We will understand the entire
                  process of your project and provide you with comprehensive
                  analysis on the best ways to execute it.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="atom">
                <div className="electron-shell shellAnimationOne">
                  <div className="electron" />
                  <div className="electron" />
                </div>
                <div className="electron-shell shellAnimationTwo">
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                </div>
                <div className="electron-shell shellAnimationThree">
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                </div>
                <div className="electron-shell shellAnimationOne">
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                  <div className="electron" />
                </div>
                <div className="nucleus nucleusAnimate" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              
            </Col>
            <Col lg={6}>
              <p className="pHeaderCount text-end">02</p>
              <div className="divMethod">
                <p className="pMethodName text-end">Arrange.</p>
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
              <div className="divMethod">
                <p className="pMethodName">Execution</p>
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

      <Container fluid className="conTestimonials d-none">
        <Container>
          <Row>
            <Col lg={6}>
              <p className="p1">Our Customers.</p>
              <p className="p2">
                What Our Clients <br /> Says About Guerilla360
              </p>
              <p className="p3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <button className="btnLeft" onClick={handlePrevSlide}>
                <i>
                  <HiChevronLeft />
                </i>
              </button>
              <button className="btnRight" onClick={handleNextSlide}>
                <i>
                  <HiChevronRight />
                </i>
              </button>
            </Col>
            <Col lg={6}>
              <div>
                <Slider {...settings_testimonials} ref={ref}>
                  <div className="divTestimonials">
                    <Row
                      className="align-items-center justify-content-center d-flex"
                      style={{ backgroundColor: "white" }}
                    >
                      <Col lg={4} style={{ padding: "0px" }}>
                        <div>
                          <img src="Image/client1.jpg" className="img-fluid" />
                        </div>
                      </Col>
                      <Col lg={8} style={{ backgroundColor: "white" }}>
                        <div className="divComment">
                          <div>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                          </div>
                          <p className="pComment">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation."
                          </p>
                          <p className="pName">Eskye Custudio</p>
                          <p className="pPosition">FrontEnd Developer</p>
                          <i className="quote">
                            <ImQuotesRight />
                          </i>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="divTestimonials">
                    <Row
                      className="align-items-center justify-content-center d-flex"
                      style={{ backgroundColor: "white" }}
                    >
                      <Col lg={4} style={{ padding: "0px" }}>
                        <div>
                          <img src="Image/client2.jpg" className="img-fluid" />
                        </div>
                      </Col>
                      <Col lg={8} style={{ backgroundColor: "white" }}>
                        <div className="divComment">
                          <div>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                          </div>
                          <p className="pComment">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua."
                          </p>
                          <p className="pName">Karen Parco</p>
                          <p className="pPosition">Project Manager</p>
                          <i className="quote">
                            <ImQuotesRight />
                          </i>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conClients">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <p className="pHeader">
                <span style={{ color: "white" }}>Our</span> Clients.
              </p>
            </Col>
            <Col lg={4}>
              <div style={{ width: "200px", float: "right" }}>
                <span className="pCount">{next === 1 ? 1 : 2} / 2</span>
                <hr></hr>
                <div style={{ marginTop: "-15px" }}>
                  <button className="btnLeft" onClick={handlePrevSlideClient}>
                    <i>
                      <HiChevronLeft />
                    </i>
                    <span>Prev</span>
                  </button>
                  <button className="btnRight" onClick={handleNextSlideClient}>
                    <span>Next</span>
                    <i>
                      <HiChevronRight />
                    </i>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={11}>
              <div>
                <Slider {...settings_testimonials} ref={refClient}>
                  <div>
                    <Container style={{ padding: "0px" }}>
                      <Row>
                        <Col lg={3}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_1.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_2.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_3.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_4.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_5.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_6.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_7.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_8.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div>
                    <Container style={{ padding: "0px" }}>
                      <Row>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_9.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_10_plain.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_11.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_12_plain.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
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
