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

// 8. 점수가 60점 이하인 학생이 있는지 여부를 확인해보자
// some(): 배열안에서 callBack 함수가 True 가 되는 요소(값)가 있는지 없는지 확인해주는 api
// every() : 배열안에 있는 모든 요소가 True 가 될 때 True 가 Return
{
    console.clear();
    const result1 = students.some((student) =>student.score <= 60);
    console.log(result1);

    const result2 = !students.every((student) =>student.score > 60);
    console.log(result2);
}