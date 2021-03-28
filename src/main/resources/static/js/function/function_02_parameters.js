// 2. Parameters
// premitive parameters: value 가 전달된다.
// object parameters: reference 가 전달된다.

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);