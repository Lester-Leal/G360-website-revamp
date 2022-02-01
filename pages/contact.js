import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function contact() {
  return (
    <Container fluid className="h-100 conContact">
      <div className="divImg"></div>
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center d-flex">
          <Col lg={6}>
            <p>We Copde</p>
          </Col>
          <Col lg={6}>
            <div className="divRight">
              <p>We Copde</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
