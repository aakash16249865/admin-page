import React, { useState } from "react";
import Navbar from './Navall';
import Footer from './footall';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';

import image from './images/travel (1).jpg';
import image1 from './images/kerala.jpg';

import logo from './images/bl.png';
import busView from './images/Untitled design.png'; // This is the bus view image

export default function Booking() {
    const [showModal, setShowModal] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const calculateTotalAmount = (start, end) => {
        const oneDay = 24 * 60 * 60 * 1000; // Hours*minutes*seconds*milliseconds
        const startDateObj = new Date(start);
        const endDateObj = new Date(end);
        
        if (startDateObj && endDateObj && endDateObj > startDateObj) {
            const diffDays = Math.round(Math.abs((endDateObj - startDateObj) / oneDay)) + 1; // Adding 1 to include the starting day
            setTotalAmount(diffDays * 7000); // Daily rate of 7000 rupees
        } else {
            setTotalAmount(0); // Reset if the dates are invalid or not selected properly
        }
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        calculateTotalAmount(event.target.value, endDate);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
        calculateTotalAmount(startDate, event.target.value);
    };

    return (
        <div>
            <style>
                {`
                .Main-content {
                    background: linear-gradient(to bottom right, #e66465, #9198e5);
                }

                .card {
                    height: 350px; /* General height for larger screens */
                }

                /* Media queries for responsive behavior */
                @media (max-width: 767px) {
                    .first-card {
                        height: 200px !important; /* Reduced height for mobile view */
                    }
                }
                `}
            </style>
            <Navbar />
            <div className="Main-content container-fluid d-flex align-items-center justify-content-center" 
                 style={{ minHeight: 'calc(100vh - 60px)', background: 'linear-gradient(to bottom right, #e66465, #9198e5)' }}>
                <div className="container mt-4">
                    <div className="row g-0">
                        {/* First Card */}
                        <div className="col-12 col-md-3 d-flex align-items-center justify-content-center mb-0 mb-md-0">
                            <div className="card first-card" style={{ width: '100%', border: 'none', overflow: 'hidden' }}>
                                <img src={image} alt="QR Code" className="card-img" />
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-0 mb-md-0">
                            <div className="card" style={{ width: '100%', height: '350px', border: 'none', overflow: 'hidden' }}>
                                <img src={image1} alt="Decorative" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Third Card - Form */}
                        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center bg-dark">
                            <div className="card bg-succes" style={{ width: '100%', height: '350px', border: 'none', backgroundColor: '#f8f9fa' }}>
                                <div className="card-body d-flex flex-column p-4" style={{ height: '100%', overflowY: 'auto' }}>
                                    <center><img src={logo} alt="form-logo" height={50} width={50} /></center>
                                    <h4 className="text-center mb-4">BOOK YOUR JOURNEY</h4>
                                    <form className="w-100">
                                        <div className="mb-2">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="type" className="form-label">Select Type</label>
                                            <select className="form-control" id="type">
                                                <option value="AC">AC</option>
                                                <option value="Non-AC">Non-AC</option>
                                                <option value="Both">Both</option>
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="pickup" className="form-label">Pickup Location</label>
                                            <input type="text" className="form-control" id="pickup" placeholder="Enter pickup location" />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="dropoff" className="form-label">Destination</label>
                                            <input type="text" className="form-control" id="dropoff" placeholder="Enter drop-off location" />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="start-date" className="form-label">Starting Date</label>
                                            <input type="date" className="form-control" id="start-date" value={startDate} onChange={handleStartDateChange} />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="end-date" className="form-label">Ending Date</label>
                                            <input type="date" className="form-control" id="end-date" value={endDate} onChange={handleEndDateChange} />
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Total Amount:</label>
                                            <p>{totalAmount} Rupees</p>
                                        </div>
                                        <button type="button" className="btn btn-secondary mt-2" onClick={handleShowModal}>
                                            Show Bus View
                                        </button>
                                        <button type="submit" className="btn btn-primary mt-2">CONFIRM</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Component */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="busViewModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="busViewModalLabel">Bus View</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={busView} alt="Bus View" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
