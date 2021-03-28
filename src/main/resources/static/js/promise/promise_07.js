// Example 7 : callBack 함수 구현하지 않고 promise 사용 1
const order1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1번 주문 완료!");
        }, 1000);
    });
};

const order2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("2번 주문 실패..");
        }, 3000);
    });
};

const order3 = (message) => {
    return new Promise((resolve, reject) => {
        console.log(message);
        setTimeout(() => {
            resolve("3번 주문 완료!");
        }, 2000);
    });
};

// Promise Chaining : Promise 가 연결되어있는 모양을 프로미스 체이닝이라고 한다.
console.log("주문 시작!");
order1()
    .then((resolve) => order2(resolve))
    .then((resolve) => order3(resolve))
    .then((resolve) => console.log(resolve))
    .catch(console.log)
    .finally(() => {
        console.log("주문 끝, 잘먹겠습니다!!!");
    });