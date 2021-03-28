/** 2. 생성자 함수 (생성자 함수의 인스턴스 생성 과정) **/

// 생성자 함수의 역할은 프로처티 구조가 동일한 인스턴스를 생성하기 위한 클래스로서 동작하여
// 인스턴스를 생성하는 것과 생성된 이스턴스를 초기화 하는것이다.
// 생성자 함수가 인스턴스를 생성하는 것은 필수이고, 생성된 인스턴스를 초기화 하는것은 옵션이다.

// 생성자 함수
function Circle(radius) {
    // 인스턴스 초기화
    this.radius = radius;

    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 인스턴스 생성
const circle1 = new Circle(5);


/** 1. 인스턴스 생성과 this 바인딩 **/

function Circle(radius) {
    // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}


/** 2. 인스턴스 초기화 **/



/** 3. 인스턴스 반환 **/


