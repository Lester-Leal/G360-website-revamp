import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import Slider from "react-slick";

export default function ClientHandler() {
    const [next, setNext] = useState(1);

    const settings_testimonials = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
      };
      const refClient = useRef(null);
      
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
      <Container fluid className="conClients">
        <Container>
          <Row>
            {/* CONTENT TITLE */}
            <Col lg={8}>
              <p className="pHeader">
                <span style={{ color: "white" }}>Our</span> Clients.
              </p>
            </Col>

            {/* CLIENT LOGO CARDS */}
            <Col lg={11}>
              <div>
                <Slider {...settings_testimonials} ref={refClient}>
                  <div>
                    <Container style={{ padding: "0px" }}>
                      <Row>
                        <Col lg={3}>
                          <a className="link">
                            <div className="link__text">
                              <img src="Image/client_1.png" className="img-fluid d-flex" ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        
                        <Col lg={3}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_2.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_3.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_4.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_5.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_6.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_7.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_8.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
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
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_9.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_10_plain.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_11.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_12_plain.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              <div className="sensor__background" />
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Slider>
              </div>
            </Col>

            {/* VERTICALLY TEXT ON RIGHT SIDE */}
            <Col lg={1} style={{ position: "relative" }}>
              <div className="rotate">
                We are passionate with our clients{" "}
                <span>
                  <FaHeart />
                </span>
              </div>
            </Col>
            
            {/* CLIENTS PAGE BUTTONS */}
            <Col lg={11}>
              <div style={{ width: "200px", float: 'right'}} >
                <span className="pCount">{next === 1 ? 1 : 2} / 2</span>
                <hr></hr>
                <div style={{ marginTop: "-5px" }}>
                  <div className="demo">
                    <a href className="arrow left" onClick={handlePrevSlideClient} >
                      <i/>
                      <svg> <use xlinkHref="#circle"></use> </svg>
                    </a>
                    <a href className="arrow" onClick={handleNextSlideClient} style={{ marginLeft: "85px" }} >
                      <i/>
                      <svg>
                        <use xlinkHref="#circle"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
    </>
  );
}
