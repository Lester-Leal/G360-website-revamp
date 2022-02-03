import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function projects() {
  const [click, setClick] = useState(0);
  return (
    <>
      <Container fluid className="conProjects h-100">
        <Container fluid className="h-100 conInnerProject">
          <Row className="h-100 align-items-center justify-content-center d-flex">
            <Col lg={12}>
              <div className="gallery">
                <div
                  className={
                    click === "1"
                      ? "item item-1 hoverCard align-items-center  d-flex"
                      : "item item-1"
                  }
                  id={click === 0 || click === "1" ? "" : "reduceBright"}
                  data-id="1"
                  onClick={(e) => {
                    try {
                      if (click === 0) {
                        setClick(
                          e.target.attributes.getNamedItem("data-id").value
                        );
                      } else {
                        setClick(0);
                      }
                    } catch (error) {}
                  }}
                ></div>
                <div
                  className={
                    click === "2" ? "item item-2 hoverCard" : "item item-2"
                  }
                  id={click === 0 || click === "2" ? "" : "reduceBright"}
                  data-id="2"
                  onClick={(e) => {
                    if (click === 0) {
                      setClick(
                        e.target.attributes.getNamedItem("data-id").value
                      );
                    } else {
                      setClick(0);
                    }
                  }}
                ></div>
                <div
                  className={
                    click === "3" ? "item item-3 hoverCard" : "item item-3"
                  }
                  id={click === 0 || click === "3" ? "" : "reduceBright"}
                  data-id="3"
                  onClick={(e) => {
                    if (click === 0) {
                      setClick(
                        e.target.attributes.getNamedItem("data-id").value
                      );
                    } else {
                      setClick(0);
                    }
                  }}
                >
                  <div className="divDesc align-items-center justify-content-center d-none d-flex">
                    <p className="pClient">Washwell</p>
                  </div>
                </div>
                <div
                  className={
                    click === "4" ? "item item-4 hoverCard" : "item item-4"
                  }
                  id={click === 0 || click === "4" ? "" : "reduceBright"}
                  data-id="4"
                  onClick={(e) => {
                    if (click === 0) {
                      setClick(
                        e.target.attributes.getNamedItem("data-id").value
                      );
                    } else {
                      setClick(0);
                    }
                  }}
                />
                <div
                  className={
                    click === "5" ? "item item-5 hoverCard" : "item item-5"
                  }
                  id={click === 0 || click === "5" ? "" : "reduceBright"}
                  data-id="5"
                  onClick={(e) => {
                    if (click === 0) {
                      setClick(
                        e.target.attributes.getNamedItem("data-id").value
                      );
                    } else {
                      setClick(0);
                    }
                  }}
                />
                <div />
              </div>
              <Row>
                <Col lg={6}>
                  <p style={{ marginBottom: "0px" }}>test</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
