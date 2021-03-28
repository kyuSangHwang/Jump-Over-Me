/** 2. 생성자 함수 (생성자 함수의 인스턴스 생성 과정) **/
/** 2-3. 인스턴스 반환 **/

function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this 에 바인딩된다.

    // 2. this 에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this 가 암묵적으로 반환된다
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this 를 반환한다.
const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: ƒ}


/** 만약 this 가 아닌 다른 객체를 명시적으로 반환하면 this 가 반환 되지 못하고 return 문에 명시한 객체가 반환된다. **/

function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this 에 바인딩된다.

    // 2. this 에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    // 3. 암묵적으로 this 를 반환한다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1);
console.log(circle); // {}


/** 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this 가 반환된다. **/

function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this 에 바인딩된다.

    // 2. this 에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    // 3. 암묵적으로 this 를 반환한다.
    // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this 가 반환된다.
    return 100;
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: ƒ}



