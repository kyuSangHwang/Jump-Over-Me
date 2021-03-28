/** 2. 생성자 함수 (겍체 리터럴에 의한 객체 생성 방식의 문제점) **/

// 객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하지만 여러개 생성해야하는 경우에는 매번 같은 프로퍼티를 작성해야해서 비효율적이다.

const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter()); // 20
