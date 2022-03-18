import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
export default function navbar(props) {
  const router = useRouter();
  const [scrollNav, setScrollnav] = useState(false);
  const [full, setFull] = useState(false);
  const [pathUrl, setPathUrl] = useState("");
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
      <Container fluid className="navFull">
        <Container className="h-100">
          <Row className="align-items-center justify-content-center d-flex h-100">
            <Col lg={12}>
              <div className="mx-auto">
                <Row>
                  <Col lg={4}>
                    <p className="pHeader">FEATURED WORK</p>
                    <div className="divClient">
                      <p className="pClient">WASHWELL</p>
                      <p className="pDesc">
                        They work to provide a simple high-quality solution to
                        take care of everything in your closet so you have the
                        time for what really matters.
                      </p>
                    </div>
                    <div className="divClient">
                      <p className="pClient">Enderun</p>
                      <p className="pDesc">
                        A private non-sectarian undergraduate college situated
                        at the Bonifacio Global City in Taguig, Metro Manila,
                        Philippines
                      </p>
                    </div>
                    <div className="divClient">
                      <p className="pClient">Lifeline</p>
                      <p className="pDesc">
                        We provide 24/7 quick & reliable response and
                        transportation while providing the finest medical care
                        when transporting patients. "Virtual Emergency Room On
                        Wheels".
                      </p>
                    </div>
                    <div className="divClient">
                      <p className="pClient">Phoenix</p>
                      <p className="pDesc">
                        Is the first independent oil company to be listed in the
                        Philippine Stock Exchange after the Oil Deregulation Law
                        was passed in 1998
                      </p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="mx-auto d-block" style={{ width: "200px" }}>
                      <p className="pHeader">LINKS</p>
                      <div className="divClient">
                        <p className="pMenu">Home</p>
                      </div>
                      <div className="divClient">
                        <p className="pMenu">Services</p>
                      </div>
                      <div className="divClient">
                        <a href="/about">
                          <p className="pMenu">About</p>
                        </a>
                      </div>
                      <div className="divClient">
                        <p className="pMenu">Portfolio</p>
                      </div>
                      <div className="divClient">
                        <p className="pMenu">Message Us</p>
                      </div>
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
                      <p className="pDesc">
                        +63 917 766 1380 | +63 999 124 4211
                      </p>
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
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className="divNavbar"
        style={{ background: full || urlPath === "/contact" ? "transparent" : "" }}
      >
        <Row>
          <Col lg={6}>
            <img
              src={!full ? "Image/logo_white.png" : "Image/logo_dark.png"}
              className="img-fluid"
              style={{ width: "140px" }}
            />
          </Col>
          <Col lg={6}>
            <div style={{ position: "relative" }}>
              <div
                className={full ? "toggle-icon pushed" : "toggle-icon"}
                onClick={(e) => {
                  setFull((full) => !full);
                  document
                    .querySelector(".navFull")
                    .classList.toggle("showNav");
                }}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
