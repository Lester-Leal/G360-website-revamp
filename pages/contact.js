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
      <Row className="h-100">
        <Col lg={6} className="h-100">
          <div className="divContact  align-items-center justify-content-center d-flex">
            <div className="divBrown">
              <lord-icon
                src="https://cdn.lordicon.com/rcopausw.json"
                trigger="loop"
                colors="primary:#3e342f,secondary:#fd6b3b"
                style={{ width: "100px", height: "100px", marginLeft: "-20px" }}
              ></lord-icon>
              <p className="pHeader">
                Say hi! Don’t be <br />a stranger.
              </p>
              <p className="pDesc">
                Great! Please fill out the form below, it will provide us
                initial context to better grasp the requirements. It only takes
                a minute or so to complete it.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6} className="h-100">
          <div className="divContactForm align-items-center justify-content-center d-flex">
            <div className="divBlack">
              <p className="pHeader">Work with us!</p>
              <div>
                <Row className="p-0">
                  <Col lg={6}>
                    <TextField
                      label="Contact Number"
                      variant="standard"
                      sx={{ outline: "none", borderColor: "#fff" }}
                      inputProps={{
                        sx: { color: "#fff", borderBottom: "1px solid #fff" },
                      }}
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                    />
                  </Col>
                  <Col lg={6}>
                    <TextField
                      label="Full name"
                      variant="standard"
                      sx={{ outline: "none", borderColor: "#fff" }}
                      inputProps={{
                        sx: { color: "#fff", borderBottom: "1px solid #fff" },
                      }}
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <TextField
                      label="Email"
                      variant="standard"
                      sx={{ outline: "none", borderColor: "#fff" }}
                      inputProps={{
                        sx: { color: "#fff", borderBottom: "1px solid #fff" },
                      }}
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                    />
                  </Col>
                  <Col lg={6}>
                    <TextField
                      label="Service"
                      variant="standard"
                      sx={{ outline: "none", borderColor: "#fff" }}
                      inputProps={{
                        sx: { color: "#fff", borderBottom: "1px solid #fff" },
                      }}
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
