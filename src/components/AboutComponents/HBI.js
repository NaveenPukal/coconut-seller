import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function HBI() {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <h3>About Us</h3>
          </Col>
        </Row>
        <Row className="mt-4 mb-5">
          <Col xs={10}>
            <p className="pTag">
              The Happy Business India started its business as coconut supplier
              in few years back with a vision to provide the local community an
              opportunity of gainful employment. Management team of Happy
              Business India Trading Company were from agriculture family and
              well versed in agric products. The Company have dealing with all
              coconut farmers from all over Karnataka, Kerala and Tamilnadu .
              The Company have more than 10000’s of acres for annual lease and
              Lakshs of coconut trees for annual rate contract. Hence we are
              exporting coconuts regularly to various parts of India throughout
              the year.
            </p>
            <br></br>
            <p className="pTag">
              We mainly dealing with Tender coconuts, Husked Coconuts and Dry
              coconuts. The Company can supply fresh coconuts of Indian origin
              for any demanded products quantity at a competitive rate
              regularly. Happy Business India is well known for whole sale
              Coconut supplier and exporters of fresh coconuts and coconut
              products. The Company have all grades of coconuts in all
              maturities, we can supply to various parts of India as well as
              abroad. The Company have also high quality export coconuts of
              circumference 12 inches and above. We invite the local buyers from
              all over India.
            </p>
          </Col>
          <Col>
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/coconut.jpg?resize=131%2C197&amp;ssl=1"
              alt="coconut tree"
              class="wp-image-22"
              width="131"
              height="197"
              srcset="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/coconut.jpg?resize=200%2C300&amp;ssl=1 200w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/coconut.jpg?resize=684%2C1024&amp;ssl=1 684w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/coconut.jpg?resize=768%2C1149&amp;ssl=1 768w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/coconut.jpg?resize=1026%2C1536&amp;ssl=1 1026w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/coconut.jpg?w=1200&amp;ssl=1 1200w"
              sizes="(max-width: 131px) 100vw, 131px"
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}
