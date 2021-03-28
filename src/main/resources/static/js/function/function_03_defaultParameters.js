// 3. Default parameters
// ES6 에 추가된 기능으로 예전에는 아래와 같이 로직을 생성했다

function showMessage1(message, from) {
    if (from = "undefined") {
        from = "unknown";
    }
    console.log(`${message} by ${from}`);
}
showMessage1('Hi!');


// 하지만 ES6 부터는 파라미터 옆에 default 값을 명시해서 작성할 수 있다.

function showMessage2(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!');