import React, { useState, useEffect } from "react";
import CardBox from "../Card/Card";
import { Container, Col, Row } from "react-bootstrap";
import CardData from "./HomeCardContent";
import './HomeCard.css'

const HomeCardSec = () => {
  const [cardContent, setCardContent] = useState(CardData);
  useEffect(() => {
  setCardContent(CardData)
  },[])
  return (
    <div id='cardBoxes'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="cardHead">
        {" "}
        <h2 className="homeH2">Griffin Surett Web Services</h2>
        <h5 id="cardH5">My Skills</h5>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row>
          {cardContent.map((card, i) => (
            
          <Col md={12} lg={4} key={card.id} className="iconCard">
            <CardBox
              Icon={card.icon}
              Title={card.Title}
              Description={card.Description}
            />
          </Col>
          ))}
          
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
    
  );
};

export default HomeCardSec;
