/** 3-1. 데이터 프로퍼티 **/

const person = {
    name: 'Hwang'
};

// 프로퍼티 동적 생성
person.age = 30;

console.log(Object.getOwnPropertyDescriptors(person));

/*
{
  name: {value: "Hwang", writable: true, enumerable: true, configurable: true},
  age: {value: 30, writable: true, enumerable: true, configurable: true}
}
*/

/**
 이처럼 property 가 생성될 때  [[Value]]의 값은 초기화 되고
 [[writeable]], [[enumerable]], [[configurable]]의 값은 true 로 초기화 되는 건 동적으로 추가해도 같다.
 **/