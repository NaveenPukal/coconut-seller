import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  const HeadColor = styled.div`
    background-color: #f4f9ff;
    padding: 2%;
  `;

  return (
    <div>
      <HeadColor>
        <Container>
          <Row>
            <Col>
              <a
                href="https://coconutseller.in/"
                class="custom-logo-link"
                rel="home"
                aria-current="page"
              >
                <img
                  width="55"
                  height="65"
                  src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2021/04/cropped-cropped-coconut.jpg?fit=167%2C250&amp;ssl=1"
                  alt="coconut Tree"
                />
              </a>
              <h2>Coconut Seller India</h2>
              <p style={{ fontSize: "14px" }}>
                Quality Never Compromised | GSTIN:29BREPK4543A1Z1
              </p>
            </Col>
            <Col>
              <Row
                style={{
                  marginTop: "25%",
                  marginRight: "-15px",
                  marginLeft: "-15px",
                }}
              >
                <div class="col-lg-3 col-md-4">
                  <i
                    class="fa fa-envelope"
                    aria-hidden="true"
                    style={{
                      border: "1px solid #E0E0E0",
                      borderRadius: "10px",
                      padding: "20px",
                      color: "#1fb125",
                      fontSize: "18px",
                    }}
                  ></i>
                </div>
                <div class="col-lg-9 col-md-8">
                  <strong>Email</strong>{" "}
                  <p class="mb-0">info@coconutseller.in</p>{" "}
                </div>{" "}
              </Row>
            </Col>
            <Col>
              <Row
                style={{
                  marginTop: "25%",
                  marginRight: "-15px",
                  marginLeft: "-15px",
                }}
              >
                <div class="col-lg-3 col-md-4">
                  <i
                    class="fa fa-phone"
                    aria-hidden="true"
                    style={{
                      border: "1px solid #E0E0E0",
                      borderRadius: "10px",
                      padding: "20px",
                      color: "#1fb125",
                      fontSize: "18px",
                    }}
                  ></i>
                </div>
                <div class="col-lg-9 col-md-8">
                  <strong>Mob</strong> <p class="mb-0">+918848406140</p>{" "}
                </div>{" "}
              </Row>
            </Col>
            <Col>
              <Row
                style={{
                  marginTop: "25%",
                }}
              >
                <div class="links my-2 text-center text-lg-left text-md-left">
                  {" "}
                  <a href="https://www.facebook.com/Coconutsellerindia/">
                    <i
                      class="fa fa-facebook-square "
                      style={{ marginRight: "10px", fontSize: "22px" }}
                    ></i>
                  </a>{" "}
                  <a href="https://twitter.com/coconut_seller">
                    <i
                      class="fa fa-twitter "
                      style={{ marginRight: "5px", fontSize: "22px" }}
                    ></i>
                  </a>{" "}
                  <a href="https://www.youtube.com/sujithkumarkeenkara">
                    <i
                      class="fa fa-youtube"
                      style={{
                        color: "red",
                        marginRight: "10px",
                        fontSize: "22px",
                      }}
                    ></i>
                  </a>{" "}
                  <a href="https://www.instagram.com/coconutsellerindia/">
                    <i
                      class="fa fa-instagram "
                      style={{
                        color: "pink",
                        marginRight: "5px",
                        fontSize: "22px",
                      }}
                    ></i>
                  </a>{" "}
                </div>{" "}
              </Row>
            </Col>
          </Row>

          <Navbar
            bg="white"
            expand="lg"
            style={{
              borderRadius: "30px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link to="/" className="linkk">
                    Home
                  </Link>
                  {/* <Nav.Link href="#action2">About</Nav.Link> */}
                  <NavDropdown
                    title="About"
                    id="navbarScrollingDropdown"
                    style={{ backgroudColor: "green" }}
                  >
                    <Link to="/HBI" className="dropdown-item ">
                      Happy Buisness India
                    </Link>
                    <Link to="/WhyUs" className="dropdown-item ">
                      Why Us ?
                    </Link>
                    {/* <NavDropdown.Divider /> */}
                    <Link to="/KYC" className="dropdown-item ">
                      KYC
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Products"
                    id="navbarScrollingDropdown"
                    style={{ backgroudColor: "green" }}
                  >
                    <NavDropdown.Item href="#action3">
                      Fresh Coconut exports for Commercial Food
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Green Tender coconut
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Orange Tender Coconut
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Fresh Coconut Export
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Husked Coconuts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Copra-Dry Coconut
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Natural Coconut Ball Copra
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Raw Coconut Shell
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Desiccated Coconut Powder
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link to="/DailyPrice" className="linkk ">
                    Daily Price
                  </Link>

                  <Nav.Link href="#">How to Order</Nav.Link>
                  <Nav.Link href="#">Updates</Nav.Link>
                  <Nav.Link href="#">Certificates</Nav.Link>

                  <NavDropdown
                    title="Gallery"
                    id="navbarScrollingDropdown"
                    style={{ backgroudColor: "green" }}
                  >
                    <NavDropdown.Item href="#action3">Photos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Videos</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Green Tender Coconut
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Tender Coconut Yellow and Green
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Tender Cocunut Rejected Items
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Button
                  variant="outline-success"
                  style={{
                    backgroundColor: "#09a40f",
                    color: "white",
                    borderRadius: "30px",
                  }}
                >
                  Contact Us
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* </Row> */}
        </Container>
      </HeadColor>
    </div>
  );
}
