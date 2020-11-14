import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: this.getCurrentDatewithtimezone()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  getCurrentDatewithtimezone(timezone) {
    if (!timezone) {
      return new Date();
    }
    else {
      const d = new Date();
      const r = new Date(d.toLocaleString(timezone.country, timezone.tz));
      return r;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: this.getCurrentDatewithtimezone()
    });
  }

  render() {
    return (
      <div>
        <h1>Goodbye, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Analog;