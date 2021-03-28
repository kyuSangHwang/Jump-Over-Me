/*
 3. Variable types
 primitive => single item: number, string, boolean, null, undefined, symbol
 object => box container (위의 single item 들을 한 단위 박스로 묶어 준 것)
 function 도 변수타입이다.
 first-class function: 함수도 다른 데이터 타입처럼 할달이 가능하고 그렇기에 Function 의 parameter 로 전달이 되고 return type 으로도 가능한 함수를 일컫는다
*/

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity(무한대), -infinity, NaN(Not a Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (추가된지 얼마 안된 타입, 숫자 뒤에 n을 입력하면 BigInt 타입이 된다.)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// symbol 은 Map 이나 다른 자료구조에서 고유한 식별자가 필요하거나
// 동시에 다발적으로 concurrent 하게 일어낳 수 있는 코드에서 우선순위를 주고 싶을 때 정말 고유한 식별자가 필요할 때 사용한다.

// 동일한 string 을 사용하더라도 다르게 나온다 .
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// 동일한 symbol 을 만들고 싶다면 Symbol.for('') 과 같이 사용하면 된다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// symbol 은 그냥 출력하면 error 가 난다. 출력을 하기 위해서는 .description 을 사용해서 string 으로 변환하여 출력한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const KS = { name: 'kyuSang', age: 20 };
KS.age = 21;