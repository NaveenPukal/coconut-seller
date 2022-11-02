import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
export default function KYC() {
  return (
    <div>
      <Container className="mt-4">
        <Row className="mt-4">
          <Col>
            <h3>KYC</h3>
          </Col>
        </Row>
        <Row className="mt-4 ">
          <Col>
            <div class="wp-block-image">
              <figure class="aligncenter size-full">
                <img
                  width="525"
                  height="292"
                  src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/kyc.png?resize=525%2C292&amp;ssl=1"
                  alt=""
                  class="wp-image-1249"
                  srcset="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/kyc.png?w=576&amp;ssl=1 576w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/kyc.png?w=300&amp;ssl=1 300w"
                  sizes="(max-width: 525px) 100vw, 525px"
                />
              </figure>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="pTag">
              KYC means <strong>Know Your Customer</strong> and sometimes Know
              Your Client. KYC or KYC check is the mandatory process of
              identifying and verifying the client’s identity when opening an
              account and periodically over time.
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <p className="pTag">Here we are providing our KYC details here.</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <p className="pTag">
              <Link to="" style={{ color: "#1fb125" }}>
                {" "}
                Download IEC Certificate
              </Link>
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <p className="pTag">
              <Link to="" style={{ color: "#1fb125" }}>
                {" "}
                Download GST Certificate
              </Link>
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <p className="pTag">
              <Link to="" style={{ color: "#1fb125" }}>
                {" "}
                Download MSME Registration Certificate
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
