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
          <Row className="h-100">
            <Col lg={12}></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
