import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../photos/carousel4.jpeg";
import { Container } from "react-bootstrap";
function Cards() {
  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card.</Card.Text>
            <Container>
              <select className="m-2 h-100 px-1 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 px-1 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline fs-5 text-danger-emphasis">
                Total price
              </div>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
