import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import { useLoaderStore } from "../../store/store";

export default function navbar(props) {
  const setLoader = useLoaderStore((state) => state.addReset);
  const router = useRouter();
  const [scrollNav, setScrollnav] = useState(false);
  const [full, setFull] = useState(false);
  const [pathUrl, setPathUrl] = useState("");
  const [checked, setChecked] = useState(false);
  const urlPath = router.pathname;
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setScrollnav(true);
      console.log(window.scrollY);
    } else {
      setScrollnav(false);
      console.log(window.scrollY);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground, true);
  });
  useEffect(() => {
    if (full) {
      props.show();
    } else {
      props.unShow();
    }
  }, [full]);

  return (
    <>
      <div className={!full ? "d-none" : "wrapper"}>
        <ul className="background-shapes">
          <li className="shape square" />
          <li className="shape triangle" />
          <li className="shape circle" />
          <li className="shape circle" />
          <li className="shape triangle" />
          <li className="shape square" />
          <li className="shape square" />
          <li className="shape circle" />
          <li className="shape triangle" />
          <li className="shape square" />
        </ul>
      </div>
      <Container fluid className="navFull">
        <Container className="h-100">
          <Row className="align-items-center justify-content-center d-flex h-100">
            <Col lg={8}>
              <div className="form-inline">
                <p className="pCount">01</p>
                <p className="pMenu Animation">Services</p>
              </div>
              <div className="form-inline">
                <p className="pCount">02</p>
                <p
                  className="pMenu Animation"
                  onClick={(e) => {
                    router.push("/project");
                    setFull(false);
                    document
                      .querySelector(".navFull")
                      .classList.toggle("showNav");
                    setChecked((full) => !full);
                  }}
                >
                  Portfolio
                </p>
              </div>
              <div className="form-inline">
                <p className="pCount">03</p>
                <p
                  className="pMenu Animation"
                  onClick={(e) => {
                    setLoader(true);
                    router.push("/about");
                    setFull(false);
                    document
                      .querySelector(".navFull")
                      .classList.toggle("showNav");
                    setChecked((full) => !full);
                  }}
                >
                  About
                </p>
              </div>
              <div className="form-inline">
                <p className="pCount">04</p>
                <p className="pMenu Animation">Careers</p>
              </div>
              <div className="form-inline">
                <p className="pCount">05</p>
                <p
                  className="pMenu Animation"
                  onClick={(e) => {
                    router.push("/contact");
                    setFull(false);
                    document
                      .querySelector(".navFull")
                      .classList.toggle("showNav");
                    setChecked((full) => !full);
                  }}
                >
                  Contact
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <p className="pHeader">Contact Info</p>
              <div className="divClient">
                <p className="pMenu1">Location | PH</p>
                <p className="pDesc" style={{ maxWidth: "300px" }}>
                  290 Aguirre Ave, Parañaque, 1720 Metro Manila
                </p>
              </div>
              <div className="divClient">
                <p className="pMenu1">Phone Number</p>
                <p className="pDesc">+63 917 766 1380 | +63 999 124 4211</p>
              </div>
              <div className="divClient">
                <p className="pMenu1">Email</p>
                <p className="pDesc">info@guerilla360.com</p>
              </div>
              <div className="divClient">
                <p className="pMenu1">Socials</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f icon"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className="divNavbar"
        style={{
          background: full || urlPath === "/contact" ? "transparent" : "",
        }}
      >
        <Row>
          <Col lg={6}>
            <img
              src={!full ? "Image/logo_white.png" : ""}
              className="img-fluid"
              style={{
                width: "120px",
                cursor: "pointer",
                filter: full ? "brightness(0)" : "",
              }}
              onClick={(e) => {
                setLoader(false);
                router.push("/");
              }}
            />
          </Col>
          <Col lg={6}>
            <div style={{ postiion: "relative" }}>
              <div id="webapp_cover">
                <div id="menu_button">
                  <input
                    type="checkbox"
                    id="menu_checkbox"
                    checked={checked}
                    onChange={(e) => {
                      setFull((full) => !full);
                      setChecked((full) => !full);
                      document
                        .querySelector(".navFull")
                        .classList.toggle("showNav");
                    }}
                  />
                  <label htmlFor="menu_checkbox" id="menu_label">
                    <div id="menu_text_bar" />
                  </label>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
