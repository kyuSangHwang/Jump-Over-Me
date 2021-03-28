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

// 9. 학생들의 평균점수를 구하라.
// reduce(): callBack 함수를 전달하고 또 initalValue 를 전달할 수 있다.
// reduceRight(): 배열의 맨 뒤에서 부터 호출
// callBack 함수는 배열안에 있는 모든 요소를 호출한다. callBack 함수에서 누적된 결과값을 return 한다.
{
    // 첫번째 prev 와 curr 은 순차적으로 배열의 값을 호출하지만 다름에 호출될 때는 return 값을 정해주지 않으면 prev 에는 값이 담기지 않게 된다.
    // return 하는 값들이 순차적으로 prev 에 담기게 되는 것이다.
    const result1 = students.reduce((prev, curr) => {
        console.log("--------");
        console.log(prev);
        console.log(curr);
        return curr;
    });

    const result2 = students.reduce((prev, curr) => {
        console.log("--------");
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);

    console.clear();

    const result3 = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result3 / students.length);
    console.clear();
}