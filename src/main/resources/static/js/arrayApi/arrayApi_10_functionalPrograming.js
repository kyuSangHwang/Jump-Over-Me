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

// 10. 함수형 프로그래밍
// 10-1. 학생의 점수가 70점 초과인 문자열을 출력하라
{
    const result = students // 학생배열에서
        .map((student) => student.score) // 점수 배열로 변환해서
        .filter(score => score > 70) // 70점 초과인 점수를
        .join(); // 문자열로 만든다.
    console.log(result);

    console.clear();
}

// 10-2. 학생들의 점수를 문자열로 변환하여 낮은 점수부터 보여라
{
    const result = students
        .map((student) => student.score)
        .sort((a,b) => a - b)
        .join();
    console.log(result);
}

console.clear();