import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";

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

    slider.addEventListener("wheel", (event) => {
      event.preventDefault();

      slider.scrollBy({
        left: event.deltaY < 0 ? -180 : 180,
      });
    });

    $(".arrow").on("click touch", function (e) {
      e.preventDefault();

      let arrow = $(this);

      if (!arrow.hasClass("animate")) {
        arrow.addClass("animate");
        setTimeout(() => {
          arrow.removeClass("animate");
        }, 500);
      }
    });
  }, []);
  var project_list = [
    {
      image: "Image/Projects/box1.png",
      name: "Washwell",
      desc: "Clean clothes at your doorstep",
    },
    {
      image: "Image/Projects/box2.png",
      name: "Aquamundo",
      desc: "Enginneered for water",
    },
    {
      image: "Image/Projects/box3.png",
      name: "Natural Works",
      desc: "Natures power in a pill",
    },
    {
      image: "Image/Projects/box4.png",
      name: "Phoenix",
      desc: "Lorem ipsum dolor",
    },
    {
      image: "Image/Projects/box5.png",
      name: "Seedbox",
      desc: "Investing Simplified",
    },
    {
      image: "Image/Projects/box6.png",
      name: "Lifeline",
      desc: "Emergency Quick Response",
    },
    {
      image: "Image/Projects/box7.png",
      name: "Paymaya X Seedbox",
      desc: "Lorem ipsum dolor",
    },
    {
      image: "Image/Projects/box8.png",
      name: "FindCargo",
      desc: "The fastest growing transport platform in Europe",
    },
    {
      image: "Image/Projects/box9.png",
      name: "Lifeline",
      desc: "Emergency Quick Response",
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
              <div className="demo demoProject">
                <a
                  href
                  className="arrow left"
                  onClick={(e) => {
                    const slider = document.querySelector(".wrapperCard");
                    slider.scrollLeft += 180;
                  }}
                >
                  <i />
                  <svg>
                    <use xlinkHref="#circle"></use>
                  </svg>
                </a>
                <a
                  href
                  className="arrow"
                  onClick={(e) => {
                    const slider = document.querySelector(".wrapperCard");
                    slider.scrollLeft -= 180;
                  }}
                >
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
                  width="70px"
                  height="70px"
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
                  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <div className="card">
                      <div
                        className="cardInner"
                        style={{ backgroundImage: `url("${number.image}")` }}
                      ></div>
                      <div className="divDesc">
                        <p className="pHeader">{number.name}</p>
                        <p className="pHeaderSub">{number.desc}</p>
                      </div>
                    </div>
                  </Tilt>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
