import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
const styles = (theme) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});
export default function contact() {
  const classes = styles;
  return (
    <Container fluid className="h-100 conContact">
      <Row className="h-100 align-items-center justify-content-center d-flex">
        <Col lg={6}></Col>
        <Col lg={6}></Col>
      </Row>
    </Container>
  );
}
