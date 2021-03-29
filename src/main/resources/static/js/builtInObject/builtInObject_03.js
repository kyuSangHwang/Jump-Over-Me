/** 전역 객체 **/

// 전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이며,
// 어떤 객체에도 속하지 않은 최상위 겍체다.
// --> 말은 어렵지만 그냥 직관적으로 전역 객체 그 지체다.
// 그래서 간단한 정의나 몰랐던 부분만 집고 넘어가겠습니다.

// ES11에서 도입된 globalThis 는 브라우저 환경과 Node.js 환경에서 전역 객체를 가리키던 다양한 식별자를 통일한 식별자이다.
// 이는 표준임으로 어디서든 사용 가능하다.
/**
// 브라우저 환경
globalThis === this   // true
globalThis === window // true
globalThis === self   // true
globalThis === frames // true

// Node.js 환경(12.0.0 이상)
globalThis === this   // true
globalThis === global // true
**/

// 전역 객체의 특징
// 1. 전역 객체는 개발자가 의도적으로 생성할 수 없다. 설명은 못하겠지만 와닿습니다.
// 2. 전역 객체의 프로퍼티를 참조할 때 window || global 를(을) 생략할 수 있다.

// 문자열 'Kyu' 를 16진수로 해석하여 10진수로 변환하여 반환한다.
window.parseInt('Kyu', 16); // --> 15

//window.parseInt 는 parseInt 로 호출할 수 있다.
parseInt('Kyu', 16); // --> 15

window.parseInt === parseInt; // -> true

// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo);

// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
bar = 2; // window.bar = 2
console.log(window.bar); // 2

// 전역 함수
function baz() { return 3; }
console.log(window.baz()); // 3

let foo = 123;
console.log(window.foo); // undefined