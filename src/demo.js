import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/bl.png'; // Update with your actual logo path
import image from './images/img_6.jpg'; // Update with your actual image path

function ResponsivePage() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" height="40" className="d-inline-block align-top" />
          <span className="ms-2">BOOK YOUR JOURNEY</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Bookings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About Us</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <div className="container mt-4">
          <div className="row g-0">
            {/* First Card with Image */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <div className="card" style={{ width: '100%', height: '400px', border: 'none', overflow: 'hidden' }}>
                <img src={image} alt="Decorative" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Second Card with Same Image */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <div className="card" style={{ width: '800%', height: '400px', border: 'none', overflow: 'hidden' }}>
                <img src={image} alt="Decorative" style={{ width: '80%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Third Card as a Form */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
              <div className="card" style={{ width: '120%', height: '400px', border: 'none', backgroundColor: '#f8f9fa' }}>
                <div className="card-body d-flex flex-column p-4" style={{ height: '100%', overflowY: 'auto' }}>
                  <center><img src={logo} alt="form-logo" height={50} width={50} /></center>
                  <h4 className="text-center mb-4">BOOK YOUR JOURNEY</h4>
                  <form className="w-100">
                    <div className="mb-2">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="pickup" className="form-label">Pickup Location</label>
                      <input type="text" className="form-control" id="pickup" placeholder="Enter pickup location" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="dropoff" className="form-label">Drop-off Location</label>
                      <input type="text" className="form-control" id="dropoff" placeholder="Enter drop-off location" />
                    </div>
                    <div className="mb-2">
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

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>

      </footer>
    </div>
  );
}

export default ResponsivePage;
