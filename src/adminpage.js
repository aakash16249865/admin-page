import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import '@popperjs/core/dist/umd/popper.min';
import { Link } from 'react-router-dom';

import './adminpage.css'
import log from './images/bl.png';
import busImage from './images/travel (7).jpg'; 
import wht from './images/icons/whatsapp.svg'
import ins from './images/icons/instagram.svg'
import twit from './images/icons/twitter-x.svg'
import face from './images/icons/facebook.svg'

const Ad = () => {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light px-4" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={log} alt="Logo" style={{ height: '50px' }} />
                <span className="text-white">BOOK YOUR JOURNEY</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/booking">Booking</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/faq">FAQ</Link>
                    </li>
                </ul>
            </div>
        </nav>
            <div className="container-fluid flex-grow-1 py-5 d-flex " style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className="card photo-card" style={{width: '300px', transition: 'transform 0.3s ease', marginBottom:'30px', marginTop:'-30px' }}>
                                <img src={busImage} alt="Bus" className="card-img-top" style={{ height: '450px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center text-white">
                            <h2 className="mb-4">"Every journey begins and ends with a bus ride."</h2>
                            <p className="lead mb-4">Experience comfort and convenience with our reliable bus services. Wherever you go, we ensure you arrive safely and on time.</p>
                            <div>
                                <Link to="/addbus"><button className="btn btn-light" style={{ marginRight: '20px' }}>Add Bus</button></Link>
                                <Link to="/"><button className="btn btn-outline-light">See Details</button></Link>
                                <Link to=""></Link>
                            </div>
                        </div>
                    </div>
            </div>
            <footer className="text-center py-4" style={{ background:'grey', height:'100px' }}>
                <p>© 2024 Book Your Journey. All rights reserved.</p>
                <div className='d-flex foot justify-content-center' style={{gap:'30px'}}>
                <a href='https://web.whatsapp.com/'><img src={wht}  ></img></a>
                <a href='https://www.instagram.com/ashwin__offll/'><img src={ins}  ></img></a>
                <img src={twit} ></img>
                <img src={face} ></img>
                </div>
            </footer>
    </div>
  )
}

export default Ad
