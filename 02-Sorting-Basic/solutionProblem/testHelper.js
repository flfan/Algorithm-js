const assert = require('assert')

const generateRandomArray = function(n,rangeL,rangeR) {
  // if (rangeR < rangeL) {
  //   throw new Error('not useful range')
  // }
  assert(rangeL < rangeR)
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
  }

  return arr
}

function generateNearlyOrderedArray(n, swapTime) {

  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1
  }

  for (let i = 0; i < swapTime; i++) {
    let a = parseInt(Math.random() * n)
    let b = parseInt(Math.random() * n)
    let t = arr[a]
    arr[a] = arr[b]
    arr[b] = t
  }

  return arr
}

// 生成一个完全有序的数组
function generateOrderedArray(n){

  return generateNearlyOrderedArray(n, 0);
}

// 生成一个完全逆序的数组
function generateInversedArray(n){
// [1,2,3,4,5,6,7,8]
  let arr = generateOrderedArray(n);
  for( let i = parseInt(n/2 - 1) ; i >= 0; i -- )
      swap( arr, i, n - i -1);
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const isSorted = (arr) => {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }

    return true
  }
}

function testSort(sort, arr) {
  let startTime = new Date().getTime()
  sort(arr)
  let endTime = new Date().getTime()
  // console.log(arr)

  // if (!isSorted(arr)) {
  //   throw new Error('未排序')
  // }
  assert(isSorted)
  console.log(`${sort.name}: ${endTime - startTime} ms`)
}

function shuffleArray(arr, n){

  for (let i = 0; i < n; i++) {
      let j = Math.random() % (n-i)+i;
      swap( arr[i], arr[j]);
  }
}

module.exports = {
  generateRandomArray,
  testSort,
  generateNearlyOrderedArray,
  generateInversedArray,
  generateOrderedArray,
  shuffleArray
}
