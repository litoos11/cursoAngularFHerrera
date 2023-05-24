import { IProduct, taxtCalculation } from './06-functions-destructuring';

const shoppingCart: IProduct[] = [
  {
    description: 'Nokia',
    price: 100
  },
  {
    description: 'iPad',
    price: 150
  }
];

const tax = 0.15;
const [total, taxTotal] = taxtCalculation({
  products: shoppingCart,
  tax
});

console.log('Total', total);
console.log('Tax', taxTotal);