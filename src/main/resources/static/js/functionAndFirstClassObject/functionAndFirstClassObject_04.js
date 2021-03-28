/** 4. caller 프로퍼티 **/

// 이는 비표준이고 표준화 될 예정도 없기에 간단하게 소스만 대충 보고 넘기기
// caller 프로퍼티는 함수 자신을 호출한 함수를 가리킨다.

function caller(func) {
    return func();
}

function bar() {
    return 'caller : ' + bar.caller;
}

// 브라우저에서의 실행한 결과
console.log(caller(bar)); // caller : function caller(func) {...}
console.log(bar());    // caller : null
