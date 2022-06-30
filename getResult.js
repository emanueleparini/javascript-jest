function getResult(goods_arr) {
  let total = 0.0;
  let tax = 0.0;
  goods_arr.map(goods => {
    tax = (parseFloat(tax) + parseFloat(goods.totalTax)).toFixed(2);
    total = (parseFloat(total) + parseFloat(goods.totalPrice)).toFixed(2);
  });

  return [`Sales Taxes: ${tax}`, `Total: ${total}`];
}

module.exports = getResult;
