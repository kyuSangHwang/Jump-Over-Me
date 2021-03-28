// 2. 문자열을 배열로 변환
// split(): Split a string into substrings using the specified separator and return them as an array.
// 총 2가지의 parameter 를 받는데 문자열과 정규식을 받고 limit 은  optional 로 사이즈를 받는다. 이 전달된 구분자를 받아서 배열로 반환해준다.
// 구분자는 필수이고 구분자를 넘겨주지 않으면 배열이 아닌 문자열을 반환한다.
{
    const fruits = 'apple, banana, orange, kiwi';
    const result1 = fruits.split();
    const result2 = fruits.split(',');
    console.log(result1);
    console.log(result2);
}