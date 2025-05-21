// Задание 1

interface Car {
    brand: string;
    year: number;
  
    dynamic_1: Record<string, string>; 
    dynamic_2: { [key: string]: number }; 
  
    tuple: [string, number]; 
}
  

type CarKeys = keyof Car;


const keys: CarKeys[] = ['brand', 'year', 'dynamic_1', 'dynamic_2', 'tuple'];
console.log('Ключи Car:', keys);


// Задание 2


function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;


function add(a: any, b: any): any {
  return a + b;
}


console.log(add(2, 3));        // 5
console.log(add('Hi, ', 'TS'));// 'Hi, TS'
console.log(add('Age: ', 25)); // 'Age: 25'
console.log(add(100, 'kg'));   // '100kg'


// Задание 3



type PartialCar = Partial<Car>;

type RequiredCar = Required<Car>;

type ReadonlyCar = Readonly<Car>;

type CarBasicInfo = Pick<Car, 'brand' | 'year'>;

type CarWithoutDynamic = Omit<Car, 'dynamic_1' | 'dynamic_2'>;
