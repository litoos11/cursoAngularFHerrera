export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Litoos11'
}

const passenger2: Passenger = {
  name: 'Ana',
  children: ['Xime', 'Richi']
}

const returnChildrenNumber = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0;
  // const howManyChildren = passenger.children!.length;
  console.log(howManyChildren);
  return howManyChildren;
}

// returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);