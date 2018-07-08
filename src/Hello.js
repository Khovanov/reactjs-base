import React, { Component } from 'react';
import Label from './Label';
import Calculator from './Calculator';

class Hello extends Component {
  render() {
    let calc = new Calculator();
    return (
      <div>Sum 1 and 2 is <Label>{calc.sum(1, 2)}</Label></div>
    )
  }
}

export default Hello;
