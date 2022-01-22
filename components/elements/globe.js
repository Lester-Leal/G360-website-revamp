import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

export default function globe3d() {
  return (
    <>
      <div id="geo-globe" className="mx-auto d-flex">
        <canvas id="scene"></canvas>
      </div>
    </>
  );
}
