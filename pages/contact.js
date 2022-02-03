import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function contact() {
  return (
    <Container fluid className="h-100 conContact">
      <Container fluid className="h-100 conInner">
        <Row className="h-100 align-items-center justify-content-center d-flex">
          <Col lg={6}>
            <div className="divLeft">
              <p className="pHeader">Work with us!</p>
              <p className="pHeaderSub">
                Full out the form and we will get back to you as soon as
                possible.
              </p>
              <Row>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Full name"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      background: "#F6F8FA",
                      outline: "none",
                    }}
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Contact number"
                    variant="outlined"
                    sx={{ width: "100%", background: "#F6F8FA" }}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "15px", background: "#F6F8FA" }}>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{ width: "100%", background: "#F6F8FA" }}
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Services"
                    variant="outlined"
                    sx={{ width: "100%", background: "#F6F8FA" }}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "15px" }}>
                <Col lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={3}
                    sx={{ width: "100%", background: "#F6F8FA" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="conButton">
                    <button className="btn1" href="#">
                      hover me
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} syle={{ position: "relative" }}>
            <div className="divRight">
              <p className="pQuote">"</p>
              <p className="pNoStroke">We build software.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
