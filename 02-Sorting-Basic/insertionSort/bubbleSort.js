const {generateRandomArray, testSort, generateNearlyOrderedArray} = require('./SortTestHelper')

function bubbleSort(arr) {
  let n = arr.length
  // [10,9,8,7,5,6,4,3,2,1]
  for(let j = 0; j < arr.length - 1; j++) {

    for (let i = 0; i < n - 1; i++) {
      if( arr[i] > arr[i + 1]){
        swap(arr, i, i + 1)
      }
    }
    n--
    // console.log(arr)
  }
  
}

function bubbleSort2(arr) {
  let swaped = false
  let n = arr.length
  do {
    swaped = false

    for (let i = 0; i < n - 1; i++) {
      if( arr[i] > arr[i + 1]){
        swap(arr, i, i + 1)
        swaped = true
      }
    }
    n--

  } while (swaped);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let n = 1000;
const arr = generateRandomArray(n,0,n)
const arr2 = generateNearlyOrderedArray(n, 200)
testSort(bubbleSort, arr)
testSort(bubbleSort, arr2)