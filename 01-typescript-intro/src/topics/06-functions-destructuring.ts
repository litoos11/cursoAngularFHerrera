export interface IProduct {
  description: string;
  price: number;
}

const phone: IProduct = {
  description: 'Nokia A1',
  price: 150.0
}

const tablet: IProduct = {
  description: 'IPad Air',
  price: 250.0
}

interface ITaxtCalculationOptions {
  tax: number;
  products: IProduct[];
}

// function taxtCalculation(options: ITaxtCalculationOptions): [number, number] {
// function taxtCalculation({tax, products}: ITaxtCalculationOptions): [number, number] {
export function taxtCalculation(options: ITaxtCalculationOptions): [number, number] {
  const { tax, products } = options;
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];

}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxtCalculation({
  products: shoppingCart,
  tax,
})

console.log('Total ', total);
console.log('Tax ', taxTotal);
