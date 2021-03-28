/** 5-4-1. 객체의 변경 방지 (불변 객체) **/

// Object.freeze 는 중첩객체의 동결을 할 수 없다.

const person = {
    name: 'Hwang',
    address: { city: 'Seoul' }
};

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결한다.
console.log(Object.isFrozen(person)); // true
// 중첩 객체까지 동결하지 못한다.
console.log(Object.isFrozen(person.address)); // false

person.address.city = 'Busan';
console.log(person); // {name: "Hwang", address: {city: "Busan"}}