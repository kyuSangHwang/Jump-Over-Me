/** 함수 호출 방식과 this 바인딩 (Function.prototype.apply/call/bind 메서드에 의한 간접 호출) **/

// apply, call, bind 메서드는  Function.prototype 의 메서드이다.
// 즉, 이들 메서드는 모든 함수가 상속받아 사용할 수 있다.

/** apply, call 메서드 **/

// 두 메서드의 본질적인 기능은 함수를 호출하는 것이다.
// apply 와 call 메서드는 함수를 호출하면서 첫번째 인수로 전달한 특정 객체를 로출한 함수의 this 에 바인딩한다.

/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 */
//apply(this: Function, thisArg: any, argArray?: any): any;

/**
 * Calls a method of an object, substituting another object for the current object.
 * @param thisArg The object to be used as the current object.
 * @param argArray A list of arguments to be passed to the method.
 */
//call(this: Function, thisArg: any, ...argArray: any[]): any;

function getThisBinding() {
    return this;
}

// this 로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding());

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this 에 바인딩한다.
console.log(getThisBinding.apply(thisArg));
console.log(getThisBinding.call(thisArg));



/** bind 메소드 **/

/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 * @param thisArg An object to which the this keyword can refer inside the new function.
 * @param argArray A list of arguments to be passed to the new function.
 */
//bind(this: Function, thisArg: any, ...argArray: any[]): any;

function getThisBinding() {
    return this;
}

// this 로 사용할 객체
const thisArg = { a: 1 };

// bind 메서드는 함수에 this 로 사용할 객체를 전달한다.
// bind 메서드는 함수를 호출하지는 않는다.
console.log(getThisBinding.bind(thisArg));

// bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
console.log(getThisBinding.bind(thisArg)());



/** bind 메서드는 메서드의 this 와 메서드 내부의 중첩 함수 또는 콜백 함수의 this 가 불일치 하는 문제를 해결하기 위해 유용하게 사용된다. **/

const person = {
    name: 'kyuSang',
    foo(callback) {
        setTimeout(callback, 100);
    }
};

person.foo(function () {
    console.log(`Hi! my name is ${this.name}.`);
    // 일반 함수로 호출된 콜백 함수 내부의 this.name 은 브라우저 환경에서 window.name 과 같다.
    // 브라우저 환경에서 window.name 은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
    // Node.js 환경에서 this.name 은 undefined 다.
});