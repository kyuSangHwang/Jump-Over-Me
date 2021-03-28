/** 2. 생성자 함수 (new.target) **/

// new.target 는 this 와 유사하게 constructor 인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되며 메타 프로처티라고 부른다.
// 그리고 new.target 은 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 파스칼 케이스 컨벤션을 사용하는데
// 사용한다 하더라도 실수는 언제나 발생할 수 있는데 이를 방지하기 위해 지원한다.

// 생성자 함수
function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target 은 undefined 다.
    if (!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target 을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());


/** scope-sale constructor (스코프 세이프 생성자 패턴) **/

// new.target 를 사용할 수 없는 상황이라면 이를 사용할 수 있다.
// Scope-Safe Constructor Pattern
function Circle(radius) {
    // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
    // this 에 바인딩한다. 이때 this 와 Circle 은 프로토타입에 의해 연결된다.

    // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this 는 전역 객체 window 를 가리킨다.
    // 즉, this 와 Circle 은 프로토타입에 의해 연결되지 않는다.
    if (!(this instanceof Circle)) {
        // new 연산자와 함께 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter()); // 10


let obj = new Object();
console.log(obj); // {}

obj = Object();
console.log(obj); // {}

let f = new Function('x', 'return x ** x');
console.log(f); // ƒ anonymous(x) { return x ** x }

f = Function('x', 'return x ** x');
console.log(f); // ƒ anonymous(x) { return x ** x }


const str = String(123);
console.log(str, typeof str); // 123 string

const num = Number('123');
console.log(num, typeof num); // 123 number

const bool = Boolean('true');
console.log(bool, typeof bool); // true boolean