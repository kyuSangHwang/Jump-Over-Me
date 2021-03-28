/** 2. 생성자 함수 (생성자 함수의 인스턴스 생성 과정) **/
/** 2-1. 인스턴스 생성과 this 바인딩 **/

function Circle(radius) {
    // 1. 암묵적으로 빈 객체가 생성되고 this 에 바인딩된다.
    console.log(this); // Circle {}

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 바인딩이란
// 식별자와 값을 연결하는 과정
// 예) 변수 건언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩 하는것
// this 바인딩은 this 와 this 가 가리킬 객체를 바인딩하는 것을 의미한다.