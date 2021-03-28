// 7. Early return, early exit
// 이는 우리 회사소스에서도 볼 수 있다.
// 조건에 맞지 않는데 구지 소스를 다 탈 필요는 없기때문에 조건에 맞지 않으면 return 시켜준다는 내용이다.

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}