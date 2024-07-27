import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Banner.css'
function Banner() {
  return (
    <div className='backgroundh'>
        <Container>
            <Row>
                <Col md={4} className='bannerh'>
                <h1>Mastering Your Journey</h1>
                <p>Let us help you explore the world's wonders in a way that speaks to your heart.Your perfect journey starts here!</p>
                </Col>
            </Row>
            <Row style={{color:'white',marginLeft:'5%',marginTop:'5%'}}> 
                <p >Popular place : Bali,Istanbul,Rom,Paris.</p>
                </Row>
        </Container>
    </div>
  )
}

export default Banner
