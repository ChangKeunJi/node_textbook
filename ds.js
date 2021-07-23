class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class LinkedList {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(val) {
    // 새로운 노드를 생성한다.
    const newNode = new Node(val);
    // 연결리스트가 비어있는지 확인한다.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // 연결리스트가 비어있을 때
    if (!this.head) return undefined;

    // 노드가 2개 이상 있을 때
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // 연결리스트에 노드가 1개만 있을 때
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    // 새로운 노드를 생성한다.
    const newNode = new Node(val);

    // 연결리스트가 비어있을 경우
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 비어있지 않을 경우
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    // 연결리스트에 노드가 없을 때

    if (!this.head) {
      return undefined;
    }

    // 연결리스트에 노드가 2개 이상일 때
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    // temp를 굳이 쓰는 이유는 기존 노드의 연결고리를 끊기 위해서.

    // 연결리스트에 노드가 1개일 때

    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    // index가 0보다 작거나 리스트의 길이보다 크면 안된다.
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);

    // 유효하지 않은 index가 올 수 있으니 확인해야 한다.
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) undefined;
    if (index === 0) this.unshift(value);
    if (index === this.length) this.push(value);

    const newNode = new Node(value);
    let temp = this.get(index - 1);

    temp.next = newNode;
    newNode.next = temp.next;
    this.length++;

    return true;
  }

  remove(index) {
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();
    if (index < 0 || index >= this.length) undefined;

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    // 제거된 노드의 연결고리를 끊어준다.
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    // head와 tail이 자리를 서로 바꾼다.

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      // 포인터를 반대 방향으로 바꾼다.
      prev = temp;
      temp = next;
    }

    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
// myLinkedList.pop();
// myLinkedList.pop();
// myLinkedList.unshift(1);
// myLinkedList.shift();
// myLinkedList.shift();
// console.log(myLinkedList.get(-1));
// myLinkedList.set(-1, 99);
// myLinkedList.insert(1, 99);
// myLinkedList.remove(1);
myLinkedList.reverse();

console.log(myLinkedList);
