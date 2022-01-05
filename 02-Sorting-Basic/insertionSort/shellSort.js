const {
  generateRandomArray,
  testSort,
  generateNearlyOrderedArray,
} = require("./SortTestHelper");

function shellSort(arr) {
  const n = arr.length;
  // 计算 increment sequence: 1, 4, 13, 40, 121, 364, 1093...
  let h = 1;
  while (h < n / 3) h = 3 * h + 1;

  while (h >= 1) {
    // h-sort the array
    for (let i = h; i < n; i++) {
      // 对 arr[i], arr[i-h], arr[i-2*h], arr[i-3*h]... 使用插入排序
      let e = arr[i];
      let j;
      for (j = i; j >= h && e < arr[j - h]; j -= h) arr[j] = arr[j - h];
      arr[j] = e;
    }

    h =parseInt(h / 3);
  }
}

let n = 100000;
const arr = generateRandomArray(n, 0, n);
testSort(shellSort, arr);
