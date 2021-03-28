// Example 8 : Example7 을 동시에 주문할 순 없을까 => 이를 구현해주는게 PromiseAll
const order1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1번 주문 완료!");
        }, 1000);
    });
};

const order2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2번 주문 완료!");
        }, 3000);
    });
};

const order3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3번 주문 완료!");
        }, 2000);
    });
};

//promise.race 는 all 과 달리 모두 끝나야 반환이 아니라 가장 먼저 끝나는 것을 반황해준다.
console.time('x');
Promise.race([order1(), order2(), order3()])
    .then((resolve) => {
        console.log(resolve);
        console.timeEnd('x');
    });