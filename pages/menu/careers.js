import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Banner from "../components/modules/BannerHandler";
import Script from "next/script";

export default function careers() {
  useEffect(() => {
    const slider = document.querySelector(".wrapperCard");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);
  return (
    <>
      <Container fluid className="conJoin">
        <Row className="h-100 align-items-center">
          <Col lg={12}>
            <div className="divHiring">
              <p>Looking for a Job</p>
            </div>
            <canvas id="canvasPeeps"></canvas>
            <Script src="/script/peeps.js" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="conJobs">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="pHeader">Open position</p>
            </Col>
            <Col lg={4}></Col>
            <Col lg={8}>
              <div className="form-inline">
                <p className="pNumber">01</p>
                <p className="pPosition">Node Software Developer</p>
                <p className="pJobDesc">
                  Guerilla 360 is looking for a full-time work from home Node
                  Application Developer. We are looking to hire multiple Node.Js
                  developers who are familiar with API Development with any
                  framework using modern Typescript.
                </p>
                <p className="pJobDesc">
                  Come join our team and we'll take you to the next level!
                </p>
              </div>
              <div className="form-inline">
                <p className="pNumber">02</p>
                <p className="pPosition">QA Engineer</p>
                <p className="pJobDesc">
                  Looking for highly ambitious and experienced QA Engineers to
                  join our team (Work from Home). Your role will primarily be to
                  work with an extensive list of clientele of different
                  industries in order to create and execute test plans via
                  automated testing for various platforms both mobile and web.
                </p>
                <p className="pJobDesc">
                  Come join our team and we'll take you to the next level!
                </p>
              </div>
              <div className="form-inline">
                <p className="pNumber">03</p>
                <p className="pPosition">Sr. Flutter Mobile Developer</p>
                <p className="pJobDesc">
                  Looking for highly ambitious and experienced QA Engineers to
                  join our team (Work from Home). Your role will primarily be to
                  work with an extensive list of clientele of different
                  industries in order to create and execute test plans via
                  automated testing for various platforms both mobile and web.
                </p>
                <p className="pJobDesc">
                  Come join our team and we'll take you to the next level!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conBenefits">
        <Container className="conInner">
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="form-inline">
                <p className="pNoStroke">Benefits</p>
                <p className="spanHeart">❤️</p>
              </div>
              <span className="pStroke">Simplified</span>
              <p className="pDesc">
                You don't have to be a big company to offer great employee
                benefits.
              </p>
            </Col>
            <Col lg={8}>
              <div
                className="wrapperCard"
                onMouseOver={(e) => {
                  const mouse = document.querySelector(".mouse");
                  mouse.classList.add("d-flex");
                }}
                onMouseOut={(e) => {
                  const mouse = document.querySelector(".mouse");
                  mouse.classList.remove("d-flex");
                }}
              >
                <div className="card align-items-center justify-content-center d-flex">
                  <div className="cardShadow">
                    <div className="cardInner">
                      <lord-icon
                        src="https://cdn.lordicon.com/qhviklyi.json"
                        trigger="loop"
                        colors="primary:#121331,secondary:#fd6b3b"
                        style={{
                          width: "100px",
                          height: "100px",
                          marginLeft: "-20px",
                        }}
                      ></lord-icon>
                      <p className="pHeader">Competitve Salary</p>
                      <p className="pHeaderSub">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card align-items-center justify-content-center d-flex">
                  <div className="cardInner">
                    <lord-icon
                      src="https://cdn.lordicon.com/yyecuati.json"
                      trigger="loop"
                      colors="primary:#121331,secondary:#fd6b3b"
                      style={{
                        width: "100px",
                        height: "100px",
                        marginLeft: "-20px",
                      }}
                    ></lord-icon>
                    <p className="pHeader">Goverment Benefits</p>
                    <p className="pHeaderSub">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="card align-items-center justify-content-center d-flex">
                  <div className="cardInner">
                    <lord-icon
                      src="https://cdn.lordicon.com/lupuorrc.json"
                      trigger="loop"
                      colors="primary:#121331,secondary:#fd6b3b"
                      style={{
                        width: "100px",
                        height: "100px",
                        marginLeft: "-20px",
                      }}
                    ></lord-icon>
                    <p className="pHeader">Holidays</p>
                    <p className="pHeaderSub">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="card align-items-center justify-content-center d-flex">
                  <div className="cardInner">
                    <lord-icon
                      src="https://cdn.lordicon.com/hovbgwmd.json"
                      trigger="loop"
                      colors="primary:#121331,secondary:#fd6b3b"
                      style={{
                        width: "100px",
                        height: "100px",
                        marginLeft: "-20px",
                      }}
                    ></lord-icon>
                    <p className="pHeader">Paid Leaves</p>
                    <p className="pHeaderSub">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="card align-items-center justify-content-center d-flex">
                  <div className="cardInner">
                    <lord-icon
                      src="https://cdn.lordicon.com/zpxybbhl.json"
                      trigger="loop"
                      colors="primary:#121331,secondary:#fd6b3b"
                      style={{
                        width: "100px",
                        height: "100px",
                        marginLeft: "-20px",
                      }}
                    ></lord-icon>
                    <p className="pHeader">Great Co-workers</p>
                    <p className="pHeaderSub">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* OUR CULTURE BANNER */}
      <Banner />
    </>
  );
}
