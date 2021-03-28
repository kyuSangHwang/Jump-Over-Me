// Example 3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('WRICEF 분할 커스텀 다 했습니다.')
    }, 3000)
});

promise3.then( // then 을 이용하여 resolve, reject 를 처리할 수 있다.
    function (result){ // Promise 가 이행 되었을 때 실행
        console.log(`강이사님! ${result}`);
    },
    function (error){ // Promise 가 거부 되었을 때
        console.log(`강이사님! 못하겠어요ㅠㅠ`);
    }
);
//위의 코드를 아래와 같이 변경할 수 있다. 아래와 같이 catch 고 구분해주는 것이 가독성에도 좋다.
promise3.then(
    function (result) {
        console.log(`강이사님! ${result}`);
    }
).catch(function (error) {
    console.log(`강이사님! 못하겠어요ㅠㅠ`);
});