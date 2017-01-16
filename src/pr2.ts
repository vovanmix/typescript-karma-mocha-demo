console.log('pr2.ts loaded!');

// Exercise 1
type Double = (v: number) => number;
const double: Double = (value: number): number => value * 2;
console.log(double(10));

// Exercise 2
type Greet = (n?: string) => void;
const greet: Greet = function (name: string = "none") {
    console.log(`Hello, ${name}`);
};
greet();
greet("Anna");

// Exercise 3
const numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
const newArray: number[] = [55, 20];
newArray.push(...numbers)
console.log(newArray);

// Exercise 5
const testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(testResults);

// Exercise 6
const scientist: {firstName: string, experience: number} = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
