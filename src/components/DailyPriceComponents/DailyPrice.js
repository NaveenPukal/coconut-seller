import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";

export default function DailyPrice() {
  return (
    <>
      <Container className="mt-4">
        <Row className="mt-4">
          <Col>
            <h3>Daily Price</h3>
          </Col>
        </Row>
        <Row className="mt-2" style={{ textAlign: "center" }}>
          <Col>
            <h2>Wholesale Coconut Price List</h2>
          </Col>
        </Row>
        <Row
          className="mt-1"
          style={{
            textAlign: "center",
            color: "#A52A2A",
            fontWeight: "bold",
          }}
        >
          <Col>
            <h4>Updated on : November 2, 2022</h4>
          </Col>
        </Row>

        <Row className="mt-2" style={{ textAlign: "center" }}>
          <Col>
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/07/tender-coconut-d-cut-1.jpg?resize=72%2C72&amp;ssl=1"
              alt="Tender Coconut Export from India"
              class="wp-image-2493"
              width="72"
              height="72"
              srcset="https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/07/tender-coconut-d-cut-1.jpg?w=500&amp;ssl=1 500w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/07/tender-coconut-d-cut-1.jpg?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/07/tender-coconut-d-cut-1.jpg?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/07/tender-coconut-d-cut-1.jpg?resize=100%2C100&amp;ssl=1 100w"
              sizes="(max-width: 72px) 100vw, 72px"
            />
          </Col>
        </Row>
        <Row className="mt-2" style={{ textAlign: "center" }}>
          <Col>
            <h2>Bengaluru Tender Coconut Price List</h2>
          </Col>
        </Row>
        <Row className="mt-2 mb-5" style={{ textAlign: "center" }}>
          <Col>
            <div className="table-responsive">
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Verity & Skin Color</th>
                    <th>Grade</th>
                    <th> Price</th>
                    <th> AVG Weight</th>
                    <th> Water Lever</th>
                    <th>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Bunches
                      </a>
                    </th>
                    <th> MOQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="" style={{ color: "#1fb125" }}>
                        Hybrid
                      </a>{" "}
                      with{" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Green and Biscuit
                      </a>{" "}
                    </td>
                    <td> A Grade</td>
                    <td> ₹22.00/Piece</td>
                    <td>@ 2.20 Kg +</td>
                    <td>350 ML To 750 ML</td>
                    <td> 80%</td>
                    <td> 11000</td>
                  </tr>
                  <tr>
                    <td>
                      Natti with{" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Yellow & Green
                      </a>{" "}
                    </td>
                    <td> A+B Grade</td>
                    <td> ₹20.00/Piece</td>
                    <td>1.90 Kg +</td>
                    <td>200 ML To 600 ML</td>
                    <td>70%</td>
                    <td>12300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <i>
              Transportation charge extra , loading with 6 steps arranging
              charge ₹5000/-
            </i>
          </Col>
        </Row>
        <Row className="mt-5" style={{ textAlign: "center" }}>
          <Col>
            <img
              loading="lazy"
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/coconut_for_pooja_.jpg?resize=74%2C74&amp;ssl=1"
              alt=""
              class="wp-image-1310"
              width="74"
              height="74"
              srcset="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/coconut_for_pooja_.jpg?w=451&amp;ssl=1 451w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/coconut_for_pooja_.jpg?w=300&amp;ssl=1 300w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/coconut_for_pooja_.jpg?w=150&amp;ssl=1 150w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/coconut_for_pooja_.jpg?w=100&amp;ssl=1 100w"
              sizes="(max-width: 74px) 100vw, 74px"
            />
          </Col>
        </Row>
        <Row className="mt-3" style={{ textAlign: "center" }}>
          <Col>
            <h2>Semi Husked Coconuts For Domestic Use</h2>
          </Col>
        </Row>
        <Row className="mt-2 mb-5" style={{ textAlign: "center" }}>
          <Col>
            <div className="table-responsive">
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Weight</th>
                    <th> Price with Loose</th>
                    <th> Price with PP Bag</th>
                    <th> MOQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>500 Grams to 800 Grams</td>
                    <td> ₹28.00/Kg</td>
                    <td> ₹28.50/Kg</td>
                    <td> 12 Tone</td>
                  </tr>
                  <tr>
                    <td>400 Grams to 600 Grams</td>
                    <td> ₹27.00/Kg</td>
                    <td> ₹27.50/Kg</td>
                    <td> 12 Tone</td>
                  </tr>
                  <tr>
                    <td>300 Grams to 500 Grams</td>
                    <td> ₹26.00/Kg</td>
                    <td> ₹26.50/Kg</td>
                    <td> 12 Tone</td>
                  </tr>
                  <tr>
                    <td>No Size Grading</td>
                    <td>₹25.00/Kg</td>
                    <td> ₹25.50/Kg</td>
                    <td> 12 Tone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <i>*Transport cost and loading charge extra</i>
          </Col>
        </Row>
        <Row className="mt-5" style={{ textAlign: "center" }}>
          <Col>
            <img
              loading="lazy"
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/semi-husked-coconut-500x500-1.jpg?resize=82%2C82&amp;ssl=1"
              alt="Semi husked coconut wholesale"
              class="wp-image-17"
              width="82"
              height="82"
              srcset="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/semi-husked-coconut-500x500-1.jpg?w=500&amp;ssl=1 500w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/semi-husked-coconut-500x500-1.jpg?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/semi-husked-coconut-500x500-1.jpg?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/semi-husked-coconut-500x500-1.jpg?resize=70%2C70&amp;ssl=1 70w"
              sizes="(max-width: 82px) 100vw, 82px"
            />
          </Col>
        </Row>
        <Row className="mt-3" style={{ textAlign: "center" }}>
          <Col>
            <h2>
              Indian Coconut{" "}
              <a href="" style={{ color: "#1fb125" }}>
                Export
              </a>{" "}
              Price List
            </h2>
          </Col>
        </Row>
        <Row className="mt-2 mb-5" style={{ textAlign: "center" }}>
          <Col>
            <div className="table-responsive">
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>From Port</th>
                    <th> To Port</th>
                    <th>Product</th>
                    <th> T Time</th>
                    <th> Specification</th>
                    <th> Container</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mumbai</td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Jabel Ali, Dubai
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Fresh Coconuts
                      </a>{" "}
                    </td>
                    <td> 5 Days</td>
                    <td> 12.8Kg+ 25 Nuts PP Bags</td>
                    <td> 40ft Dry</td>
                  </tr>
                  <tr>
                    <td>Mumbai</td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Sohar, Oman
                      </a>{" "}
                    </td>
                    <td>Fresh Coconuts</td>
                    <td> 7 Days</td>
                    <td> 12.8Kg+ 25 Nuts PP Bags</td>
                    <td> 40ft Dry</td>
                  </tr>
                  <tr>
                    <td>Mumbai</td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Hamad, Qatar
                      </a>{" "}
                    </td>
                    <td>Fresh Coconuts</td>
                    <td> 10 Days</td>
                    <td> 12.8Kg+ 25 Nuts PP Bags</td>
                    <td> 40ft Dry</td>
                  </tr>
                  <tr>
                    <td>Mumbai</td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Dammam, Saudi Arabia
                      </a>{" "}
                    </td>
                    <td>Fresh Coconuts</td>
                    <td> 5 Days</td>
                    <td> 12.8Kg+ 25 Nuts PP Bags</td>
                    <td> 40ft Dry</td>
                  </tr>
                  <tr>
                    <td>Mumbai</td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        CAUCEDO, Domenic Republic
                      </a>{" "}
                    </td>
                    <td>Fresh Coconuts</td>
                    <td> 45 Days</td>
                    <td> 16.00Kg + Black eyes PP Bags</td>
                    <td> 40ft Reefer</td>
                  </tr>
                  <tr>
                    <td>Mumbai</td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Shenzhen, China
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Fresh Coconuts
                      </a>{" "}
                    </td>
                    <td> 21 Days</td>
                    <td> 16.00Kg + Black eyes PP Bags</td>
                    <td> 40ft Reefer</td>
                  </tr>
                  <tr>
                    <td>Mumbai</td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Aqaba, Jordan
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a href="" style={{ color: "#1fb125" }}>
                        Tender Coconut
                      </a>{" "}
                    </td>
                    <td> 21 Days</td>
                    <td> 9 Pieces in Cartoon Box</td>
                    <td> 40ft Reefer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <i>
              *Price will be very please verify before confirming the order,{" "}
              <a href="" style={{ color: "#1fb125" }}>
                Fresh coconut
              </a>{" "}
              Export available any port please contact +91 8848406140
            </i>
          </Col>
        </Row>
        <Row className="mt-5" style={{ textAlign: "center" }}>
          <Col>
            <img
              loading="lazy"
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/pooja-semi-husked.jpg?resize=96%2C65&amp;ssl=1"
              alt=""
              class="wp-image-1311"
              width="96"
              height="65"
              srcset="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/pooja-semi-husked.jpg?w=500&amp;ssl=1 500w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/pooja-semi-husked.jpg?w=300&amp;ssl=1 300w"
              sizes="(max-width: 96px) 100vw, 96px"
              data-recalc-dims="1"
            />
          </Col>
        </Row>
        <Row className="mt-3" style={{ textAlign: "center" }}>
          <Col>
            <h2>
              Coconut Price List{" "}
              <a href="" style={{ color: "#1fb125" }}>
                ( Pooja Husk)
              </a>{" "}
            </h2>
          </Col>
        </Row>
        <Row className="mt-2 mb-5" style={{ textAlign: "center" }}>
          <Col>
            <div className="table-responsive">
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Bag Pieces</th>
                    <th> Avg Weight</th>
                    <th>Bag Weight</th>
                    <th>Price with PP Bag</th>
                    <th> Price with pp Bag</th>
                    <th> MOQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>90 Pieces/Bharti</td>
                    <td>555 grms</td>
                    <td>50 KG</td>
                    <td> ₹13.00/piece</td>
                    <td> ₹13.50/piece</td>
                    <td> 12 Tone</td>
                  </tr>
                  <tr>
                    <td>100 Pieces/Bharti</td>
                    <td>500 grms</td>
                    <td>50 KG</td>
                    <td>₹12.50/Piece</td>
                    <td>₹13.00/piece</td>
                    <td>12 Tone</td>
                  </tr>
                  <tr>
                    <td>120 Pieces/Bharti</td>
                    <td>416 grms</td>
                    <td>50 KG</td>
                    <td> ₹11.50/Piece</td>
                    <td>₹12.00/piece</td>
                    <td>12 Tone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <i>
              *Quality{" "}
              <a href="" style={{ color: "#1fb125" }}>
                Jute Bag{" "}
              </a>{" "}
              using for packing and loading charge for one coconut ₹1/-
            </i>
          </Col>
        </Row>
        <Row className="mt-5" style={{ textAlign: "center" }}>
          <Col>
            <img
              loading="lazy"
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/08/dry-coconut-copra.jpg?resize=72%2C72&amp;ssl=1"
              alt=""
              class="wp-image-1665"
              width="72"
              height="72"
              srcset="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/08/dry-coconut-copra.jpg?w=500&amp;ssl=1 500w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/08/dry-coconut-copra.jpg?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/08/dry-coconut-copra.jpg?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/08/dry-coconut-copra.jpg?resize=100%2C100&amp;ssl=1 100w"
              sizes="(max-width: 72px) 100vw, 72px"
              data-recalc-dims="1"
            />
          </Col>
        </Row>
        <Row className="mt-3" style={{ textAlign: "center" }}>
          <Col>
            <h2>Dry Coconut (Copra)</h2>
          </Col>
        </Row>
        <Row className="mt-2 mb-5" style={{ textAlign: "center" }}>
          <Col>
            <div className="table-responsive">
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Shape</th>
                    <th> Dry type</th>
                    <th>Quality</th>
                    <th>Origin</th>
                    <th> Price</th>
                    <th> MOQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Peace</td>
                    <td>Sun Dry</td>
                    <td>Export</td>
                    <td> Tamil Nadu</td>
                    <td> ₹85/Kg +GST</td>
                    <td> 12 Tone</td>
                  </tr>
                  <tr>
                    <td>Piece</td>
                    <td>Heat</td>
                    <td>Oil Purpose</td>
                    <td>Tamil Nadu</td>
                    <td>₹80/Kg +GST</td>
                    <td>12 Tone</td>
                  </tr>
                  <tr>
                    <td>Edible Ball Copra</td>
                    <td>Export Food use</td>
                    <td>Karnataka</td>
                    <td>₹165/Kg +GST</td>
                    <td>₹12.00/piece</td>
                    <td>5 Tone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <i>
              *Transportation charge, Jute gunny bag / pp bag packing charge and
              loading charge extra
            </i>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p>
              <strong>
                * Transportation and Loading charge extra (Location : Karnataka,
                Kerala and Tamilnadu)
              </strong>
              , MOQ Means Minimum Order Quantity, Bharti means Number of
              quantity in one bag.
            </p>
          </Col>
        </Row>
        <Row className="mt-2" style={{ textAlign: "center" }}>
          <Col>
            <p
              style={{
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Coconut Packing available with 25/50 kg with export quality bag.
            </p>
          </Col>
        </Row>
        <Row
          className="mt-1"
          style={{
            textAlign: "center",

            fontWeight: "bold",
          }}
        >
          <Col>
            <h4>
              Call or Whats App Now for more details{" "}
              <a href="" style={{ color: "#1fb125" }}>
                +91 88484 06140{" "}
              </a>{" "}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/06/IMG-20210604-WA0000.jpg?resize=525%2C996&ssl=1"
              class="img-thumbnail"
              alt="..."
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/coconuts-sack.jpg?resize=525%2C350&ssl=1"
              class="img-thumbnail"
              alt="..."
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/06/IMG-20210604-WA0000.jpg?resize=525%2C996&ssl=1"
              class="img-thumbnail"
              alt="..."
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/01/ttm-250x250-1.jpg?resize=250%2C250&ssl=1"
              class="img-thumbnail"
              alt="..."
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/08/IMG-20210821-WA0019.jpg?resize=525%2C525&ssl=1"
              class="img-thumbnail"
              alt="..."
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/08/IMG-20210821-WA0019.jpg?resize=525%2C525&ssl=1"
              class="img-thumbnail"
              alt="..."
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/IMG-20210708-WA0026.jpg?resize=525%2C700&ssl=1"
              class="img-thumbnail"
              alt="..."
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/07/IMG-20210729-WA0006.jpg?resize=525%2C394&ssl=1"
              class="img-thumbnail"
              alt="..."
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
