interface ISuperHeroe {
  name: string;
  age: number;
  address: IAddress;
  showAddress: () => string;
}

interface IAddress {
  street: string;
  country: string;
  city: string;
}

const superHeroe: ISuperHeroe = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main St',
    country: 'USA',
    city: 'NY'
  },
  showAddress() {
    return this.name + ', ' + this.address.city + ', ' + this.address.country;
  }
}

const address = superHeroe.showAddress();
console.log(address);


export { };