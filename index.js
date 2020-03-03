let radius = 7; //initialization
let x; //declaration
const pi = 3.14; //cannot declare const without a value

let area = radius * radius * pi;
console.log(area);

console.log('--------------------');

let num1 = 0.1341 // float
let num2 = 2344 // integer
let num3 = 1.2e+3 // 12000 scientific notation
let num4 = Infinity // really large number
let num5 = 0b1000111 // binary number
let num6 = 0xFFF // hexadecimal number
let num7 = 9007199254740991n //Big Integer

console.log(num5);

console.log('--------------------');

let str1 ="Hello World";
let str2 = 'Hello World';
let str3 = `
    hello 
    world
`;// template literal (backtick above tab key)

console.log(str1, str2, str3);

console.log('--------------------');

let name = "bob";
let age = 24;

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966

console.log('--------------------');

for(let i=0; i<50; i++){
  if(i%3 === 0 && i%5===0){
    console.log(`fizzbuzz: ${i}`);
  }else if(i%3 === 0){
    console.log(`fizz: ${i}`);
  }else if(i%5 === 0){
    console.log(`buzz: ${i}`);
  }else{
    console.log(i);
  }
}

console.log('--------------------');
