import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import TextTransition, { presets } from "react-text-transition";

export default function services() {
  const [count, setCount] = useState("01");
  useEffect(() => {
    const count = document.querySelector("#pNumber");
    window.onscroll = function () {
      if (isInView(divService1, true)) {
        var testDiv = document.getElementById("divService1");
        count.style.marginTop = testDiv.offsetTop + "px";
        if (count !== "01") {
          console.log(1);
          setCount("01");
        }
      }
      if (isInView(divService2, true)) {
        var testDiv = document.getElementById("divService2");
        count.style.marginTop = testDiv.offsetTop + "px";
        if (count !== "02") {
          setCount("02");
          console.log(2);
        }
      }
      if (isInView(divService3, true)) {
        var testDiv = document.getElementById("divService3");
        count.style.marginTop = testDiv.offsetTop + "px";
        if (count !== "03") {
          setCount("03");
          console.log(3);
        }
      }
      try {
        if (isInView(divService4, true)) {
          var testDiv = document.getElementById("divService4");
          count.style.marginTop = testDiv.offsetTop + "px";
        }
      } catch (error) {}
    };
  });
  function isInView(el) {
    const box = el.getBoundingClientRect();
    return box.top < window.innerHeight / 2 && box.bottom > window.innerHeight;
  }

  var x = [
    {
      desc: "Web Design and Development",
    },
    { desc: "Mobile Development" },
    { desc: "Api Development" },
    { desc: "Development Options" },
    { desc: "Third Party Platform Integrations" },
    { desc: "Product Develpment & Prototyping" },
    { desc: "User Interface and User Experience Development & Design" },
    { desc: "Graphic Design Services" },
    { desc: "Server Management" },
    { desc: "Business Aanalysis and Quality Assurance Engineering" },
  ];

  return (
    <>
      <Container fluid className="conServicesPage h-100">
        <Row className="h-100 align-items-center justify-content-center d-flex">
          <Col lg={12}>
            <p className="pNoStroke">Our</p>
            <p className="pNoStroke">
              Creative <span>Solutions</span>
            </p>
            <p className="pSub">
              Focused on functionality, fueled by connection, designed with
              purpose.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="conServicesPage2">
        <Container className="">
          <Row className="">
            <Col lg={4}>
              <div id="pNumber" style={{ transition: "all 0.3s" }}>
                <TextTransition
                  text={count}
                  springConfig={presets.stiff}
                  noOverflow={true}
                  className="pCount"
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="divOuterService">
                <div className="divService" id="divService1">
                  <Row>
                    <Col lg={4}>
                      <p className="pHeader">
                        Software Development and Design Services
                      </p>
                    </Col>
                    <Col lg={8}>
                      <p className="pDesc">
                        We build scalable software solutions that fit your
                        business requirements from Website Applications, Mobile
                        Applications, Bespoke Software and API Development.
                      </p>
                      <p className="pDesc">
                        Every great software project is composed of great ideas
                        executed by even greater talent. Our team is composed of
                        Business Analysts, UX/UI Designers, Software Developers
                        and IT Professionals that have the necessary skills to
                        turn your concepts and ideas into actual platforms.
                        Together with your company we will work with you in
                        building projects that strongly involve digital
                        transformation, project rescues and idea implementation.
                        We work with companies at different stages of their
                        business and ensure the use of Agile Methodologies.
                      </p>
                      <div className="divCapabilities">
                        <p className="pHead">Our Capabilities</p>
                        {x.map((number, i) => (
                          <div className="form-inline">
                            <p className="pCount">{i + 1}</p>
                            <p className="pCapabilities">{number.desc}</p>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <p className="pSide">Framewor Used</p>
                    </Col>
                  </Row>
                </div>
                <div className="divService" id="divService2">
                  <Row>
                    <Col lg={4}>
                      <p className="pHeader">
                        Software Development and Design Services
                      </p>
                    </Col>
                    <Col lg={8}>
                      <p className="pDesc">
                        Work with us to find and manage the right IT & Design
                        Talent to be fully integrated into your company’s
                        ecosystem.
                      </p>
                      <p className="pDesc">
                        We match your business needs with capable and
                        exceptional talent in the areas of Software Development,
                        Design, Customer Experience and IT Services. Our job
                        doesn’t stop at finding the right people for your
                        organisation. We provide extensive project and people
                        management while working closely with your company to
                        ensure effective management, milestone based execution
                        and clear task delegation. Our solutions may be
                        customized to fit your business needs.
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="divService" id="divService3">
                  <Row>
                    <Col lg={4}>
                      <p className="pHeader">
                        Custom BPO and Shared Staffing Solutions
                      </p>
                    </Col>
                    <Col lg={8}>
                      <p className="pDesc">
                        Work with us to find and manage the right IT & Design
                        Talent to be fully integrated into your company’s
                        ecosystem.
                      </p>
                      <p className="pDesc">
                        We match your business needs with capable and
                        exceptional talent in the areas of Software Development,
                        Design, Customer Experience and IT Services. Our job
                        doesn’t stop at finding the right people for your
                        organisation. We provide extensive project and people
                        management while working closely with your company to
                        ensure effective management, milestone based execution
                        and clear task delegation. Our solutions may be
                        customized to fit your business needs.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
