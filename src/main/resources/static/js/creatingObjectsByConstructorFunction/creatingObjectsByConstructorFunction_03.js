/** 2. 생성자 함수 (생성자함수에 의한 객체 생성 방시의 장점) **/

// 생성함수에 의한 객체 생성 방식은 마치 객체를 생성하기 위한 클래스처럼 생성자 함수를 사용하여 프로처티 구조가 도인한 객체 여러 개를 간편하게 생성할 수 있다.

// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this 는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// 즉, 일반 함수로서 호출된다.
const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle 은 반환문이 없으므로 암묵적으로 undefined 를 반환한다.
console.log(circle3); // undefined

// 일반 함수로서 호출된 Circle 내의 this 는 전역 객체를 가리킨다.
console.log(radius); // 15


// this 는 객체 자신의 프로처티나 메서드를 참조하기 위한 자기 참조 변수이다.
// 함수는 다양한 방식으로 호출될 수 있다.
function kyu() {
    console.log(this);
}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global 을 가리킨다.
kyu(); // window

// 메서드로서 호출
const obj = { kyu }; // ES6 프로퍼티 축약 표현
obj.kyu(); // obj

// 생성자 함수로서 호출
const inst = new kyu(); // inst
