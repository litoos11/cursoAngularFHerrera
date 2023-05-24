function addNumber(a: number, b: number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
  return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
  return firstNumber * base;
}

// const result: number = addNumber(3, 5);
// const result2: string = addNumberArrow(9, 7);
// const multiplyResult: number = multiply(5)

// console.log({ result, result2, multiplyResult });

interface ICharacter {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: ICharacter, amount: number) => {
  character.hp += amount;
}

const strider: ICharacter = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  }
}

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHp();


export { };