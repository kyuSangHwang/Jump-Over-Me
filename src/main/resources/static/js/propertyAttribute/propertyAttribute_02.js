/** 2. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체 **/

// JavaScript 엔진은 property 를 생성할 때 property 의 상태를 나타내는 propertyAttribute 를 기본값으로 자동 정의한다.
// property 상태란 property value (프로퍼티의 값), writable (갑의 갱신 가능 여부), enumerable (열거 가능 여부), configurable (개 정의 가능 여부) 를 말한다.

const person = {
    name: 'Hwang'
};

// Object.getOwnPropertyDescriptor 메소드를 호출할 때 첫번째 매개변수에는 객체의 참조를 전달하고, 두번째 매개변수에는 프로퍼티 키를 문자열로 전달한다.
// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// {value: "Hwang", writable: true, enumerable: true, configurable: true}