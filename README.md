
Javascript project for Reviva.
The inputs for test cases are harded-coded in the unit test scenarios in Jest.

# How to run the project
  - yarn install
  - yarn test
  
  By following the steps above, you can see that all the test cases are passed.

# Code files
## Goods class
In Goods.js, there is a class `Goods` defined.

### `Constructor `
You can pass the input for each good using constructor. For example,

>const chocolate = new Goods('1 chocolate at 12.50');

The input is parsed using regular expression into product count, name and price. The above sample is parsed into:

>`{count: 1, name: 'chocolate, price: 12.50}`.

### `isBasicTaxExempted` member function
This class member function is used to check if the product is food, book or medical product.
Technically it is implemented using the array with the category keywords.

For example, foods category includes const `food`, `chocolate` and `bread`.

### `isImported` member function
This class member function is used to check if the product is imported. It is implemented by checking if the product name includes `imported` substring.
### `roundup` member function
This function rounds up the number to the nearest `0.05` value.

The formula is `(Math.ceil(number * 20) / 20).toFixed(2)`.

## getResult utility
This function returs the total price and total tax values of inputted products.

# Credits
https://www.linkedin.com/in/emanuele-parini/
