const {
  generateRandomArray,
  generateInversedArray,
  generateOrderedArray,
} = require("./testHelper");

// 用归并排序的思想 求逆序对

// merge函数求出在arr[l...mid]和arr[mid+1...r]有序的基础上, arr[l...r]的逆序数对个数
function __merge(arr, l, mid, r) {
  let aux = new Array(r - l + 1);

  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }

  let i = l,
    j = mid + 1;

  // 初始化逆序对个数
  let res = 0;
  // [4,5,6,3,7,8,4,5,2,9,6]
  // [3,7,8,9] [1,3,5,8]
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = arr[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      // 左半部分所指元素 <= 右半部分所指元素
      arr[k] = aux[i - l];
      i++;
    } else {
      // 右半部分所指元素 < 左半部分所指元素
      arr[k] = aux[j - l];
      j++;
      // 此时, 因为右半部分k所指的元素小
      // 这个元素和左半部分的所有未处理的元素都构成了逆序数对
      // 左半部分此时未处理的元素个数为 mid - k + 1
      res = res + mid - k + 1;
    }
  }
  // console.log(res)
  return res;
}
function inversionCount(arr) {
  let n = arr.length;
  let l = 0;
  let r = n - 1;
  return __inversionCount(arr, l, r);
}
// [4,5,6,3,7]
function __inversionCount(arr, l, r) {
  if (l >= r) {
    return 0;
  }
  let mid = parseInt((l + r) / 2);

  let resl = __inversionCount(arr, l, mid);
  let resr = __inversionCount(arr, mid + 1, r);
  let res =  __merge(arr,l,mid,r);
  // console.log(res)
  return res + resl + resr
}

let n = 50;
const arr1 = generateOrderedArray(n);
const arr2 = generateRandomArray(n, 0, n);
const arr3 = generateInversedArray(n);
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

let res1 = inversionCount(arr1);
let res2 = inversionCount(arr2);
let res3 = inversionCount(arr3);
console.log("ordered", res1);
console.log("random", res2);
console.log("Inversed", res3); // 结果应为 N*(N-1)/2 - 1
