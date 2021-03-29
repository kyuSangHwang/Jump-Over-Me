/** 표준빌트인 객체 **/

// Math, Reflect, JSON 을 제외한 표준빙트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체이다.
// 생성자 함수 객체의 표준 빌트인 객체 : 프로토타입 메서드와 정적 메서드를 제공하고
// 생성자 함수 객체가 아닌 표준 빌트인 객체 : 정적 메서드만 제공


// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Kyu');
console.log(strObj);
console.log(typeof strObj);

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(numObj);
console.log(typeof numObj);

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj= new Boolean(true);
console.log(boolObj);
console.log(typeof boolObj);

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(func);
console.log(typeof func);

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(arr);
console.log(typeof arr);

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(regExp);
console.log(typeof regExp);

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(date);
console.log(typeof date);




// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Kyu');

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype 이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype);





// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5);

// toFixed 는 Number.prototype 의 프로토타입 메서드다.
// Number.prototype.toFixed 는 소수점 자리를 반올림하여 문자열로 반환한다.
// prototype 에 대해서는 이후에 자세히 알아볼 예정입니당.
console.log(numObj.toFixed());

// isInteger 는 Number 의 정적 메서드다.
// Number.isInteger 는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean 으로 반환한다.
console.log(Number.isInteger(0.5));