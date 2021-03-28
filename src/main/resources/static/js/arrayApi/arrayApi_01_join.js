// 1. 배열을 문자열로 변환
// join(): Adds all the elements of an array separated by the specified separator string.
// 배열 모든 요소를 사용자가 지정해주는 구분자로 하나의 문자열로 변환해서 출력해준다. (지정된 구분자가 없으면 , 로 이어준다.)
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' | ');
    console.log(result);
}