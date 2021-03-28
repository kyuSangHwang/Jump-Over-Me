/** 5-2. 객체의 변경 방지 (객체 밀봉) **/

// Object.seal Method 는 객체를 밀봉한다. 밀봉된 객체는 추가,삭제는 금지되고 읽고 쓰기만 가능하다.
// Object.isSealed Method 는 밀봉된 객체인지 여부를 확인할 때 사용 된다.

const person = {
    name: 'Hwang'
};

// person 객체는 밀봉(seal)된 객체가 아니다.
console.log(Object.isSealed(person)); // false

// person 객체를 밀봉(seal)하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person);

// person 객체는 밀봉(seal)된 객체다.
console.log(Object.isSealed(person)); // true

// 밀봉(seal)된 객체는 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {value: "Hwang", writable: true, enumerable: true, configurable: false},
}
*/

// 프로퍼티 추가가 금지된다.
person.age = 30; // 무시. strict mode에서는 에러
console.log(person); // {name: "Hwang"}

// 프로퍼티 삭제가 금지된다.
delete person.name; // 무시. strict mode에서는 에러
console.log(person); // {name: "Hwang"}

// 프로퍼티 값 갱신은 가능하다.
person.name = 'Kim';
console.log(person); // {name: "Kim"}

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name