import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function contact() {
  return (
    <Container fluid className="conContact">
      <Container>
        <Row>
          <Col lg={12}>
            <p className="pNoStroke">Let's Work</p>
            <p className="pStroke">Together</p>
          </Col>
        </Row>
        <Row className="row1">
          <Col lg={4}>
            <p className="pLight">PHONE</p>
            <p className="pDesc">+63 917 766 1380 | +63 999 124 4211</p>
            <p className="pLight">EMAIL</p>
            <p className="pDesc">info@guerilla360.com</p>
            <p className="pLight">LOCATION</p>
            <p className="pDesc">
              290 Aguirre Ave, Parañaque, 1720 Metro Manila
            </p>
          </Col>
          <Col lg={8}>
            <div className="divForm">
              <p className="pHeader">
                No time to chat at the moment? Use our form instead.
              </p>
              <div className="divInnerForm">
                <p className="pForm">Hi Guerilla360,</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
