// Example 1 : 이 예제는 pending(value: undefined) 였다가 3초뒤에 fulfilled(value: OK) 가 된다.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
});

console.log(promise1);