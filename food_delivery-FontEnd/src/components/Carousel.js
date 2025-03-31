import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import c1 from "../photos/carousel1.jpeg";
import c2 from "../photos/carousel2.jpeg";
import c3 from "../photos/carousel3.jpeg";
function Carousell() {
  return (
    <div>
      <Carousel
        fade
        data-bs-theme="dark"
        style={{ objectFit: "contain" }}
        id="carousel"
        className="my-2"
      >
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={c1} alt="First slide" />
          <Carousel.Caption>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="text-white btn btn-success">Search</Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={c2} alt="Second slide" />
          <Carousel.Caption>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="text-white btn btn-success">Search</Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={c3} alt="Third slide" />
          <Carousel.Caption>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="text-white btn btn-success">Search</Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousell;
