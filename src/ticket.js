import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './images/img_7.jpg'; // Replace with your image path

function CardsContainer() {
    return (
        <div className="container my-5 d-flex justify-content-center">
            <div className="card" style={{ width: '100%', maxWidth: '1200px', height: '400px', border: 'none' }}>
                <div className="row g-0 h-100">
                    {/* First Card with Image */}
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <div className="card" style={{ width: '100%', height: '300px', border: 'none', overflow: 'hidden' }}>
                            <img src={image} alt="Decorative" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>

                    {/* Second Card with Same Image */}
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <div className="card" style={{ width: '100%', height: '300px', border: 'none', overflow: 'hidden' }}>
                            <img src={image} alt="Decorative" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>

                    {/* Third Card as a Form */}
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <div className="card" style={{ width: '100%', height: '300px', border: 'none', backgroundColor: '#f8f9fa' }}>
                            <div className="card-body d-flex flex-column p-4" style={{ height: '100%', overflowY: 'auto' }}>
                                <h4 className="text-center mb-4">Booking Form</h4>
                                <form className="w-100">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pickup" className="form-label">Pickup Location</label>
                                        <input type="text" className="form-control" id="pickup" placeholder="Enter pickup location" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dropoff" className="form-label">Drop-off Location</label>
                                        <input type="text" className="form-control" id="dropoff" placeholder="Enter drop-off location" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="date" />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardsContainer;
