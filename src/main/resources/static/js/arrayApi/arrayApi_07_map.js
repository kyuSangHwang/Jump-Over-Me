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

// 7. students 배열에서 점수만으로 이루어진 배열을 만들자 result : [90, 80, 50, 100, 70]
// map(): 배열안에 들어있 요소 하나하나를 다른것(callBack 함수에서 가공된 정보로)으로 변환해주는 api
{
    const result = students.map((student) =>student.score);
    console.log(result);
}