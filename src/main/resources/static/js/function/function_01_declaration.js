// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// 하나의 함수는 하나의 처리를 한다.
// naming: 함수가 하는 일 또는 하는 역할에 대한 command 를 적어 함수가 무슨 일을 하는지 알기 쉽게 naming 하는게 좋다.
// example: createCardAndPoint -> createCard, createPoint
// JavaScript 에서 Function 은 Object 이다.

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello!');
log(1234);

// 위에서 message 의 타입을 알 수 없다.
// 장점일 수 있지만 단점일 수도 있다.
// 그래서 Function 의 Interface 가 조금은 직관적이지 못한데 이를 좀 더 명확하게 해주는게 typeScript 라고 한다.
// 아래 소스는 위의 log 라는 함수의 TypeScript 소스이다.

/*
여기서 message 는 뒤에 :String 을 작성해줌으로써 타입을 명확히 하고 뒤의 :number 는 return 해주는 변수의 타입을 명시한다고 한다.
간단하게 찾아보니 JS 보다 뭔가 직관적인거 같아서 소스를 보기에 편한거 같다.

function log2(message : String): number {
    console.log(message);
    return 0;
}
*/
