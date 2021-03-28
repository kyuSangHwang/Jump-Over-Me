/** 2. 함수 객체의 프로퍼티 **/

// console.dir Method 를 사용하면 함수객체의 내부를 볼 수 있다.

function square(number) {
    return number * number;
}

console.dir(square);


// square 함수의 모든 프로처티의 프로퍼티 어트리뷰트를 Object.getOwnPropertyDescriptors Method 로 확인할 수 있다.

function square(number) {
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}