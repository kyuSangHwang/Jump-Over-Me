/** 1. Object 생성자 함수 **/

// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Kyu';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: "Kyu", sayHello: ƒ}
person.sayHello(); // Hi! My name is Kyu



// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Kyu');
console.log(typeof strObj); // object
console.log(strObj);        // String {"Kyu"}

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(808);
console.log(typeof numObj); // object
console.log(numObj);        // Number {808}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj= new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj);        // Boolean {true}

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.dir(func);        // ƒ anonymous(x)

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr);        // [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp);        // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date);        // (대한민국 표준시)