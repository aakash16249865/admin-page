import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';

import wht from './images/icons/whatsapp.svg';
import ins from './images/icons/instagram.svg';
import twit from './images/icons/twitter-x.svg';
import face from './images/icons/facebook.svg';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4" style={{ background: 'linear-gradient(to right, #003366, #0099cc)' }}>
            <div className="container">
                <div className="row">
                    {/* Quick Links */}
                    <div className="col-md-3 mb-3 mb-md-0">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Seaters</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Bookings</a></li>
                            <li><a href="#" className="text-white text-decoration-none">My Favourites</a></li>
                            <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-3 mb-3 mb-md-0">
                        <h5 className="mb-3">Contact Us</h5>
                        <p>1234 Main Street, Anytown, USA</p>
                        <p>info@yourwebsite.com</p> 
                        <p>(123) 456-7890</p>
                    </div>

                    {/* Follow Us */}
                    <div className="col-md-6 d-flex flex-column align-items-start">
                        <h5 className="mb-3">Follow Us</h5>
                        <div className="d-flex gap-3 mb-3">
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                                <img src={wht} alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
                            </a>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={ins} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <img src={twit} alt="Twitter" style={{ width: '30px', height: '30px' }} />
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={face} alt="Facebook" style={{ width: '30px', height: '30px' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
