// Example 8 : callBack 함수 구현하지 않고 promise 사용 2
const order11 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1번 주문 완료!");
        }, 1000);
    });
};

const order22 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2번 주문 실패...");
        }, 3000);
    });
};

const order33 = (message) => {
    return new Promise((resolve, reject) => {
        console.log(message);
        setTimeout(() => {
            reject("3번 주문 실패..");
        }, 2000);
    });
};

// Promise Chaining : Promise 가 연결되어있는 모양을 프로미스 체이닝이라고 한다.
console.log("주문 시작!");
order11()
    .then((resolve) => order22(resolve))
    .then((resolve) => order33(resolve))
    .then((resolve) => console.log(resolve))
    .catch(console.log)
    .finally(() => {
        console.log("주문 끝, 잘먹겠습니다!!!");
    });