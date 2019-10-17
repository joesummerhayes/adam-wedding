import React from 'react';
import './App.css';
import Countdown from './Countdown';
import logo from './hollie&adam.svg';
import picture from './hollieadam.png';

class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="center-card">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div>
                        <p className="wedding-date">MAY 30TH 2020</p>
                    </div>
                    <div className="countdown-section">
                        <Countdown />
                    </div>
                    <div className="rsvp-button">
                        <button>RSVP HERE</button>
                    </div>
                </div>
                <div className="adam-image">
                    <img src={picture} />
                </div>
            </div>
        )
    }
}

export default Card;
