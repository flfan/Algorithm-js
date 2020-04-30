// const {generateRandomArray, testSort, generateNearlyOrderedArray} = require('./SortTestHelper')


  function insertionSort(arr) {
    let n = arr.length
    // [10,9,8,7,6,5,4,3,2,1]
    for (let i = 1; i < n; i++) {
      let j = i
      let e = arr[i]
      for(; j > 0; j--) {
        if (arr[j - 1] > e){
          arr[j] = arr[j - 1]
        }else{
          break
        }
      }
      arr[j] = e
    }
  }
module.exports = insertionSort
// let n = 100000;
// const arr = generateRandomArray(n,0,n)
// const arr2 = generateNearlyOrderedArray(n, 200)
// testSort(insertionSort, arr)
// testSort(insertionSort, arr2)
