// 6. Logical operators: || (or), && (and), ! (not)

const value1 = true;
const value2 = 4 < 2;

// || (or), 첫 연산자가 truthy value 이면 true
console.log(`or: ${value1 || value2 || check()}`); // 여러인자를 나열할 때는 로직이 heavy 한 operator 를 제일 앞에 두는 건 좋지않다.

// && (and), 첫 연산자가 falsy value 이면 false
console.log(`and: ${value1 && value2 && check()}`);

// 그리고 &&(and)는 간편하게 null check 를 할 때도 많이 쓰인다.
// A && B 이때 A가 null 이면 뒤의 B가 실행이 되지 않을 것이다.
// A가 null 이 아닐 때만 something 이라는 object 를 받아오게 된다.
// 코드로 보면
/*
if (A != null) {
    A.something;
}
*/

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

// ! (not)
console.log(!value1);