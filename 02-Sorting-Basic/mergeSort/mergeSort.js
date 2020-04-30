// const {generateRandomArray, testSort, generateNearlyOrderedArray} = require('./SortTestHelper')

// [l,...,r]前闭后闭
function mergeSort(arr){
  let n = arr.length
  __mergeSort(arr, 0, n - 1)
}
function __mergeSort(arr, l, r){
  if (l >= r) {
    return
  }
  
  let mid = parseInt((l + r) / 2)

  __mergeSort(arr, l, mid)
  __mergeSort(arr, mid + 1, r)
  __merge(arr, l, mid, r)

}

function __merge(arr, l, mid, r){

  let aux = new Array(r - l + 1)

  for (let i = l; i <= r; i++) {

    aux[i-l] = arr[i]
  }

  let i = l, j = mid + 1

  for (let k = l; k <= r; k++) {

    if(i > mid) {
      arr[k] = arr[j - l]
      j++
    }else if(j > r) {
      arr[k] = aux[i - l]
      i++
    }else if(aux[i - l] < aux[j - l]){
      arr[k] = aux[i - l]
      i++
    }else{
      arr[k] = aux[j - l]
      j++
    }
  }

}

module.exports = mergeSort
// let n = 50000;
// const arr = generateRandomArray(n,0,n)
// // const arr2 = generateNearlyOrderedArray(n, 200)
// testSort(mergeSort, arr)
// // testSort(mergeSort, arr2)