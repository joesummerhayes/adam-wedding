import React from 'react';

class Countdown extends React.Component {
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

      componentDidMount() {
          this.intervalID = setInterval(
              () => this.tick(),
              1000
          );
      }
      componentWillUnmount() {
          clearInterval(this.intervalID);
      }

      tick() {
          const now = new Date().getTime();
          const endDate = new Date("May 30, 2020 00:00:1").getTime();
          const distance = endDate - now;

          // time calcs
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          
          this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
          })
      }



    render() {
        return (
            <div>
            <div className="ui grid">
                <div className="four wide column countdown number-countdown">{this.state.days}</div>
                <div className="four wide column countdown number-countdown">{this.state.hours}</div>
                <div className="four wide column countdown number-countdown">{this.state.minutes}</div>
                <div className="four wide column countdown number-countdown">{this.state.seconds}</div>
                <div className="four wide column countdown value-countdown ">DAYS</div>
                <div className="four wide column countdown value-countdown">HOURS</div>
                <div className="four wide column countdown value-countdown">MINS</div>
                <div className="four wide column countdown value-countdown">SECS</div>
            </div>
            </div>
            
        )
    }
}

export default Countdown;
