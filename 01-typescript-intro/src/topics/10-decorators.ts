function classDecorator<T extends {new (...args:any[]): {}}>(
  constructor: T
) {
  return class extends constructor {
    newPropertie: string = 'New propertie';
    hello: string = 'override'
  }

}

@classDecorator
export class SuperClass {
  public myPorperty: string = 'Abc123';

  print() {
    console.log('Hola mundo');
  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);