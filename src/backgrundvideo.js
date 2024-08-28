import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './videoBackground.css'; // Custom CSS for styling
import Navbar from './Navall'
import Foot from './footall'
import videoSource from './images/back.mp4'; // Path to your video file

function VideoBackground() {
    return (
        <div>
            <Navbar/>
        <div className="video-background-container">
            <video className="video-background" autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Additional content can go here */}
           
        </div>
     
            <Foot/>
       
        </div>
    );
}

export default VideoBackground;
