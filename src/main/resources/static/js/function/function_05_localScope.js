// 5. Local scope
// 너무 당연하지만 중요한 내용이다.
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// 이 내용을 보니 예전에 어렴풋이 봐던 클로저랑 개념이 비슷한거 같았다.
// 클로져는 나중에 좀 더 깊게 알아보는게 좋을거같다. (일정에 뒤에 있습니다.)

let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();