/** 2. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체 **/

const person = {
    name: 'Hwang'
};

// 프로퍼티 동적 생성
person.age = 30;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptors(person));

/*
{
  name: {value: "Hwang", writable: true, enumerable: true, configurable: true},
  age: {value: 30, writable: true, enumerable: true, configurable: true}
}
*/