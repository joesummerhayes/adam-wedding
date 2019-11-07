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
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        <p className="wedding-date">MAY 30TH 2020</p>
                    </div>
                    <div className="countdown-section">
                        <Countdown />
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXHfuhhD7ydCiXGziPF34puX2vwVLAuU2L9zq0xquY6jA-lA/viewform" target="_blank">
                        <div className="rsvp-button">
                            <button>
                                RSVP HERE
                            </button>
                        </div>
                    </a>
                </div>
                <div className="adam-image">
                    <img src={picture} alt="proposal"/>
                </div>
            </div>
        )
    }
}

export default Card;
