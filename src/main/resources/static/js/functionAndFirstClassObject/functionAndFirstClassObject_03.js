/** 3. arguments 프로퍼티 **/

// arguments 객체는 함수 로출ㅇ 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며,
// 함수 내부에서 지역 변수처럼 사용 된다. 즉, 함수 외부에서는 참조할 수 없다.

function multiply1(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply1());        // NaN
console.log(multiply1(1));       // NaN
console.log(multiply1(1, 2));    // 2
console.log(multiply1(1, 2, 3)); // 2



/** arguments 객체의 symbol (Symbol.iterator) 프로퍼티 **/
// 이는 arguments 객체를 순화 가능한 자료구조인 iterable 로 만들기 위한 프로퍼티 이다.

function multiply2(x, y) {
    const iterator = arguments[Symbol.iterator]();

    // 이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments를 순회
    console.log(iterator.next()); // {value: 1, done: false}
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: 3, done: false}
    console.log(iterator.next()); // {value: undefined, done: true}

    return x * y;
}

multiply2(1, 2, 3);



/** arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다. **/

function sum1() {
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum1());        // 0
console.log(sum1(1, 2));    // 3
console.log(sum1(1, 2, 3)); // 6


/** 유사 배열 객체는 배열이 아니므로 배열 메소드를 사용할 경우 에러가 발생한다.
    이터러블이 도입된 ES6부터 arguments 객체는 유사배열 객체이면서 동시에 이터러블이다.
 **/

function sum2() {
    // arguments 객체를 배열로 변환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum2(1, 2));          // 3
console.log(sum2(1, 2, 3, 4, 5)); // 15


// 위와 같은 번거로움?을 해결하기 위해 ES6 에서는 Rest Parameter 를 도입했다.

// ES6 Rest parameter
function sum3(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum3(1, 2));          // 3
console.log(sum3(1, 2, 3, 4, 5)); // 15