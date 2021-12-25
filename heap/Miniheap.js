class Miniheap {
  constructor() {
    this.heap = []
  }

  getParentIndex(index) {
    return (index - 1) >> 1
  }

  getLeftIndex(index) {
    return index * 2 + 1
  }

  getRightIndex(index) {
    return index * 2 + 2
  }

  swap(l1, l2) {
    const temp = this.heap[l1]
    this.heap[l1] = this.heap[l2]
    this.heap[l2] = temp
  }

  shiftUp(index) {
    if (index == 0) return
    const parentIndex = this.getParentIndex(index)
    if(this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }

  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if(this.heap[index] > this.heap[leftIndex]) {
      this.swap(index, leftIndex)
      this.shiftDown(leftIndex)
    }
    if(this.heap[index] > this.heap[rightIndex]) {
      this.swap(index, rightIndex)
      this.shiftDown(rightIndex)
    }
  }

  insert (value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }
}

let heap = new Miniheap();
heap.insert(9)
heap.insert(8)
heap.insert(5)
heap.insert(6)
heap.insert(3)
heap.insert(1)
heap.pop()
