
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { TbMailFilled } from "react-icons/tb";
import { RiPhoneFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
    <footer className="bg-white py-4">
      <Container>
        <Row>
          <Col xs={5}>
            <h5 style={{color:'gray'}}>Contact Information</h5>
            <p style={{color:'gray'}}><FaLocationDot/> 732 Despard St, Atlanta</p>
            <p style={{color:'gray'}}><RiPhoneFill/> +97 888 8888</p>
            <p style={{color:'gray'}}><TbMailFilled/> info@traveller.com</p>
          </Col>
          <Col>
            <h5 style={{color:'gray'}}>Quick Link</h5>
            <ul className="list-unstyled">
              <li><a href="#"style={{textDecoration:'none',color:'gray'}}>Home</a></li>
              <li><a href="#" style={{textDecoration:'none',color:'gray'}}>About Us</a></li>
              <li><a href="#" style={{textDecoration:'none',color:'gray'}}>Tours</a></li>
              <li><a href="#" style={{textDecoration:'none',color:'gray'}}>Contact</a></li>
            </ul>
          </Col>
          <Col>
            <h5 style={{color:'gray'}}>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" style={{textDecoration:'none',color:'gray'}}  ><FaFacebook /></a></li>
              <li className="list-inline-item"><a href="#" style={{textDecoration:'none',color:'gray'}}><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="#" style={{textDecoration:'none',color:'gray'}}><FaYoutube /></a></li>
              <li className="list-inline-item"><a href="#" style={{textDecoration:'none',color:'gray'}}><FaInstagram /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>

    <footer className="bg-black py-4"  style={{color:'white', textAlign:'center',alignItems:'center'}}>
    
    
      <span> Copyright © All rights reserved</span>
  

  </footer>
    </div>
  );
};

export default Footer;
