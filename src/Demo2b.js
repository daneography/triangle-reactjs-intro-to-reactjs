import React, { Component } from 'react';
import VisualDateTime from './VisualDateTime';

class Demo2b extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentWillMount() {
    const intervalId = setInterval(() => this.timer(), 1000);
    this.setState({
      intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>DEMO 2b</h1>
        <VisualDateTime date={date} />
      </div>
    );
  }
}

export default Demo2b;
