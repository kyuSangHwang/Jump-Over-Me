/** 원시값과 래퍼 객체 **/

const str1 = 'hello';

// 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str1.length);
console.log(str1.toUpperCase()); // toUpperCase() : 대문자로~ (기본)

// 이처럼 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼객체(wrapper object)라고 한다.



const str2 = 'hi';

// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str2.length);
console.log(str2.toUpperCase());

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str2);



// 또 식별자가 원시값을 갖도록 되돌리고 래퍼 객체는 가비지 컬랙션의 대상이 된다.
// (아래 예제가 있어서 치면서 읽고 생각해봤는데 아아 뭔지 알겠다 싶지만 실제로 많이 안쓰일거 같으니 그냥 오~ 하고 넘어가기)

// 1. 식별자 str3은 문자열을 값으로 가지고 있다.
const str3 = 'hello';

// 2. 식별자 str3은 암묵적으로 생성된 래퍼 객체를 가리킨다.
// 식별자 str3의 값 'hello' 는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
// 래퍼 객체에 name 프로퍼티가 동적 추가된다.
str3.name = 'Kyu';

// 3. 식별자 str3은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 4. 식별자 str3은 새롭게 암묵적으로 생성된(2에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str3.name);

// 5. 식별자 str3은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 4에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str3, str3);



// 숫자도 마찮가지이다.
const num = 1.5;

// 원시 타입인 숫자가 래퍼 객체인 Number 객체로 변환된다.
console.log(num.toFixed()); // 생소한 메소드는 구글링도 좋은데 이젠 그냥 command 함수를 클릭하면 해당 메소드의 정의를 보는게 직관적인것 같아 좋다. (그래도 번역기가 있어야한다는..)

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof num, num);

/**
 * Returns a string representing a number in fixed-point notation.
 * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
//toFixed(fractionDigits?: number): string;

