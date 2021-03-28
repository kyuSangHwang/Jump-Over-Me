/** 3-1. 데이터 프로퍼티 **/

// 데이터 프로퍼티는 [[Value]], [[writeable]], [[enumerable]], [[configurable]] 와 같은 프로퍼티 어트리뷰트를 갖는다.
// 이 프로퍼티 어트리뷰트는 자바스크립트 엔진이 프로퍼티를 생서알 때 기본값으로 자동 정의 된다.

const person = {
    name: 'Hwang'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// {value: "Hwang", writable: true, enumerable: true, configurable: true}


/** 여기서
 value property 의 값은 'Hwang' 이다.
 이는 [[Value]]의 값이 'Hwang' 인 것을 의미한다.

 그리고 writeable, enumerable, configurable 의 값은 모두 true 이다.
 이는 [[writeable]], [[enumerable]], [[configurable]] 의 값이 모두 true 인 것을 의미한다.

 이처럼 property 가 생성될 때  [[Value]]의 값은 초기화 되고
 [[writeable]], [[enumerable]], [[configurable]]의 값은 true 로 초기화 된다.
**/