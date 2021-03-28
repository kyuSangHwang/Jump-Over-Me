/** 2. strict mode 의 적용 **/

//strict mode 를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict'; 를 추가한다.

'use strict';

function foo1() {
    x = 10; // ReferenceError: x is not defined
}
foo1();


// 함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode 가 추가된다.

function foo2() {
    'use strict';

    x = 10; // ReferenceError: x is not defined
}
foo2();


// 코드의 선두에 'use strict'; 를 위치하지 않으면 strict mode 가 적용되지 않는다.

function foo3() {
    x = 10; // 에러를 발생시키지 않는다.
    'use strict';
}
foo3();

