// 2. Constant (imMutable Type), r(read only)
// 가능하면 const 를 사용하고 변경해야 할 일이 있는 변수일 때만 let 을 사용하는 것이 좋다.

const daysInWeek = 7;
const maxNumber = 5;

// Immutable data types: primitive types, frozen objects (object.freeze())
// 변경이 가능한 데이터 타입 (Mutable data types): JS 에서는 모든 Object 는 변경이 가능하다.

// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes