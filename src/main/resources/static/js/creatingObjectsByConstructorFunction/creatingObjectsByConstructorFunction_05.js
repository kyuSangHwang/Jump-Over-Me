/** 2. 생성자 함수 (내부 메서드 [[Call]] 과 [[Construct]]) **/

// 함수는 객체다.
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다.
foo.method = function () {
    console.log(this.prop);
};

foo.method(); // 10

// 함수는 객체이므로 일반객체와 동일하게 동작할 수 있다. (내부슬롯과 내부메서드를 모두 가지고 있기 때문이다.)
// 그러나 함수객체과 일반객체의 차이는 함수는 호출을 할 수 있고 일반객체는 호출할 수 없다.
// 함수객체와 일반객체 모두 내부슬롯과 내부메소드를 가지고 있지만
// 함수는 내부슬롯 [[Environment]], [[FormalParameters]] 등과 내부메소드 [[Call]], [[Construct]] 등을 추가적으로 가지고 있다.

function foo() {}

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo();

// 내부메서드 [[Call]]을 갖는 함수객체를 callable 이라고 하고
// 내부메서드 [[Construct]]를 갖는 함수객체를 constructor 갖지 않는 함수를 non-constructor 라고 한다.