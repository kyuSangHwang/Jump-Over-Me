/** 2. 생성자 함수 (생성자 함수의 인스턴스 생성 과정) **/
/** 2-2. 인스턴스 초기화 **/

function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this 에 바인딩된다.

    // 2. this 에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}
