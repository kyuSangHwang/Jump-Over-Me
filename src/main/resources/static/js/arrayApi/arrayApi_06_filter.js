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


// 6. 등록이 true인 학생들로 배열 만들기
// filter(): callBack 함수를 전달해서 이 callBack 함수가 true 인 요소들만 모아 새로운 배열을 전달해준다.
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}