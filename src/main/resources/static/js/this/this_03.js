/** 함수 호출 방식과 this 바인딩 (일반 함수 호출) **/

// 기본적으로 this 에는 전역객체가 바인딩 된다.

function foo() {
    console.log("foo's this: ", this);

    function bar() {
        console.log("bar's this: ", this);
    }
    bar();
}

foo();


/** 이처럼 전역 함수는 물론이고 중첩 함수를 일반 함수로 호출하면 함수 내부의 this 에는 전역 객체가 바인딩된다.
 다만 this 는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 객체를 생성하지 않는 일반 함수에서 this 는 의미가 없다.
 따라서 아래 소스처럼 strict mode 가 적용된 일반 함수 내부의 this 에는 undefined 가 바인딩된다. **/

function foo() {
    'use strict';

    console.log("foo's this: ", this);  // undefined

    function bar() {
        console.log("bar's this: ", this); // undefined
    }
    bar();
}

foo();


/** 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this 에는 전역 객체가 바인딩 된다. **/

// var 키워드로 선언한 전역 변수 value 는 전역 객체의 프로퍼티다.
var value = 1;

// const 키워드로 선언한 전역 변수 value 는 전역 객체의 프로퍼티가 아니다.
// const value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this);
        console.log("foo's this.value: ", this.value);

        // 메서드 내에서 정의한 중첩 함수
        function bar() {
            console.log("bar's this: ", this);
            console.log("bar's this.value: ", this.value);
        }

        // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this 에는 전역 객체가 바인딩된다.
        bar();
    }
};

obj.foo();



/** 콜백 함수가 일반 함수로 호출된다면 콜백 함수 내부의 this 에도 전역객체가 바인딩된다.
 어떠한 함수라도 일반 함수로 호출되면 this 에 전역 객체가 바인딩된다. **/

var value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this);

        // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
        setTimeout(function () {
            console.log("callback's this: ", this);
            console.log("callback's this.value: ", this.value);
        }, 100);
    }
};

obj.foo();



/** 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법 **/

var value = 1;

const obj = {
    value: 100,
    foo() {
        // this 바인딩(obj)을 변수 that에 할당한다.
        const that = this;

        // 콜백 함수 내부에서 this 대신 that을 참조한다.
        setTimeout(function () {
            console.log(that.value); // 100
        }, 100);
    }
};

obj.foo();