
import React, { useState } from 'react';

import Couple from '../images/Couple.jpg';
import Bali from '../images/Bali.jpg';
import City from '../images/City.jpg';
import card4 from '../images/4.jpg';
import card5 from '../images/5.jpg';
import card6 from '../images/6.jpg';

import './Card1.css';
import { Col, Container, Row } from 'react-bootstrap';

function Card1() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    
    {
      image: Couple,
      title: 'Couple Exploring',
      description: 'A couple explores a new city, capturing memories on camera.',
    },
    {
        image: Bali,
        title: 'Bali, Indonesia',
        description: 'Bali is a beautiful tourist spot and is visited by many travelers.',
      },
    {
      image: City,
      title: 'New York City',
      description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
    },
    {
        image: card4,
        title: 'New York City',
        description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
      },
      {
        image: card5,
        title: 'New York City',
        description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
      },
      {
        image: card6,
        title: 'New York City',
        description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
      },
    // Add more slides here if you have more images
  ];

  const slidesPerPage = 3;
  const totalPages = Math.ceil(slides.length / slidesPerPage);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalPages) % totalPages);
  };

  // Calculate the visible slides based on the current slide
  const visibleSlides = slides.slice(currentSlide * slidesPerPage, (currentSlide + 1) * slidesPerPage);

  return (
    <div className="cardapp">
      {/* <div className="header"> */}
      <Container className="me-auto header" style={{width:'50%'}}> 
     <h1>Explore new worlds with exotic natural scenery</h1>
        <p>Explore the world with what you love beautiful natural beauty.</p>
       
      </Container>
        
      
      {/* </div> */}
      <div className="content">
      <div className="nav1">
          <span className="left-arrow shadow  bg-white rounded" onClick={handlePreviousSlide}>&lt;</span>
         
          <span className="right-arrow shadow5 bg-white rounded" onClick={handleNextSlide}>&gt;</span>
        </div>
        <div className="cards">
          {visibleSlides.map((slide, index) => (
            <div className="card" key={index} 
            onMouseEnter={() => {
              document.querySelector(`.card-content[data-index="${index}"]`).style.display = 'block';
              document.querySelector(`.card-image[data-index="${index}"]`).style.transform = 'translateY(-10px)'; 
            }}
            onMouseLeave={() => {
              document.querySelector(`.card-content[data-index="${index}"]`).style.display = 'none';
              document.querySelector(`.card-image[data-index="${index}"]`).style.transform = 'translateY(0)'; 
            }}>
            
              <div className="card-image" data-index={index}>
                <img src={slide.image} alt={slide.title}/>
              </div>
              <div className="card-content" data-index={index} style={{ display: 'none' }}>
                <h3 style={{color:'#116cf5'}}>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
       
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card1;