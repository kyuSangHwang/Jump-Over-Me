/** this 키워드 **/

// 객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메서드를 하나의 논리적인 단위로 묶은 복합적인 자료구조
// 동작은 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 한다.
// 이때 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.
const circle = {
    // 프로퍼티: 객체 고유의 상태 데이터
    radius: 5,
    // 메서드: 상태 데이터를 참조하고 조작하는 동작
    getDiameter() {
        // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
        // 자신이 속한 객체인 circle 을 참조할 수 있어야 한다.
        return 2 * circle.radius;
    }
};

console.log(circle.getDiameter());




// 생성자 함수 방식으로 인스턴스를 생성하는 경우
/**
function Circle(radius) {
    // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
    ????.radius = radius;
}

Circle.prototype.getDiameter = function () {
    // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
    return 2 * ????.radius;
};

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
const circle = new Circle(5);
**/
// this 는 자신이 속한 객체 쪼는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.
// this 를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
// this 가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

// this 바인딩이란 식별자와 값을 연결하는 과정을 의미한다.
// this 바인딩은 this(키워드로 분류되지만 식별자 역할을 한다)와 this 가 가리킬 객체를 바인딩하는 것이다.

/** 위의 객체 리터럴과 생성자 함수의 예제를 this 키워드로 바꾸면 아래와 같다. **/
// 객체 리터럴
const circle = {
    radius: 5,
    getDiameter() {
        // this 는 메서드를 호출한 객체를 가리킨다.
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());

// 객체 리터럴의 메서드 내부에서의 this 는 메서드를 호출한 객체, 즉 circle 을 가리킨다.
function Circle(radius) {
    // this 는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
}

Circle.prototype.getDiameter = function () {
    // this 는 생성자 함수가 생성할 인스턴스를 가리킨다.
    return 2 * this.radius;
};

// 인스턴스 생성
const circle = new Circle(5);
console.log(circle.getDiameter());

// 생성자 함수 내부의 this 는 생성자 함수가 생성할 인스턴스를 가리킨다.
// 이처럼 this 는 상황에 따라 가리키는 대상이 다르다.



// 자바스크립트의 this 는 함수가 호출되는 방식에 따라 this 에 바인딩될 값, 즉 this 바인딩이 동적으로 결정된다.



// this 는 코드 어디에서든 참조 가능하다. 전역에서도 함수 내부에서도 참조할 수 있다.
// this 는 어디서든지 참조 가능하다.
// 전역에서 this 는 전역 객체 window 를 가리킨다.
console.log(this); // window

function square(number) {
    // 일반 함수 내부에서 this 는 전역 객체 window 를 가리킨다.
    console.log(this);
    return number * number;
}
square(2);

const person = {
    name: 'Kyu',
    getName() {
        // 메서드 내부에서 this 는 메서드를 호출한 객체를 가리킨다.
        console.log(this);
        return this.name;
    }
};
console.log(person.getName());

function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this 는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this);
}

const me = new Person('Kyu');
