import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

export default function services() {
  return (
    <>
      <Container fluid className="conServicesPage h-100">
        <Row className="h-100 align-items-center justify-content-center d-flex">
          <Col lg={12}>
            <p className="pNoStroke">Our</p>
            <p className="pNoStroke">
              Creative <span>Solutions</span>
            </p>
            <p className="pSub">
              Focused on functionality, fueled by connection, designed with
              purpose.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="h-100 conServicesPage2">
        <Container className="h-100">
          <Row className = "h-100 align-items-center">
            <Col lg={4}>
              <p className="pCount">01</p>
            </Col>
            <Col lg={8}>
              <div className="divService">
                <Row>
                  <Col lg={4}>
                    <p className="pHeader">
                      Software Development and Design Services
                    </p>
                  </Col>
                  <Col lg={8}>
                    <p className="pDesc">
                      We build scalable software solutions that fit your
                      business requirements from Website Applications, Mobile
                      Applications, Bespoke Software and API Development.
                    </p>
                    <p className="pDesc">
                      Every great software project is composed of great ideas
                      executed by even greater talent. Our team is composed of
                      Business Analysts, UX/UI Designers, Software Developers
                      and IT Professionals that have the necessary skills to
                      turn your concepts and ideas into actual platforms.
                      Together with your company we will work with you in
                      building projects that strongly involve digital
                      transformation, project rescues and idea implementation.
                      We work with companies at different stages of their
                      business and ensure the use of Agile Methodologies.
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="divService">
                <Row>
                  <Col lg={4}>
                    <p className="pHeader">
                      Software Development and Design Services
                    </p>
                  </Col>
                  <Col lg={8}>
                    <p className="pDesc">
                      We build scalable software solutions that fit your
                      business requirements from Website Applications, Mobile
                      Applications, Bespoke Software and API Development.
                    </p>
                    <p className="pDesc">
                      Every great software project is composed of great ideas
                      executed by even greater talent. Our team is composed of
                      Business Analysts, UX/UI Designers, Software Developers
                      and IT Professionals that have the necessary skills to
                      turn your concepts and ideas into actual platforms.
                      Together with your company we will work with you in
                      building projects that strongly involve digital
                      transformation, project rescues and idea implementation.
                      We work with companies at different stages of their
                      business and ensure the use of Agile Methodologies.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
