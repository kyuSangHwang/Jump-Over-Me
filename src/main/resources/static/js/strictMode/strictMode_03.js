/** 3. 전역에 strict mode 를 적용하는 것은 피해야한다. **/

// --> strictMode_03.html 을 참고

// 전역에 적용한 strict mode 는 스크립트 단위로 적용된다. 작성된 해당 스크립트에 한정되어 적용된다.

// 하지만 strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류가 생길 수 있다.
// 이러한 경우에는 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 ㅅ건두에 strict mode 를 적용한다.

// 즉시 실행 함수의 선두에 strict mode 적용
(function () {
    'use strict';

    // Do something...
}());