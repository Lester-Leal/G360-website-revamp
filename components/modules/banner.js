import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

export default function banner() {
  return (
    <>
      <Container fluid className="conBanner">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="divHeader">
                <p className="pTitle">OUR CULTURE</p>
                <p className="pTitleSub">RUNS DEEP</p>
                <div className="divDesc">
                  <p className="pHeader">
                    Have a project in mind? <br/>Lets get to work.
                  </p>
                  <p className="pHeaderSub">
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
    </>
  );
}
