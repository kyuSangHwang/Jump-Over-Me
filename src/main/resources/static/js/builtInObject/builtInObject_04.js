/** 전역 객체 (빌트인 전역 프로퍼티) **/

/** Infinity : Infinity 프로퍼티는 무한대를 나타내는 숫자값 Infinity 를 갖는다. **/
// 전역 프로퍼티는 window를 생략하고 참조할 수 있다.
console.log(window.Infinity === Infinity); // true

// 양의 무한대
console.log(3/0);  // Infinity
// 음의 무한대
console.log(-3/0); // -Infinity
// Infinity는 숫자값이다.
console.log(typeof Infinity); // number

/** NaN : NaN 프로퍼티는 숫자가 아닙을 나타내는 숫자값 NaN 을 갖는다. (Not a Number), NaN 프로퍼티는 Number, NaN 프로퍼티와 같다. **/
console.log(window.NaN); // NaN

console.log(Number('xyz')); // NaN
console.log(1 * 'string');  // NaN
console.log(typeof NaN);    // number

/** undefined : undefined 프로퍼티는 원시 타입 undefined 를 값으로 갖는다. **/
console.log(window.undefined); // undefined

var foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined
