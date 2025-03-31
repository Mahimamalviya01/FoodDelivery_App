import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
function LogIn() {
   
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      
        e.preventDefault();
        axios.post("http://localhost:4000/user/login/", {
            email,
            pass
          })
          .then((result) => {
            console.log(result);
            alert("LogIn successfully");
            navigate("/");
          })
          .catch((err) => console.log(err));
      }
    
  return (
    <div>
      <Container className='mt-5 w-50'>
      <Form onSubmit={handleSubmit}>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br></br>
    <p>Don't have An Account?</p>
    <Link to="/signup" className="btn btn-primary">
      Register
    </Link>
      </Container>
    </div>
  );
}

export default LogIn;