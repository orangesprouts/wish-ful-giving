// Basic Linked List Implementation

// Node class - represents a single node in the linked list
class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList<T> {
  head: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node at the end
  append(data: T): void {
    const newNode = new ListNode(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Add a node at the beginning
  prepend(data: T): void {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Delete a node by value
  delete(data: T): boolean {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Find a node by value
  find(data: T): ListNode<T> | null {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Convert to array
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  // Get size
  getSize(): number {
    return this.size;
  }

  // Check if empty
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Display the list
  display(): void {
    let current = this.head;
    const values: T[] = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Example usage:
/*
const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

list.display(); // Output: 5 -> 10 -> 20 -> 30

list.delete(20);
list.display(); // Output: 5 -> 10 -> 30

console.log(list.find(10)); // Returns the node with data 10
console.log(list.getSize()); // Output: 3
*/

export { LinkedList, ListNode };

