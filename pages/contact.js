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
          <Col lg={5}>
            <p className="pLight">PHONE</p>
            <p className="pDesc">+63 917 766 1380 | +63 999 124 4211</p>
            <p className="pLight">EMAIL</p>
            <p className="pDesc">info@guerilla360.com</p>
            <p className="pLight">LOCATION</p>
            <p className="pDesc">
              290 Aguirre Ave, Parañaque, 1720 Metro Manila
            </p>
          </Col>
          <Col lg={7}>
            <div className="divForm">
              <div className="divInnerForm">
                <p className="pHeader">Work with us!</p>
                <p className="pHeaderSub">
                  No time to chat at the moment? Use our form instead.
                </p>
                <Row style={{ margin: "20px auto" }} className="p-0">
                  <Col lg={6} className="p-0">
                    <div className="input-box">
                      <input type="text" id="field" placeholder=" " required />
                      <label className="lbl">First name</label>
                    </div>
                  </Col>
                  <Col lg={6} className="p-0">
                    <div className="input-box">
                      <input type="text" id="field" placeholder=" " required />
                      <label className="lbl">Last name</label>
                    </div>
                  </Col>
                  <Col lg={6} className="p-0">
                    <div className="input-box">
                      <input type="text" id="field" placeholder=" " required />
                      <label className="lbl">Email</label>
                    </div>
                  </Col>
                  <Col lg={6} className="p-0">
                    <div className="input-box">
                      <input type="text" id="field" placeholder=" " required />
                      <label className="lbl">Number</label>
                    </div>
                  </Col>
                  <Col lg={12} className="p-0">
                    <div className="input-box" style = {{width: "100%"}}>
                      <textarea type="text" id="field" placeholder=" " required rows = "10"/>
                      <label className="lbl">Message</label>
                    </div>
                  </Col>
                </Row>
                <div>
                  <input
                    className="inp-cbx"
                    id="cbx"
                    type="checkbox"
                    style={{ display: "none" }}
                  />
                  <label className="cbx" htmlFor="cbx">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1" />
                      </svg>
                    </span>
                    <span className="spanText">
                      I agree my information can be used to contact me regarding
                      my enquiry.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
