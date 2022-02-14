import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

export default function services() {
  useEffect(() => {
    const slider = document.querySelector(".wrapperCard");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);
  var project_list = [
    {
      image: "Image/Projects/box1.png",
      name: "Washwell",
    },
    {
      image: "Image/Projects/box2.png",
    },
    {
      image: "Image/Projects/box3.png",
    },
    {
      image: "Image/Projects/box4.png",
    },
    {
      image: "Image/Projects/box5.png",
    },
    {
      image: "Image/Projects/box6.png",
    },
    {
      image: "Image/Projects/box7.png",
    },
    {
      image: "Image/Projects/box8.png",
    },
    {
      image: "Image/Projects/box9.png",
    },
  ];
  return (
    <>
      <Container fluid className="h-100 conProject1">
        <Container className="conInner h-100">
          <Row className="align-items-center h-100">
            <Col lg={4} className="colLeft">
              <p className="pHeader">A one-stop shop to creating workspaces</p>
              <p className="pHeaderSub">
                We offer services that cover all aspects of the design and build
                process, engage the client at every step to ensure the best
                experience possible
              </p>
              <div className="demo">
                <a href className="arrow left">
                  <i />
                  <svg>
                    <use xlinkHref="#circle"></use>
                  </svg>
                </a>
                <a href className="arrow">
                  <i />
                  <svg>
                    <use xlinkHref="#circle"></use>
                  </svg>
                </a>
              </div>
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
            </Col>
            <Col lg={8}>
              <div
                className="wrapperCard"
                onMouseOver={(e) => {
                  const mouse = document.querySelector(".mouse");
                  mouse.classList.add("d-flex");
                }}
                onMouseOut={(e) => {
                  const mouse = document.querySelector(".mouse");
                  mouse.classList.remove("d-flex");
                }}
              >
                {project_list.map((number) => (
                  <div
                    className="card align-items-center justify-content-center d-flex"
                  
                  ></div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
