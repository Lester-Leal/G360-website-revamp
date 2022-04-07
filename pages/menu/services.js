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
        count.style.marginTop = "10px";
        if (count !== "01") {
          console.log(1);
          setCount("01");
        }
      }
      if (isInView(divService2, true)) {
        var testDiv = document.getElementById("divService2");
        count.style.marginTop = "1730px";
        if (count !== "02") {
          setCount("02");
          console.log(2);
        }
      }
      if (isInView(divService3, true)) {
        var testDiv = document.getElementById("divService3");
        count.style.marginTop = "3150px";
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

  var y = [
    {
      header: "Nature of engagement",
      desc: `Scale and beef up your existing team with
      top caliber IT, Design and Software
      Engineer personnel.`,
    },
    {
      header: "Management Structure",
      desc: `You will be in direct communication with your team and will be appointed a manager to discuss issues and updates with regard to your team’s progress and performance.`,
    },
    {
      header: "Benefits and Value Added",
      desc: `Quick and easy deployment. You will have people for your team in 4-8 Weeks Full control of your team.`,
    },
    {
      header: "Benefits and Value Added",
      desc: `Have your team set up and adapt to the tools and working environment that works best for you.`,
    },
  ];

  var z = [
    {
      header: "Nature of engagement",
      desc: `On top of providing you personnel and teams, our team will be deeply involved in the ideation, product development and management stages of your business.`,
    },
    {
      header: "Management Structure",
      desc: `You will be appointed a Project Manager/s that will play a management role in the fulfillment of your project needs. Our PMs are equipped in areas of Quality Assurance, Business Analysis, DevOps and Project Ideation Consulting.`,
    },
    {
      header: "Benefits and Value Added",
      desc: `You will be appointed a Project Manager/s that will play a management role in the fulfillment of your project needs. Our PMs are equipped in areas of Quality Assurance, Business Analysis, DevOps and Project Ideation Consulting.`,
    },
    {
      header: "Benefits and Value Added",
      desc: `Obtain assistance in setting up your working environment.`,
    },
  ];

  // <p className="pNoStroke">Our</p>
  // <p className="pNoStroke">
  //   Creative <span>Solutions</span>
  // </p>
  // <p className="pSub">
  //   Focused on functionality, fueled by connection, designed with
  //   purpose.
  // </p>
  return (
    <>
        <Container fluid className="conServicesPage">
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
                <div id="pNumber" style={{ transition: "all 0.2s" }}>
                  <TextTransition
                    text={count}
                    springConfig={presets.wobbly}
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
                          <p className="pHeader" >
                            Software Development and Design Services
                          </p>
                      </Col>
                      <Col lg={8}>
                        <p className="pDesc">
                          We build scalable software solutions that fit your
                          business requirements from Website Applications,
                          Mobile Applications, Bespoke Software and API
                          Development.
                        </p>
                        <p className="pDesc">
                          Every great software project is composed of great
                          ideas executed by even greater talent. Our team is
                          composed of Business Analysts, UX/UI Designers,
                          Software Developers and IT Professionals that have the
                          necessary skills to turn your concepts and ideas into
                          actual platforms. Together with your company we will
                          work with you in building projects that strongly
                          involve digital transformation, project rescues and
                          idea implementation. We work with companies at
                          different stages of their business and ensure the use
                          of Agile Methodologies.
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
                      <Col lg={4}></Col>
                      <Col lg={8}>
                        <div className="divCapabilities">
                          <p className="pHead">Frameworks and Laguages</p>
                        </div>
                      </Col>
                    </Row>
                    <Row className="rowIcon">
                      <Col lg={3}>
                        <img
                          src="../Image/react.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/bootstrap.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/asp.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/django.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/flask.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/ionic.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/java.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/javascript.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/kotlin.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/next.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/php.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/python.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/swift.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                      <Col lg={3}>
                        <img
                          src="../Image/typescript.png"
                          className="img-fluid mx-auto d-flex imgIcon"
                        ></img>
                      </Col>
                    </Row>
                  </div>
                  
                  <div className="divService" id="divService2">
                    <Row>
                      <Col lg={4}>
                        <p className="pHeader">
                          Staff Augmentation and Managed Service
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
                          exceptional talent in the areas of Software
                          Development, Design, Customer Experience and IT
                          Services. Our job doesn’t stop at finding the right
                          people for your organisation. We provide extensive
                          project and people management while working closely
                          with your company to ensure effective management,
                          milestone based execution and clear task delegation.
                          Our solutions may be customized to fit your business
                          needs.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="divModel">
                          <Row className="align-items-center">
                            <Col lg={8}>
                              <p className="pHeader">Augmented Team</p>
                              <p className="pHeaderSub">Most Popular</p>
                            </Col>
                            <Col lg={4}>
                              <lord-icon
                                src="https://cdn.lordicon.com/uukerzzv.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#ff6e48"
                                style={{
                                  width: "75px",
                                  height: "75px",
                                  float: "right",
                                }}
                              ></lord-icon>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={12}>
                              <hr></hr>
                            </Col>
                            <Col lg={12} style={{ marginTop: "20px" }}>
                              <ul className="timeline">
                                {y.map((event) => (
                                  <li className="timeline-event">
                                    <label className="timeline-event-icon" />
                                    <div className="timeline-event-copy">
                                      <p className="pHeader">{event.header}</p>
                                      <p className="pHeaderSub">{event.desc}</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </Col>
                            <Col lg={12}>
                              <button class="button-53" role="button">
                                Set Up a Dedicated Team
                              </button>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="divModel">
                          <Row className="align-items-center">
                            <Col lg={8}>
                              <p className="pHeader">Managed Services</p>
                              <p className="pHeaderSub">Recommended</p>
                            </Col>
                            <Col lg={4}>
                              <lord-icon
                                src="https://cdn.lordicon.com/zpxybbhl.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#ff6e48"
                                style={{
                                  width: "75px",
                                  height: "75px",
                                  float: "right",
                                }}
                              ></lord-icon>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={12}>
                              <hr></hr>
                            </Col>
                            <Col lg={12} style={{ marginTop: "20px" }}>
                              <ul className="timeline">
                                {z.map((event) => (
                                  <li className="timeline-event">
                                    <label className="timeline-event-icon" />
                                    <div className="timeline-event-copy">
                                      <p className="pHeader">{event.header}</p>
                                      <p className="pHeaderSub">{event.desc}</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </Col>
                            <Col lg={12}>
                              <button class="button-53" role="button">
                                Custom Build my Team
                              </button>
                            </Col>
                          </Row>
                        </div>
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
                          exceptional talent in the areas of Software
                          Development, Design, Customer Experience and IT
                          Services. Our job doesn’t stop at finding the right
                          people for your organisation. We provide extensive
                          project and people management while working closely
                          with your company to ensure effective management,
                          milestone based execution and clear task delegation.
                          Our solutions may be customized to fit your business
                          needs.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
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
    </>
  );
}
