import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
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
                <p className="pGreetings">Hi Guerilla360,</p>
                <div className="form-inline">
                  <p className="pForm">My name is,</p>
                  <div className="input-box">
                    <input type="text" id="field" placeholder=" " required />
                    <label className="lbl">First name</label>
                  </div>
                  <div className="input-box">
                    <input type="text" id="field" placeholder=" " required />
                    <label className="lbl">Last name</label>
                  </div>
                </div>
                <div className="form-inline">
                  <p className="pForm">and I work with</p>
                  <div className="input-box">
                    <input type="text" id="field" placeholder=" " required />
                    <label className="lbl">Company name</label>
                  </div>
                  <p className="pForm">as</p>
                  <div className="input-box">
                    <input type="text" id="field" placeholder=" " required />
                    <label className="lbl">Position</label>
                  </div>
                </div>
                <div className="form-inline">
                  <p className="pForm">I would love to talk about</p>
                  <div className="input-box">
                    <input type="text" id="field" placeholder=" " required />
                    <label className="lbl">Your enquiry</label>
                  </div>
                </div>
                <div className="form-inline">
                  <p className="pForm">You can reach me at</p>
                  <div className="input-box">
                    <input type="text" id="field" placeholder=" " required />
                    <label className="lbl">Email address</label>
                  </div>
                </div>
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
                    <span className = "spanText">I agree my information can be used to contact me regarding my enquiry.</span>
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
