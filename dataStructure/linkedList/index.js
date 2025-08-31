class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insert(value, idx) {
    if (idx < 0 || idx > this.size) {
      console.log("Invalid index");
      return;
    }
    if (idx === 0) {
      this.prepend(value);
      return;
    }
    if (idx === this.size) {
      this.append(value);
      return;
    }
    const node = new Node(value);
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
    this.size++;
  }

  removeFrom(idx) {
    if (idx < 0 || idx > this.size) {
      console.log("Invalid index");
      return;
    }
    if (idx === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    this.size--;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return value;
      }
      current = current.next;
    }
    return null;
  }

  searchValue(value) {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    }
    let current = this.head;
    let idx = 0;
    while (current) {
      if (current.value === value) {
        return idx;
      }
      current = current.next;
      idx++;
    }
    return -1;
  }
  reverse() {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    }
    let current = this.head;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());

module.exports = { Node, LinkedList };
