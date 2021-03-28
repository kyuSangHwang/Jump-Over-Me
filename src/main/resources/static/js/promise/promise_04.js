//Example 4
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('WRICEF 분할 커스텀 다 했습니다!')
    }, 3000)
});

console.log("규상아 WRICEF 분할 커스텀 다했니?");

promise4.then((result) => { console.log(result); })
    .catch((error) => { console.log(error); })
    .finally(() => { console.log("퇴근 하자!"); });
