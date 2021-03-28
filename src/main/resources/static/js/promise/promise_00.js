/**
 * Promise 는 이해한걸 설명해보면
 * 강이사님이 규상이한테 WRICEF분할 팝업 커스텀을 맡겼다.
 * 강이사님이 규상이한테 확인을 위해 옆에 오셔서 다했어? 물어보시고 규상이가 아직이여 라고 하는 일을 반복해서 하게되면
 * 강이사님은 일의 효율이 떨어지게 된다 옆에서 계속 다 되었는지 확인을 해야하니 말이다.
 * 이러지 말고 강이사님이 규상이한테 일을 주고 다되면 연락해라고 번호를 주고 가게되면
 * 강이사님은 다른일을 할 수 있으실거다.
 * 규상이는 WRICEF 분할 팝업 커스텀을 다 했다고(success) 연락 할 수 있고 못하겠다고(fail) 할 수도 있다.
 **/

//Promise 사용법
const promise = new Promise((resolve, reject) => {
    // resolve 는 성공했을 떄 실행되고
    // reject 는 실패했을 때 실행되는 callBack 함수다.
});

// new Promise 가 실행되어 반환하는 객체는 state 와 result 를 property 로 갖는다.
// state: pending (대기)
// result: undefined

// resolve(value)가 호출되면 즉, 성공하게 되면
// state: fulfilled
// result: value

// reject(error)가 호출되면 즉, 실패하게 되면
// state: rejected
// result: error