/** 전역 객체 (암묵적 전역) **/

var a = 10; // 전역 변수

function foo () {
    // 선언하지 않은 식별자에 값을 할당
    b = 20; // window.y = 20;
}
foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(a + b); // 30



// 전역 변수 c는 호이스팅이 발생한다.
console.log(c); // undefined

// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 d는 호이스팅이 발생하지 않는다.
console.log(d); // ReferenceError: d is not defined

var c = 10; // 전역 변수

function foo () {
    // 선언하지 않은 식별자에 값을 할당
    d = 20; // window.d = 20;
}
foo();

// 선언하지 않은 식별자 d를 전역에서 참조할 수 있다.
console.log(c + d); // 30



var e = 10; // 전역 변수

function foo () {
    // 선언하지 않은 식별자에 값을 할당
    f = 20; // window.f = 20;
    console.log(e + f);
}

foo(); // 30

console.log(window.e); // 10
console.log(window.f); // 20

delete e; // 전역 변수는 삭제되지 않는다.
delete f; // 프로퍼티는 삭제된다.

console.log(window.e); // 10
console.log(window.f); // undefined