/** 함수 호출 방식과 this 바인딩 (메소드 호출) **/

// 메서드 내부의 this 에는 메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩된다.
// 주의할 것은 메서드 내부의 this 는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다는 것이다.
const person = {
    name: 'Kyu',
    getName() {
        // 메서드 내부의 this 는 메서드를 호출한 객체에 바인딩된다.
        return this.name;
    }
};

// 메서드 getName 을 호출한 객체는 person 이다.
console.log(person.getName());

/** getName 메서드는 다른 객체의 프로퍼티레 할당하는 것으로 다른 객체의 메서드가 될 수도 있고 일반 변수에 할당하여 일반 함수로 호출될 수 도 있다. **/
const anotherPerson = {
    name: 'kyuSang'
};
// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 anotherPerson 이다.
console.log(anotherPerson.getName());

// getName 메서드를 변수에 할당
const getName = person.getName;

// getName 메서드를 일반 함수로 호출
console.log(getName()); // ''
// 일반 함수로 호출된 getName 함수 내부의 this.name 은 브라우저 환경에서 window.name 과 같다.
// 브라우저 환경에서 window.name 은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
// Node.js 환경에서 this.name 은 undefined 다.



/** 프로토타입 메서드 내부에서 사용된 this 도 일반 메서드와 마찬가지로 해당 메서드를 호출한 객체에 바인딩 된다. **/
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('kyuSang');

// getName 메서드를 호출한 객체는 me다.
console.log(me.getName());

Person.prototype.name = 'dooTakNim';

// getName 메서드를 호출한 객체는 Person.prototype 이다.
console.log(Person.prototype.getName());

