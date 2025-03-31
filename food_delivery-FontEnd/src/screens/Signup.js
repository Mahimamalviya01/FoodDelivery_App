import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      axios
        .post("http://localhost:4000/user/signup", {
          name,
          email,
          pass,
          location,
        })
        .then((result) => {
          console.log(result);
          alert("SignUp successfully");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit} className="w-50 m-auto mt-3">
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              lg="12"
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label>Full name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Full name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Location"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3"></Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
        <br></br>
        <p>Already have An Account?</p>
        <Link to="/login" className="btn btn-primary">
          LogIn
        </Link>
      </Container>
    </div>
  );
}

export default SignUp;
