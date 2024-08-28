import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';

import { Link } from "react-router-dom";

import logo from './images/bl.png';
import slide from './images/icons/sliders.svg'

function Navbar()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg " style={{ background: 'linear-gradient(to right, #003366, #CC003D)' }}>
                <div className="container-fluid">
                    {/* Navbar Brand */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={logo} height={40} alt="Logo" className="me-2" aria-label="Company Logo" />
                        BOOK YOUR JOURNEY
                    </a>

                    {/* Toggler Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                       <img src={slide} alt="slider"></img>  
                    </button>

                    {/* Collapsible Navbar Items */}
                    <div className="collapse navbar-collapse" id="navbar">
                        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center w-100">
                            {/* Search Bar */}
                            <form className="d-flex flex-grow-1 mb-2 mb-lg-0 me-lg-3">
                                <input type="search" placeholder="SEARCH" className="form-control" aria-label="Search" />
                            </form>

                            {/* Navbar Links */}
                            <ul className="navbar-nav flex-column flex-lg-row ms-lg-auto">
                                <li className="nav-item mb-2 mb-lg-0 me-lg-3">
                                    <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>HOME</Link>
                                </li>
                                <li className="nav-item mb-2 mb-lg-0 me-lg-3">
                                    <Link to='/seat' style={{ color: 'black', textDecoration: 'none' }}>SEATERS</Link>
                                </li>
                                <li className="nav-item mb-2 mb-lg-0 me-lg-3">
                                    <Link to='/book' style={{ color: 'black', textDecoration: 'none' }}>BOOKINGS</Link>
                                </li>
                                <li className="nav-item mb-2 mb-lg-0 me-lg-3">
                                    <Link to='/fav' style={{ color: 'black', textDecoration: 'none' }}>MY FAVOURITES</Link>
                                </li>
                                <li className="nav-item mb-2 mb-lg-0 me-lg-3">
                                    <Link to='/about' style={{ color: 'black', textDecoration: 'none' }}>ABOUT US</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;





