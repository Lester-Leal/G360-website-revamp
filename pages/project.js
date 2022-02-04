import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useRouter } from "next/router";
import Slider from "react-slick";

export default function projects() {
  const [click, setClick] = useState(0);
  const ref = useRef(null);
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

  return (
    <>
      <Container fluid className="conProjects h-100">
        <Container fluid className="h-100 conInnerProject">
          <div className="divIcons">
            <i>
              <FaFacebookF />
            </i>
            <i>
              <FaLinkedinIn />
            </i>
            <i>
              <SiGmail />
            </i>
          </div>
          <div className="divArrow">
            <div className="demo">
              <a
                href
                className="arrow left"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  if (click === 0) {
                    handlePrevSlide()
                  } else {
                    setClick(click - 1);
                  }
                }}
              >
                <i />
                <svg>
                  <use xlinkHref="#circle"></use>
                </svg>
              </a>
              <a
                href
                className="arrow"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  if (click === 0) {
                    handleNextSlide()
                  } else {
                    setClick(click + 1);
                  }
                }}
              >
                <i />
                <svg>
                  <use xlinkHref="#circle"></use>
                </svg>
              </a>
            </div>
          </div>
          <Row className="h-100 align-items-center justify-content-center d-flex">
            <Col lg={12}>
              <Tilt
                tiltMaxAngleX={click !== 0 ? 10 : 0}
                tiltMaxAngleY={click !== 0 ? 10 : 0}
              >
                <Slider {...settings_testimonials} ref={ref}>
                  <div>
                    <div className="gallery">
                      <div
                        className={
                          click === 1
                            ? "item item-1 hoverCard align-items-center  d-flex"
                            : "item item-1"
                        }
                        id={click === 0 || click === 1 ? "" : "reduceBright"}
                        data-id={1}
                        onClick={(e) => {
                          try {
                            if (click === 0) {
                              setClick(
                                parseInt(
                                  e.target.attributes.getNamedItem("data-id")
                                    .value
                                )
                              );
                            } else {
                              setClick(0);
                            }
                          } catch (error) {}
                        }}
                      >
                        <div className="divText">
                          <p className="pSlide">Washwell</p>
                        </div>
                        <div
                          className={
                            click === 1
                              ? "divDesc align-items-center justify-content-center d-flex"
                              : "d-none"
                          }
                        >
                          <p className="pClient animate__animated animate__zoomIn">
                            Washwell
                          </p>
                          <p className="pVisit">VISIT WEBSITE</p>
                        </div>
                      </div>
                      <div
                        className={
                          click === 2 ? "item item-2 hoverCard" : "item item-2"
                        }
                        id={click === 0 || click === 2 ? "" : "reduceBright"}
                        data-id={2}
                        onClick={(e) => {
                          if (click === 0) {
                            setClick(
                              parseInt(
                                e.target.attributes.getNamedItem("data-id")
                                  .value
                              )
                            );
                          } else {
                            setClick(0);
                          }
                        }}
                      >
                        <div className="divText">
                          <p className="pSlide">Aquamundo</p>
                        </div>
                        <div
                          className={
                            click === 2
                              ? "divDesc align-items-center justify-content-center d-flex"
                              : "d-none"
                          }
                        >
                          <p className="pClient animate__animated animate__zoomIn">
                            Aquamundo
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          click === 3 ? "item item-3 hoverCard" : "item item-3"
                        }
                        id={click === 0 || click === 3 ? "" : "reduceBright"}
                        data-id={3}
                        onClick={(e) => {
                          if (click === 0) {
                            setClick(
                              parseInt(
                                e.target.attributes.getNamedItem("data-id")
                                  .value
                              )
                            );
                          } else {
                            setClick(0);
                          }
                        }}
                      >
                        <div className="divText">
                          <p className="pSlide">Natural Works</p>
                        </div>
                        <div
                          className={
                            click === 3
                              ? "divDesc align-items-center justify-content-center d-flex"
                              : "d-none"
                          }
                        >
                          <p className="pClient animate__animated animate__zoomIn">
                            Natural Works
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          click === 4 ? "item item-4 hoverCard" : "item item-4"
                        }
                        id={click === 0 || click === 4 ? "" : "reduceBright"}
                        data-id={4}
                        onClick={(e) => {
                          if (click === 0) {
                            setClick(
                              parseInt(
                                e.target.attributes.getNamedItem("data-id")
                                  .value
                              )
                            );
                          } else {
                            setClick(0);
                          }
                        }}
                      >
                        <div className="divText">
                          <p className="pSlide">Phoenix</p>
                        </div>
                        <div
                          className={
                            click === 4
                              ? "divDesc align-items-center justify-content-center d-flex"
                              : "d-none"
                          }
                        >
                          <p className="pClient animate__animated animate__zoomIn">
                            Phoenix
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          click === 5 ? "item item-5 hoverCard" : "item item-5"
                        }
                        id={click === 0 || click === 5 ? "" : "reduceBright"}
                        data-id={5}
                        onClick={(e) => {
                          if (click === 0) {
                            setClick(
                              parseInt(
                                e.target.attributes.getNamedItem("data-id")
                                  .value
                              )
                            );
                          } else {
                            setClick(0);
                          }
                        }}
                      >
                        <div className="divText">
                          <p className="pSlide">Seedbox</p>
                        </div>
                        <div
                          className={
                            click === 5
                              ? "divDesc align-items-center justify-content-center d-flex"
                              : "d-none"
                          }
                        >
                          <p className="pClient animate__animated animate__zoomIn">
                            Seedbox
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery">
                      <div
                        className={
                          click === 6 ? "item item-6 hoverCard" : "item item-6"
                        }
                        id={click === 0 || click === 6 ? "" : "reduceBright"}
                        data-id={6}
                        onClick={(e) => {
                          if (click === 0) {
                            setClick(
                              parseInt(
                                e.target.attributes.getNamedItem("data-id")
                                  .value
                              )
                            );
                          } else {
                            setClick(0);
                          }
                        }}
                      >
                        <div className="divText">
                          <p className="pSlide">Seedbox</p>
                        </div>
                        <div
                          className={
                            click === 6
                              ? "divDesc align-items-center justify-content-center d-flex"
                              : "d-none"
                          }
                        >
                          <p className="pClient animate__animated animate__zoomIn">
                            Seedbox
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          click === 7 ? "item item-7 hoverCard" : "item item-7"
                        }
                        id={click === 0 || click === 7 ? "" : "reduceBright"}
                        data-id={7}
                        onClick={(e) => {
                          if (click === 0) {
                            setClick(
                              parseInt(
                                e.target.attributes.getNamedItem("data-id")
                                  .value
                              )
                            );
                          } else {
                            setClick(0);
                          }
                        }}
                      >
                        <div className="divText">
                          <p className="pSlide">Seedbox</p>
                        </div>
                        <div
                          className={
                            click === 7
                              ? "divDesc align-items-center justify-content-center d-flex"
                              : "d-none"
                          }
                        >
                          <p className="pClient animate__animated animate__zoomIn">
                            Seedbox
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          click === 8 ? "item item-8 hoverCard" : "item item-8"
                        }
                        id={click === 0 || click === 8 ? "" : "reduceBright"}
                        data-id={8}
                        onClick={(e) => {
                          if (click === 0) {
                            setClick(
                              parseInt(
                                e.target.attributes.getNamedItem("data-id")
                                  .value
                              )
                            );
                          } else {
                            setClick(0);
                          }
                        }}
                      >
                        <div className="divText">
                          <p className="pSlide">Seedbox</p>
                        </div>
                        <div
                          className={
                            click === 8
                              ? "divDesc align-items-center justify-content-center d-flex"
                              : "d-none"
                          }
                        >
                          <p className="pClient animate__animated animate__zoomIn">
                            Seedbox
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
