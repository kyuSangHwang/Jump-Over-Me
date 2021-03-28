// 4. 배열의 첫번째 두번째 요소를 제외한 요소로 새로운 배열을 만들어라
// splice(): 어디서부터 몇개를 지울껀지 parameter 를 넘겨주면 그부분을 지워주는 api 이는 배열 자체에서 삭제해주는 녀석이라 이 문제에서는 사용 불가
// slice(): Returns a section of an array. 넘기는 parameter 로는 시작과 끝나는 index 이고 여기서 끝은 포함되지 않는다.
{
    const array = [1, 2, 3, 4, 5];
    /*const result = array.splice(0,2);
    console.log(result);
    console.log(array);*/

    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}