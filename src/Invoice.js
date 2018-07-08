class Invoice {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  add(product, quantity, cost) {
    let sum = quantity * cost;
    let item = { product: product, quantity: quantity, cost: cost, sum: sum};
    this.items.push(item);
    this.total += sum;
  }

  delete(index) {
    if (index > -1 && index < this.items.length) {
      let item = this.items[index];
      this.total -= item.sum;
      this.items.splice(index, 1);
    }
  }

}

export default Invoice;
