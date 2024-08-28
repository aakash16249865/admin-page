import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import '@popperjs/core/dist/umd/popper.min';
import { Link } from "react-router-dom";

import img1 from './images/download (4).jpeg'
import Navbar from './Navall'
import Foot from './footall'
export default function User()
{
  return(
    <div>
        <Navbar/>
        <div className="container-fluid"  style={{background :'linear-gradient(to right, #003366, #CC003D)'}}>
        <div className="container ">
          <div className="row">
            <div className="col-md-4 mb-4 mt-3 bus-card">
              <div className="card">
                <img src={img1} alt="bus1" ></img>
                <div className="card-body">
                  <h2 className="bus-name"><strong>ANGEL</strong></h2>
                  <Link to="/seemore" className="btn btn-primary">See More</Link>
                </div>
              </div> 
            </div>
          </div>

        </div>
        </div>
    <Foot/>
    </div>
  )
}


              // <div 
              //   className="card rounded" 
              //   style={{ 
              //     width: '300px', // Set fixed width for the card
              //     height: '600px', // Set fixed height for the card
              //     overflow: 'hidden', // Ensure content does not overflow the card
              //     borderRadius: '35px', // Rounded corners
              //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Adds a shadow for better visual appeal
              //   }}
              // >
              //   <img 
              //     src={img1} 
              //     alt="bus1" 
              //     className="card-img-top" 
              //     style={{ 
              //       height: '500px', // Adjust image height within the card
              //       objectFit: 'cover' // Ensures the image covers the area without distortion
              //     }} 
              //   />