import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import TextTransition, { presets } from "react-text-transition";

var testimonials = [
    {
      Position: "Chief Executive Officer",
      Name: "Sasuke Uchiha",
      Image: `Image/sasuke.jpg`,
      Message:
        "I know the four of us have worked together. And for a while, I thought I could choose that path instead… but in the end… I've decided on revenge. That's always been my purpose of living",
    },
    {
      Position: "Co-Founder",
      Name: "Naruto Uzumaki",
      Image: `Image/naruto.jpg`,
      Message:
        "Don't underestimate me! I don't quit and I don't run! You can act tough all you want! You're not gonna scare me off! No way! I don't care if I do get stuck as a genin for the rest of my life! I'll still be Hokage someday!",
    },
    {
      Position: "Project Manager",
      Name: "Sakura Uchiha",
      Image: `Image/sakura.jpg`,
      Message:
        "Always acting like a fool who only knows one thing… Hokage, Hokage. I'm sorry Naruto… that impossible dream of yours… I don't want to see it crushed!",
    },
  ];

export default function TestimonialHandler() {
const [count, setCount] = useState(0);
  return (
    <>
      <Container fluid className="conTest">
        <Container style={{ position: "relative" }}>
          <p className="pQuote">"</p>
          <Row>
            <Col lg={12}>
              <div className="divMess">
                <span className="pHeader">CLIENT SUCCESS STORIES</span>
                <TextTransition
                  text={'"' + testimonials[count].Message + '"'}
                  springConfig={presets.stiff}
                  noOverflow={true}
                  className="pMessage"
                />
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="form-inline" style={{ marginTop: "15px" }}>
                      <img
                        src={testimonials[count].Image}
                        className="img-fluid"
                      ></img>
                      <div style={{ marginTop: "10px" }}>
                        <TextTransition
                          text={testimonials[count].Name}
                          springConfig={presets.stiff}
                          noOverflow={true}
                          className="pName"
                        />

                        <TextTransition
                          text={testimonials[count].Position}
                          springConfig={presets.stiff}
                          noOverflow={true}
                          className="pPosition"
                        />
                      </div>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="float-end">
                      <div className="demo">
                        <a href className="arrow left"
                          onClick={(e) => {
                            if (count === 0) {
                              setCount(2);
                            } else {
                              setCount(count - 1);
                            }
                          }} >
                          <i />
                          <svg>
                            <use xlinkHref="#circle"></use>
                          </svg>
                        </a>
                        <a href className="arrow" onClick={(e) => {
                            if (count === 2) {
                              setCount(0);
                            } else {
                              setCount(count + 1);
                            }
                          }} >
                          <i/>
                          <svg>
                            <use xlinkHref="#circle"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Container>
    </>
  );
}
