import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "./index.css";
function footer() {
  let handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container fluid className="App-Footer pt-3 pb-3">
      <Row>
        <Container>
          <Row>
            <Col lg={4}>
              <h6>ABOUT US</h6>
              <div className="footer-content">
                <p>
                  About us information about the company goes here
              </p>
                <h6>SUBSCRIBE</h6>
                <div className="subscriberForm">
                  <span>
                    <input
                      className="form-control footer-input"
                      onChange={handleInput}
                    ></input>
                  </span>
                  <span>
                    <Button variant="light" className="footer-btn">Subscribe</Button>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                <Col lg={4}>
                  <h6>CONNECT</h6>
                  <div className="footer-content">
                    <address>
                      <strong>EMAIL</strong>&nbsp;xyz@gmail.com
                <br />
                      <strong>PHONE</strong>&nbsp;+919876543210
                <br />
                      <strong>Follow on social</strong><br />
                      <div>
                        <div className="twitter">
                          <span className="twitter-icon"></span>
                        </div>
                        <div className="facebook">
                          <span className="facebook-icon"></span>
                        </div>
                        <div className="instagram">
                          <span className="instagram-icon"></span>
                        </div>
                        <div className="linkedin">
                          <span className="linkedin-icon"></span>
                        </div>
                      </div>
                    </address>
                  </div>
                </Col>

                <Col lg={4}>
                  <h6>MENU</h6>
                  <div className="footer-content">
                    <ul className="footer-links">
                      <li>
                        <a href="/" className="anchor">
                          Add Kitchen
                  </a>
                      </li>

                      <li>
                        <a href="/" className="anchor">
                          View Kitchen
                  </a>
                      </li>

                      <li>
                        <a href="/" className="anchor">
                          About Us
                  </a>
                      </li>

                      <li>
                        <a href="/" className="anchor">
                          Blog
                  </a>
                      </li>

                      <li>
                        <a href="/" className="anchor">
                          Get in touch
                  </a>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={4}>
                  <h6>LATEST ARTICLE</h6>
                  <div className="footer-content">
                    <ul className="footer-links">
                      <li>Title</li>
                      <li>
                        <a href="/" className="anchor">
                          Link
                    </a>
                      </li>
                      <li>Title</li>
                      <li>
                        <a href="/" className="anchor">
                          Link
                    </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="copyrights">
                Copyright kitchstart 2020. All rights reserved.
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
export default footer;
