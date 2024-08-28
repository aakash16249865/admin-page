import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import '@popperjs/core/dist/umd/popper.min';
import { Link } from 'react-router-dom';


import search from './images/icons/search.svg'
import toggle from './images/icons/sliders2.svg'

import log from './images/bl.png';
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light px-4" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={log} alt="Logo" style={{ height: '50px' }} />
                <span className="text-white">BOOK YOUR JOURNEY</span>
            </a>
           



            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <img src={toggle} alt='search'></img>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <form className='mx-auto position-relative justify-content-start' style={{ width: '30%' }}>
                <input className="form-control" type="search" placeholder="Search" style={{ paddingRight: '30px' }} />
                <img src={search} alt="Search Icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', height: '20px', cursor: 'pointer' }} />
            </form>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/faq">SEATERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/booking">MY BOOKINGS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact">FAVOURITES</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
