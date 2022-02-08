import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function contact() {
  useEffect((e) => {
    var map = L.map("map", {
      // Set latitude and longitude of the map center (required)
      center: [12.99766, -84.90838],
      // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
      zoom: 5,
    });

    // Create a Tile Layer and add it to the map

    var Stadia_AlidadeSmoothDark = L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    ).addTo(map);
  }, []);

  return (
    <>
      <Container fluid className="conContact">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="pNoStroke">Let's Work</p>
              <p className="pStroke">
                Together <span className="spanWave">👋</span>
              </p>
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
                  <p className="pHeader">Get in touch with us</p>
                  <p className="pHeaderSub">
                    No time to chat at the moment? Use our form instead.We got
                    to where we are today through a combination of talent,
                    creativity, and the right mindset.
                  </p>
                  <Row style={{ margin: "20px auto" }} className="p-0">
                    <Col lg={6} className="p-0">
                      <div className="input-box">
                        <input
                          type="text"
                          id="field"
                          placeholder=" "
                          required
                        />
                        <label className="lbl">First name</label>
                      </div>
                    </Col>
                    <Col lg={6} className="p-0">
                      <div className="input-box">
                        <input
                          type="text"
                          id="field"
                          placeholder=" "
                          required
                        />
                        <label className="lbl">Last name</label>
                      </div>
                    </Col>
                    <Col lg={6} className="p-0">
                      <div className="input-box">
                        <input
                          type="text"
                          id="field"
                          placeholder=" "
                          required
                        />
                        <label className="lbl">Email</label>
                      </div>
                    </Col>
                    <Col lg={6} className="p-0">
                      <div className="input-box">
                        <input
                          type="text"
                          id="field"
                          placeholder=" "
                          required
                        />
                        <label className="lbl">Number</label>
                      </div>
                    </Col>
                    <Col lg={12} className="p-0">
                      <div className="input-box">
                        <textarea
                          type="text"
                          id="field"
                          placeholder=" "
                          required
                          rows="10"
                          style={{ width: "105%" }}
                        />
                        <label className="lbl">Message</label>
                      </div>
                    </Col>
                  </Row>
                  <div style={{ marginTop: "-10px" }}>
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
                        I agree my information can be used to contact me
                        regarding my enquiry.
                      </span>
                    </label>
                  </div>
                  <div className="btnAtom">
                    <span>Submit</span>
                    <div className="dot"></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conMap">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div id="map"></div>
            </Col>
            <Col lg={6}>
              <p className="pMap">
                Pay us a <span>visit.</span>
              </p>
              <p className="pMapSub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="pMapSub">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
