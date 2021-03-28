// 4. Rest parameters
// 이 또한 ES6 에 추가된 기능으로 1개 이상의 인자를 넘길때 사용된다.
// parameter 를 ...parameterName 으로 명시할 수 있다.

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');