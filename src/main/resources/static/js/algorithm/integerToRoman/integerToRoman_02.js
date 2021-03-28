/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    const map = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100,
        XC: 90, L: 50, XL: 40, X: 10, IX: 9,
        V: 5, IV: 4, I: 1
    };

    return Object.entries(map).reduce((result, [letter, n]) => {
        result += letter.repeat(Math.floor(num / n));
        num %= n;
        return result;
    }, '');
}

/** Object.entries
 Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다.
 (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다)

 Object.entries() 에 의해 반환된 배열(array)의 순서는 객체가 정의된 방법과 관련이 없습니다.
 배열 순서가 쓸 곳이 있다면, 다음과 같이 정렬을 먼저 하시는 것이 좋습니다
 Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.

 const object1 = {
  a: 'somestring',
  b: 42
};

 for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

 **/