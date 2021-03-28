/** 2. 생성자 함수 (new 연산자) **/

// 일반 함수와 생성자 함수에 특별한 형식적인 차이는 없다. new 연산자와 함계함수를 호출함녀 해당 함수는 생성자 함수로 동작한다.
// 이는 함수객체의 내부 메소드 [[Call]]이 호출되는것이 아닌 [[Construct]가 호출된다.
// 단,  new 연산자와 함계 호출하는 함수는 non-constructor 가 아닌 constructor 이어야 한다.

// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
    return x + y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();
// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
console.log(inst); // {}

// 객체를 반환하는 일반 함수
function createUser(name, role) {
    return { name, role };
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
inst = new createUser('KyuSang', 'admin');

// 함수가 생성한 객체를 반환한다.
console.log(inst);


// 반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다.
// 이는 함수 객체의 내부 메소스 [[Construct]]가 호출되는 것이 아니라 [[Call]]이 호출된다.

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다.
const circle = Circle(5);
console.log(circle); // undefined

// 일반 함수 내부의 this 는 전역 객체 window를 가리킨다.
console.log(radius); // 5
console.log(getDiameter()); // 10

circle.getDiameter();
// TypeError: Cannot read property 'getDiameter' of undefined