import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BoardingPass.css'; // For any additional custom styles
import backgroundImage from './images/bg.jpg'; // Replace with the actual image path
import logo from './images/bl.png'
function BoardingPass() {
    return (
        <div className="Main-content container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
    <div className="card" style={{ width: '800px', height: '400px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
        <div className="row h-100">
            {/* Barcode Section */}
            <div className="col-2 d-flex flex-column justify-content-center align-items-center bg-light border-end border-secondary">
                <div className="bg-dark" style={{ width: '80%', height: '70px', background: 'repeating-linear-gradient(90deg, #000, #000 2px, #fff 2px, #fff 4px)' }}></div>
                <div className="text-center mt-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '12px' }}>Occasion Name</div>
            </div>

            {/* Image and Text Section */}
            <div className="col-6 position-relative p-0">
                <img src='' alt="Destination" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '5px 10px', borderRadius: '5px' }}>
                    <p className="mb-1">Surprise! You're going to</p>
                    <h1 className="m-0">IBIZA</h1>
                </div>
            </div>

            {/* Details Section with Scrollable Form */}
            <div className="col-4 bg-light p-3 border-start border-secondary" style={{ overflowY: 'auto', maxHeight: '400px' }}>
                {/* Website Name and Logo */}
                <div className="d-flex align-items-center mb-3">
                    <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
                    <h4 className="h4 mb-0">BOOK YOUR JOURNEY</h4>
                </div>
                
                <h2 className="h5 border-bottom pb-1 mb-2">BUS BOOKING FORM</h2>
                <form className="form-scrollable">
                    <div className="mb-2">
                        <label htmlFor="passengerName" className="form-label"><strong>Name</strong></label>
                        <input type="text" className="form-control" id="passengerName" placeholder="Enter your name" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="departureDate" className="form-label"><strong>Starting Date</strong></label>
                        <input type="date" className="form-control" id="departureDate" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="returnDate" className="form-label"><strong>Return Date:</strong></label>
                        <input type="date" className="form-control" id="returnDate" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="pickupLocation" className="form-label"><strong>Pickup Location:</strong></label>
                        <input type="text" className="form-control" id="pickupLocation" placeholder="Enter pickup location" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="dropoffLocation" className="form-label"><strong>Destination</strong></label>
                        <input type="text" className="form-control" id="dropoffLocation" placeholder="Enter drop-off location" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="notes" className="form-label"><strong>Additional Notes:</strong></label>
                        <textarea className="form-control" id="notes" rows="2" placeholder="Write any additional notes here"></textarea>
                    </div>
                    {/* Confirm Button */}
                    <button type="submit" className="btn btn-primary w-100">Confirm Booking</button>
                </form>
            </div>
        </div>
    </div>
</div>   
    );
}

export default BoardingPass;