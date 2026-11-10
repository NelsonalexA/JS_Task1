// Primitive Data Types

let studentName = "Nelson alex A";
console.log(typeof (name)); //1

let employeeAge = 24;
console.log(typeof (employeeAge)); //2

let isWorking = true;
console.log(typeof (isWorking)); //3

let a;
console.log(a); //4

let p = 'Nelson';
let q = 24;
let r = true;
let s;
let t = null; //5

console.log(typeof (p));
console.log(typeof (q));
console.log(typeof (r));
console.log(typeof (s));
console.log(typeof (t)); //6

let courseName = "JavaScript";
console.log(courseName);  //7

let batchNumber = 42;
console.log(typeof (batchNumber)); //8

//Arrays

let fruits = ['apple', 'orange', 'grapes', 'banana', 'pineapple']; //9

console.log(fruits); //10

console.log(fruits[2]);  //11

console.log(fruits[fruits.length - 1]);   //12

let myDetails = ['Nelson alex A', 24, 'Kallakurichi', 'Frontend React Developer'];  //13

console.log(myDetails[0]);
console.log(myDetails[1]);
console.log(myDetails[2]);
console.log(myDetails[3]);  // 14

let profile = ['Nelson alex A', 24, true];  //15

console.log(profile.length); //16

let mobileBrand = ['Apple', 'Samsung', 'Lenovo', 'Poco', 'Honor'];
console.log(mobileBrand[1]);  //17

let languages = ["JavaScript", "Java", "Python", "C", "C++", "PHP"];

console.log(languages[languages.length - 1]);  //18

//Objects

let student = {
    name: "Nelson alex A",
    age: 24,
    city: 'Kallakurichi'
}  //19

console.log(student.name);
//20
console.log(student.age);  //21

let employee = {
    name: "Nelson",
    salary: 25000,
    designation: "Frontend Developer"
};  // 22

let skills = {
    skillset: ['HTML', 'CSS', 'JS', 'TailwindCss', 'ReactJs']
}
console.log(skills.skillset[2]);  //23

let myObject = {
    fruit: "Apple",
    number: 25,
    boolean: true,
    toy: "Car"
};  //24

console.log(myObject.toy);  //25

let company = {
    companyName: "Stackly",
    location: "Salem",
    employeeCount: 3000
}  //26

//Arithmetic Operations

let num1 = 5
let num2 = 4
console.log(num1 + num2); //27


let num11 = 5
let num12 = 4
console.log(num11 - num12);  //28

let num111 = 5
let num112 = 4
let num113 = 8
console.log(num111 * num112 * num113);  //29

let div = 100 / 5
console.log(div);  //30

let value = 25
let divident = 4
console.log(value % divident);  //31

let exOperator = 3 ** 4;
console.log(exOperator);  //32


let ab = 20;
let b = 10;

console.log("Addition:", ab + b);

console.log("Subtraction:", ab - b);

console.log("Multiplication:", ab * b);

console.log("Division:", ab / b);

console.log("Modulus:", ab % b);

console.log("Exponential:", ab ** b);  //33


//Increment & Decrement 

let preInc = 10;
console.log(++preInc);  //34

let postInc = 20;
console.log(postInc++);  //35

let preDec = 30;
console.log(--preDec);  //36

let postDec = 40;
console.log(postDec--);  //37

let ai = 10;
let bi = ai++;
console.log(ai); //output = 11
console.log(bi); //output =  10          //38

let x = 15;
let y = ++x;
console.log(x); //output = 16
console.log(y); //output = 16            //39


let n1 = 25;
let n2 = --n1;
let n3 = n2++;
let n4 = ++n3;

console.log(n1);  //output = 24
console.log(n2);  //output = 25
console.log(n3);  //output = 25
console.log(n4);  //output = 26     //40