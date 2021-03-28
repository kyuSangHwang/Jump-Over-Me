/** 5. strict mode 가 발생시키는 에러 (strict mode 의 대표적인 사례) **/

/** 암묵적 전역 **/
// 선언하지 않은 변수를 참조하면 ReferenceError 가 발생한다.
(function () {
    'use strict';

    x = 1;
    console.log(x); // ReferenceError: x is not defined
}());



/** 변수, 함수, 매개변수의 삭제 **/
// delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError 가 발생한다.
/*(function () {
    'use strict';

    var x = 1;
    delete x;
    // SyntaxError: Delete of an unqualified identifier in strict mode.

    function foo(a) {
        delete a;
        // SyntaxError: Delete of an unqualified identifier in strict mode.
    }
    delete foo;
    // SyntaxError: Delete of an unqualified identifier in strict mode.
}());*/



/** 매개변수 이름의 중복 **/
// 중복된 매개변수 이름을 사용하면 SyntaxError 가 난다.
/*(function () {
    'use strict';

    //SyntaxError: Duplicate parameter name not allowed in this context
    function foo(x, x) {
        return x + x;
    }
    console.log(foo(1, 2));
}());*/



/** with 문의 사용 **/
// with 문을 사용하면 SyntaxError 가 난다.
// with 문은 전달된 객체를 스코프체인에 추가한다.
// 이는 동일한 객체 프로처티를 반복해서 상ㅇ할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있지만
// 성능과 가독성이 나빠서 사용하지 않는 것이 좋다.
/*(function () {
    'use strict';

    // SyntaxError: Strict mode code may not include a with statement
    with({ x: 1 }) {
        console.log(x);
    }
}());*/
