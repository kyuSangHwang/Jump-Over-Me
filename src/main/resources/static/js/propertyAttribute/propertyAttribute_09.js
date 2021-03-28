/** 4-2. 프로퍼티의 정의 **/

// Object.defineProperty Method 는 프로퍼티를 정의할 때 프로퍼티 디스크립터 객체의 프로퍼티를 일부 생각할 수 있다.
// Object.defineProperties Method 를 사용하면 여러개의 프로퍼티를 한 번에 정의할 수 있다.

const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: 'kyuSang',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Hwang',
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
        // getter 함수
        get() {
            return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
  }
});

person.fullName = 'kyuSang Hwang';
console.log(person);