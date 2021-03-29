/** 함수 호출 방식과 this 바인딩 (생성자 함수 호출) **/

// 생성자 함수 내부의 this 에는 생성자 함수가 생성할 인스턴스가 바인딩 된다.
// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this 는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);

// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());



