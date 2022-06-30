const foods = [
  'food',
  'chocolate',
  'bread',
];

const books = [
  'book',
];

const medical_products = [
  'medicine',
  'pill',
  'headache',
];

class Goods {
  constructor(input) {
    const regPattern = /(?<count>\d)\s(?<name>(.)+)\sat\s(?<price>\d+(\.\d+)?)/;
    const m = regPattern.exec(input);

    this.count = Number.parseInt(m.groups.count);
    this.name = m.groups.name;
    this.price = Number.parseFloat(m.groups.price);
    this.tax = 0;

    this.calc();
  }

  isBasicTaxExempted() {
    const isFood = foods.some(element => {
      if (this.name.includes(element)) {
        return true;
      }

      return false;
    });

    const isBook = books.some(element => {
      if (this.name.includes(element)) {
        return true;
      }

      return false;
    });

    const isMedicine = medical_products.some(element => {
      if (this.name.includes(element)) {
        return true;
      }

      return false;
    });

    return isFood | isBook | isMedicine;
  }

  isImported() {
    return this.name.includes('imported');
  }

  roundup(number) {
    return (Math.ceil(number * 20) / 20).toFixed(2);
  }
  
  calc() {
    if (!this.isBasicTaxExempted()) {
      this.tax = (parseFloat(this.tax) + parseFloat(this.roundup(this.price * 0.1))).toFixed(2);
    }

    if (this.isImported()) {
      this.tax = (parseFloat(this.tax) + parseFloat(this.roundup(this.price * 0.05))).toFixed(2);
    }

    this.price = (parseFloat(this.price) + parseFloat(this.tax)).toFixed(2);
  }
  
  get totalTax() {
    return (parseFloat(this.tax) * parseInt(this.count)).toFixed(2);
  }

  get totalPrice() {
    return (parseFloat(this.price) * parseInt(this.count)).toFixed(2);
  }

  get output() {
    return `${this.count} ${this.name}: ${this.totalPrice}`;
  }
}

module.exports = Goods;
