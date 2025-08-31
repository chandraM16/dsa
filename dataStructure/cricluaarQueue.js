class CircularQueue {
  constructor(capacity) {
    this.elements = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.elements[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full");
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this.elements[this.front];
      this.elements[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength--;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements[this.front];
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    }
    let str = "";
    for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.elements[i] + " ";
    }
    str += this.elements[this.rear];
    console.log(str);
  }
  size() {
    return this.currentLength;
  }
}

const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.print();
console.log(cq.dequeue());
cq.print();
cq.enqueue(60);
cq.print();

console.log(cq.peek());
console.log(cq.size());
