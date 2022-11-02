import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
export default function WhyUs() {
  return (
    <div>
      {" "}
      <Container className="mt-4">
        <Row className="mt-4">
          <Col>
            <h3>Why Us ?</h3>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="pTag">
              The most of the buyers facing the problems is the genuine supplier
              of the coconuts. We are assuring the transparency of all dealings.
            </p>
          </Col>
        </Row>
        <Row className="mt-2 mb-5">
          <Col>
            <ul className="pTag">
              <li>
                Best wholesale{" "}
                <a href="" style={{ color: "#1fb125" }}>
                  price
                </a>{" "}
                available
              </li>
              <li>Daily price update</li>
              <li>
                Availability of the coconut as per the client requirements.
              </li>
              <li>Quality maintaining of the coconut</li>
              <li>Counting and weight assurance</li>
              <li>
                {" "}
                <a href="" style={{ color: "#1fb125" }}>
                  Payment
                </a>{" "}
                transparency
              </li>
              <li>Company GST Invoice</li>
              <li>
                Double counting of{" "}
                <a href="" style={{ color: "#1fb125" }}>
                  Tender coconut
                </a>{" "}
                while loading
              </li>
              <li>Accurate way bridge slip.</li>
              <li>
                No need to appoint company representative to check the quality
                and quantity.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
