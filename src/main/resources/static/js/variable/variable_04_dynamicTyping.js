// 4. Dynamic typing: dynamically typed language
// Java 나 C Language 는 statically Type language 이다. 이는 변수를 선언할 떄 type 을 선언한다.

let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

// 중간에 타입이 변경되면 Error 가 난다.
// JS는 runtime 에서 type 이 정해지기 때문이다.
console.log(text.charAt(0));