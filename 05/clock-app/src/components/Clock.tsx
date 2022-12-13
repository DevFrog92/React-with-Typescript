import React, { Component } from 'react'
import DateAndTime from "date-and-time";

type Props = {
  formatString: string;
};

type State = {
  currentTime: Date;
};

class Clock extends Component<Props, State> {
  state: State = {
    currentTime: new Date()
  };

  componentDidMount = () => {
    console.log('componentDidMount')
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  };

  render() {
    const { currentTime } = this.state;

    return (
      <div className='boxStyle'>
        <h3>{DateAndTime.format(currentTime, this.props.formatString)}</h3>
      </div>
    );
  }
}

export default Clock;
