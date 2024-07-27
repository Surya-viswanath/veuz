
import React, { useState } from 'react';
import './Card2.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import icon1 from '../images/icon1.jpg';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import { RiMoneyDollarBoxFill } from "react-icons/ri";

function Card2() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Best Service',
            image:icon1,
            description: 'Beyond just a trip; we are all about crafting unforgettable experiences. With our warm smiles and personalized attention, every moment of your journey is stress-free and memorable.',
            icon: (
                // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-16h-5v16zm-3 8H15v-4H9v4h3zm-6 4h12v-16h-12v16z" />
                // </svg>
                <RiMoneyDollarBoxFill />
            )
        },
        {
            title: 'Best Price Assurance',
            image:icon2,
            description: 'Worried about breaking the bank? Fear not! At Sky Guru Travels, we promise the best prices for your dream adventures. Get ready for unbeatable deals without compromising on quality.',
           
        },
        {
            title: 'Best Lodging Choices',
            image:icon3,
            description: 'From cozy hideaways to luxurious resorts, we\'ve handpicked the finest accommodations just for you. Rest easy knowing that wherever you lay your head, it\'ll be a perfect match for your style and comfort.',
            
        },
        {
            title: 'Best Price Assurance',
            image:icon2,
            description: 'Beyond just a trip; we are all about crafting unforgettable experiences. With our warm smiles and personalized attention, every moment of your journey is stress-free and memorable.',
            
        },
        {
            title: 'Best Lodging Choices',
            image:icon1,
            description: 'From cozy hideaways to luxurious resorts, we\'ve handpicked the finest accommodations just for you. Rest easy knowing that wherever you lay your head, it\'ll be a perfect match for your style and comfort.',
            
        },
        {
            title: 'Best Service',
            image:icon3,
            description: 'Beyond just a trip; we are all about crafting unforgettable experiences. With our warm smiles and personalized attention, every moment of your journey is stress-free and memorable.',
           
        },
    ];

    const slidesPerPage = 3;
    const totalPages = Math.ceil(slides.length / slidesPerPage);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
    };

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalPages) % totalPages);
    };

    const visibleSlides = slides.slice(currentSlide * slidesPerPage, (currentSlide + 1) * slidesPerPage);

    return (
        <div className="banner-app">
            <div className="con-banner">
                <div className="con-header">
                    <h1 style={{ fontWeight: '600', fontSize: '24' }}>Why Sky Guru?</h1>
                    <p>Vacations are special, and you deserve to spend them the right way!</p>
                </div>
                <div className="nav1">
                    <span className="left-arrow shadow  bg-white rounded" onClick={handlePreviousSlide}>&lt;</span>
                    <span className="right-arrow shadow bg-white rounded" onClick={handleNextSlide}>&gt;</span>
                </div>
                <div className="con-cards">
                    {visibleSlides.map((slide, index) => (
                        <div className="con-card" key={index}>
                            <div className="con-icon">
                                {/* {slide.icon} */}
                                <img src={slide.image} className='con-icon-img'/>
                            </div>
                            <div className='content-div'>
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                                <button>Learn More <FaLongArrowAltRight style={{ fontSize: '20px' }} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card2;
