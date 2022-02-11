import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export default function careers() {
  return (
    <>
      <Container fluid className="conJoin h-100">
        <Row className="h-100 align-items-center">
          <Col lg={12}>
            <div className="divHiring">
              <p>Looking a Job?</p>
            </div>
            <canvas id="canvasPeeps"></canvas>
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
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <p className="pNoStroke">
                Benefits <br /> <span className="pStroke">Simplified</span>
              </p>
              <p className="pDesc">
                You don't have to be a big company to offer great employee
                benefits.
              </p>
            </Col>
            <Col lg={8}>
              <div className="wrapperCard">
                <div className="card">
                  <div
                    className="photo"
                    style={{ background: "url('Image/Team/alfonblack.jpg')" }}
                  ></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
