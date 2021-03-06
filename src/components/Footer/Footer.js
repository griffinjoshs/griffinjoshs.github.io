import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import FooterSocials from "./FooterSocials/FooterSocials"
import FooterBottom from './FooterBottom/FooterBottom'
import Nav from '../Navbar/nav.json'
import Foot from './FooterContent'

const Footer = () => {
  return (
    <div className="main-footer">
      <Container fluid id="top-footer">
          <Row><Col md={12} lg={6} id='topFootText'>
          <p className="text-xl-left md-center">{Foot[0].Title}</p>
        </Col>
        <Col md={12} lg={6} id='footerSocials'>
          <FooterSocials/>
        </Col></Row>
        
      </Container>
      <br></br>
      <br></br>
      <br></br>

      <Container>
        <Row>
          <Col md={3} sm={6}>
            <h4>{Foot[1].Title}</h4>
            <hr className='divider'></hr>
            <img src={Foot[1].logo} alt={Foot[1].alt}></img>
          </Col>
          <Col md={3} sm={6}>
            <h4>{Foot[2].Title}</h4>
            <hr className='divider'></hr>
            <ul className="list-unstyled">
              <li className='footerNavLink'>{Foot[2].email}</li>
              <li className='footerNavLink'>{Foot[2].phone}</li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h4>{Foot[3].Title}</h4>
            <hr className='divider'></hr>
            <ul className="list-unstyled">
              <li className='footerNavLink'><a href='/'>{Nav[0].menu1}</a></li>
              <li className='footerNavLink'><a href='/'>{Nav[0].menu2}</a></li>
              <li className='footerNavLink'><a href='/'>{Nav[0].menu3}</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h4>{Foot[4].Title}</h4>
            <hr className='divider'></hr>
          </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
      </Container>   
      <FooterBottom/>  
    </div>
  );
};

export default Footer;
