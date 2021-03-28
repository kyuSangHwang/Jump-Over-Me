/** 5-1. 객체의 변경 방지 (객체 확장 금지) **/

// Object.isExtensible Method 는 객체의 확장을 금지한다.(추가 금)지
// 객체의 추가는 동적추가와 Object.defineProperty 로 추가할 수 있는데 이 두가지 모두 금지된다.

const person = {
    name: 'Hwang'
};

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가가 금지된다.
person.age = 30; // 무시. strict mode 에서는 에러
console.log(person); // {name: "Hwang"}

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person, 'age', { value: 30 });
// TypeError: Cannot define property age, object is not extensible