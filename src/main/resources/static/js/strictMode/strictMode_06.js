/** 6. strict mode 적용에 의한 변화 **/

/** 일반 함수의 this **/
// strict mode 에서 함수를 일반함수로서 호출하면 this 에 undefined 가 바인딩 된다.
// 생성자 함수가 아닌 일반 함수 내부에서는 this 를 사용할 필요가 없기 때문이다.
// 근데 에러는 발생하지 않는다.
(function () {
    'use strict';

    function foo() {
        console.log(this); // undefined
    }
    foo();

    function Foo() {
        console.log(this); // Foo
    }
    new Foo();
}());


/** arguments 객체 **/
// strict mode 에서는 매개변수에 전달된 인수를 대할당하여 변경해도 arguments 객체에 반영되지 않능다.
(function (a) {
    'use strict';
    // 매개변수에 전달된 인수를 재할당하여 변경
    a = 2;

    // 변경된 인수가 arguments 객체에 반영되지 않는다.
    console.log(arguments); // { 0: 1, length: 1 }
}(1));