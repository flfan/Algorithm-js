import java.util.ArrayList;

public class Heap {
  class MiniHeap {
    ArrayList<Integer> heap;

    public MiniHeap() {
      heap = new ArrayList<>();
    }

    public int getParentIndex(int index) {
      return (index - 1) >> 1;
    }

    public int getLeftIndex(int index) {
      return index * 2 + 1;
    }

    public int getRightIndex(int index) {
      return index * 2 + 2;
    }

    public void swap(int l1, int l2) {
      int temp = this.heap.get(l1);
      this.heap.set(l1, this.heap.get(l2));
      this.heap.set(l2, temp);
    }

    public void shiftUp(int index) {
      if (index == 0)
        return;
      int parentIndex = this.getParentIndex(index);
      if (this.heap.get(index) < this.heap.get(parentIndex)) {
        this.swap(index, parentIndex);
        this.shiftUp(parentIndex);
      }

    }

    public void shiftDown(int index) {
      int leftIndex = this.getLeftIndex(index);
      int rightIndex = this.getRightIndex(index);
      // if(index >= size()) return;
      if (leftIndex < size() && this.heap.get(index) > this.heap.get(leftIndex)) {
        this.swap(index, leftIndex);
        this.shiftDown(leftIndex);
      }

      if (rightIndex < size() && this.heap.get(index) > this.heap.get(rightIndex)) {
        this.swap(index, rightIndex);
        this.shiftDown(rightIndex);
      }
    }

    public void insert(int value) {
      this.heap.add(value);
      this.shiftUp(this.heap.size() - 1);
    }

    public void pop() {
      this.heap.set(0, this.heap.get(this.heap.size() - 1));
      this.heap.remove(this.heap.size() - 1);
      this.shiftDown(0);
    }

    public int peek() {
      return this.heap.get(0);
    }

    public int size() {
      return this.heap.size();
    }
  }
}
