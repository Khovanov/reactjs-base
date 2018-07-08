import React, { Component } from 'react';
import Invoice from './Invoice';

class ShowInvoice extends Component {

  render() {
    let invoice = new Invoice();
    invoice.add("Bitcoin", 3, 6000);
    invoice.add("Ethereum", 10, 440);
    invoice.add("Ripple", 100, 0.46);
    invoice.add("Litecoin", 10, 78);
    invoice.delete(3);

    return (
      <div>
        <h2>Invoice:</h2>
        <ol>
        {invoice.items.map((item, index) => (
          <li key={index}>
            {item.product}, qt: {item.quantity}, cost: {item.cost}, sum: {item.sum} USD
          </li>
        ))}
        </ol>
        <div>Total: {invoice.total} USD</div>
      </div>
    )
  }
}

export default ShowInvoice;
