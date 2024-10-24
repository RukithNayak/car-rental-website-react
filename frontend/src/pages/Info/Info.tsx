import React from 'react';
import './Info.css';

const Info: React.FC = () => {
    return (
        <section className="how-it-works">
            <h2>How it works?</h2>
            <div className="steps">
                <div className="step">
                    <img src="location-icon.png" alt="Choose a location" />
                    <h3>Choose a location</h3>
                    <p>Select a desired location from one of our extensive car rental spots.</p>
                </div>
                <div className="step">
                    <img src="calendar-icon.png" alt="Pick up date" />
                    <h3>Pick up date</h3>
                    <p>Specify the date and time you wish to pick up your car with.</p>
                </div>
                <div className="step">
                    <img src="car-icon.png" alt="Book your car" />
                    <h3>Book your car</h3>
                    <p>There is just enough space here for several lines of text. Use it well.</p>
                </div>
            </div>
        </section>
    );
};

export default Info;
