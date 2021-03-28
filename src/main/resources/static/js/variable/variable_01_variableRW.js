// 1. Variable, rw(read/write)
// let 은 ES6 가 추가됬다. (Mutable Type)

let globalName = 'global name';
{
    let name = 'KS';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var 는 이제 사용하지 않는 것이 좋다. 그 이유는 호이스팅이 되고 블록스코프를 무시하게 된다.
{
    age = 4;
    var age;
}
console.log(age);
