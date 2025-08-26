export default class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.toString());
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

const q = new Queue();
q.enqueue(20);
q.enqueue(30);
q.print();

console.log(q.size());

q.dequeue();
q.print();


