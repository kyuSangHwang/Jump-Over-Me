/** 함수 호출 방식과 this 바인딩 **/

// this 바인딩은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
// 주의할 것은 동일한 함수도 다양한 방식으로 호출할 수 있다는 것이다.
// 함수를 호출하는 방식은 다음과 같다.
// 1. 일반 함수 호출
// 2. 메서드 호출
// 3. 생성자 함수 호출
// 4. Function.prototype.apply/call/bind 에서드에 의한 간접 호출

// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
    console.dir(this);
};

// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this 는 전역 객체 window 를 가리킨다.
foo();

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this 는 메서드를 호출한 객체 obj 를 가리킨다.
const obj = { foo };
obj.foo();

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this 는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo();

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this 는 인수에 의해 결정된다.
const hey = { name: 'Kyu' };

foo.call(hey);
foo.apply(hey);
foo.bind(hey)();