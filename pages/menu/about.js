import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import Banner from "../../components/modules/banner";
import Tilt from "react-parallax-tilt";
import Slider from "react-slick";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
export default function about() {
  const ref = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleNextSlide = () => {
    ref.current.slickNext();
  };
  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  const things = [
    {
      header: "teamwork",
      desc: `We each bring a different perspective, background and expertise to the table and that’s what magnifies our collective impact. In the remote working era we’re in, teamwork plays as big a role as ever in Squaredot. We keep it simple, every voice is heard and the best ideas win.`,
    },
    {
      header: "creativity",
      desc: `The bigger and bolder the better. It’s easier to reign big ideas than plug gaps in small ones. Every client has very specific and unique challenges, so we approach every project with enthusiasm, excitement and a big, blank, open canvas of limitless possibilities.`,
    },
    {
      header: "excellence",
      desc: `We set a high bar of standards in everything we do, right down to the little details. We dig deep on details in our research and scheduling, and even in the execution of aesthetic designs or copy quirks, as it’s often the little details that have the biggest impact. Excellence for us is a mindset and keeps us on our toes no matter what the task. The output must always be something to be proud of, and we always strive to raise the bar.`,
    },
    {
      header: "balance",
      desc: `We strike a balanced approach. We have agency and client backgrounds, B2B and B2C. We play to our strengths and value our differences and engage both the left and right brain hemispheres, where rational planning meets emotional connections.`,
    },
    {
      header: "honesty",
      desc: `We’re courteous, not blunt, but we do tell it as it is. It helps to achieve better work and push marketing boundaries together. But our honesty principle goes beyond telling the truth and project updates, it also reflects our honesty of effort and intention. Good people, great work, amazing results. (Honestly!)`,
    },
  ];

  return (
    <>
      <Container fluid className="conAbout1 h-100">
        <Container clasName="h-100">
          <Row className="h-100 align-items-center">
            <Col lg={6}>
              <p className="p1">
                {" "}
                Behind every <span>great business</span> lies an epiphany.
              </p>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conTeam1">
        <Container className="conTeamInner">
          <Row>
            <Col lg={6}>
              <div className="divSticky">
                <p className="p1">
                  Meet the people who help bring <span>Our Vision</span> to
                  life.
                </p>
                <p className="p1Sub">
                  Everyone here at This is Beyond has a role to play in our
                  journey (while having plenty of fun at the same time). These
                  are some of the people leading the way…
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/alfonblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Alfon Labadan</p>
                  <p className="pPosition">Senior Lead Design Engineer</p>
                </div>
              </div>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/eskyeblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Eskye Custodio</p>
                  <p className="pPosition">Senior Designer</p>
                </div>
              </div>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/marblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Mark Seaglle</p>
                  <p className="pPosition">Director</p>
                </div>
              </div>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/marblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Mark Seaglle</p>
                  <p className="pPosition">Director</p>
                </div>
              </div>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/marblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Mark Seaglle</p>
                  <p className="pPosition">Director</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/marblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Mark Seaglle</p>
                  <p className="pPosition">Director</p>
                </div>
              </div>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/marblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Mark Seaglle</p>
                  <p className="pPosition">Director</p>
                </div>
              </div>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/marblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Mark Seaglle</p>
                  <p className="pPosition">Director</p>
                </div>
              </div>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/marblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Mark Seaglle</p>
                  <p className="pPosition">Director</p>
                </div>
              </div>
              <div className="card">
                <div
                  className="photo"
                  style={{ background: "url('../Image/Team/marblack.jpg')" }}
                ></div>
                <div className="divDesc">
                  <p className="pName">Mark Seaglle</p>
                  <p className="pPosition">Director</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className=" h-100 conVissionSection">
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col lg={6}>
              <p className="p1">Our Vission</p>
              <p className="p2">
                Our core purpose is to provide <span>extensive expertise.</span>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conWhy">
        <Container>
          <Row>
            <Col lg={6}>
              <p className="pStroke">Why</p>
              <p className="pNoStroke">
                Choose Us<span style={{ color: "#fd6b3b" }}>?</span>
              </p>
            </Col>
            <Col lg={6}>
              <div style={{ width: "0 auto" }}>
                <p className="pOver">An overview of what we do</p>
                <p className="pDesc">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam"
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="conChoose">
          <Row>
            <Col lg={4}>
              <div className="cardChoose text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/fgkmrslx.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#fd6b3b"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
                <p className="p1">User Interface</p>
                <p className="pWork">Graphic Design</p>
                <p className="pWork">UI/UX Design</p>
                <p className="pWork">Web Design</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="cardChoose text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/jvucoldz.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#fd6b3b"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
                <p className="p1">Web Development</p>
                <p className="pWork">Frontend & Backend</p>
                <p className="pWork">Wordpress</p>
                <p className="pWork">Server</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="cardChoose text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/zpxybbhl.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#fd6b3b"
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
                <p className="p1">Digital Marketting</p>
                <p className="pWork">Social Media Merketting</p>
                <p className="pWork">Search Engine Optimization</p>
                <p className="pWork">Blogging</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conThings">
        <Container>
          <Row>
            <Col lg={12}>
              <Slider {...settings} ref={ref}>
                {things.map((event) => (
                  <div className="divThings">
                    <p className="pHeader">{event.header}</p>
                    <p className="pHeaderSub">{event.desc}</p>
                  </div>
                ))}
              </Slider>
            </Col>
            <Col lg={12}>
              <div className="tableDots">
                <div className="cell">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "none" }}
                  >
                    <symbol
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="44px"
                      height="44px"
                      id="circle"
                      fill="none"
                      stroke="#fd6b3b"
                    >
                      <circle r={20} cy={22} cx={22} id="test"></circle>
                    </symbol>
                  </svg>

                  <ul className="dots">
                    <li className="liArrow" onClick={handlePrevSlide}>
                      <a>
                        <i>
                          <HiOutlineArrowSmLeft />
                        </i>
                      </a>
                    </li>
                    <li
                      className="li"
                      onClick={(e) => {
                        ref.current.slickGoTo(0);
                      }}
                    >
                      <a></a>
                    </li>
                    <li
                      className="li"
                      onClick={(e) => {
                        ref.current.slickGoTo(1);
                      }}
                    >
                      <a></a>
                    </li>
                    <li
                      className="li"
                      onClick={(e) => {
                        ref.current.slickGoTo(2);
                      }}
                    >
                      <a></a>
                    </li>
                    <li
                      className="li"
                      onClick={(e) => {
                        ref.current.slickGoTo(3);
                      }}
                    >
                      <a></a>
                    </li>
                    <li
                      className="li"
                      onClick={(e) => {
                        ref.current.slickGoTo(4);
                      }}
                    >
                      <a></a>
                    </li>

                    <li className="liArrow" onClick={handleNextSlide}>
                      <a>
                        <i>
                          <HiOutlineArrowSmRight />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conFounder">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="pStroke">
                The Co-Founder <span style={{ color: "#fd6b3b" }}>.</span>
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }} className="align-items-center">
            <Col lg={6}>
              <div className="divFounderDesc">
                <div className="divLine"></div>
                <p className="pName">Randolph Yu</p>
                <p className="pPosition">Co-Founder & Managing Partner</p>
                <p className="pDesc">
                  Randolph is the head of operations and solutions architecture
                  for Guerilla 360. With his in-depth knowledge on the latest
                  cutting-edge technology and it’s real-world application for
                  enterprise solutions, he is able to integrate new practices
                  and applications geared towards a company’s growth and
                  digitalization through software applications and automations.
                  Formerly a full stack software engineer and solutions
                  architect, he is experienced in implementing highly customized
                  system applications that can scale towards any company size.
                  It is his directive that every project Guerilla 360 ensures
                  the proper solution is architected and built to scale
                  following a quality-first approach.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="divImageFounder">
                <img
                  src="../Image/Team/randolph_new.jpg"
                  className="img-fluid image2 mx-auto d-flex"
                ></img>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }} className="align-items-center">
            <Col lg={6}>
              <div className="divImageFounder">
                <img
                  src="../Image/Team/randolph_new.jpg"
                  className="img-fluid image2 mx-auto d-flex"
                ></img>
              </div>
            </Col>
            <Col lg={6}>
              <div className="divFounderDesc">
                <div className="divLine"></div>
                <p className="pName">Nathan Nakar</p>
                <p className="pPosition">Co-Founder & Managing Partner</p>
                <p className="pDesc">
                  Nathan Nakar is the co-founder and managing partner of
                  Guerilla 360 specializing in Innovations Ideation. With around
                  a decade of experience in business development and marketing,
                  he has been able to conceptualize and engineer new solutions
                  and innovations that create both value and revenue for a
                  business of any scale.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* OUR CULTURE BANNER */}
      <Banner />
      
    </>
  );
}
