// Example 5
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("강이사님 못하겠어요ㅠㅠ"))
    }, 3000)
});
console.log("규상아 WRICEF 분할 커스텀 다했니?");
promise5.then((result) => { console.log(result); })
    .catch((error) => { console.log(error); })
    .finally(() => { console.log("그래 그냥 퇴근하고 내일하자"); });