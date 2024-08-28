import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';

import logo from './images/bl.png';
import bus from './images/download (6).jpeg';
import slide from './images/icons/sliders.svg'
import slideimage from './images/3.jpg';
import background from './images/background.jpg'
import wht from './images/icons/whatsapp.svg'
import ins from './images/icons/instagram.svg'
import twit from './images/icons/twitter-x.svg'
import face from './images/icons/facebook.svg'

import './busdetail.css'
import Gallery from './photogallery'


function Details() {
    return (
        <div>
            

       
            {/* Main Content */}
            <div className="container-fluid py-5" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '5px'}}>
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="card" style={{ width: '100%', maxWidth: '400px', transition: 'transform 0.3s ease' }}>
                            <img src={bus} alt="Bus" className="card-img-top" style={{ height: 'auto', objectFit: 'cover' }} />
                        </div>
                    </div>

                    Bus Information
                    {/* <div className="col-lg-6">
                        {busInfo ? (
                            <div className="text-black">
                                <h1 className="mb-4">{busInfo.title}</h1>
                                <p className="lead mb-4">{busInfo.description}</p>
                                <p className="mb-2">Location: {busInfo.location}</p>
                                <p className="mb-2">Departure Time: {busInfo.departureTime}</p>
                                <p className="mb-2">Arrival Time: {busInfo.arrivalTime}</p>
                                Add more information fields as needed
                            </div>
                        ) : (
                            <p className="text-white">Loading bus information...</p>
                        )}
                    </div> */}
                    
                </div>
            </div>
            <div className="col">
                <Gallery /> {/* Add the PhotoGallery component */}
            </div>

            {/* //footer */}
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <h5>Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Seaters</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Bookings</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">My Favourites</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                                </ul>
                        </div>
         
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>Contact Us</h5>
                        <p>
                            <i className="bi bi-geo-alt"></i> SMVEC, PUDUCHERRY
                        </p>
                        <p>
                            <i className="bi bi-envelope"></i> bookyourjourney@tours.com
                        </p>
                        <p>
                            <i className="bi bi-phone"></i> +91 9090909090
                        </p>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-start">
                        <h5 className="mb-3">Follow us on</h5>
                        <div className="d-flex gap-3"> 
                             <img src={wht} alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
                            <img src={ins} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                             <img src={twit} alt="Twitter" style={{ width: '30px', height: '30px' }} />
                             <img src={face} alt="Facebook" style={{ width: '30px', height: '30px' }} />
                        </div>
                        </div>

                    </div>
                        <div className="text-center mt-4">
                            <p className="mb-0">&copy; {new Date().getFullYear()} BOOK YOUR JOURNEY. All rights reserved.</p>
                        </div>
                </div>
            </footer>
            

        </div>
    );
}

export default Details;
