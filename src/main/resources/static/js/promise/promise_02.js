// Example 2 : 이 예제는 pending(value: undefined) 였다가 3초뒤에 rejected(value: error...) 가 된다.
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error...')
    }, 3000)
});

console.log(promise2);