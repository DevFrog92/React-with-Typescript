import React, { Component } from 'react'

type Props = { level: string };

type State = { discountRate: number; customerName: string };

export default class LifeCycle extends Component<Props, State> {
  state: State = {
    discountRate: 0,
    customerName: 'Jin'
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    let tempRate = 0;
    if (props.level === 'Gold') tempRate = 0.15;
    else if (props.level === 'Silver') tempRate = 0.1;
    else if (props.level === 'Bronze') tempRate = 0.05;
    else tempRate = 0.02;

    return { ...state, discountRate: tempRate };
  }

  render() {
    return (
      <div>
        {this.state.customerName}님의 할인율은 {this.state.discountRate*100}%입니다.
      </div>
    )
  }
}