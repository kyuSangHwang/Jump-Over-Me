// Example 6 : promise 사용하지 않고 호출하
const order1 = (callBack) => {
    setTimeout(function () {
        console.log("1번 주문 완료!");
        callBack();
    }, 1000);
};

const order2 = (callBack) => {
    setTimeout(function () {
        console.log("2번 주문 완료!");
        callBack();
    }, 3000);
};

const order3 = (callBack) => {
    setTimeout(function () {
        console.log("3번 주문 완료!");
        callBack();
    }, 2000);
};

console.log("주문 시작!");
order1(function () {
    order2(function () {
        order3(function () {
            console.log("잘먹겠습니다!");
        });
    });
});