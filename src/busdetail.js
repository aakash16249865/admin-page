import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import Navbar from './Navall'
import Foot from './footall'
import { Link } from "react-router-dom";

import logo from './images/bl.png';
import bus from './images/download (4).jpeg';
import slide from './images/icons/sliders.svg'
import slideimage from './images/3.jpg';
import background from './images/hello (4).jpg'
import wht from './images/icons/whatsapp.svg'
import ins from './images/icons/instagram.svg'
import twit from './images/icons/twitter-x.svg'
import face from './images/icons/facebook.svg'

import './busdetail.css'
import Gallery from './photogallery'


function Details() {
    return (
        <div>
            

            <Navbar/>
            {/* Main Content */}
            <div className="container-fluid" style={{background :'linear-gradient(to right, #003366, #CC003D)'}}>
            <div className="container" >
                <div className="row align-items-center">
                    <div className="card col-md-4 mb-4 mt-3 " style={{background:'grey'}}>
                        <img src={bus} alt="busimage"></img>
                        <div className="card-body">
                            <p>Have a fun and safe journey with us</p>
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
                    <Link to='/busbook' className="btn btn-primary" style={{width:'90px', height:'60px'}}>Book now</Link>
                    
                </div>
            </div>
            <div className="col">
                <Gallery /> {/* Add the PhotoGallery component */}
            </div>
                    
            </div>
            <Foot/>
        </div>
    );
}

export default Details;
