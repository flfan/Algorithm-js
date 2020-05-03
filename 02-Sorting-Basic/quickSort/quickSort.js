// const {generateRandomArray, testSort, generateNearlyOrderedArray} = require('./SortTestHelper')
// const mergeSort = require('../mergeSort/mergeSort')


function quickSort(arr){
  let n = arr.length

  __quickSort(arr, 0, n - 1)
}

// 对arr[l...r]部分进行快速排序
function __quickSort(arr, l, r){
  if(l >= r){
    return
  }

  let p = __partition(arr, l, r)
  __quickSort(arr, l, p - 1)
  __quickSort(arr, p + 1, r)
}

// 对arr[l...r]部分进行partition操作
// 返回p,使得arr[l...p-1] < arr[p] ; arr[p+1...r] > arr[p]
function __partition(arr, l, r) {

  let a = parseInt(Math.random() * (r - l + 1) + l)
  swap(arr, l, a)
  let v = arr[l]
  let j = l
  // arr[l+1...j] < v ; arr[j+1...i) > v
  for(let i = l + 1; i <= r; i++) {
    if(arr[i] < v){
      swap(arr, i, j + 1)
      j++
    }
  }
  swap(arr, l, j)

  return j
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
module.exports = quickSort

// let n = 5000000;
// const arr = generateRandomArray(n,0,n)
// const arr2 = arr.slice()
// const arr3 = generateNearlyOrderedArray(n, 200)
// const arr4 = arr3.slice()
// testSort(quickSort, arr)
// testSort(mergeSort, arr2)
// testSort(quickSort, arr3)
// testSort(mergeSort, arr4)