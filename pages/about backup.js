import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { ImQuotesLeft } from "react-icons/im";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";

export default function about() {
  const [count, setCount] = useState(1);
  const [index, setIndex] = React.useState(0);
  const TEXTS = ["Forest", "Building", "Tree", "Color"];

  var client = [
    {
      client: "Washwell",
      desc: `At Washwell, we work to provide a simple high-quality solution to take care of everything in your closet so you have the time for what really matters.`,
      date: "APR.2021",
      sub: "Clean clothes at your doorstep",
    },
    {
      client: "Aquanumdo",
      desc: "Aquamundo Sports envisions everyone being given the chance to enjoy scuba diving and water sports through its products by enhancing their performance and providing them with a better experience in the water. With consistent growth, Aquamundo Sports will be one of the most sought-after brands of scuba diving equipment in the country, as well as overseas.",
      date: "MAY.2020",
      sub: "Engineered for water",
    },
    {
      client: "AAA Equities",
      desc: "AAA Southeast Equities has been a brokerage with the Philippine Stock Exchange since 1989.Our stock brokerage is committed to helping you succeed in growing your investments. Trading in the stock market is tough, and outdated platforms make it even harder. In other words, we believe your investments could do much better with the right tools. You need every edge you can get.",
      date: "SEP.2021",
      sub: "Experience next level trading",
    },
    {
      client: "Seedbox",
      desc: "Seedbox Philippines is a service that lets you invest in funds online whether on your phone or through your desktop. Sign up once and you're good to go.",
      date: "SEP.2021",
      sub: "Investing simplified",
    },
  ];

  useEffect(() => {
    console.log(count);
  }, [count]);

  function goNext() {
    setCount(count + 1);
  }

  function goPrev() {
    setCount(count - 1);
    setIndex((index) => index - 1);
  }
  return (
    <>
      <Container fluid className="conAbout">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="divAbout">
                <p className="p1">
                  About Us<span style={{ color: "#fd6b3b" }}>.</span>
                </p>
                <p className="p2">
                  GUERILLA 360 is a global business solutions company, focused
                  on providing integrated business solutions in the areas of
                  Software Solutions and Personnel Outsourcing.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="conMission" style={{ marginTop: "50px" }}>
        <Row>
          <Col lg={12}>
            <p className="pHeader">Our Mission</p>
          </Col>
          <Col lg={1}>
            <hr></hr>
          </Col>
          <Col lg={11}>
            <p className="pHeaderSub">
              ...we seek to lead companies towards business direction they would
              like to purse.
            </p>
          </Col>
          <Col lg={6}>
            <p className="pMission pLeft">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.{" "}
            </p>
          </Col>
          <Col lg={6}>
            <p className="pMission">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <img
              src="Image/mission.jpg"
              className="img-fluid d-flex imgMission"
            ></img>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col lg={12}>
            <p className="pHeader">Our Vission</p>
          </Col>
          <Col lg={1}>
            <hr></hr>
          </Col>
          <Col lg={11}>
            <p className="pHeaderSub">
              ...we seek to lead companies towards business direction they would
              like to purse.
            </p>
          </Col>
          <Col lg={6}>
            <p className="pMission pLeft">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.{" "}
            </p>
          </Col>
          <Col lg={6}>
            <p className="pMission">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.{" "}
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="conWorks">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className={index === 0 ? "d-none" : ""} onClick={goPrev}>
                <p className="pPrev">previous</p>
                <TextTransition
                  text={index === 0 ? "" : client[index - 1].client}
                  springConfig={presets.gentle}
                  className="pPrevName"
                />
              </div>
              <div style={{ position: "relative", padding: "30px 0px" }}>
                <div className="divScroll"></div>
                <div style={{ marginLeft: "30px", padding: "30px 0px" }}>
                  <p className="pCount">0{count}</p>
                  <TextTransition
                    text={client[count - 1].client}
                    springConfig={presets.stiff}
                    noOverflow={true}
                    className="pClient"
                  />
                  <p className="pDate">APRIL.2021</p>
                  <TextTransition
                    text={client[count - 1].sub}
                    springConfig={presets.stiff}
                    noOverflow={true}
                    className="pDescName"
                  />
                  <TextTransition
                    text={client[count - 1].desc}
                    springConfig={presets.stiff}
                    noOverflow={true}
                    className="pDesc"
                  />
                </div>
              </div>
              <div
                className={count === client.length - 1 ? "d-none" : ""}
                onClick={(e) => {
                  goNext();
                  setIndex((index) => index + 1);
                }}
              >
                <p className="pNext">next</p>
                <TextTransition
                  text={client[index + 1].client}
                  springConfig={presets.stiff}
                  noOverflow={true}
                  className="pNextName"
                />
              </div>
            </Col>
            <Col lg={6}>
              <img src="Image/washwell.png" className="img-fluid d-flex"></img>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
a