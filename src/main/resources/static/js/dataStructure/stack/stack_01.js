/** Stack **/

// Stack 은 수십권의 책을 쌓아놓은 형태를 생각해보면 쉽게 이해할 수 있다.
// 우리는 그중에서 어떤 책을 읽으려할 때, 그 형태를 망가트리지 않으면서 가장 밑에서(가장 처음 쌓은 책) 혹은 중간에서 책을 꺼내는 것이 불가능하다.
// 무조건 젤 위에 쌓여있는 책, 즉 가장 마지막에 쌓은 책부터 꺼내 읽어야 하게 된다.

// Stack 은 이러한 원리를 따르는 자료구조로 무조건 Stack 에 쌓인 제일 마지막에 쌓인 요소부터 동작해야 한다.
// 즉, Last In First Out 가장 마지막에 쌓인 요소가 먼저 나오게 되는 원리로 undo 나 redo 와 같은 동작을 구현할 때 사용된다.

// Method
// Stack 의 메서드는 push, pop, peek 이 있다.
// JS의 array 로 생각해봤을 때,
// push 는 순서대로 데이터를 넣어주고 pop 은 제일 마지막 데이터를 꺼내고 제거
// peek 은 stack 에 쌓인 데이터 의 제일 마지막 데이터를 보여주기만 하는 동작이다.

const stack = [];

//push()
stack.push('dog');
stack.push('cat');
stack.push('bear');
console.log(stack); // ['dog','cat','bear']

//pop(): 젤 마지막 요소를 꺼냄
stack.pop(); //'bear'
console.log(stack); // ['dog','cat']

//peek: stack 에 쌓인 제일 마지막 요소를 보여주기만
console.log(stack[stack.length-1]); //'cat'

//STACK
class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(element) {
        this.size++;
        this.storage[this.size] = element;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

const stack = new Stack();
stack.push('dog');
stack.push('cat');
stack.push('bear');
//Stack { storage : { '1' : 'dog', '2' : 'cat', '3' : 'bear' }, size : 3 }

stack.pop(); //'bear'
console.log(stack); // Stack { storage : { '1' : 'dog', '2' : 'cat'  }, size : 2 }

stack.peek(); //'cat'