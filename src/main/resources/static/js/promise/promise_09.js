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

//promise.all 은 모든게 다 끝날때 까지 기다렸다가 모두 끝나면 반환한다.
console.time('x'); // time(): 이 메소드는 시간을 재기위해 사용하는 메소드이다.
Promise.all([order1(), order2(), order3()])
    .then((resolve) => {
        console.log(resolve);
        console.timeEnd('x');
    });