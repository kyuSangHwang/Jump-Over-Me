class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('hwang',30,true, 90),
    new Student('lee',31,false, 80),
    new Student('kim',26,true, 50),
    new Student('lim',34,true, 100),
    new Student('gang',30,false, 70)
];

// 5. 성적이 100점인 학생 찾기
// 첫번째로 배열안에서 첫 번째로 찾아진 요소를 return 한다. 전달된 predicate 이 callBack 를 함수가 true  되면 찾자마자 리턴한다. 찾지못하면 undefined 를 return
// find()는 총 두가지(predicate, thisArg)의 인자가 전달된다.
// predicate 는 함수로 callBack 함수를 받고 이 함수에는 this, value, index, obj 라는 인자가 전달되고 boolean 값으로 가정이 되는 함수를 전닿해주면 된다.
// predicate 는 배열에 있는 모든 요소마다 호출이 되어진다. 이 callBack 함수가 true 를 return 하면 함수를 멈추고 그 true 가 된 요소를 return 한다.
{
    const result1 = students.find(function (student) {
        return student.score === 100;
    });

    //위의 콜백함수를 arrow함수로 바꾸고 한 줄일 때 아래와 같이 표현할 수 있다.
    const result2 = students.find((student) => student.score === 100 );

    console.log(result1);
}