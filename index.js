import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/Hello';
import Calculator from './src/Calculator';

let calc = new Calculator();
console.log('RESULT 1+2 =', calc.sum(1, 2));
console.log('RESULT 2 pow 3 =', calc.pow(2, 3));

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
