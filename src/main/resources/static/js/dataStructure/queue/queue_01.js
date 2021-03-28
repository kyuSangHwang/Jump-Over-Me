/** Queue **/

// Queue 는 영화관에서 매표소에 줄 서있는 모습을 생각해보면 쉽게 이해할 수 있다.
// 가장 먼저 줄을 선 사람이 먼저 표를 구매할 수 있다.
// Queue 도 같은 원리로 가장 먼저 쌓인 데이터를 먼저 이용한다.
// 즉, First In First Out 을 따르는 자료 구조이다.

// Method
// 데이터를 넣는 것을 enqueue 라고 하며 앞에서부터 데이터를 꺼내는 과정을 dequeue라고 한다.
// 밑의 JS의 array 예시를 통해 이해해보자.

const queue = []

//enqueue: 순서대로 넣고
queue.push('seahorse');
queue.push('dolphin');
queue.push('whale shark');
console.log(queue); // ['seahorse','dolphin','whale shark']

//dequeue: 첫번째부터 꺼냄
queue.shift(); //'seahorse'
console.log(queue); // ['dolphin','whale']


//QUEUE
class Queue {
    constructor() {
        this.storage = {};
        this.head= 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
}

const queue = new Queue();

queue.enqueue('seahorse');
queue.enqueue('dolphin');
queue.enqueue('whale shark');
console.log(queue); // Queue { storage: { '0' : 'seahorse' , '1' : 'dolphin', '2' : 'whale shark' }, head: 0, tail: 3 }

queue.dequeue(); //'seahorse'
console.log(queue); // Queue { storage: { '1' : 'dolphin', '2' : 'whale shark' }, head: 1, tail: 3 }
