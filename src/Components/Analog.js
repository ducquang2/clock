import React, { Component } from 'react';

export default class Analog extends Component {
  constructor(props) {
    super(props);
    this.state = {date: this.getCurrentDatewithtimezone(this.props.country, this.props.timeZone) };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  getCurrentDatewithtimezone(country, timeZone) {
    if (!timeZone && !country) {
      return new Date();
    }
    else {
      const d = new Date()
      const r = new Date(d.toLocaleString(country, timeZone));
      return r;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: this.getCurrentDatewithtimezone(this.props.country, this.props.timeZone)
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
