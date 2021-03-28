// First-class function

// 8-1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
// function declaration 과 function expression 의 차이점
// declaration 은 함수 선언 이전에 사용할 수 있지만 expression 함수 선언 이후에만 호출할 수 있다.

function sum(a, b) {
    return a + b;
}

const print = function () { // anonymous function
    console.log('print');
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));



// 8-2. function expression 을 활용한 Callback function
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces: 디버깅을 할 때 함수명을 표시해주기 위해 함수의 이름을 선언한다.
// recursions: 함수안에서 함수 자신 스스로를 호출하는 행위를 말한다.(이를 잘못 쓴다면 call stack size 가 초과된다, 이는 이후에 좀 더 알아보겠습니다.)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function (always anonymous)
/* const simplePrint = function () {
   console.log('simplePrint!');
 };*/

const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;

const simpleMultiply = (a, b) => { // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression (함수를 선언함과 동시에 호출해줄 수 있다. 이 함수를 사용하면 ready 함수를 사용하지않더라고 호출할 수 있을거란 생각이 들었다. 커스텀 할 때 해봐야지)
(function hello() {
    console.log('IIFE');
})();