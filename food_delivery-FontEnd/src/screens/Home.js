import React, { useEffect, useState } from "react";
import Navv from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousell from "../components/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { data } from "react-router-dom";
function Home() {
     const[foodItem,setFoodItem]=useState([])
     const[foodCat, setFoodCat]=useState([])


    const loadData = async () => {
      let response = await axios.post("http://localhost:4000/data/foodData");
      //console.log(response.data);
      setFoodItem(response.data[0])
      //console.log(response.data[0])
      setFoodCat(response.data[1])
    };


     useEffect(() => {
      loadData()
    }, []);

  return (
    <div>
      <Navv></Navv>
      <Carousell></Carousell>
      <div>
        <Container fluid >
          <Row>
            <Col lg="3" md="6">
              <Cards></Cards>
            </Col>
            <Col lg="3" md="6">
              <Cards></Cards>
            </Col>
            <Col lg="3" md="6">
              <Cards></Cards>
            </Col>
            <Col lg="3" md="6">
              <Cards></Cards>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
