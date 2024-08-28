// GallerySwiper.js

import React, { useEffect } from 'react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation } from 'swiper/modules'; // Import Swiper Navigation module
import SwiperCore from 'swiper'; // Import Swiper core

// Import local images
import image1 from './images/download (4).jpeg'; // Replace with actual image path
import image2 from './images/download (5).jpeg'; // Replace with actual image path
import image3 from './images/download (6).jpeg'; // Replace with actual image path
import image4 from './images/download (7).jpeg'; // Replace with actual image path
import image5 from './images/download (8).jpeg'; // Replace with actual image path
import image6 from './images/download (8).jpeg'; // Replace with actual image path

// Initialize Swiper modules
SwiperCore.use([Navigation]);

const images = [image1, image2, image3, image4, image5, image6];

const GallerySwiper = () => {
    useEffect(() => {
        // Initialize Swiper inside useEffect to ensure DOM is ready
        const swiper = new SwiperCore('.mySwiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 15,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
            },
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);

    return (
        <div
            style={{
                height: '100vh',
                backgroundColor: '#01000c',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1 style={{ color: '#fff', fontSize: '55px', margin: '80px 0' }}>GALLERY</h1>
            <div className="swiper mySwiper" style={{ width: '80%', height: '100%' }}>
                <div className="swiper-wrapper">
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="swiper-slide" style={{ width: '250px' }}>
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    WebkitBoxReflect:
                                        'below 1px linear-gradient(transparent, transparent , #0002 , #0004)',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="swiper-button-next" style={{ color: '#fff' }}></div>
                <div className="swiper-button-prev" style={{ color: '#fff' }}></div>
            </div>
        </div>
    );
};

export default GallerySwiper;
